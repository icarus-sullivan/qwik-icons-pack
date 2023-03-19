import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><line x1="17" y1="10" x2="3" y2="10"/>
  <line x1="21" y1="6" x2="3" y2="6"/>
  <line x1="21" y1="14" x2="3" y2="14"/>
  <line x1="17" y1="18" x2="3" y2="18"/></svg>
));