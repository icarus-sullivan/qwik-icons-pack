import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M152 238.5l19.7-60 19.3 21.6 7.4-72.4 50.8 51.4-18.6-43.5 65.5-11.9 22.7 23.8c21.4-17.4 32.1-31.6 40.1-59.39l39.5-6.82 4 30.61 91.1 84.8c-5.3 49.1-9.1 98.8-58.3 133.4L311.5 390 282 430.7c-59.5-1.5-97.8-25.2-128.9-56.6H71.68l-7.91-26 52.53-8.4-30.48-67.9H19.11l3.38-19.8 100.61-3.9-26.44-18.9c-.93-4.3 22.84-18.7 21.54-22.2-11-28.2-49.42-13.5-99.66-5.3 6.51-34.3 32.09-81 65.01-113.06 30.65 15.26 47.05 36.86 68.95 55.96-9.4 36-5 57.8-.5 93.9z"/></svg>
));