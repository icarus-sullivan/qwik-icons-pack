import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M256 16C123.45 16 16 123.45 16 256s107.45 240 240 240 240-107.45 240-240S388.55 16 256 16zm0 60c99.41 0 180 80.59 180 180s-80.59 180-180 180S76 355.41 76 256 156.59 76 256 76zM121.937 182.375A67.5 62.31 0 0 0 106 222.688a67.5 62.309 0 0 0 131.72 20.156 135 69.23 0 0 1-115.782-60.47zm268.125 0a135 69.23 0 0 1-115.78 60.47A67.5 62.31 0 0 0 406 222.687a67.5 62.309 0 0 0-15.938-40.313z"/></svg>
));