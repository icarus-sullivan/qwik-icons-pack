import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/>
  <circle cx="12" cy="12" r="4"/>
  <line x1="21.17" y1="8" x2="12" y2="8"/>
  <line x1="3.95" y1="6.06" x2="8.54" y2="14"/>
  <line x1="10.88" y1="21.94" x2="15.46" y2="14"/></svg>
));