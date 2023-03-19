import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M224 32c9.036 24.71 106.984 58.72 156.096 64-37.096 7.89-53.042 10.52-57.545 32-13.076 62.384 191.477 60.478 115.73 152.223 69.11-15.788 57.922-116.197 15.887-129.84-27.237-8.84-63.75-11.67-47.75-38.383C425.962 88.104 503.57 59.74 448 32zM28.096 292v64h87v-64zm105 0v64h274v-64zm292 0v64h16v-64zm34 0v64h17v-64z"/></svg>
));