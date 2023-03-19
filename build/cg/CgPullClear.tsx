import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H2V16C2 17.1046 2.89543 18 4 18H20C21.1046 18 22 17.1046 22 16V6H20V16H4V6Z" fill="currentColor"/>
  <path d="M6 12H18V14H6V12Z" fill="currentColor"/>
  <path d="M18 8H6V10H18V8Z" fill="currentColor"/></svg>
));