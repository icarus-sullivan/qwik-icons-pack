import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 16H16V9L19 9L19 19L5 19L5 9L8 9V16Z" fill="currentColor" fill-opacity="0.3"/>
  <path d="M5 7L19 7V4L5 4L5 7Z" fill="#110000"/></svg>
));