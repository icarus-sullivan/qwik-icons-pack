import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 17L14 12L6 7V17Z" fill="currentColor"/>
  <path d="M18 7H15V12V17H18V7Z" fill="currentColor"/></svg>
));