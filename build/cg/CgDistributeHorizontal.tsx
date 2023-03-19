import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11 9H13V15H11V9Z" stroke="currentColor" stroke-opacity="0.5" stroke-width="2"/>
  <path d="M5 5V19H7V5H5Z" fill="currentColor"/>
  <path d="M17 5V19H19V5H17Z" fill="currentColor"/></svg>
));