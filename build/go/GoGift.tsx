import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M3.75 3.75c0 .844.279 1.623.75 2.25H2.75A1.75 1.75 0 001 7.75v2.5c0 .698.409 1.3 1 1.582v8.418c0 .966.784 1.75 1.75 1.75h16.5A1.75 1.75 0 0022 20.25v-8.418c.591-.281 1-.884 1-1.582v-2.5A1.75 1.75 0 0021.25 6H19.5a3.75 3.75 0 00-3-6c-1.456 0-3.436.901-4.5 3.11C10.936.901 8.955 0 7.5 0a3.75 3.75 0 00-3.75 3.75zM11.22 6c-.287-3.493-2.57-4.5-3.72-4.5a2.25 2.25 0 000 4.5h3.72zm9.28 6v8.25a.25.25 0 01-.25.25h-7.5V12h7.75zm-9.25 8.5V12H3.5v8.25c0 .138.112.25.25.25h7.5zm10-10a.25.25 0 00.25-.25v-2.5a.25.25 0 00-.25-.25h-8.5v3h8.5zm-18.5 0h8.5v-3h-8.5a.25.25 0 00-.25.25v2.5c0 .138.112.25.25.25zm16-6.75A2.25 2.25 0 0116.5 6h-3.72c.287-3.493 2.57-4.5 3.72-4.5a2.25 2.25 0 012.25 2.25z"/></svg>
));