import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><circle cx="8.5" cy="8.5" r="2.5"/><path d="M16 10c-2 0-3 3-4.5 3s-1.499-1-3.5-1c-2 0-3.001 4-3.001 4h14.001s-1-6-3-6zM20 3h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-12c0-1.103-.897-2-2-2zm0 14h-16v-12h16v12z"/></svg>
));