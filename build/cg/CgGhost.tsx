import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 4H15V8H3V4Z" fill="currentColor"/>
  <path d="M21 8H17V4H21V8Z" fill="currentColor"/>
  <path d="M3 10H21V14H3V10Z" fill="currentColor"/>
  <path d="M11 16H3V20H11V16Z" fill="currentColor"/>
  <path d="M13 16V20H21V16H13Z" fill="currentColor"/></svg>
));