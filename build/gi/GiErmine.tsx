import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M256 24l-32 64 32 48 32-48-32-64zm-64 96l-64 32 64 32 48-32-48-32zm128 0l-48 32 48 32 64-32-64-32zm-64 32c-32 128-64 192-128 256 16 0 48 0 64-16 0 16-16 48-32 64 16 0 48 0 64-16 16 16 16 16 32 48 16-32 16-32 32-48 16.847 12.064 48 16 64 16-16-16-32-48-32-64 16 16 48 16 64 16-64-64-96-128-128-256z"/></svg>
));