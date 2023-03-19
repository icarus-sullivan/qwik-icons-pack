import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#000000" d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM7 12c0 0.55-0.45 1-1 1h-2c-0.55 0-1-0.45-1-1v-8c0-0.55 0.45-1 1-1h2c0.55 0 1 0.45 1 1v8zM13 9c0 0.55-0.45 1-1 1h-2c-0.55 0-1-0.45-1-1v-5c0-0.55 0.45-1 1-1h2c0.55 0 1 0.45 1 1v5z"/></svg>
));