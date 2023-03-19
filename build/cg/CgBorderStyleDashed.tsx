import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 11H8V13H4V11Z" fill="currentColor"/>
  <path d="M10 11H14V13H10V11Z" fill="currentColor"/>
  <path d="M20 11H16V13H20V11Z" fill="currentColor"/></svg>
));