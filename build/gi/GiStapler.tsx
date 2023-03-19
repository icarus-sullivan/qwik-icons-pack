import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M476.5 195.8 52.59 216.6l-6.56 28.7H186l2.2 15.3h298.1zM41.78 271l-20.77 92.6 6.56 27.6H486.6l4.4-27.6-311.4-2.2L161 271zm150.72 8.1 7.1 41h269.5v-41zM427 295h26.4c3.8 0 6.8 3 6.8 6.9 0 3.6-3 6.7-6.8 6.7H427c-3.9 0-6.9-3.1-6.9-6.7 0-3.9 3-6.9 6.9-6.9z"/></svg>
));