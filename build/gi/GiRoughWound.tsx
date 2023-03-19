import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M378.744 133.25c-238.248 24.048-68.733 98.574 81.488 161.753-254.586-53.513-69.623 96.14 22.624 194.884-97.054-61.694-215.83-120.378-320.06-142.827 234.825-17.035 26.77-138.346-134.27-172.088 185.74-1.445 164.326-12.097 8.96-152.757 131.684 75.394 215.833 97.65 341.26 111.038z"/></svg>
));