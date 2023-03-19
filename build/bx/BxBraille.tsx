import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><circle cx="4" cy="7" r="2"/><circle cx="9" cy="12" r="2"/><circle cx="15" cy="7" r="2"/><circle cx="15" cy="12" r="2"/><circle cx="15" cy="17" r="2"/><circle cx="20" cy="7" r="2"/><circle cx="4" cy="17" r="2"/></svg>
));