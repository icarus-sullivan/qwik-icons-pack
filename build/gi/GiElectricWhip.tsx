import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M17.484 39.262c49.142 2.758 98.444 7.823 147.96 15.924l-6.188-37.095L298.61 124.75l8.177-41.976L421.17 255.672l32.39-29.328-4.658 171.826 45.943 6.657-128.062 62.762 28.438 25.59-234.395-2.697c405.34-23.83 225.85-392.453-143.335-451.22z"/></svg>
));