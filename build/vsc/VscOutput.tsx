import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 0v1.5L21 3v19.5L19.5 24h-15L3 22.5V3l1.5-1.5V0H6v1.5h3V0h1.5v1.5h3V0H15v1.5h3V0h1.5zm-15 22.5h15V3h-15v19.5zM7.5 6h9v1.5h-9V6zm9 6h-9v1.5h9V12zm-9 6h9v1.5h-9V18z"/></svg>
));