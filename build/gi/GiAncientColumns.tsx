import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M57 39v16h110V39H57zm32 34v318h46V73H89zm334 21.56l-46 23.04V391h46V94.56zM254.2 187L233 197.6V391h46V211.7L254.2 187zM73 409v30h78v-30H73zm144 0v30h78v-30h-78zm144 0v30h78v-30h-78zM38.49 457l-10 30H483.5l-10-30H38.49z"/></svg>
));