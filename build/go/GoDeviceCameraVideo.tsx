import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M24 5.25a.75.75 0 00-1.136-.643L16.5 8.425V6.25a1.75 1.75 0 00-1.75-1.75h-13A1.75 1.75 0 000 6.25v11C0 18.216.784 19 1.75 19h13a1.75 1.75 0 001.75-1.75v-2.175l6.364 3.818A.75.75 0 0024 18.25v-13zm-7.5 8.075l6 3.6V6.575l-6 3.6v3.15zM15 9.75v-3.5a.25.25 0 00-.25-.25h-13a.25.25 0 00-.25.25v11c0 .138.112.25.25.25h13a.25.25 0 00.25-.25v-7.5z"/></svg>
));