import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M20.99 284.7C64.73 325.3 79.94 391.5 158.3 401c65.1-24.1 131.3-47.5 223.9-51L468 182.4c90.6-51.1-102.4-91.48-136.1-52.5-26 30-70.5 37.1-115.9 42.7l-11.2 26.6c-91.6 8.4-82.5-17.3-102.8-33-39.26 20-70.5 77.8-81.01 118.5z"/></svg>
));