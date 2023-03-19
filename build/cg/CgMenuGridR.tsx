import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4H8V8H4V4Z" fill="currentColor"/>
  <path d="M4 10H8V14H4V10Z" fill="currentColor"/>
  <path d="M8 16H4V20H8V16Z" fill="currentColor"/>
  <path d="M10 4H14V8H10V4Z" fill="currentColor"/>
  <path d="M14 10H10V14H14V10Z" fill="currentColor"/>
  <path d="M10 16H14V20H10V16Z" fill="currentColor"/>
  <path d="M20 4H16V8H20V4Z" fill="currentColor"/>
  <path d="M16 10H20V14H16V10Z" fill="currentColor"/>
  <path d="M20 16H16V20H20V16Z" fill="currentColor"/></svg>
));