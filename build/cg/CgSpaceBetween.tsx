import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 5L15 5L15 19H19V17H17L17 7L19 7V5Z" fill="currentColor"/>
  <path d="M5 5L9 5L9 19H5L5 17H7L7 7H5L5 5Z" fill="currentColor"/>
  <path d="M13 7V17H11L11 7H13Z" fill="currentColor"/></svg>
));