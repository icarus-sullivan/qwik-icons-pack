import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 2H12v12h1.5V2zm-4.936.39L9.75 3v10l-1.186.61-7-5V7.39l7-5zM3.29 8l4.96 3.543V4.457L3.29 8z"/></svg>
));