import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 4V16H22V2H8V4H20Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2 8V22H16V8H2ZM14 10H4V20H14V10Z" fill="currentColor"/>
  <path d="M17 7H5V5H19V19H17V7Z" fill="currentColor"/></svg>
));