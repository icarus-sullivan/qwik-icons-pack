import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#000000" d="M13.893 2.809c0.118-0.151 0.14-0.355 0.057-0.527s-0.258-0.281-0.45-0.281h-11c-0.191 0-0.366 0.109-0.45 0.281s-0.062 0.377 0.057 0.527l4.893 6.228v5.963h-1.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-1.5v-5.963l4.893-6.228zM12.471 3l-1.571 2h-5.8l-1.571-2h8.943z"/></svg>
));