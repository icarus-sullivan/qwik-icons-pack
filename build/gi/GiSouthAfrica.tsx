import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M393.5 71.28c-48 17.92-81.8 59.82-115.2 102.52l-19.5 4.9c-38.6-18.8-50.1.5-64.3 16.1l-51 12.7c10.4-36.8-12.2-45-27.4-59.7l-6.3 118c-39.92 13.8-64.7-5.2-95.27-11.6l69.88 186.5 231.09-23.2c84.2-40.7 119.5-99.3 167.9-153.1l14.1-52-17.6-2.1c-12.3 3.1-40 20.5-40.7-1.6-.7-22.1 11.9-33.4 35.3-29.3l-16.4-94.08c-12.7-12.87-40.5-11.7-64.6-14.04zM371.7 258.8c21.1-.4 26.3 17.3 28.1 28.8-8.1 15.4-54 61.8-71.3 6.6 7.5-20.1 21.4-34.9 43.2-35.4z"/></svg>
));