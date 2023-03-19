import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/></svg>
));