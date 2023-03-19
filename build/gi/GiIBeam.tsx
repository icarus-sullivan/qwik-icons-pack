import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M39.557 19L323.44 273h149.003L188.56 19H39.558zM25 30.13v25.847L311 311.87V286.024L25 30.13zm64 107.263v34.584L375 427.87v-84.843l-64-13.002L89 137.393zM77.555 185.89l-42.9 10.723 287.79 257.498 42.9-10.723L77.556 185.89zM25 212.13v23.847L311 491.87v-23.847L25 212.13zM329 291v21.973l64 16v126.054l-64 16V493h158v-21.973l-64-16V328.973l64-16V291H329zm112 135.865v14.108l21.88 5.47L441 426.865z"/></svg>
));