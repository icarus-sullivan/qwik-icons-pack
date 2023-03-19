import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M51.34 23.63l-6.68 16.72 80.04 32.01 6.6-16.72-79.96-32.01zm409.36.01l-80 32 6.6 16.72 80-32-6.6-16.72zM256 25c-29 0-50 14.08-64.7 34.29C176.6 79.51 169 106 169 128c0 13 7 27.8 14.5 39s14.9 18.6 14.9 18.6l1.5 1.5 9.3 27.9H228L194.7 98.07 256 118.5l61.3-20.43L284 215h18.8l9.3-27.9 1.5-1.5s7.4-7.4 14.9-18.6c7.5-11.2 14.5-26 14.5-39 0-22-7.6-48.49-22.3-68.71C306 39.08 285 25 256 25zm128 94v18h96v-18h-96zm-352 .1v18h96v-18H32zm189.3 6.8l25.5 89.1h18.4l25.5-89.1-34.7 11.6-34.7-11.6zm166 57.7l-6.6 16.8 80 32 6.6-16.8-80-32zm-262.6.1l-80.04 32 6.68 16.8 79.96-32-6.6-16.8zM217 233v14h78v-14h-78zm0 32v14h78v-14h-78zm-46.9 2.6c-27.1.5-52.6 5-66.9 11.1L29.8 484.1c71.1-14.1 143.9-26 217.2-.9V297h-48v-28.3c-7.9-.7-16-1.1-23.9-1.1h-5zm166.8 0c-7.9 0-16 .4-23.9 1.1V297h-48v186.2c73.3-25.1 146.1-13.2 217.2.9l-73.4-205.4c-14.3-6.1-39.8-10.6-66.9-11.1h-5z"/></svg>
));