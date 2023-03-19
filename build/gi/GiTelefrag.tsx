import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M256 16c-59.998 0-120 30-120 75 0 30 22.5 45 22.5 75 0 22.5-7.5 22.5-7.5 37.5 0 7.5 24.006 16.002 45 22.5v30h120v-30s45.283-13.978 45-22.5c-.465-13.974-7.5-15-7.5-37.5 0-15 22.82-45.71 22.5-75 0-45-60.002-75-120-75zm-45 90c16.57 0 30 13.433 30 30 0 16.568-13.43 30-30 30s-30-13.432-30-30c0-16.567 13.43-30 30-30zm90 0c16.567 0 30 13.433 30 30 0 16.568-13.432 30-30 30-16.57 0-30-13.432-30-30 0-16.567 13.43-30 30-30zm-45 52.5c7.5 0 22.5 30 22.5 37.5 0 15 0 15-7.5 15h-30c-7.5 0-7.5 0-7.5-15 0-7.5 15-37.5 22.5-37.5zM136 286v45h240v-45H136zm0 75v45h240v-45H136zm-30 75c-15 0-30 15-30 30v30h360v-30c0-15-15-30-30-30H106z"/></svg>
));