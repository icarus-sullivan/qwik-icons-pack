import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#000000" d="M15 0l-7 2-7-2c0 0-0.070 0.808 0 2l7 2.189 7-2.189c0.070-1.192 0-2 0-2zM1.128 3.049c0.375 3.917 1.773 10.504 6.872 12.951 5.099-2.448 6.497-9.034 6.872-12.951l-6.872 2.584-6.872-2.584z"/></svg>
));