import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M15.03 8.28a.75.75 0 00-1.06-1.06l-5.22 5.22-2.22-2.22a.75.75 0 10-1.06 1.06l2.75 2.75a.75.75 0 001.06 0l5.75-5.75z"/><path fill-rule="evenodd" d="M0 10.5C0 4.701 4.701 0 10.5 0S21 4.701 21 10.5c0 2.63-.967 5.033-2.564 6.875l4.344 4.345a.75.75 0 11-1.06 1.06l-4.345-4.344A10.459 10.459 0 0110.5 21C4.701 21 0 16.299 0 10.5zm10.5-9a9 9 0 100 18 9 9 0 000-18z"/></svg>
));