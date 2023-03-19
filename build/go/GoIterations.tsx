import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M2.5 10.5a8 8 0 1116 0 .75.75 0 001.5 0 9.5 9.5 0 10-9.5 9.5h10.94l-2.72 2.72a.75.75 0 101.06 1.06l3.735-3.735c.44-.439.44-1.151 0-1.59L19.78 14.72a.75.75 0 00-1.06 1.06l2.72 2.72H10.5a8 8 0 01-8-8z"/></svg>
));