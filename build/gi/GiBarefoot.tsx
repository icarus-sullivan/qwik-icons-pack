import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M44.156 19.47c40.24 103.666 45.06 254.208 5.22 367.28-28.324 80.378 9.553 105.938 66.25 105.938l31.374.28c63.568-40.225 127.15-23.413 190.72 1.813l110.78 1.033c77.705 0 54.114-80.826-18.594-69.125L278.53 349.5C212.117 277.39 222.04 85.354 241.407 20l-197.25-.53z"/></svg>
));