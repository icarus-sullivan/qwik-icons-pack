import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M90.139 122.533c-11.594 0-23 12.8-23 31s11.406 31 23 31c11.593 0 23-12.8 23-31s-11.407-31-23-31zm103.95 2.975c-19.909 29.9-44.89 49.149-71.333 57.77-7.307 11.535-18.868 19.255-32.617 19.255-13.75 0-25.311-7.72-32.618-19.256-18.893 4.527-28.056 67.85-34.212 102.391l17.382 4.664 13.928-51.893 11.854 154.094h14.666v-103h18v103h14.666L128 208c30.818-17.632 67.095-44.257 82.188-74.441l-16.098-8.051zM169 313v96H25v78h462v-30H343V313H169z"/></svg>
));