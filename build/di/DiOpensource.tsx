import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#444444" d="M16 5.559c-6.118 0-11.078 4.96-11.078 11.079 0 4.749 2.989 8.799 7.188 10.374l2.553-6.808c-1.444-0.541-2.471-1.934-2.471-3.566 0-2.103 1.705-3.808 3.808-3.808s3.808 1.705 3.808 3.808c0 1.633-1.028 3.025-2.471 3.566l2.553 6.808c4.199-1.575 7.188-5.625 7.188-10.374-0-6.119-4.96-11.079-11.079-11.079z"/></svg>
));