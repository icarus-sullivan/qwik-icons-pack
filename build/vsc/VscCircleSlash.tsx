import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1a7 7 0 1 1-7 7 7.008 7.008 0 0 1 7-7zM2 8c0 1.418.504 2.79 1.423 3.87l8.447-8.447A5.993 5.993 0 0 0 2 8zm12 0c0-1.418-.504-2.79-1.423-3.87L4.13 12.577A5.993 5.993 0 0 0 14 8z"/></svg>
));