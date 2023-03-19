import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M147.9 25.75c-10.1 0-20.2 1.2-29.9 3.6-52 13-95.7 59.8-97.8 127.05-1.1 35.8 9.9 65.6 27.6 91.1 17.6 25.6 41.5 47.1 66.8 68.5C165.2 358.5 221 399.8 247 464.3l8.9 22 8.5-22.2C289 399.5 343 356.3 393 312.8c50-43.5 96.6-88.3 98.8-155.8 2.3-71.55-42.4-116.75-95.5-127.15-49-9.7-105.4 9.1-140.3 57.7-27.5-42.1-68.3-61.7-108.1-61.8zM80 112l80 32-64 32 116.4 23.3L256 112l43.6 87.3L416 176l-64-32 80-32 32 80-171.5 66L256 416l-36.5-158L48 192l32-80z"/></svg>
));