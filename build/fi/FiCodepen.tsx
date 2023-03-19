import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
  <line x1="12" y1="22" x2="12" y2="15.5"/>
  <polyline points="22 8.5 12 15.5 2 8.5"/>
  <polyline points="2 15.5 12 8.5 22 15.5"/>
  <line x1="12" y1="2" x2="12" y2="8.5"/></svg>
));