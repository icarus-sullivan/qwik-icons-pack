import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M53.156 25.78c30.55 26.034 52.813 95.137 52.813 176.47 0 44.36-6.922 84.657-17.814 116.688 31.134 71.43 85.946 122.39 179.906 175.28 91.558-48.747 144.024-96.565 173.75-167.593-12.5-33.06-20.28-76.47-20.28-124.375 0-81.333 22.262-150.436 52.812-176.47-41.924 9.324-83.858 16.318-125.78 20.595L277.904 181.72l46.47 20.655L209.312 391.72l41.468-169.595-22.53-10.25-71.375 19.938 59.406-50.22L259.938 51.22c-68.92.347-137.86-7.508-206.78-25.44z"/></svg>
));