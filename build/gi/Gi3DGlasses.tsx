import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M176 80L39.36 247h77.74L176 144l32 48v-48l-32-64zm160 0l-32 64v48l32-48 58.9 103h77.7L336 80zM25 265v174h194.2l36.8-55.2 36.8 55.2H487V265H25zm23 23h176v64l-32 64H48V288zm240 0h176v128H320l-32-64v-64z"/></svg>
));