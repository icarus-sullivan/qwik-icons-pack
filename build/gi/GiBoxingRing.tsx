import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M80 16H48l96 176c10.6 18.9 174.6 14.1 176 0zm377 184.9l-.1 158H487l.1-158zm-432.01.2v158l30-.1V201.1zM73 217.5v18.1c125.7 12.5 240.5 12.5 366 .1v-18c-125.8 12.5-240.1 12.5-366-.2zm0 48.1v18.1c125.5 12.5 240.4 12.4 366 0v-18.1c-125.8 12.6-240.1 12.6-366 0zM439 313c-126.3 13.1-240.6 13.3-366 1.2v18.2c125.1 12 240.1 11.5 366-1.3zM25 377v110l462 .1.1-110.1z"/></svg>
));