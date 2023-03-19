import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M350.9 36.23c-9.1-.16-17.4 1.45-24.8 5.14a26.67 16.72 24.5 0 1 13.9 3.49 26.67 16.72 24.5 0 1 17.1 26.25 26.67 16.72 24.5 0 1-30.7 4.09 26.67 16.72 24.5 0 1-17.9-19.52c-12.4 15.21-14.9 33.61-10.6 54.52.4 2 .8 3.9 1.4 5.8a13.4 19.63 89.15 0 1 15.9-6.1 13.4 19.63 89.15 0 1 19.6 13 13.4 19.63 89.15 0 1-19.2 13.5 13.4 19.63 89.15 0 1-9.8-1.7c6.4 14.5 15.5 30.5 26.4 43.9-2.1-7.2-1.9-15.1 1.7-22.5 4.6-9.7 13.3-14.9 22.7-16.5 9.7-1.5 20.9.1 30.4 5.1 9.5 4.9 16.8 13.6 20.9 22.2 4.1 8.5 4.9 18.7.4 27.5-4.6 8.8-13.4 14-22.7 15.5-7.8 1.3-16.8.4-25.6-2.8 15.8 12.3 31.3 22 46 27.8 5.4 2.1 10.7 3.7 15.7 4.8a21.22 13.13 50.2 0 1-4.6-4.6 21.22 13.13 50.2 0 1-3.4-24.4 21.22 13.13 50.2 0 1 6.4-2 21.22 13.13 50.2 0 1 17 9.8 21.22 13.13 50.2 0 1 5.4 21.9c7.4-1.2 14.1-4.3 19.9-9.4 25-20.7 31.3-44.2 27.5-69.1-3.8-26.2-19.2-52.3-40.8-74.18C438 75.87 425.2 65.37 412 56.98a17.25 13.66 50.2 0 1-4.2 8.76 17.25 13.66 50.2 0 1-21.2-4.4 17.25 13.66 50.2 0 1-3.2-18.64c-1.7-.62-3.4-1.22-5.1-1.77-9.9-2.98-19.2-4.55-27.4-4.7zm-71.7 43.71C221.9 121.3 157.5 170.9 113.9 220.6c-26.36 29.4-45.25 60.7-52.08 88.9-6.77 28.2-2.29 56.1 19.63 82.8C107.7 424 134.4 435 163.6 434c30.2-.9 62.2-14.9 95.1-36.4 56.1-35.8 113.9-92.8 166.4-137.9-8.5-1-17.1-4.7-25.6-8-26.6-10.4-54.1-30.4-75.5-54.8s-38-54.5-43.8-83.1c-2.3-11.2-2.7-22.76-1-33.86zm92.1 5.44a12.07 16.45 1 0 1 11.9 16.72 12.07 16.45 1 0 1-12.4 15.9 12.07 16.45 1 0 1-12.9-16.4 12.07 16.45 1 0 1 13.4-16.22zm52.9 7.28a22.28 14.46 80.6 0 1 16.3 19.64 22.28 14.46 80.6 0 1-10.5 24.1 22.28 14.46 80.6 0 1-17.8-19.4 22.28 14.46 80.6 0 1 10.6-24.22 22.28 14.46 80.6 0 1 1.4-.12zM446.8 138c1.9 0 3.8.3 5.6.7 7.3 1.6 14.3 5.9 20.7 12.3 5.5 7.8 8.5 15.3 8.7 22.8.4 7.5-2.2 15.4-8.7 20.6-7.4 5.2-15.6 6.3-22.9 4.6-7.4-1.6-14.2-5.9-19.5-12.3-5.3-6.4-8.3-13.9-8.6-21.4-.4-7.5 2.3-16.8 8.5-22 4.6-3.8 10.5-5.5 16.2-5.3zm-1.2 19.3c-1.5.1-2.6.6-3.5 1.3-1.3 1.1-2.2 2.8-2 6 .1 3 1.5 7.1 4.4 10.6 3 3.5 6.7 5.6 9.7 6.3 3 .7 4.9.1 6.2-1 1.3-1 2.2-2.8 2.1-6-.1-3-1.5-7-4.5-10.6-2.9-3.5-6.6-5.6-9.6-6.3-.8-.2-1.5-.3-2.1-.3h-.7zm-82 1.1c-1.4 0-2.7.1-4 .3-5 .9-8.1 3.1-9.7 6.1-1.6 3.1-1.6 6.9.6 11.5s6.7 9.4 12.9 12.6c7.4 3.2 14.2 4.1 19.2 3.3 5-.9 8.1-3.1 9.7-6.1 1.6-3 1.6-6.9-.6-11.4-2.2-4.6-6.7-9.4-12.9-12.7-4.7-2.4-10.4-3.5-15.2-3.6zm-302.59 237c-11.8 4.7-25 7.7-39.9 8.2 24.27 19.7 48.06 41.7 65.4 72.2 1.87-13.4 5.59-28.9 12.55-43-11.34-7.4-21.87-17-31.81-29.1-2.21-2.7-4.28-5.5-6.24-8.3z"/></svg>
));