import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M32 144l48 64 64-32-16 304c64 16 192 16 256 0l-16-304 64 32 48-64-112-96-48-16c-16 64-112 64-128 0l-48 16z"/></svg>
));