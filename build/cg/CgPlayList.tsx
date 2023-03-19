import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 5H4V7H16V5Z" fill="currentColor"/>
  <path d="M16 9H4V11H16V9Z" fill="currentColor"/>
  <path d="M4 13H12V15H4V13Z" fill="currentColor"/>
  <path d="M20 16L14 13V19L20 16Z" fill="currentColor"/></svg>
));