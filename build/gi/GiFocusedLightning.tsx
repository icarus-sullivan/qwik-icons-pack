import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M19.594 18.125V104.5l210.094 181.78-84.97 178.22 230.938-92.188-39.875 117.032 94.47-35.813 67.594 44.533-34.594-106.344-59.75 27.5 76.75-168.25-198.03 99.093 76.5-122.75L238.186 18.125H121.813L312.406 244.72 218.47 393.75l58.28-142.813L43.72 18.125H19.593z"/></svg>
));