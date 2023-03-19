import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 10H17V16H13V10Z" fill="currentColor" fill-opacity="0.5"/>
  <path d="M11 4H7V16H11V4Z" fill="currentColor"/>
  <path d="M18 18H6V20H18V18Z" fill="currentColor"/></svg>
));