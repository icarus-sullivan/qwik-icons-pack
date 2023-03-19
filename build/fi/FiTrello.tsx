import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
  <rect x="7" y="7" width="3" height="9"/>
  <rect x="14" y="7" width="3" height="5"/></svg>
));