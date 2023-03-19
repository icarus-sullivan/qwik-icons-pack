import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><circle cx="12" cy="17" r="1.3"/><path d="M17 10h-1v-2c0-2.206-1.794-4-4-4s-4 1.794-4 4v2h-1c-1.104 0-2 .896-2 2v7c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2v-7c0-1.104-.896-2-2-2zm-7-2c0-1.104.896-2 2-2s2 .896 2 2v3h-4v-3zm7 11h-10v-7h10.003l-.003 7z"/></svg>
));