import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#000000" d="M14 0h-4l1 9c0 1.657-1.343 3-3 3s-3-1.343-3-3l1-9h-4l-1 9c0 3.866 3.134 7 7 7s7-3.134 7-7l-1-9zM12.154 13.154c-1.11 1.11-2.585 1.721-4.154 1.721s-3.045-0.611-4.154-1.721c-1.096-1.096-1.705-2.548-1.72-4.095l0.564-5.075h1.736l-0.55 4.953v0.062c0 1.102 0.429 2.138 1.208 2.917s1.815 1.208 2.917 1.208 2.138-0.429 2.917-1.208c0.779-0.779 1.208-1.815 1.208-2.917v-0.062l-0.007-0.062-0.543-4.891h1.736l0.564 5.075c-0.015 1.547-0.625 2.999-1.72 4.095z"/></svg>
));