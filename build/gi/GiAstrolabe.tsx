import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M255.9 21.04c-11.8 0-22.2 4.08-28.6 10.01-5.6 4.98-8.6 11.41-8.6 18.11 0 5.55 2.2 11.01 5.9 15.48-16.4 4.97-30.1 13.64-39 24.53 22.1-7.67 45.7-11.86 70.3-11.86 24.6 0 48.3 4.19 70.3 11.86-8.9-10.89-22.6-19.56-39-24.53 3.9-4.47 5.9-9.93 5.9-15.48 0-6.7-3-13.13-8.5-18.11-6.4-5.93-16.9-10.01-28.7-10.01zm0 20.34c5.3 0 10.1 1.27 13.6 3.52 1.7 1.16 3.4 2.43 3.4 4.27 0 1.76-1.7 3.03-3.4 4.19-3.5 2.33-8.3 3.61-13.6 3.61-5.3 0-10.1-1.28-13.6-3.61-1.6-1.16-3.3-2.43-3.3-4.19 0-1.84 1.7-3.11 3.3-4.27 3.5-2.25 8.3-3.52 13.6-3.52zm.1 48.1c-110.8 0-200.72 90.02-200.72 200.82S145.2 491 256 491s200.7-89.9 200.7-200.7c0-110.8-89.9-200.82-200.7-200.82zm0 32.62c92.9 0 168.2 75.3 168.2 168.2 0 92.8-75.3 168.2-168.2 168.2-92.9 0-168.26-75.4-168.26-168.2 0-92.9 75.36-168.2 168.26-168.2zm-8.2 6.3c-9.6.5-19 1.9-28.3 4.1l2.3 7.8c8.4-2 17.1-3.3 26-3.8v-8.1zm16.2 0v8.1c9 .5 17.7 1.8 26 3.8l2.2-7.8c-9.1-2.2-18.6-3.6-28.2-4.1zm-60 8.5c-9 3.2-17.6 7-25.8 11.6l4.1 7.1c7.7-4.3 15.6-7.9 23.9-10.8l-2.2-7.9zm103.7 0-2 7.9c8.4 2.9 16.2 6.5 23.8 10.8l4.2-7.1c-8.2-4.6-16.9-8.4-26-11.6zm-143.3 20.3c-7.5 5.4-14.6 11.4-21.1 17.9l5.8 5.8c5.9-6.1 12.5-11.7 19.5-16.6l-4.2-7.1zm182.9 0-4 7.1c6.9 4.9 13.5 10.5 19.5 16.6l5.7-5.8c-6.5-6.5-13.7-12.5-21.2-17.9zm-91.4 11.5c-37 0-67.4 28.6-70.3 64.9l15.9 4.7c.7-29.6 24.7-53.4 54.4-53.4 30.1 0 54.4 24.4 54.4 54.3 0 15-6.2 28.7-16 38.5l.1.1c1.7 2.7 3 5.6 4.1 8.6.9 3 1.7 5.7 2.3 8.6v.4c33.8-16.7 57.2-51.5 57.2-91.7 0-3.8-.2-7.3-.6-10.9-3.2-3.3-6.3-6.4-9.8-9.5 1.5 6.5 2.3 13.4 2.3 20.4 0 28.7-13 54.7-33.5 71.8 6.3-10.6 10.1-23 10.1-36.3 0-38.9-31.7-70.5-70.6-70.5zm-91.8 14.6c-3.3 3.1-6.5 6.2-9.7 9.5-.3 3.6-.5 7.1-.5 10.9 0 7.3.7 14.2 2.1 20.9l9.1 2.7c-2.1-7.5-3.1-15.4-3.1-23.6 0-7 .7-13.9 2.1-20.4zm-31.6 4c-5.8 7.1-10.9 14.6-15.4 22.6l7.1 4c4.1-7.4 8.8-14.3 14-20.8l-5.7-5.8zm246.8 0-5.7 5.8c5.3 6.5 10 13.4 13.9 20.8l7.1-4c-4.4-8-9.5-15.5-15.3-22.6zm-269.2 37.1c-2.5 5.7-4.6 11.4-6.4 17.6l.1-.3c3.4-5 7.9-9.3 12.9-12.5l.3-.6-6.9-4.2zm291.8 0-7.2 4.2c3.2 7.3 5.7 15.1 7.6 23.1l7.9-2.1c-2.1-8.8-4.9-17.3-8.3-25.2zm-261.2 11.5c-13.4.1-25.7 9-29.7 22.5l114.8 34.2c-4.9 16.7 4.6 34.2 21.2 39.2L361.7 366c16.6 5 34.1-4.4 39.1-21l-114.6-34.4c4.9-16.5-4.7-34.1-21.3-39.1 0 0-72.4-21.5-114.8-34.3-3.1-.9-6.3-1.4-9.4-1.3zm-42.09 29.7c-.9 6.9-1.4 14-1.4 21.3 0 1.3.1 2.9.1 4.2h8.09v-4.2c0-6.5.4-12.9 1.2-19.2l-7.99-2.1zm314.59 0-7.9 2.1c.7 6.3 1.3 12.7 1.3 19.2 0 1.3 0 2.9-.2 4.2h8.2v-4.2c0-7.3-.5-14.4-1.4-21.3zm-157.3 24.7c6.3 0 11.5 5 11.5 11.3 0 6.4-5.2 11.6-11.5 11.6s-11.5-5.2-11.5-11.6c0-6.3 5.2-11.3 11.5-11.3zM98.51 307.4c1 8.2 2.89 16.4 5.09 24.3l7.9-2.1c-2.1-7.2-3.8-14.6-4.8-22.2h-8.19zm306.69 0c-1.1 7.6-2.7 15-4.8 22.2l7.8 2.1c2.2-7.9 4.1-16.1 5.2-24.3h-8.2zm-191.3 10.9c-19 13.3-31.4 35.3-31.4 60.1 0 10.4 2.3 20.4 6.2 29.7 8.8 4.9 17.9 8.8 27.6 11.7-10.8-10.7-17.5-25.2-17.5-41.4 0-19 9.3-36 23.7-46.3-3.8-4.1-6.7-8.7-8.6-13.8zM116.8 345l-7.9 2c3.1 7.6 6.8 14.7 11 21.6l6.9-4.2c-3.8-6.2-7-12.8-10-19.4zm194.8 20.5c.9 4.1 1.4 8.5 1.4 12.9 0 16.2-6.7 30.7-17.4 41.4 9.6-2.9 18.8-6.8 27.5-11.7 4-9.3 6.2-19.3 6.2-29.7 0-2.7-.2-5.2-.4-7.7l-17.3-5.2zM136 377.9l-7.1 4.1c4.7 6.2 9.7 12.1 15.3 17.3l5.7-5.5c-5.1-5-9.7-10.3-13.9-15.9zm243.9 2.3-.2.1c-2.1.3-4 .6-6.2.7h-.1c-3.6 4.5-7.3 8.8-11.5 12.8l5.8 5.5c5.5-5.2 10.5-11.1 15.2-17.3l-3-1.8zm-217.8 24-5.9 5.9c6 4.8 12.2 9.7 18.8 13.6l3.8-7.8c-5.7-2.9-11.4-6.8-16.7-11.7zm187.7 0c-5.4 4.9-11.1 8.8-16.8 11.7l3.9 7.8c6.5-3.9 12.8-8.8 18.7-13.6l-5.8-5.9zm-156.4 19.5-4.1 6.8c6.6 4 13.7 5.8 20.7 8.8l2.2-7.9c-6.5-1.9-12.7-4.8-18.8-7.7zm125.2 0c-6.2 2.9-12.5 5.8-19.1 7.7l2.3 7.9c7.2-3 14-4.8 20.7-8.8l-3.9-6.8zm-90.7 11.7-2 7.8c7.1 1 14.5 1.9 21.9 1.9v-7.7c-6.8 0-13.5-1.1-19.9-2zm55.9 0c-6.3.9-13 2-19.8 2v7.7c7.5 0 14.8-.9 22.1-1.9l-2.3-7.8z"/></svg>
));