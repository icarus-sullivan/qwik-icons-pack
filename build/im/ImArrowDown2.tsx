import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#000000" d="M13.707 9.707l-5 5c-0.39 0.391-1.024 0.391-1.414 0l-5-5c-0.391-0.391-0.391-1.024 0-1.414s1.024-0.391 1.414 0l3.293 3.293v-9.586c0-0.552 0.448-1 1-1s1 0.448 1 1v9.586l3.293-3.293c0.195-0.195 0.451-0.293 0.707-0.293s0.512 0.098 0.707 0.293c0.391 0.391 0.391 1.024 0 1.414z"/></svg>
));