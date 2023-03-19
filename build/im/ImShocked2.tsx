import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#000000" d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM5 7c-0.552 0-1-0.672-1-1.5s0.448-1.5 1-1.5 1 0.672 1 1.5-0.448 1.5-1 1.5zM8 13c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2zM11 7c-0.552 0-1-0.672-1-1.5s0.448-1.5 1-1.5 1 0.672 1 1.5-0.448 1.5-1 1.5z"/></svg>
));