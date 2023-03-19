import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/>
  <path d="M16 16s-1.5-2-4-2-4 2-4 2"/>
  <line x1="9" y1="9" x2="9.01" y2="9"/>
  <line x1="15" y1="9" x2="15.01" y2="9"/></svg>
));