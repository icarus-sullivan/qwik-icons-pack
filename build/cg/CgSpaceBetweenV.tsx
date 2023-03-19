import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5V9H19V5H17V7H7V5H5Z" fill="currentColor"/>
  <path d="M5 19V15H19V19H17V17H7V19H5Z" fill="currentColor"/>
  <path d="M7 11H17V13H7V11Z" fill="currentColor"/></svg>
));