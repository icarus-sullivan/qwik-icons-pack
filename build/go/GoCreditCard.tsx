import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M15.25 14a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z"/><path fill-rule="evenodd" d="M1.75 3A1.75 1.75 0 000 4.75v14.5C0 20.216.784 21 1.75 21h20.5A1.75 1.75 0 0024 19.25V4.75A1.75 1.75 0 0022.25 3H1.75zM1.5 4.75a.25.25 0 01.25-.25h20.5a.25.25 0 01.25.25V8.5h-21V4.75zm0 5.25v9.25c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V10h-21z"/></svg>
));