import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M184 43.5v18h144l-.1-18zm24 95.9l-144 .1v18l144-.1zm96.1 0v18l143.9.1v-18.1zm168.4 98.1l-435.63.1L128 372.5l10.9-32 21.1 80 32-52.5 48 128 80-107.5 32 16z"/></svg>
));