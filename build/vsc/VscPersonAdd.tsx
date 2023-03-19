import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 10h-1v2h-2v1h2v2h1v-2h2v-1h-2v-2zM8.556 2.169a1 1 0 1 0-1.112 1.663 1 1 0 0 0 1.112-1.663zm-1.667-.832A2 2 0 1 1 9.11 4.663a2 2 0 0 1-2.22-3.326zM6.77 5.49h2.46A1.77 1.77 0 0 1 11 7.26V8h-1v-.74a.76.76 0 0 0-.77-.77H6.77a.76.76 0 0 0-.77.77V10h1v3.31a.2.2 0 0 0 .2.2H8v1.02h-.8a1.2 1.2 0 0 1-1.2-1.2V11a1.06 1.06 0 0 1-1-1.1V7.26a1.77 1.77 0 0 1 1.77-1.77z"/></svg>
));