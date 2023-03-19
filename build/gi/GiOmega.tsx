import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M259.05 73.105C155.53 73.105 71.2 163.14 71.2 274.65c0 42.674 12.272 82.822 33.265 115.45-24.44-13.235-48.45-29.26-72.4-48.92v95.108H206.87c-48-33.257-81.532-82.232-81.532-138.158 0-74.567 59.88-135.015 133.71-135.015 73.832 0 133.712 60.448 133.712 135.015 0 55.926-33.53 104.9-81.53 138.158h174.803V341.18c-24.02 19.865-48.295 36.2-73.052 49.57 21.297-32.77 33.92-73.09 33.92-116.1 0-111.51-84.33-201.545-187.85-201.545z"/></svg>
));