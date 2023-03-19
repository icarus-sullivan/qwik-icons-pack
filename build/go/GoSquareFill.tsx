import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7.75 6A1.75 1.75 0 006 7.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0018 16.25v-8.5A1.75 1.75 0 0016.25 6h-8.5z"/></svg>
));