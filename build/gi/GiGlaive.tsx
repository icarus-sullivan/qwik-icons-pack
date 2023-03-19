import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M488.7 24.74c-25.6 25.54-51.7 50.93-78 76.26-57-13.38-129.6 16.5-170.7 43 49.3-8 98.8-16.3 120.4 4.7-85.4 80.4-173.5 159.8-261.92 239l38.92 44.9c23.9-8.7 56.6-29.2 92-57.6 38-30.6 79.2-70.3 117.4-113.7 67.7-76.8 125.6-166.14 141.9-236.56zM94.96 409.3l-13.61 12.5 19.95 22.6 14-12.9-20.34-22.2zM68.06 434L18 480.1V494h29.39l40.65-37.4L68.06 434z"/></svg>
));