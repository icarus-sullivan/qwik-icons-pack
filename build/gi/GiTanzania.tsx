import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M57.08 38.67l57.42-6 5.9 82.23 73.8-25.69 30.9-57.39 151.6 81.48 9.4 34.4 60.2 42.7-21.5 75.5 32.5 22.3-13.7 71.9 18.1 20.6-2.7 36.8 35.3 28.4-84.9 34.3-163-.9-19.7-74.5-139.59-52.4c-43.39-47.3-54.69-107-69.46-165.4l61.69-60.1z"/></svg>
));