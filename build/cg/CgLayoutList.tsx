import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 7H7V9H9V7Z" fill="currentColor"/>
  <path d="M7 13V11H9V13H7Z" fill="currentColor"/>
  <path d="M7 15V17H9V15H7Z" fill="currentColor"/>
  <path d="M11 15V17H17V15H11Z" fill="currentColor"/>
  <path d="M17 13V11H11V13H17Z" fill="currentColor"/>
  <path d="M17 7V9H11V7H17Z" fill="currentColor"/></svg>
));