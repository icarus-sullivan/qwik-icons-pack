import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M400 25c-48.2 0-87 38.84-87 87 0 48.2 38.8 87 87 87s87-38.8 87-87c0-48.16-38.8-87-87-87zm40.5 34.01l15 9.98-70.1 105.11-55.8-55.7 12.8-12.8 40.2 40.3 57.9-86.89zM304.7 156.1L186.4 238H32v36h154.4l118.3 81.9c5.1-11 12.1-21 20.5-29.5L223.6 256l101.6-70.4c-8.4-8.5-15.4-18.5-20.5-29.5zM400 313c-48.2 0-87 38.8-87 87s38.8 87 87 87 87-38.8 87-87-38.8-87-87-87zm-41.6 32.6l41.6 41.6 41.6-41.6 12.8 12.8-41.6 41.6 41.6 41.6-12.8 12.8-41.6-41.6-41.6 41.6-12.8-12.8 41.6-41.6-41.6-41.6 12.8-12.8z"/></svg>
));