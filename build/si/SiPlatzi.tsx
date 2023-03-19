import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em"><title>Platzi</title><path d="M10.6392 1.127L2.486 9.282a3.842 3.842 0 000 5.4361l8.1552 8.1552a3.842 3.842 0 005.4361 0l2.719-2.718-2.719-2.7181-2.718 2.718-8.1562-8.1551 8.1552-8.1552 5.437 5.4371-5.437 5.4361 2.718 2.719 5.4371-5.437a3.842 3.842 0 000-5.4372l-5.448-5.436a3.828 3.828 0 00-5.4252 0z"/></svg>
));