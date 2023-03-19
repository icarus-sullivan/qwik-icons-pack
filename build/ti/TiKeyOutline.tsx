import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M10 21h-6v-4.414l3.783-3.783c-.187-.587-.283-1.192-.283-1.803 0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6h-1.5v2h-2v2zm-4-2h2v-2h2v-2h3.5c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4c0 .559.121 1.109.359 1.639l.285.631-4.144 4.144v1.586zM13.5 9.998c.551 0 1 .449 1 1.002 0 .552-.449 1-1 1s-1-.448-1-1c0-.553.449-1.002 1-1.002m0-1c-1.104 0-2 .896-2 2.002 0 1.104.896 2 2 2 1.105 0 2-.896 2-2 0-1.105-.895-2.002-2-2.002z"/></svg>
));