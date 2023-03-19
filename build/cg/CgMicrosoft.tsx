import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3H11V11H3V3Z" fill="currentColor"/>
  <path d="M3 13H11V21H3V13Z" fill="currentColor"/>
  <path d="M13 3H21V11H13V3Z" fill="currentColor"/>
  <path d="M13 13H21V21H13V13Z" fill="currentColor"/></svg>
));