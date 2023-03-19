import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M90.01 41l46.09 452h239.8L422 41zM142 62.04l112.5 18.29-3.9 24.17 104.2-21.92 7.7 36.42H394l-33.9 354H151.9L119 128.9l-1-9.9h14.7l7.8-48.07zm14.8 20.66l-12.5 77 77.1 12.5 12.5-76.99zm184 21.2L264.6 120l16 76.2 76.3-16zM219.5 242.6l-36.7 68.6 68.8 36.8 36.7-68.6z"/></svg>
));