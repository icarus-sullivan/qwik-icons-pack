import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M18 27v467h476V304h-46v64h-80v-64h-64v64h-80v-64h-64v64H80V192h48L18 27zm97 373h18v64h-18v-64zm144 0h18v64h-18v-64zm144 0h18v64h-18v-64z"/></svg>
));