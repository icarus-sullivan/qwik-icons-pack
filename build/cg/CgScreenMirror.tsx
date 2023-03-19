import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 8H19V14H16V16H21V6H3V16H8V14H5V8Z" fill="currentColor"/>
  <path d="M16.3301 19L12 13L7.66987 19H16.3301Z" fill="currentColor"/></svg>
));