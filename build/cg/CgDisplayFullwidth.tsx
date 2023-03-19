import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 5H22V3H2V5Z" fill="currentColor"/>
  <path d="M2 21H22V19H2V21Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2 7V17H22V7H2ZM4 9H20V15H4V9Z" fill="currentColor"/></svg>
));