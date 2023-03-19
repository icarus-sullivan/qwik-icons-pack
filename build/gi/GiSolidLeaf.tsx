import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M461.596 17.701C271.149 128.454-109.411-4.192 66.276 350.885c3.065 5.77 6.619 11.164 10.529 16.293-29.888 33.096-51.12 70.802-57.117 114.554 5.26 3.375 14.588 7.464 26.88 9.916 13.06 2.605 29.481 3.516 47.916 1.711-11.483-36.045-7.774-70.234 5.836-101.043 5.5 6.543 10.283 10.23 14.782 13.012C581.497 693.816 499.604 120.792 461.596 17.701z"/></svg>
));