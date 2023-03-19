import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#000000" d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM11 4c0.552 0 1 0.672 1 1.5s-0.448 1.5-1 1.5-1-0.672-1-1.5 0.448-1.5 1-1.5zM5 4c0.552 0 1 0.672 1 1.5s-0.448 1.5-1 1.5-1-0.672-1-1.5 0.448-1.5 1-1.5zM8 14c-2.607 0-4.772-2.186-5-4.973 1.465 0.846 3.188 1.329 5 1.329s3.535-0.481 5-1.327c-0.228 2.788-2.393 4.971-5 4.971z"/></svg>
));