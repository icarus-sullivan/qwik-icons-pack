import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 5H14V7H2V5Z" fill="currentColor"/>
  <path d="M2 9H14V11H2V9Z" fill="currentColor"/>
  <path d="M10 13H2V15H10V13Z" fill="currentColor"/>
  <path d="M16 9H18V13H22V15H18V19H16V15H12V13H16V9Z" fill="currentColor"/></svg>
));