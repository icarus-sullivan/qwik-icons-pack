import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 21V3H5V21H3Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7 3H17V21H7V3ZM9 5V19H15V5H9Z" fill="currentColor"/>
  <path d="M19 3V21H21V3H19Z" fill="currentColor"/></svg>
));