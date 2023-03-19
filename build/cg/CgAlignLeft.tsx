import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 13H14V17H8V13Z" fill="currentColor" fill-opacity="0.5"/>
  <path d="M6 6H4V18H6V6Z" fill="currentColor"/>
  <path d="M20 7H8V11H20V7Z" fill="currentColor"/></svg>
));