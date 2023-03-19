import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#000000" d="M8.5 0l-1.5 1.5 1.5 1.5-3.5 4h-3.5l2.75 2.75-4.25 5.635v0.615h0.615l5.635-4.25 2.75 2.75v-3.5l4-3.5 1.5 1.5 1.5-1.5-7.5-7.5zM7 8.5l-1-1 3.5-3.5 1 1-3.5 3.5z"/></svg>
));