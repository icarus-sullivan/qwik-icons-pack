import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><circle cx="12" cy="6" r="2"/><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="6" cy="12" r="2"/><circle cx="18" cy="12" r="2"/><circle cx="12" cy="18" r="2"/></svg>
));