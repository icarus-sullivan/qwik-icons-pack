import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M256 16c-67.5 0-105 120-105 210 0 45 45 90 105 90s105-45 105-90c0-90-37.5-210-105-210zM136 271c0 90 45 75 45 135 0 90-75 60-75 90h300c0-30-75 0-75-90 0-60 45-45 45-135-90 105-150 105-240 0z"/></svg>
));