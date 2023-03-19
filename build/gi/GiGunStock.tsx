import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M418.2 18L375 65.56c-16.9 12.53-44.7 14.05-56.3 22.77L122.6 234.2c-9.6 6.9-3.7 23.8-5.8 36.9 6.9 27.7 28.6 44.9 59.7 41.8 32.7-3.4 98.5-47.4 120.2-63.6 6.9 6.1-77.4 77.3-118.3 81.5-34.3 3.5-62.3-14.6-74.7-42.7l-62.37 47.4c38.23 55.9 82.97 105.4 142.77 132.3l187.8-273 17 25.8c15.2 19.6 82.4-16 75.1-29.1l-26.9-55.3L494 61.68V18h-75.8zM26.96 346.4l-6.71 5.1C-5.009 373.7 155.9 512 166.5 493.3l7.2-10.5c-62.4-28.9-108.31-80.4-146.74-136.4z"/></svg>
));