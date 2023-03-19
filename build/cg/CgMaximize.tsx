import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3H9V5H5V9H3V3Z" fill="currentColor"/>
  <path d="M3 21H9V19H5V15H3V21Z" fill="currentColor"/>
  <path d="M15 21H21V15H19V19H15V21Z" fill="currentColor"/>
  <path d="M21 3H15V5H19V9H21V3Z" fill="currentColor"/></svg>
));