import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M262.5 33l-10 30h87l-10-30h-67zM160 39c-26 0-45.2 9.12-56.9 23.24C91.32 76.35 87 94.5 87 112v263h18V112c0-14.5 3.7-28.35 11.9-38.24C125.2 63.88 138 57 160 57h75.5l6-18H160zm79.3 42l-43.7 42.5 41.9-19.1-34.5 86.9 62.6-58.3-1.1 91.7 31.8-101.2 70.5 117.6-31.3-130.9 61.5 36.1L349.5 81H239.3zM72.55 393l-5.08 100h57.03l-5.1-100H72.55z"/></svg>
));