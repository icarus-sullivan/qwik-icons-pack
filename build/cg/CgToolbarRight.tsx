import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 9H18V15H16V9Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M22 8C22 6.34315 20.6569 5 19 5H5C3.34315 5 2 6.34315 2 8V16C2 17.6569 3.34315 19 5 19H19C20.6569 19 22 17.6569 22 16V8ZM19 7H5C4.44772 7 4 7.44771 4 8V16C4 16.5523 4.44772 17 5 17H19C19.5523 17 20 16.5523 20 16V8C20 7.44772 19.5523 7 19 7Z" fill="currentColor"/></svg>
));