import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M1.527 13.237a1.75 1.75 0 010-2.474l9.272-9.273a1.75 1.75 0 012.475 0l9.272 9.273a1.75 1.75 0 010 2.474l-9.272 9.272a1.75 1.75 0 01-2.475 0l-9.272-9.272zm1.06-1.414a.25.25 0 000 .354l9.273 9.272a.25.25 0 00.353 0l9.272-9.272a.25.25 0 000-.354l-9.272-9.272a.25.25 0 00-.353 0l-9.273 9.272z"/></svg>
));