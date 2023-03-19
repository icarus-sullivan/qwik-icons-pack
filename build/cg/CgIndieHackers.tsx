import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H7V18H4V6Z" fill="currentColor"/>
  <path d="M10 6H13V10.5H17V6H20V18H17V13.5H13V18H10V6Z" fill="currentColor"/></svg>
));