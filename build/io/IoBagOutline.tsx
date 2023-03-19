import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" fill-rule="evenodd" d="M80,176a16,16,0,0,0-16,16V408c0,30.24,25.76,56,56,56H392c30.24,0,56-24.51,56-54.75V192a16,16,0,0,0-16-16Z"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" fill-rule="evenodd" d="M160,176V144a96,96,0,0,1,96-96h0a96,96,0,0,1,96,96v32"/></svg>
));