import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M5 3H3v18h18v-2H5z"/><path d="M13 12.586 8.707 8.293 7.293 9.707 13 15.414l3-3 4.293 4.293 1.414-1.414L16 9.586z"/></svg>
));