import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M187.737 20.081c-2.019.404-45.235 14.136-45.235 14.136l85.22 27.06s-37.965-41.6-39.985-41.196zm23.281 41.64c-14.49-.219-26.62 2.57-39.84 6.018l-17.77 63.004c-4.761 33.46-10.786 66.5-28.273 95.719 10.939 80.264 13.738 164.088 40.389 237.478 31.632 35.377 68.531 36.233 109.855 8.078 87.857-9.33 112.196-73.646 111.47-147.011L326.266 183.65l-93.7-119.548c-7.886-1.562-14.961-2.282-21.548-2.381z"/></svg>
));