import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#000000" d="M4 6v-6h12v6h-1v-5h-10v5zM16 9v7h-12v-7h1v6h10v-6zM8 7h2v1h-2zM5 7h2v1h-2zM11 7h2v1h-2zM14 7h2v1h-2zM0 4.5l3 3-3 3z"/></svg>
));