import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="m21.71 20.296-1.786-1.786c.045-.163.076-.332.076-.51v-7h-2v5.586L7.414 6H13V4H6c-.178 0-.347.031-.51.076l-1.78-1.78L2.296 3.71l18 18 1.414-1.414zM4 8.121V18c0 1.103.897 2 2 2h9.879l-2-2H6v-7.879l-2-2z"/><circle cx="18" cy="6" r="3"/></svg>
));