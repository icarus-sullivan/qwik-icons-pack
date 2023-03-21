import fs from 'fs-extra';
import path from 'path';
import {slim} from '@teleology/slim';
import cheerio from './cheerio.js'
import pascal from 'pascalcase';
import { sync as glob } from 'glob';

import { output, packages } from '../manifest.js';

const BUILD_DIR = path.resolve(process.cwd(), output);
const ICON_TEMPLATE = `import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} {{svg_attrs}}>{{svg_contents}}</svg>
));`;
const ICON_TEMPLATE_NEW = `export const {{name}} = component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} {{svg_attrs}}>{{svg_contents}}</svg>
));`;
const ICON_EXPORT_TEMPLATE = `export { default as {{name}} } from './{{name}}';`;
const PACK_EXPORT_TEMPLATE = `export * from './{{id}}'`;

const processIcon = ({ iconDir, name, file }) => {
  const contents = fs.readFileSync(file, 'utf8');
  const { svg_attrs, svg_contents } = cheerio(contents);

  // santizied
  const uncomment = svg_contents.replace(/<\!--.*?-->/gm, '')

  // const outputFile = path.resolve(iconDir, `${name}.tsx`);
  // const output = slim(ICON_TEMPLATE, { name, svg_attrs, svg_contents: uncomment });

  // fs.writeFileSync(outputFile, output, 'utf8');

  // return slim(ICON_EXPORT_TEMPLATE, { name });
  return slim(ICON_TEMPLATE_NEW, { name, svg_attrs, svg_contents: uncomment })
}

const parseFile = ({ id, file, formatter }) => {
  const { name } = path.parse(file);

  const name1 = formatter ? formatter({ name, file }) : name;
  return {
    name: pascal(`${id}-${name1}`),
    file,
  };
}

const processPackage = async (pkg) => {
  const files = [];
  for (const file of pkg.files) {
    let out;
    if (typeof file === 'string') {
      out = glob(file).map((file) => parseFile({ id: pkg.id, file }));
    } else {
      const { pattern, formatter } = file;
      out = glob(pattern).map((file) => parseFile({ id: pkg.id, file, formatter }));
    }
    files.push(out);
  }

  const allFiles = [].concat(...files);

  const names = allFiles.map((it) => it.name.toLowerCase());

  const deduplicatedFiles = allFiles.map((it, i) => {
    if (names.indexOf(it.name.toLowerCase()) !== i) {
      it.name = `${it.name}2`;
    }
    return it;
  });

  const prefix = `import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';`
  // const iconDir = path.resolve(BUILD_DIR, pkg.id);
  // fs.mkdirpSync(iconDir);

  const out = await Promise.all(deduplicatedFiles.map((it) => processIcon({ ...it, iconDir: BUILD_DIR })));
  
  const outputFile = path.resolve(BUILD_DIR, `${pkg.id}.tsx`);
  // const output = out.join('\n');

  const output = `import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';
${out.join('\n')}`
  fs.writeFileSync(outputFile, output, 'utf8');
  return slim(PACK_EXPORT_TEMPLATE, pkg);
}

(async () => {
  // build dir
  if (!fs.existsSync(BUILD_DIR)) {
    fs.mkdirpSync(BUILD_DIR);
  }

  const out = await Promise.all(packages.map(processPackage));
  // const outputFile = path.resolve(BUILD_DIR, 'index.ts');
  // fs.writeFileSync(outputFile, out.join('\n'), 'utf8');
})();