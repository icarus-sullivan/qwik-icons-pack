import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11 7H7V11H11V7Z" fill="currentColor"/>
  <path d="M11 13H7V17H11V13Z" fill="currentColor"/>
  <path d="M13 13H17V17H13V13Z" fill="currentColor"/>
  <path d="M17 7H13V11H17V7Z" fill="currentColor"/></svg>
));