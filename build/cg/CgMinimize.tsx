import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9H3V7H7V3H9V9Z" fill="currentColor"/>
  <path d="M9 15H3V17H7V21H9V15Z" fill="currentColor"/>
  <path d="M21 15H15V21H17V17H21V15Z" fill="currentColor"/>
  <path d="M15 9.00012H21V7.00012H17V3.00012H15V9.00012Z" fill="currentColor"/></svg>
));