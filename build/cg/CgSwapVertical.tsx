import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 16H13.5L13.5 10H15.5L15.5 16H17L14.5 19L12 16Z" fill="currentColor"/>
  <path d="M8 8H9.5L9.5 14H11.5L11.5 8H13L10.5 5L8 8Z" fill="currentColor"/></svg>
));