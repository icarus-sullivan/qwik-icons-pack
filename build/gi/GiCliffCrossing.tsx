import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M194.8 103.5l-5.6 17c49.1 16.4 84.5 16.4 133.6 0l-5.6-17c-46.9 15.6-75.5 15.6-122.4 0zM25 121.9V487h158V339.7l-15.5 46.6-23.3-99.7 34.4 17.8-11.7-47.9 15-120.4-96.71-8.8-13.61 46.4L59.39 125 25 121.9zm462 0l-156.8 14.2 30.9 232.4L331.5 487h68.3l-12.2-48.7 39.2-3.7-20.4 52.4H487v-86.2L466.1 328l20.9 1.4V121.9zm-16.8 102.2l-15.8 41.2-26.5-11.2-29.7 31.4-19.2-44.9 91.2-16.5zM42.95 402.7l120.35 17.6-32.9 41.3-40.26-29.1-21.74 47.7-25.45-77.5z"/></svg>
));