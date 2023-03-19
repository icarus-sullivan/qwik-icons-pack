import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M256 22.127L238.562 57h34.875L256 22.127zM233 75v268h46V75h-46zm-16 286v14h78v-14h-78zm-17.193 32l-13.43 94h139.246l-13.428-94H199.807z"/></svg>
));