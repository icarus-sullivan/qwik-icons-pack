import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14 3v1H2V3h12zm-1 3v1H6V6h7zm0 3v1H5V9h8zm0 3v1H5v-1h8z"/><path d="M5 4h1v9H5z"/></svg>
));