import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7H4V5H20V7Z" fill="currentColor"/>
  <path d="M20 11H12V9H20V11Z" fill="currentColor"/>
  <path d="M12 15H20V13H12V15Z" fill="currentColor"/>
  <path d="M9 9L4 12L9 15V9Z" fill="currentColor"/>
  <path d="M4 17V19H20V17H4Z" fill="currentColor"/></svg>
));