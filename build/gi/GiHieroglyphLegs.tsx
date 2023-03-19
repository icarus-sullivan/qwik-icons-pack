import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M166.4 48.07C174.7 139.7 83.71 316.3 30.34 410.6c-13.4 23.7-10.14 47.1 8.03 53.3l173.73-.5c1.7-9.1 1.7-19.1-7.3-31.3-32.1-16-76.5-6.2-95.6-30.8-13.33-17.2 84.7-149.3 120.4-259.7 11.3 79.1 32.1 172.1 76.3 262.7-1.1 23.6-8.8 53.3 9.4 59.6l173.7-.5c1.7-9.1 1.7-19.1-7.3-31.3-32.1-16.1-85.6-5.7-103.8-31.1-70.4-98.3-71.2-243.9-99.5-352.93z"/></svg>
));