import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M3.75 2A1.75 1.75 0 002 3.75v16.5c0 .966.784 1.75 1.75 1.75h5.5A1.75 1.75 0 0011 20.25V3.75A1.75 1.75 0 009.25 2h-5.5zM3.5 3.75a.25.25 0 01.25-.25h5.5a.25.25 0 01.25.25v16.5a.25.25 0 01-.25.25h-5.5a.25.25 0 01-.25-.25V3.75zM14.75 2A1.75 1.75 0 0013 3.75v16.5c0 .966.784 1.75 1.75 1.75h5.5A1.75 1.75 0 0022 20.25V3.75A1.75 1.75 0 0020.25 2h-5.5zm-.25 1.75a.25.25 0 01.25-.25h5.5a.25.25 0 01.25.25v16.5a.25.25 0 01-.25.25h-5.5a.25.25 0 01-.25-.25V3.75z"/></svg>
));