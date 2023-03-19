import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M23.446 354.575c-8.66-40.146-4.72-98.13 46.128-175.924l53.147-21.388 60.923 88.145 57.035-23.333-3.889-79.72 62.267-28.864 71.247 65.16 29.177-13.022 63.856 34.828 28.815 122.077c-18.165 31.708-30.85 65.514-104.492 75.975l-113.926-84.4c-97.46 20.25-135.145 4.186-184.716-5.185z"/></svg>
));