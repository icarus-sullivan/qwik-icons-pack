import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M15 18a1 1 0 100-2 1 1 0 000 2zm1-6a1 1 0 11-2 0 1 1 0 012 0zm-7 6a1 1 0 100-2 1 1 0 000 2zm0-5a1 1 0 100-2 1 1 0 000 2zm7-6a1 1 0 11-2 0 1 1 0 012 0zM9 8a1 1 0 100-2 1 1 0 000 2z"/></svg>
));