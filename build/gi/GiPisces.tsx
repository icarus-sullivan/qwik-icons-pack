import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M281.02 221.26c6.9-79.494 40.052-148.655 87.93-192.533h87.745c-47.877 43.878-75.456 113.04-81.08 192.532h70.68v79.45h-69.05c8.383 73.184 36.106 136.262 81.49 176.83H370.99c-45.39-40.568-77.906-103.65-87.997-176.83h-57.89c-10.092 73.184-42.61 136.262-87.998 176.83h-87.74c45.383-40.568 73.097-103.65 81.49-176.83H56.066v-79.45h76.42C126.85 141.765 99.28 72.604 51.403 28.726h87.75c47.87 43.878 81.025 113.04 87.92 192.532h53.946z"/></svg>
));