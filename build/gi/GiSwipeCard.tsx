import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M396.6 69c-6.2-.15-13.3.95-21.5 3.47L54.52 171.3c-16.44 5.1-25.94 12.4-30.67 21.4-4.78 8.9-5.39 21-.36 37.4l5.9 19.2L439.7 122.9l-5.9-19.3c-5.1-16.42-12.4-26-21.4-30.67-4.5-2.41-9.7-3.79-15.8-3.93zm59.3 106.7L45.65 302.2l32.66 106.3c5.03 16.3 12.32 25.9 21.29 30.6 9 4.8 21 5.5 37.4.5l320.5-98.8c16.4-5.1 25.9-12.4 30.6-21.4 4.8-9 5.5-21 .5-37.4z"/></svg>
));