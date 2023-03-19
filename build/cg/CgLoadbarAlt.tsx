import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.3" x="3" y="10" width="18" height="4" rx="2" fill="currentColor"/>
  <rect x="7" y="10" width="10" height="4" rx="2" fill="currentColor"/></svg>
));