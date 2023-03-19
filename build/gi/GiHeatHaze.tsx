import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M328.094 16.28c-418.547 189.59 58.108 230.146-86.313 473.533C566.646 247.035 59.723 256.837 328.095 16.28zm10.844 32.44C154.714 186.1 475.226 253.64 369.717 409.06 561.48 253.028 248.215 203.768 338.94 48.72zM141 102.25c-174.244 135.025 104.332 215.754 61.063 367C307.03 285.77 42.887 268.31 141 102.25z"/></svg>
));