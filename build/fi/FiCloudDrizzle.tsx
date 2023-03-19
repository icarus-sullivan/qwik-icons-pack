import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="19" x2="8" y2="21"/>
  <line x1="8" y1="13" x2="8" y2="15"/>
  <line x1="16" y1="19" x2="16" y2="21"/>
  <line x1="16" y1="13" x2="16" y2="15"/>
  <line x1="12" y1="21" x2="12" y2="23"/>
  <line x1="12" y1="15" x2="12" y2="17"/>
  <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/></svg>
));