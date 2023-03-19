import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M149 24.32L123 124.4l27.8 44.8 15.9-29.4 37.5 30.9 17.5-55.5zm169.7 43.7l-32.2 48.38 10.7 25.5 21.9-21.7 18.1 42.8 10.3-21.7zm-83.4 64.18l-21.9 69.3-41.3-33.9L152 205l-35.2-56.7-88.38 339.4H154.9c45.6-17 135.3-56.7 137.2-106.3 1.7-47.8-108.9-43.4-110.8-91.2-1.5-39.1 84.5-81.5 84.5-81.5s-54.1 43.3-47.4 71c12.9 53 125.6 27.6 143.2 79.3 13 38.2-33.5 104.3-52.2 128.7h174.2L356.5 164.3 336.4 207l-23.5-55.4-22.1 21.9-16.3-39.1-17 25.5z"/></svg>
));