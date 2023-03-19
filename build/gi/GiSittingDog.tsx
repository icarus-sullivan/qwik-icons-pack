import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M231.6 16.18l16.7 120.02 73.8 20.5c37.3-11.2 78.5-18.2 102.3-43.6 9.7-10.3 17.2-24.78 9.1-37.92l-75.3 2.22-14.6-31.79h-74.7c-7.7-11.71-22.8-20.46-37.3-29.43zm5.7 145.22c-46.9 19.8-110.1 146.3-111.8 276.5-34.02-58.1-24.9-122.6-2.9-202.6C55.31 287 4.732 448.4 133.1 486.9H346s-6.3-21.5-14.1-28.9c-12.7-12-48.2-20.2-48.2-20.2 27.8-39.2 33.5-71.7 38.6-103.9 4.5 59.8 40.7 126.8 57.4 153h76.5s4.6-15.9.2-21.5c-10.9-13.8-51.3-11.9-51.3-11.9-31.1-107.2-46.3-260.2-90-273.2-21.7-6.5-54.3-14.1-77.8-18.9z"/></svg>
));