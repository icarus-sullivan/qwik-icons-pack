import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 11H15V13H9V11Z" stroke="currentColor" stroke-opacity="0.5" stroke-width="2"/>
  <path d="M19 7H5V5H19V7Z" fill="currentColor"/>
  <path d="M19 19H5V17H19V19Z" fill="currentColor"/></svg>
));