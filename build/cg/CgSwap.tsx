import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 13V11.5H10V9.5H16V8L19 10.5L16 13Z" fill="currentColor"/>
  <path d="M8 17V15.5H14V13.5H8V12L5 14.5L8 17Z" fill="currentColor"/></svg>
));