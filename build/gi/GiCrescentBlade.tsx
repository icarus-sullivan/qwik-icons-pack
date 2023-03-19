import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M334.529 331.815a280.071 280.071 0 0 0 76.577-253.708q7.174 6.103 13.964 12.883c91.51 91.51 91.51 239.868 0 331.378a234.316 234.316 0 0 1-331.378 0q-6.757-6.757-12.883-13.964a281.783 281.783 0 0 0 55.496 5.518 279.43 279.43 0 0 0 198.224-82.107zM18.297 90.156s205.926 155.002 252.886 225.499c9.494 14.257 2.466 34.73-9.38 48.3A263.517 263.517 0 0 0 366.645 259.11c-13.57 11.802-33.998 18.807-48.244 9.313C249.426 222.49 97.77 21 97.77 21H18.297v69.156z"/></svg>
));