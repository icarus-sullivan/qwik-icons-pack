import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M160 85c-3.1 0-9.2 3.86-14.2 11.74-3.4 5.26-6 11.86-7.5 18.26h168l22.5 62H128c-3.5 0-9.8 3.7-14.8 10.4-2.7 3.5-4.8 7.7-6.2 11.6h297.2c-1.6-3.3-3.9-6.8-6.8-9.9-5.9-6.3-13.5-10.1-17.4-10.1h-5.5l-48-94H160zm-48 132c-28.25 0-49.54 17.5-64.51 40-12.09 18.2-19.31 39.6-21.65 54H486.2c-2.4-14.4-9.6-35.8-21.7-54-15-22.5-36.3-40-64.5-40H112zM25 329v46h462v-46H25zm.84 64c2.34 14.4 9.56 35.8 21.65 54 14.97 22.5 36.26 40 64.51 40h288c28.2 0 49.5-17.5 64.5-40 12.1-18.2 19.3-39.6 21.7-54H25.84z"/></svg>
));