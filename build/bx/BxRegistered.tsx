import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M12.14 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M16.14 10a3 3 0 0 0-3-3h-5v10h2v-4h1.46l2.67 4h2.4l-2.75-4.12A3 3 0 0 0 16.14 10zm-3 1h-3V9h3a1 1 0 0 1 0 2z"/></svg>
));