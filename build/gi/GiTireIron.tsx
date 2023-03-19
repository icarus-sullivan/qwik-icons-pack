import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M180 34.39c-9.2.1-18.2 2.89-26.1 7.41-11.2 6.44-20.6 16.6-24 29.44L24.92 468.6l17.42 4.6L147.3 75.86c1.9-6.99 7.8-14.01 15.6-18.46 7.7-4.45 16.9-6.08 24-4.19l76.2 20.31 14.7 25.1 72.1 19.18L365 60.76l-72.1-19.19-3.2 1.86-22 12.69-76.2-20.29c-3.2-.86-6.5-1.31-9.7-1.42H180zM327 157.5c-88.4 0-160 71.6-160 160 0 88.5 71.6 160.1 160 160.1 88.5 0 160.1-71.6 160.1-160.1 0-88.4-71.6-160-160.1-160zm-.3 74a86.06 86.06 0 0 1 .3 0 86.06 86.06 0 0 1 86.1 86 86.06 86.06 0 0 1-86.1 86.1 86.06 86.06 0 0 1-86-86.1 86.06 86.06 0 0 1 85.7-86z"/></svg>
));