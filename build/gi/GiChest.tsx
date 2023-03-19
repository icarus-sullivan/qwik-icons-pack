import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M58.553 89L42.27 211.8H79V89H58.553zM97 89v122.8h38V89H97zm56 0v122.8h56.666v-17.6h92.668v17.6H359V89H153zm224 0v122.8h38V89h-38zm56 0v122.8h36.73L453.446 89H433zM227.666 212.2v105.2h56.668V212.2h-56.668zM256 223.794a18.667 16.103 0 0 1 18.666 16.1 18.667 16.103 0 0 1-9.666 14.09v37.214h-18V254a18.667 16.103 0 0 1-9.666-14.106 18.667 16.103 0 0 1 18.666-16.1zM41 229.8v127.915l19.334 18.23V229.8H41zm37.334 0v158h355.332v-158H302.334v105.6h-92.668V229.8H78.334zm373.332 0v146.145L471 357.715V229.8h-19.334zM41 382.456V423h43.002L41 382.455zm430 0L427.998 423H471v-40.545zM92 405.8l18.24 17.2h291.52L420 405.8H92z"/></svg>
));