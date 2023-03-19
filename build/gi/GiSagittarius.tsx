import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M267.934 459.625l-80.013-80.08-100.315 100.12-57.517-57.516 100.25-100.252c-60.47-60.56-77.15-77.326-79.827-80.078l57.52-57.522 79.95 79.952 128.03-128.028C178.14 101.764 209.1 109.4 204.28 108.128L223.96 29.2l203.814 50.813L477.8 283.637l-79.192 19.745-26.762-107.595-126.212 126.106 80.02 80.018-57.72 57.715z"/></svg>
));