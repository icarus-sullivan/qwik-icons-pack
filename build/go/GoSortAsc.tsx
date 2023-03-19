import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M18.5 17.25a.75.75 0 01-1.5 0V7.56l-2.22 2.22a.75.75 0 11-1.06-1.06l3.5-3.5a.75.75 0 011.06 0l3.5 3.5a.75.75 0 01-1.06 1.06L18.5 7.56v9.69zm-15.75.25a.75.75 0 010-1.5h9.5a.75.75 0 010 1.5h-9.5zm0-5a.75.75 0 010-1.5h5.5a.75.75 0 010 1.5h-5.5zm0-5a.75.75 0 010-1.5h3.5a.75.75 0 010 1.5h-3.5z"/></svg>
));