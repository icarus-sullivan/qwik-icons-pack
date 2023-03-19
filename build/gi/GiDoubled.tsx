import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M304.833 16c-261.69 0-320.71 387.657-62.343 387.657 86.284 0 86.955-129.375 0-129.375-139.947 0-99.134-202.896 62.343-258.282zm-30.938 92.343c-86.283 0-86.955 129.375 0 129.375 139.95 0 88.353 202.896-73.125 258.282 261.69 0 331.49-387.657 73.125-387.657z"/></svg>
));