import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M19 19h2v2h-2zM7 19h2v2H7zm8 0h2v2h-2zM3 19h2v2H3zm0-4h2v2H3zm0-8h2v2H3zm0-4h2v2H3zm12 0h2v2h-2zM7 3h2v2H7zm12 0h2v2h-2zm0 12h2v2h-2zm0-8h2v2h-2z"/><path d="M5 13h6v8h2v-8h8v-2h-8V3h-2v8H3v2h1.93z"/></svg>
));