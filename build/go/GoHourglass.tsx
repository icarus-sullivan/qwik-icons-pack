import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M4.75 2a.75.75 0 000 1.5h.75v2.982a4.75 4.75 0 002.215 4.017l2.044 1.29a.25.25 0 010 .422l-2.044 1.29A4.75 4.75 0 005.5 17.518V20.5h-.75a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5h-.75v-2.982a4.75 4.75 0 00-2.215-4.017l-2.044-1.29a.25.25 0 010-.422l2.044-1.29A4.75 4.75 0 0018.5 6.482V3.5h.75a.75.75 0 000-1.5H4.75zM17 3.5H7v2.982A3.25 3.25 0 008.516 9.23l2.044 1.29a1.75 1.75 0 010 2.96l-2.044 1.29A3.25 3.25 0 007 17.518V20.5h10v-2.982a3.25 3.25 0 00-1.516-2.748l-2.044-1.29a1.75 1.75 0 010-2.96l2.044-1.29A3.25 3.25 0 0017 6.482V3.5z"/></svg>
));