import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em"><title>Alfred</title><path d="m0 15.902c0-1.142 1.133-2.184 3-2.977v-1.827c0-4.142 4.029-7.5 9-7.5s9 3.358 9 7.5v1.827c1.867.793 3 1.835 3 2.977 0 2.485-5.373 4.5-12 4.5s-12-2.015-12-4.5z"/></svg>
));