import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5H15V9H9V15H5V5Z" fill="currentColor"/>
  <path d="M9 15V19H19V9H15V15H9Z" fill="currentColor"/>
  <path d="M10 10H14V14H10V10Z" fill="currentColor"/></svg>
));