import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M12 22c3.859 0 7-3.141 7-7s-3.141-7-7-7c-3.86 0-7 3.141-7 7s3.14 7 7 7zm0-12c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5zm-1-8H7v5.518a8.957 8.957 0 0 1 4-1.459V2zm6 0h-4v4.059a8.957 8.957 0 0 1 4 1.459V2z"/><path d="m10.019 15.811-.468 2.726L12 17.25l2.449 1.287-.468-2.726 1.982-1.932-2.738-.398L12 11l-1.225 2.481-2.738.398z"/></svg>
));