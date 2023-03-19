import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#000000" d="M16 0v6.5l-2.5-2.5-3 3-1.5-1.5 3-3-2.5-2.5zM7 10.5l-3 3 2.5 2.5h-6.5v-6.5l2.5 2.5 3-3z"/></svg>
));