import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M4.75 1.5a3.25 3.25 0 00-.745 6.414A.758.758 0 004 8v8a.81.81 0 00.005.086A3.251 3.251 0 004.75 22.5a3.25 3.25 0 00.745-6.414A.757.757 0 005.5 16V8a.758.758 0 00-.005-.086A3.251 3.251 0 004.75 1.5zM3 4.75a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0zm0 14.5a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0zm13 0a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0zm3.25-1.75a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5z"/><path d="M19.25 6a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zM21 11.25a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0z"/></svg>
));