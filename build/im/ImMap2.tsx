import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#000000" d="M10.5 3l-5-2-5.5 2v12l5.5-2 5 2 5.5-2v-12l-5.5 2zM6 2.277l4 1.6v9.846l-4-1.6v-9.846zM1 3.7l4-1.455v9.872l-4 1.454v-9.872zM15 12.3l-4 1.455v-9.872l4-1.455v9.872z"/></svg>
));