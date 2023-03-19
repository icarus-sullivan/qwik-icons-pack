import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 3L7 4v8l1 1h6l1-1V4l-1-1H8zm6 9H8V4h6v8zM5 9V5h1V4H4.5l-.5.5v7l.5.5H6v-1H5V9zM2 8V6h1V5H1.5l-.5.5v5l.5.5H3v-1H2V8z"/></svg>
));