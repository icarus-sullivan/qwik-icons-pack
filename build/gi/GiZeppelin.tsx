import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M494.905 253.49c0 42.47-47.24 77.43-156.85 80.77-1.9.06-57.36 0-61.36 0-121.48 0-259.6-80.77-259.6-80.77s138.11-80.76 259.6-80.76c4.14 0 60-.06 62 0 109.17 3.44 156.21 38.36 156.21 80.76zm-356-71.31l-28.21-35.35-53.69-16.22 7 81.17c9.54-4.34 60.6-24.86 74.87-29.6zm-74.9 113.01l-7 81.18 53.64-16.22 28.21-35.35c-14.25-4.74-65.31-25.26-74.85-29.61zM264.755 350l4.25 31.39h81l10.18-32.25c-15.55 1.3-91.4 1.03-95.43.86z"/></svg>
));