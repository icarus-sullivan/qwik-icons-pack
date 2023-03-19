import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.946 10.7833L11.2754 12.209L13.4476 12.533C14.8919 12.7485 16 13.9957 16 15.5C16 13.8431 14.6569 12.5 13 12.5H9H8V11.5H9H11C12.6283 11.5 13.9536 10.2028 13.9988 8.58539C13.9743 9.4647 13.5724 10.2488 12.946 10.7833Z" stroke="currentColor" stroke-width="2"/></svg>
));