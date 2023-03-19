import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 7H5V17H2V7Z" fill="currentColor"/>
  <path d="M6 12L13.0023 7.00003V17L6 12Z" fill="currentColor"/>
  <path d="M21.0023 7.00003L14 12L21.0023 17V7.00003Z" fill="currentColor"/></svg>
));