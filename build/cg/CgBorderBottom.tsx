import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 8H16V15H19V5H5V15H8V8Z" fill="currentColor" fill-opacity="0.3"/>
  <path d="M5 17H19V20H5V17Z" fill="currentColor"/></svg>
));