import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em"><title>Rider</title><path d="M0 0v24h24V0zm7.031 3.113A4.063 4.063 0 0 1 9.72 4.14a3.23 3.23 0 0 1 .84 2.28A3.16 3.16 0 0 1 8.4 9.54l2.46 3.6H8.28L6.12 9.9H4.38v3.24H2.16V3.12c1.61-.004 3.281.009 4.871-.007zm5.509.007h3.96c3.18 0 5.34 2.16 5.34 5.04 0 2.82-2.16 5.04-5.34 5.04h-3.96zm4.069 1.976c-.607.01-1.235.004-1.849.004v6.06h1.74a2.882 2.882 0 0 0 3.06-3 2.897 2.897 0 0 0-2.951-3.064zM4.319 5.1v2.88H6.6c1.08 0 1.68-.6 1.68-1.44 0-.96-.66-1.44-1.74-1.44zM2.16 19.5h9V21h-9Z"/></svg>
));