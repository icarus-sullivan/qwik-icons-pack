import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M16 2H8c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM8 20V4h8l.001 16H8zM3 7h2V5H3v.5H2v1h1zm18-2h-2v2h2v-.5h1v-1h-1zM3 11h2V9H3v.5H2v1h1zm18-2h-2v2h2v-.5h1v-1h-1zM3 15h2v-2H3v.5H2v1h1zm18-2h-2v2h2v-.5h1v-1h-1zM3 19h2v-2H3v.5H2v1h1zm18-2h-2v2h2v-.5h1v-1h-1z"/></svg>
));