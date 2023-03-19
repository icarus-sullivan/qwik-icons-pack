import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M433.2 17.99L159.8 291.4l60.8 60.8-6.3 6.3L494 78.79c0-24.32-36.5-60.8-60.8-60.8zM161.5 64.03a32 32 0 0 0-7.8.59c3.9 21.25 13.8 38.48 30.3 52.48a32 32 0 0 0 3.7-37.13 32 32 0 0 0-26.2-15.94zm-24.1 9.35a32 32 0 0 0-5.1 38.62 32 32 0 0 0 36 14.9c-15.5-14.7-25.9-32.79-30.9-53.52zm26.4 247.22C126.3 378.1 60.46 427.7 19.06 479.5c-4.82 5.9 7.6 18.2 13.53 13.5C84.32 451.6 133.9 385.7 191.4 348.2z"/></svg>
));