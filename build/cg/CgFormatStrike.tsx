import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 7H17V5H7V7H11V10H13V7Z" fill="currentColor"/>
  <path d="M11 19V14H13V19H11Z" fill="currentColor"/>
  <path d="M5 13H19V11H5V13Z" fill="currentColor"/></svg>
));