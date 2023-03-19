import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M256 24c-96 0-160 80-160 160 0 192 80 304 160 304s160-112 160-304c0-80-64-160-160-160zM128 168c7.8 32 35 91.9 96 128l-48 48c-67.7-41.1-64-144-48-176zm256 0c16 32 19.7 134.9-48 176l-48-48c61-36.1 88.2-96 96-128z"/></svg>
));