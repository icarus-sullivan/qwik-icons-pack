import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 6h8v1H4V6zm8 3H4v1h8V9z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M1 4l1-1h12l1 1v8l-1 1H2l-1-1V4zm1 0v8h12V4H2z"/></svg>
));