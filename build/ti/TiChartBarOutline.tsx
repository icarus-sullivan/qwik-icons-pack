import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M17 5c-.771 0-1.468.301-2 .779v-1.779c0-1.654-1.346-3-3-3s-3 1.346-3 3v4.779c-.532-.478-1.229-.779-2-.779-1.654 0-3 1.346-3 3v6h16v-9c0-1.654-1.346-3-3-3zm-5-2c.551 0 1 .448 1 1v11h-2v-11c0-.552.449-1 1-1zm-4 12h-2v-4c0-.552.449-1 1-1s1 .448 1 1v4zm10 0h-2v-7c0-.552.449-1 1-1s1 .448 1 1v7zM19 21h-14c-.552 0-1-.447-1-1s.448-1 1-1h14c.552 0 1 .447 1 1s-.448 1-1 1z"/></svg>
));