import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#000000" d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM12.885 9.212c-0.575 2.23-2.584 3.788-4.885 3.788s-4.31-1.558-4.885-3.788c-0.097-0.377 0.131-0.764 0.508-0.861 0.058-0.015 0.118-0.023 0.177-0.023 0.322 0 0.604 0.218 0.684 0.531 0.414 1.605 1.86 2.727 3.516 2.727s3.102-1.121 3.516-2.727c0.081-0.313 0.362-0.531 0.684-0.531 0.060 0 0.12 0.008 0.178 0.023 0.183 0.047 0.336 0.163 0.432 0.326s0.123 0.353 0.075 0.536z"/></svg>
));