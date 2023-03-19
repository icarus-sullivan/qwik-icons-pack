import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M136 16v30h240V16H136zm0 60v60h240V76H136zm0 90v90h240v-90H136zm0 120v120h240V286H136zm-30 150c-15 0-30 15-30 30v30h360v-30c0-15-15-30-30-30H106z"/></svg>
));