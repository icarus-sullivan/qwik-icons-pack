import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#000000" d="M2 4h2v3h1v-6c0-0.55-0.45-1-1-1h-2c-0.55 0-1 0.45-1 1v6h1v-3zM2 1h2v2h-2v-2zM15 1v-1h-3c-0.55 0-1 0.45-1 1v5c0 0.55 0.45 1 1 1h3v-1h-3v-5h3zM10 2.5v-1.5c0-0.55-0.45-1-1-1h-3v7h3c0.55 0 1-0.45 1-1v-1.5c0-0.55-0.137-1-0.688-1 0.55 0 0.688-0.45 0.688-1zM9 6h-2v-2h2v2zM9 3h-2v-2h2v2zM13 9l-6.5 7-3.5-4.5 1.281-1.094 2.219 2.313 5.5-4.719z"/></svg>
));