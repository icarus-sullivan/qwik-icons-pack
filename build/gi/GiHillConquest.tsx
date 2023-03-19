import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M247 55v203.248c-3.565-.103-7.126-.164-10.68-.154-62.774.18-123.48 18.017-170.16 55.783-18.406 14.89-34.696 32.91-48.16 54.28V494h208.92c43.583-100.15 136.274-151 230.414-151 2.962 0 5.926.056 8.89.156-1.515-1.36-3.045-2.705-4.59-4.035-53.44-45.953-125.055-74.07-196.634-79.884v-99.66c27.09-2.53 46.44-15.576 71-15.576 27.195 0 48 16 80 16V80c-32 0-48-16-80-16-28.854 0-44.703 13.005-71 15.563V55zm210.334 306c-85.44 0-168.606 43.956-210.47 133H494V363.73c-12.176-1.816-24.436-2.73-36.666-2.73z"/></svg>
));