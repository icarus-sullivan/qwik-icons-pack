import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M18.25 8.5a.75.75 0 01.75.75v9a.75.75 0 01-.75.75h-9a.75.75 0 010-1.5h7.19L6.22 7.28a.75.75 0 011.06-1.06L17.5 16.44V9.25a.75.75 0 01.75-.75z"/></svg>
));