import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#000000" d="M3.707 13.707l8.293-8.293v3.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.404-0.244-0.769-0.617-0.924-0.124-0.051-0.254-0.076-0.383-0.076v-0.001h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.586l-8.293 8.293c-0.195 0.195-0.293 0.451-0.293 0.707s0.098 0.512 0.293 0.707c0.39 0.391 1.024 0.391 1.414 0z"/></svg>
));