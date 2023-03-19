import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.9641 7H10.9641V9H18.9641V7Z" fill="currentColor"/>
  <path d="M6 8.82864V15.1714L9.9642 12L6 8.82864Z" fill="currentColor"/>
  <path d="M18.9641 11H10.9641V13H18.9641V11Z" fill="currentColor"/>
  <path d="M10.9641 15H18.9641V17H10.9641V15Z" fill="currentColor"/></svg>
));