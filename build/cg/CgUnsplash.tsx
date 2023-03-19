import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 4.5H9V8.5H15V4.5Z" fill="currentColor"/>
  <path d="M4 10.5H9V14.5H15V10.5H20V19.5H4V10.5Z" fill="currentColor"/></svg>
));