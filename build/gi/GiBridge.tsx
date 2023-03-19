import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M255.063 18.25L209.97 140c-49.033 13.39-90.27 48.118-114.876 94.594h-56.25v93.125h112.5c3.17-59.343 48.313-106.44 103.72-106.44 55.404 0 100.547 47.1 103.717 106.44h112.5v-93.126h-56.25c-24.6-46.47-65.85-81.2-114.874-94.594L255.063 18.25zM38.843 344.313v150.25H151.47v-150.25H38.843zm319.813 0v150.25H471.28v-150.25H358.657z"/></svg>
));