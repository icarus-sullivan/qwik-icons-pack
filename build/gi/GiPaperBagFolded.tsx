import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="m151.7 112.2-23.3 42.7 16.2 8.9 172.8 13.5 28.7-23-32.2 5.3 14.3-35.9-176.5-11.5zM346 125.8l21.8 27.3-9.9 102.9 2.8 120.1 43.6 43.3-12.1-51.2 5.5-112.9-25.3-109.7-26.4-19.8zm-1.2 47.1-34.6 29.4-162.4-14.7-33.3 44.2-13.4 124.6 173.2 28.1-174.88-12.4-7.28 67.7 195.26 26.7 8.8-216.5 48.6-77.1zm6.1 18.8L313.7 256l-6.2 185.9 35.9-60.6.3-125.3 7.2-64.3zm3.6 201.1-47 79.7 92.8-30.6-45.8-49.1z"/></svg>
));