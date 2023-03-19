import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M313 80v48h18V80zm-78.5 29.2l-17 5.6 16 48 17-5.6zm175 0l-16 48 17 5.6 16-48zM322 167c-71.9 0-130.9 55.5-136.6 126h127.1c5.7-18 6.2-37.7 8.4-54.8 10.5 6.9 21.1 22.4 26 37.7 4.9-22.7 5.7-46.6 8.2-67.6 20.3 14.8 40.9 56.5 37 84.7h66.5c-5.7-70.5-64.7-126-136.6-126zM20 311v18h472v-18zm190 38v18h224v-18zm16 38v18h192v-18zm32 38v18h128v-18zm42 38v18h44v-18z"/></svg>
));