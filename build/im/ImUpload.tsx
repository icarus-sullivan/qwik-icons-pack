import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#000000" d="M7 9h2v-4h3l-4-4-4 4h3zM10 6.75v1.542l4.579 1.708-6.579 2.453-6.579-2.453 4.579-1.708v-1.542l-6 2.25v4l8 3 8-3v-4z"/></svg>
));