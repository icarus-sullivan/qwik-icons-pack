import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M247 32v23.21C143.25 59.8 59.798 143.25 55.21 247H32v18h23.21C59.8 368.75 143.25 452.202 247 456.79V480h18v-23.21C368.75 452.2 452.202 368.75 456.79 265H480v-18h-23.21C452.2 143.25 368.75 59.798 265 55.21V32h-18zm0 41.223V128h18V73.223C359 77.76 434.24 153 438.777 247H384v18h54.777C434.24 359 359 434.24 265 438.777V384h-18v54.777C153 434.24 77.76 359 73.223 265H128v-18H73.223C77.76 153 153 77.76 247 73.223zM247 224v23h-23v18h23v23h18v-23h23v-18h-23v-23h-18z"/></svg>
));