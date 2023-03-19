import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14V20H10V18H6V14H4Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9V15H15V9H9ZM13 11H11V13H13V11Z" fill="currentColor"/>
  <path d="M4 10V4H10V6H6V10H4Z" fill="currentColor"/>
  <path d="M20 10V4H14V6H18V10H20Z" fill="currentColor"/>
  <path d="M20 14V20H14V18H18V14H20Z" fill="currentColor"/></svg>
));