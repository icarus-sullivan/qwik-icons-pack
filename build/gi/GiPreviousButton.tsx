import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M427.6 106c15.6.1 27.7 13.8 25.7 29.3-16 124-16 117.4 0 241.4 2.5 19.8-17.4 35-35.8 27.3l-267-111.1v98.8c0 7.9-8.9 14.2-20 14.3H78.49c-11.1-.1-20-6.4-20-14.3V120.2c.1-7.8 9-14.1 20-14.2h52.01c11 .1 19.9 6.4 20 14.2v98.9l267-111.1c3.2-1.3 6.6-2 10.1-2z"/></svg>
));