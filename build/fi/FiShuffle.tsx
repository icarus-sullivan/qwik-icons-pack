import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"/>
  <line x1="4" y1="20" x2="21" y2="3"/>
  <polyline points="21 16 21 21 16 21"/>
  <line x1="15" y1="15" x2="21" y2="21"/>
  <line x1="4" y1="4" x2="9" y2="9"/></svg>
));