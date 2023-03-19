import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M30.875 36.063L88.25 300.625 202.406 400.97l24.688-76.814L30.874 36.062zm102 42.343L333.72 198.344l96.374 2.375-46.78-68.345-250.44-53.97zm3.5 42.28l202 284.595 149.5 78.626L440.78 365.78 136.376 120.69z"/></svg>
));