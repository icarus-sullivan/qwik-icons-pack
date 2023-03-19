import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><circle fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="48" cx="256" cy="256" r="200"/><line stroke="#000" stroke-miterlimit="10" stroke-width="48" x1="114.58" y1="114.58" x2="397.42" y2="397.42"/></svg>
));