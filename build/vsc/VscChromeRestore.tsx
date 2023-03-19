import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M3 5v9h9V5H3zm8 8H4V6h7v7z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5 5h1V4h7v7h-1v1h2V3H5v2z"/></svg>
));