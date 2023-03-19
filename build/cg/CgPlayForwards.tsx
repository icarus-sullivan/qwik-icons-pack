import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.0023 17H18.0023V7H21.0023V17Z" fill="currentColor"/>
  <path d="M17.0023 12L10 17V7L17.0023 12Z" fill="currentColor"/>
  <path d="M2 17L9.00232 12L2 7V17Z" fill="currentColor"/></svg>
));