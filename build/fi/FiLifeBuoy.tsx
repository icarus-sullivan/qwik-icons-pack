import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/>
  <circle cx="12" cy="12" r="4"/>
  <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/>
  <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/>
  <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/>
  <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"/>
  <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/></svg>
));