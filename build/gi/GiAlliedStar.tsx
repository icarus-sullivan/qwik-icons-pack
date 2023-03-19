import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M256 26C129.17 26 26 129.17 26 256s103.192 230 230 230 230-103.192 230-230S382.83 26 256 26zm168.813 174.7H298.258L257.442 78.36c78.035.628 144.206 51.81 167.37 122.34zM254.558 78.36L213.786 200.7H87.23C110.353 130.17 176.524 78.99 254.56 78.36zM78.328 256a177.056 177.056 0 0 1 7.637-51.49l101.728 75.932-37.34 118.345A177.518 177.518 0 0 1 78.33 256zm76.66 146.045L256 330.03l101.013 72.015a177.177 177.177 0 0 1-202.026 0zm206.614-3.302l-37.295-118.345 101.728-75.933a177.463 177.463 0 0 1-64.39 194.322z"/></svg>
));