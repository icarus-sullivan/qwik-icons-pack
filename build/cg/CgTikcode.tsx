import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 5H5V9H9V5ZM3 3V11H11V3H3Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M19 5H15V9H19V5ZM13 3V11H21V3H13Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9 15H5V19H9V15ZM3 13V21H11V13H3Z" fill="currentColor"/>
  <path d="M13 13H15V21H13V13Z" fill="currentColor"/>
  <path d="M16 13H18V21H16V13Z" fill="currentColor"/>
  <path d="M19 13H21V21H19V13Z" fill="currentColor"/></svg>
));