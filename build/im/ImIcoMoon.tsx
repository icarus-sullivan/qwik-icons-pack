import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#000000" d="M4.055 8c0-1.022 0.829-1.851 1.851-1.851s1.851 0.829 1.851 1.851c0 1.022-0.829 1.851-1.851 1.851s-1.851-0.829-1.851-1.851zM8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8s-3.582-8-8-8zM5.928 14.989c-2.406-1.4-4.023-4.005-4.023-6.989s1.617-5.589 4.023-6.989c2.406 1.399 4.025 4.005 4.025 6.989s-1.618 5.589-4.025 6.989z"/></svg>
));