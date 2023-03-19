import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 1.5H7V14.5H5V1.5Z" fill="currentColor"/>
  <path d="M9 4.5H11V22.5H9V4.5Z" fill="currentColor"/>
  <path d="M15 4.5H13V22.5H15V4.5Z" fill="currentColor"/>
  <path d="M17 4.5H19V14.5H17V4.5Z" fill="currentColor"/></svg>
));