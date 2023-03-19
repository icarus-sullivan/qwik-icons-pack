import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M14 7v10l-5.1-5 5.1-5m-1.4-1.4c-2.6 2.5-6.6 6.4-6.6 6.4s4 3.9 6.6 6.4c.4.4.9.6 1.4.6 1.1 0 2-.9 2-2v-10c0-1.1-.9-2-2-2-.5 0-1 .2-1.4.6z"/></svg>
));