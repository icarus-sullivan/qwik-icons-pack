import fs from 'fs';
import { slim } from '@teleology/slim';
import orderby from 'lodash.orderby';

const README_TEMPLATE = `# qwik-icons-pack
A slim wrapper around numerous populare svg icons.
View the [catalogue](https://icarus-sullivan.github.io/qwik-icons-pack/)

## Installation
\`\`\`shell
yarn add qwik-icons-pack
\`\`\`

## Usage
Packs are split into separate paths. 

\`\`\`javascript
import { FiX } from 'qwik-icons-pack/fi';
\`\`\`

## Packs

| Name   | Path   | License |
|--------|--------|---------|
{{icons}}`;

import { packages } from '../manifest.js';

const replacement = orderby(packages, ['name']).map(
  ({ id, url, name, license }) => {
    const link = `[${name}](${url})`;
    return `| ${[link, id, license].join(' | ')} |`;
  },
);

const out = slim(README_TEMPLATE, {
  icons: replacement.join('\n')
});

fs.writeFileSync('README.md', out, 'utf8');