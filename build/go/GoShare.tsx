import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12.53 1.22a.75.75 0 00-1.06 0L8.22 4.47a.75.75 0 001.06 1.06l1.97-1.97v10.69a.75.75 0 001.5 0V3.56l1.97 1.97a.75.75 0 101.06-1.06l-3.25-3.25zM5.5 9.75a.25.25 0 01.25-.25h2.5a.75.75 0 000-1.5h-2.5A1.75 1.75 0 004 9.75v10.5c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0020 20.25V9.75A1.75 1.75 0 0018.25 8h-2.5a.75.75 0 000 1.5h2.5a.25.25 0 01.25.25v10.5a.25.25 0 01-.25.25H5.75a.25.25 0 01-.25-.25V9.75z"/></svg>
));