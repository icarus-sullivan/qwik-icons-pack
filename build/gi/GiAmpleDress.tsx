import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M288 16l32 16s-25.2 44.02-16 64c5 10.8 32 16 32 16-16 32-32 80-32 96 80 48 80 144 160 176 0 64-80 112-208 112S48 448 48 384c80-32 80-128 160-176 0-16-16-64-32-96 0 0 27-5.2 32-16 9.2-19.98-16-64-16-64l32-16c0 32 16 48 32 48s32-16 32-48z"/></svg>
));