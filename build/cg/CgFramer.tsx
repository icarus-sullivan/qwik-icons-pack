import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21L12 9L6 9L6 15L12 21Z" fill="currentColor" fill-opacity="0.5"/>
  <path d="M18 9V3H6L12 9H6V15H18L12 9H18Z" fill="currentColor"/></svg>
));