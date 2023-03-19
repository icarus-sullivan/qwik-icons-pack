import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6H13V18H11V6Z" fill="currentColor"/>
  <path d="M7 13H9V18H7V13Z" fill="currentColor"/>
  <path d="M15 9H17V18H15V9Z" fill="currentColor"/></svg>
));