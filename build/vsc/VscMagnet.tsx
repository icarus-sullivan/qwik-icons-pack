import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.5c-3.9 0-7 3.1-7 7v5l1 1h3l1-1v-5c0-1.1.9-2 2-2s2 .9 2 2v5l1 1h3l1-1v-5c0-3.9-3.1-7-7-7zm-3 12H2v-3h3v3zm9 0h-3v-3h3v3zm-3-4v-1c0-1.7-1.3-3-3-3-1.6 0-2.9 1.3-3 2.8v1.2H2v-1c0-3.3 2.7-6 6-6s6 2.7 6 6v1h-3z"/></svg>
));