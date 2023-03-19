import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M136 16h15l15 15 15-15h150l15 15 15-15h15v120h-15l-15-15-15 15h-45v345c0 15-15 15-15 15h-30s-15 0-15-15V136h-45l-15-15-15 15h-15z"/></svg>
));