import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#000000" d="M13.313 0h-10.625c-1.478 0-2.688 1.209-2.688 2.688v10.625c0 1.478 1.209 2.688 2.688 2.688h10.625c1.478 0 2.688-1.209 2.688-2.688v-10.625c0-1.478-1.209-2.688-2.688-2.688zM8 5c-0.551 0-1 0.449-1 1v4c0 1.654-1.346 3-3 3s-3-1.346-3-3v-2h2v2c0 0.551 0.449 1 1 1s1-0.449 1-1v-4c0-1.654 1.346-3 3-3s3 1.346 3 2.781v0.969l-1.281 0.375-0.719-0.375v-0.969c0-0.333-0.449-0.781-1-0.781zM15 10c0 1.654-1.346 3-3 3s-3-1.346-3-3.219v-1.938l0.719 0.375 1.281-0.375v1.938c0 0.77 0.449 1.219 1 1.219s1-0.449 1-1v-2h2v2z"/></svg>
));