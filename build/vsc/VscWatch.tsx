import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 9h2V8H8V5.5H7v3l.5.5z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 3.669A4.998 4.998 0 0 0 3 8a4.998 4.998 0 0 0 2.5 4.331V14.5l.5.5h4l.5-.5v-2.169A4.998 4.998 0 0 0 13 8a4.998 4.998 0 0 0-2.5-4.331V1.5L10 1H6l-.5.5v2.169zM12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/></svg>
));