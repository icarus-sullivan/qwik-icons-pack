import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M416.62 213.555l-282.14-28.67 6.78-66.7 282.14 28.67zM79.38 492.185h353.24s-72.39-55.05-177-55.05c-52.38 0-112.77 13.76-176.24 55.05zm205.27-69.68l20.16-204.23-66.66-6.77-20.92 212a313.48 313.48 0 0 1 38.35-2.36c9.99-.01 19.69.48 29.07 1.36zm39.1-396.11l-66.68-6.58-9.2 93.17 66.66 6.77z"/></svg>
));