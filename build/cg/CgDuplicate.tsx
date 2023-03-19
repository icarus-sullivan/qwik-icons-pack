import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 5H7V3H21V17H19V5Z" fill="currentColor"/>
  <path d="M9 13V11H11V13H13V15H11V17H9V15H7V13H9Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3 7H17V21H3V7ZM5 9H15V19H5V9Z" fill="currentColor"/></svg>
));