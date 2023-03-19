import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M142.7 18.72L20 77.56v20.72l120.3-57.72L20 132v112.7l129.4-46.8-63.4-9.3 188-45.8L20 326.5V370l349.6-189.6-81.1 18.3 115.2-71.4 91.6-34.58v-20C432 101.4 368 115.2 301 131.6l44.4-30.2 149.9-72.81v-9.87h-22.5C393.2 63.83 310.6 89.86 224.7 119.7L383.5 18.72H302L112.3 114.1l122.2-95.38zM495.3 143.3L230.6 299.6l150.5-39.1L78.72 418.7l102.38-90.8L20 409v85h32.94S223 392.8 317.3 354.7L247 407l112.6-34.4-216.2 119.5 286-102.1-82 57.6L495.3 406V298.4l-139.9 52.3 72.7-58.5-133.7 47.2 177-115.1-24.9 42.5 48.8-18.5v-105z"/></svg>
));