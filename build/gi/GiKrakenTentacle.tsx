import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M170.2 40.98c-3.5 4.28-13.3 16.92-25.4 34.32.3.14.7.29 1.1.46 6.8 3.02 10.4 9.66 11.5 16.1 6.3-13.96 14.7-26.62 19-41.73 1-4.5-3-7.14-6.2-9.15zm-34.3 15.68c-8.4 8.9-18.6 20.04-29.7 33.15C78.14 122.9 48.8 164.9 42.43 195.1c-4.85 23 4 47.3 14.48 73.4 10.48 26.1 22.57 53.8 18.82 83.6-8.79 49.3-38 89.2-59.94 117.9v18.7s23.64-10.8 42.98-18.7c45.13-16.4 55.33-22.9 92.53-.3 12.8 7.8 27 16.8 44.5 17.3 19.4.5 35.8-8.9 50.7-17 15-8.2 28.5-15 41.5-14.3 9.1.5 26.8 6.2 39.2 15 40.6 28.6 68.2-.3 107.9-3.8 16-.8 37 .8 58.2 3.4v-78.1h-14.1V271.5l14.1 5.5v-17l-14.1-5.5v-81.9l14.1 5.1v-16.8l-14.1-5.1v-49.5h-15.9v43.8l-42.2-15.2-5.5 14.9 47.7 17.2v81.3L395 221.8l-5.8 14.8 74.1 28.8v126.8h-85.1l-6.6-7.8V281l37.2 13.4 5.3-14.9-42.5-15.3v-62.7h-15.9v57l-47.4-17.2-5.4 15 52.8 19v95.2h-42.1l-56.9-40.4-9.2 13 38.6 27.4c22.2 27.2 42.7 55.5 54.5 87.2-1.5-.9-3.1-1.8-4.7-2.7-14.2-7.9-31.2-16.4-46.9-17.3-19.5-1-36 8.3-51 16.4-15.1 8.2-28.7 15.3-41.8 14.9-9.5-.3-19.2-5-29.7-11.2 1.6-2.8 3.5-5.4 5.6-7.7 4.2-4.7 9.9-8.2 16.2-9.3.6-3.6 1.3-7.5 2-11.8 2.9-17.6 5.2-37.8 5.4-54.5-2.2 1.3-4.6 2.3-7.3 2.8-9 1.8-17.7-2.1-23.9-8.1-6.2-6.1-10.6-14.5-12.5-24.2-1.9-9.7-1.1-19.1 2.4-27.1 3.5-7.9 10-14.8 19-16.6.2 0 .4-.1.6-.1-4.9-8.8-10.3-17.6-15.8-26.6-3.1-5-6.1-10-9.1-15.2 2.6 9.4 2.6 21-.4 29.1-3 7.6-9 14.3-17.5 16.2-1.1.2-2.2.4-3.3.5 4.3 11.3 7.4 23.2 8 35.8.6 12.7-1.2 27.3-4.1 42.4 3.2-1 6.6-1.3 10-.8 9.1 1.3 16 7.9 19.9 15.6 3.8 7.7 5.1 17.1 3.7 26.9-2.9 18-33.4 20.1-24.5 12.5 3-3.2 5.8-8.6 6.7-15.1.9-6.4-.1-12.4-2.1-16.3-3.7-7.4-9.5-6.7-14-2-3 3.2-5.7 8.7-6.7 15.1-.9 6.4.1 12.4 2.1 16.3 2.7 3.6-16.4.8-28.28 2.9 1.38-4.6 2.88-9.4 4.38-14.4 8.2-27.7 15.9-61.6 14.9-82.3-1-22.8-13.4-45.5-26.02-69.4-12.62-23.9-25.52-49.2-23.05-78.1 2.9-34.1 25.55-74.8 47.07-108.19 7-10.85 13.9-20.85 20-29.45zm1.7 35.66c-3.8 1.27-6.8 5.55-8.2 8.48-1.1 3.7-3.1 9-.5 12.4 3.7-.7 7.4-5.2 9-8.7 1.1-3 3.3-12.48-.3-12.18zm-23.4 31.48c-14.2 25.6-25.76 52.4-27.43 72.1-1.45 16.9 4.15 33.6 12.33 50.9 3.3-6.1 8.7-11.2 15.9-12.9 10.9-.8 18.3 2.5 25 9.2-4.5-8.4-8.5-17.1-11.8-26.2-2.6.9-5.4 1.4-8.3 1.2-8.2-.5-14.6-5.9-18.3-12.3-3.62-6.4-5.23-14.3-4.6-22.7.63-8.4 3.4-16 8-22 4.6-5.8 11.8-10.3 20-9.8 1.1.1 2.3.2 3.3.5 3-7.3 6.7-15.1 10.6-23.1-5.3 2.6-11.7 3.5-17.5.9-3-1.4-5.3-3.4-7.2-5.8zm9.4 45.4c-5.7 1.8-8.2 9.8-8.6 15-.4 5.1.7 9.7 2.3 12.5 2.6 4.8 6.2 3.2 8.4.5 2-2.6 3.8-7 4.2-12-.1-4.3-.3-15.3-6.3-16zm-3.3 82.3c-8.5 2-8.1 14.4-6.6 20 1.5 5.5 6.1 17.1 13.5 15.8 6.7-3.8 6.7-13.9 5.3-20.1-1.9-5.5-5.3-15.6-12.2-15.7zm58.2 67.7c-10.1.6-10.1 15.4-8.9 22.3 1.8 6.5 6.8 19.6 15.3 18.1 8.3-3.4 8.6-15.6 7.3-22.5-1.9-6.8-5.7-18.4-13.7-17.9z"/></svg>
));