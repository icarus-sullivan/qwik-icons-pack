import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M208 57c-16.3 0-31 16.54-31 39 0 22.5 14.7 39 31 39s31-16.5 31-39c0-22.46-14.7-39-31-39zm147.7 48L99.73 361H25v110h131.3l256-256H487V105H355.7zm-169.5 42.1c-1.4 2.3-2.7 4.8-4 7.5-7.9 17.1-13.2 41.8-13.2 69.2 0 13.8 1.4 27 3.7 38.8l71.7-71.7c-2.3-14-6-26.4-10.6-36.3-1.3-2.7-2.6-5.2-4-7.5-6.5 3.8-13.9 5.9-21.8 5.9s-15.3-2.1-21.8-5.9z"/></svg>
));