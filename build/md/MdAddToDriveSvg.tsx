import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1em" viewBox="0 0 24 24" width="1em"><rect fill="none" height="24" width="24"/><path d="M20,21v-3h3v-2h-3v-3h-2v3h-3v2h3v3H20z M15.03,21.5H5.66c-0.72,0-1.38-0.38-1.73-1L1.57,16.4c-0.36-0.62-0.35-1.38,0.01-2 L7.92,3.49C8.28,2.88,8.94,2.5,9.65,2.5h4.7c0.71,0,1.37,0.38,1.73,0.99l4.48,7.71C20.06,11.07,19.54,11,19,11 c-0.28,0-0.56,0.02-0.84,0.06L14.35,4.5h-4.7L3.31,15.41l2.35,4.09h7.89C13.9,20.27,14.4,20.95,15.03,21.5z M13.34,15 C13.12,15.63,13,16.3,13,17H7.25l-0.73-1.27l4.58-7.98h1.8l2.53,4.42c-0.56,0.42-1.05,0.93-1.44,1.51l-2-3.49L9.25,15H13.34z"/></svg>
));