import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.414 1.56L8.312 1h3.294l.818 1.575L10.236 6h1.781l.72 1.695L5.618 15l-1.602-1.163L6.119 10H4.898L4 8.56l3.414-7zM7.78 9L4.9 14.305 12.018 7H8.312l3.294-5H8.312L4.898 9H7.78z"/></svg>
));