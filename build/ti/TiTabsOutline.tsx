import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M18 4h-10c-1.104 0-2 .896-2 2v2h-1c-1.104 0-2 .896-2 2v9c0 1.104.896 2 2 2h9c1.104 0 2-.896 2-2v-1h2c1.104 0 2-.896 2-2v-10c0-1.104-.896-2-2-2zm-13 15v-9h8.5c.275 0 .5.225.5.5v8.5h-9zm13-3h-3v-5.5c0-.827-.673-1.5-1.5-1.5h-5.5v-3h10v10z"/></svg>
));