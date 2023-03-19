import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M11.97 6.97a.75.75 0 000 1.06l2.47 2.47-2.47 2.47a.75.75 0 101.06 1.06l3-3a.75.75 0 000-1.06l-3-3a.75.75 0 00-1.06 0zM9.03 8.03a.75.75 0 00-1.06-1.06l-3 3a.75.75 0 000 1.06l3 3a.75.75 0 001.06-1.06L6.56 10.5l2.47-2.47z"/><path fill-rule="evenodd" d="M10.5 0C4.701 0 0 4.701 0 10.5S4.701 21 10.5 21c2.63 0 5.033-.967 6.875-2.564l4.345 4.344a.75.75 0 101.06-1.06l-4.344-4.345A10.459 10.459 0 0021 10.5C21 4.701 16.299 0 10.5 0zm-9 10.5a9 9 0 1118 0 9 9 0 01-18 0z"/></svg>
));