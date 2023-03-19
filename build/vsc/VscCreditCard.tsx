import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 5v1H2V5h12zM2 7h12v5H2V7zm12-3H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-3 6h2v1h-2v-1z"/></svg>
));