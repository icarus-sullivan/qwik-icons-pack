import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em"><title>Scrimba</title><path d="M24 6.222a2.222 2.222 0 01-2.222 2.222h-8.89a2.222 2.222 0 010-4.444h8.89C23.005 4 24 4.995 24 6.222zm-7.333 9.334h-8.89a2.222 2.222 0 000 4.444h8.89a2.222 2.222 0 000-4.444zm0-5.778H13.11a2.222 2.222 0 000 4.444h3.556a2.222 2.222 0 000-4.444zM2.222 15.556a2.222 2.222 0 100 4.444 2.222 2.222 0 000-4.444z"/></svg>
));