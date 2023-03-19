import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M18.83 183.4l73.19-29.3L165.6 185c6.3-17 8.6-42.6 26.3-44.3 22.3-2.1 42.9 15.1 47.1 39.9l54-1.6 54.5 22.8 55-35.2 32.3 7.9s-20.3 32.6-9.7 42.4c9.1 8.5 35.5-10.9 35.5-10.9l32.6 22.1-87.1 62.7c-6.7-4.7-16.4-13.5-27.1-5-9.9 7.9-6 21.9 1 33.8-32.9 31-71 43-109.8 51.7l-127.8-30-92.59-70c9.92-34.7-14.36-61-30.98-87.9z"/></svg>
));