import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 10L3 18H13L8 10Z" fill="currentColor"/>
  <path d="M10.5286 10.7543L13.5 6L21 18H15.0572L10.5286 10.7543Z" fill="currentColor"/></svg>
));