import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#000000" d="M13.707 12.293l-8.293-8.293h3.586c0.552 0 1-0.448 1-1s-0.448-1-1-1h-6c-0.404 0-0.769 0.244-0.924 0.617-0.051 0.124-0.076 0.254-0.076 0.383h-0.001v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-3.586l8.293 8.293c0.195 0.195 0.451 0.293 0.707 0.293s0.512-0.098 0.707-0.293c0.391-0.39 0.391-1.024 0-1.414z"/></svg>
));