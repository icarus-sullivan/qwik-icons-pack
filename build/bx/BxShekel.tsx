import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M13 8v8h2V8c0-2.206-1.794-4-4-4H5v16h2V6h4c1.103 0 2 .897 2 2z"/><path d="M17 16c0 1.103-.897 2-2 2h-4V8H9v12h6c2.206 0 4-1.794 4-4V4h-2v12z"/></svg>
));