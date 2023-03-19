import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7H9V9H7V7Z" fill="currentColor"/>
  <path d="M11 7H13V9H11V7Z" fill="currentColor"/>
  <path d="M17 7H15V9H17V7Z" fill="currentColor"/>
  <path d="M7 11H9V13H7V11Z" fill="currentColor"/>
  <path d="M13 11H11V13H13V11Z" fill="currentColor"/>
  <path d="M15 11H17V13H15V11Z" fill="currentColor"/>
  <path d="M9 15H7V17H9V15Z" fill="currentColor"/>
  <path d="M11 15H13V17H11V15Z" fill="currentColor"/>
  <path d="M17 15H15V17H17V15Z" fill="currentColor"/></svg>
));