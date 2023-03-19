import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 16V8H15V5L5 5L5 19H15L15 16H8Z" fill="currentColor" fill-opacity="0.3"/>
  <path d="M17 19L17 5L20 5L20 19H17Z" fill="currentColor"/></svg>
));