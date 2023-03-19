import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M376 76c30 60-120 30-210 75 150 0 270 15 270 105S316 361 166 361c90 45 240 15 210 75 90-15 120-120 120-180S466 91 376 76zm-95.625 105.938C216.005 182.577 127.562 203.5 16 256c255 120 390 75 390 0 0-42.188-42.865-74.886-125.625-74.063z"/></svg>
));