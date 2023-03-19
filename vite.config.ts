import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';

import fs from 'fs';
import path from 'path';
import { sync } from 'glob';

const files = sync('build/**/*.ts')

export default defineConfig(() => {
  return {
    build: {
      target: 'es2020',
      lib: {
        entry: [
          './build/index.ts'
        ],
        formats: ['es', 'cjs'],
        fileName: (format, entry) => {
          console.log({format, entry});
          return `${entry}.${format === "es" ? "mjs" : "cjs"}`
        },
      },
    },
    plugins: [qwikVite()],
  };
});