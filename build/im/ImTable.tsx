import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#000000" d="M0 3v11h16v-11h-16zM6 10v-2h4v2h-4zM10 11v2h-4v-2h4zM10 5v2h-4v-2h4zM5 5v2h-4v-2h4zM1 8h4v2h-4v-2zM11 8h4v2h-4v-2zM11 7v-2h4v2h-4zM1 11h4v2h-4v-2zM11 13v-2h4v2h-4z"/></svg>
));