import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M330.445 26.006l-126.79 211.61c24.586 20.357 46.073 33.117 68.584 38.63 22.632 5.543 47.123 4.26 78.421-4.044zM189.119 249.81C163.03 273.734 146 311.377 146 354.309c0 73.606 50.048 131.685 110 131.685s110-58.08 110-131.685c0-23.104-4.932-44.677-13.553-63.406-32.014 8.151-59.115 9.557-84.609 3.313-27.08-6.632-51.752-21.655-78.72-44.405zm47.507 88.622l5.851 17.553-49.345 16.448-5.85-17.552zm38.748 0l49.345 16.449-5.851 17.552-49.345-16.448zM256 411.977c19.532 0 38.348 9.842 55.886 27.38l-13.083 13.084c-15.358-15.358-29.438-21.964-42.803-21.964-13.365 0-27.445 6.606-42.803 21.964l-13.083-13.083c17.538-17.539 36.354-27.381 55.886-27.381z"/></svg>
));