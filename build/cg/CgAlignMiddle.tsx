import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 9H17V15H13V9Z" fill="currentColor" fill-opacity="0.5"/>
  <path d="M7 6H11V18H7V6Z" fill="currentColor"/></svg>
));