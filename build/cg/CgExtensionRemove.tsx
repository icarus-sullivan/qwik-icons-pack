import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 11V5H4V19H18V11H12ZM6 7H10V11H6V7ZM10 13V17H6V13H10ZM16 13V17H12V13H16Z" fill="currentColor"/>
  <path d="M20 7H14V9H20V7Z" fill="currentColor"/></svg>
));