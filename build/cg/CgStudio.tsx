import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 13H13V17H17V13Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H21V21H3V3ZM5 5H19V19H5V5Z" fill="currentColor"/></svg>
));