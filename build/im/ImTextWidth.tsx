import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#000000" d="M4 14v2l-3-2.5 3-2.5v2h8v-2l3 2.5-3 2.5v-2zM13 1v4l-1-2h-3v7h2v1h-6v-1h2v-7h-3l-1 2v-4z"/></svg>
));