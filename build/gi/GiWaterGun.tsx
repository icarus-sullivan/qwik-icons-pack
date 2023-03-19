import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M80 33c-12.62 0-21.38 6.47-28.26 18.09C44.86 62.7 41 79.33 41 96c0 16.7 3.86 33.3 10.74 44.9C58.62 152.5 67.38 159 80 159h39V33zm57 0v126h174V33zm192 0v126h39c12.6 0 21.4-6.5 28.3-18.1 6.8-11.6 10.7-28.2 10.7-44.9 0-16.67-3.9-33.3-10.7-44.91C389.4 39.47 380.6 33 368 33zM119 177v32H41v94h366v-94h-78v-32h-18v32H137v-32zm306 48v30h46v-30zm-337.54 4.2l17.04 5.6-15.96 48-17.08-5.6zm48.04 0l17 5.6-16 48-17-5.6zm48 0l17 5.6-16 48-17-5.6zM84.95 321L65 440.7c12.89-22.1 26.47-44 42.9-64 18-21.8 39.6-41.3 67.1-55.7zm123.15 5.1c-37.8 13.2-64.3 35.2-86.3 62-22.2 27-39.57 59.1-58.07 90.9H144c5 0 10.7-2.4 17.6-9.4 6.8-6.8 14.3-17.8 21.9-32.7zM247 328v23h-26l-4 18h30v23h18v-64z"/></svg>
));