import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M8.78 4.97a.75.75 0 010 1.06L2.81 12l5.97 5.97a.75.75 0 11-1.06 1.06l-6.5-6.5a.75.75 0 010-1.06l6.5-6.5a.75.75 0 011.06 0zm6.44 0a.75.75 0 000 1.06L21.19 12l-5.97 5.97a.75.75 0 101.06 1.06l6.5-6.5a.75.75 0 000-1.06l-6.5-6.5a.75.75 0 00-1.06 0z"/></svg>
));