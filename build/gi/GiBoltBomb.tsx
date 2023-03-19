import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M104.8 26.28c-16.71 0-32.64 5.9-45.86 15.4C25.09 65.78 8.537 116.5 40.26 159.6c24.97 34 14.15 78.4-11.69 103.4l12.84 13.4c31.97-30.9 45.09-85.6 14-127.9-25.94-35.2-12.44-72.72 14.03-91.72 13.24-9.4 29.77-13.7 46.16-10.5 15.6 3.1 31.6 13.2 46 34.6l-59.1 34.22 24.1 41.9c-49.4 63.4-58.45 153.1-15.9 227.1 56 97.2 179.9 130.5 276.8 74.4 96.9-56.1 130-180.4 74-277.6C419 107 337.3 69.98 258 81.08l-24.2-42-56 32.5c-16.8-25.4-37.5-39.8-58.7-44-4.8-.9-9.6-1.3-14.3-1.3zM288 112l-16 144 128-16-160 208 64-160-112 32 96-208z"/></svg>
));