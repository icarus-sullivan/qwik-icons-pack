import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M22.8 8.6c-.2-1.5-.4-2.6-1-3-.6-.5-5.8-.6-9.8-.6s-9.2.1-9.8.6c-.6.4-.8 1.5-1 3s-.2 2.4-.2 3.4 0 1.9.2 3.4.4 2.6 1 3c.6.5 5.8.6 9.8.6 4 0 9.2-.1 9.8-.6.6-.4.8-1.5 1-3s.2-2.4.2-3.4 0-1.9-.2-3.4zm-12.8 7v-7.2l6 3.6-6 3.6z"/></svg>
));