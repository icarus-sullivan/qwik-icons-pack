import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M128 37l32-6c16 112 32 150 96 150s80-38 96-150l32 6s-16 160 32 208c0 96 0 112 16 224-112 16-240 16-352 0 16-112 16-128 16-224 48-48 32-208 32-208z"/></svg>
));