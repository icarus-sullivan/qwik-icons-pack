import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1em" viewBox="0 0 24 24" width="1em"><rect fill="none" height="24" width="24"/><path d="M22,22H2v-2h20V22z M10,2H7v16h3V2z M17,8h-3v10h3V8z"/></svg>
));