import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M17 16c-1.305 0-2.403.837-2.816 2h-3.184c-1.654 0-3-1.346-3-3v-3.025c.838.634 1.87 1.025 3 1.025h3.184c.413 1.163 1.512 2 2.816 2 1.657 0 3-1.343 3-3s-1.343-3-3-3c-1.305 0-2.403.837-2.816 2h-3.184c-1.654 0-3-1.346-3-3v-.184c1.163-.413 2-1.512 2-2.816 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.304.837 2.403 2 2.816v7.184c0 2.757 2.243 5 5 5h3.184c.413 1.163 1.512 2 2.816 2 1.657 0 3-1.343 3-3s-1.343-3-3-3zm0-5c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm-10-7c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm10 16c-.552 0-1-.449-1-1s.448-1 1-1 1 .449 1 1-.448 1-1 1z"/></svg>
));