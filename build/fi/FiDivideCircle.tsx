import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="12" x2="16" y2="12"/>
  <line x1="12" y1="16" x2="12" y2="16"/>
  <line x1="12" y1="8" x2="12" y2="8"/>
  <circle cx="12" cy="12" r="10"/></svg>
));