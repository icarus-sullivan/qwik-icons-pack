import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path d="M3 5a5 5 0 0 1 10 0v6a5 5 0 0 1-10 0V5zm5.5-1.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2z"/></svg>
));