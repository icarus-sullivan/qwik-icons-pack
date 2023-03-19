import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M486 371.316V142.75a399.056 399.056 0 0 1-185.685 69.28 399.135 399.135 0 0 1 70.973-186.002H142.72A399.056 399.056 0 0 1 212 211.714 399.135 399.135 0 0 1 26 140.74V369.31a399.056 399.056 0 0 1 185.685-69.28 399.135 399.135 0 0 1-70.973 185.944H369.28A399.056 399.056 0 0 1 300 300.342a399.135 399.135 0 0 1 186 70.974z"/></svg>
));