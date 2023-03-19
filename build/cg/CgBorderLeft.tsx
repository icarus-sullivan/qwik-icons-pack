import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8V16H9L9 19H19L19 5L9 5V8H16Z" fill="currentColor" fill-opacity="0.3"/>
  <path d="M7 5L7 19H4L4 5L7 5Z" fill="currentColor"/></svg>
));