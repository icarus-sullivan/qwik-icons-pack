import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M3 3a2 2 0 012-2h9.982a2 2 0 011.414.586l4.018 4.018A2 2 0 0121 7.018V21a2 2 0 01-2 2H4.75a.75.75 0 010-1.5H19a.5.5 0 00.5-.5V8.5h-4a2 2 0 01-2-2v-4H5a.5.5 0 00-.5.5v6.25a.75.75 0 01-1.5 0V3zm12-.5v4a.5.5 0 00.5.5h4a.5.5 0 00-.146-.336l-4.018-4.018A.5.5 0 0015 2.5z"/><path fill-rule="evenodd" d="M0 13.75C0 12.784.784 12 1.75 12h3c.966 0 1.75.784 1.75 1.75v4a1.75 1.75 0 01-1.75 1.75h-3A1.75 1.75 0 010 17.75v-4zm1.75-.25a.25.25 0 00-.25.25v4c0 .138.112.25.25.25h3a.25.25 0 00.25-.25v-4a.25.25 0 00-.25-.25h-3z"/><path d="M9 12a.75.75 0 000 1.5h1.5V18H9a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5H12v-5.25a.75.75 0 00-.75-.75H9z"/></svg>
));