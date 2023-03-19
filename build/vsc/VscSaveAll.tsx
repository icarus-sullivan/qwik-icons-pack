import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.85 2.65l-1.5-1.5L13 1H4.48l-.5.5V4H1.5l-.5.5v10l.5.5h10l.5-.5V12h2.5l.5-.5V3l-.15-.35zM11 14H2V5h1v3.07h6V5h.79L11 6.21V14zM6 7V5h2v2H6zm8 4h-2V6l-.15-.35-1.5-1.5L10 4H5V2h7.81l1.21 1.21L14 11z"/></svg>
));