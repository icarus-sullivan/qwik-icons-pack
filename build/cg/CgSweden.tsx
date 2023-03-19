import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23 4H10V11H23V4Z" fill="currentColor"/>
  <path d="M23 13V20H10V13H23Z" fill="currentColor"/>
  <path d="M8 13V20H1V13H8Z" fill="currentColor"/>
  <path d="M1 11V4H8V11H1Z" fill="currentColor"/></svg>
));