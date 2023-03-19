import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#000000" d="M11.8 1c2.318 0 4.2 1.882 4.2 4.2 0 4.566-4.935 5.982-8 10.616-3.243-4.663-8-5.9-8-10.616 0-2.319 1.882-4.2 4.2-4.2 0.943 0 1.812 0.43 2.512 1.060l-1.213 1.94 3.5 2-2 5 5.5-6-3.5-2 0.967-1.451c0.553-0.34 1.175-0.549 1.833-0.549z"/></svg>
));