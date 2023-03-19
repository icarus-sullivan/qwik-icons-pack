import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M320.94 24.86v55.654l45.31 58.49v66.27l41.24-64.038L320.94 24.86zm-56.706 16.263l-76.77 94.758 87.09 27.778 64.58-29.146-24.81-32.024-50.09-61.365zm-143.074 88.5l-82.674 96.035 82.674 26.858V129.623zm226.403 21.588l-62.307 28.122v238.334l62.176-28.875V234.5l.13-.203V151.21zm-165.907 2.436v237.258l84.912 27.766V180.73l-84.912-27.084zM44.85 247.376l76.31 102.368v-77.58l-76.31-24.79zm331.31 4.413v154.415l82.752-13.533L376.16 251.79zm73.412 161.347L376.16 425.14v46.768l73.412-58.77zm-256.267 1.238l70.93 79.78 70.738-78.973-57.516 26.713-84.152-27.52z"/></svg>
));