import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M105 25v462h302V25H105zm30 30h242v402H135V55zm121 34c-23.3 0-44.6 12.5-60.7 33.9-16 21.4-26.3 51.6-26.3 85.1 0 33.5 10.3 63.7 26.3 85.1 16.1 21.4 37.4 33.9 60.7 33.9 23.3 0 44.6-12.5 60.7-33.9 16-21.4 26.3-51.6 26.3-85.1 0-33.5-10.3-63.7-26.3-85.1C300.6 101.5 279.3 89 256 89zm-64 110h128v18H192v-18zm48 48h32v18h-32v-18zm-39.7 77.2c-5.1 1.9-10 3.9-14.6 6-10.5 4.8-19.5 10-25.4 14.7-5.9 4.6-7.3 9.1-7.3 7.1v87h206v-87c0 2-1.4-2.5-7.3-7.1-5.9-4.7-14.9-9.9-25.4-14.7-4.6-2.1-9.5-4.1-14.6-6-16 13.1-35.1 20.8-55.7 20.8s-39.7-7.7-55.7-20.8z"/></svg>
));