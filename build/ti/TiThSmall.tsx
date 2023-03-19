import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><circle cx="5" cy="19" r="2.5"/><circle cx="5" cy="12" r="2.5"/><circle cx="5" cy="5" r="2.5"/><circle cx="12" cy="19" r="2.5"/><circle cx="12" cy="12" r="2.5"/><circle cx="12" cy="5" r="2.5"/><circle cx="19" cy="19" r="2.5"/><circle cx="19" cy="12" r="2.5"/><circle cx="19" cy="5" r="2.5"/></svg>
));