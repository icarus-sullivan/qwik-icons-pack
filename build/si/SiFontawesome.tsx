import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em"><title>Font Awesome</title><path d="M2.571 0A2.572 2.572 0 000 2.571V21.43A2.572 2.572 0 002.571 24H21.43A2.572 2.572 0 0024 21.429V2.57A2.572 2.572 0 0021.429 0zm4.324 4c.993 0 1.793.8 1.793 1.791A1.7 1.7 0 017.984 7.2v.993c.128-.043 1.836-.897 3.584-.897 2.04 0 3.053.865 3.968.865 1.217 0 2.56-.865 2.88-.865.257 0 .48.192.48.416v7.521c0 .224-.191.32-.415.416-.896.384-1.857.736-2.88.736-1.44 0-2.113-.896-3.841-.896-1.248 0-2.56.448-3.616.929-.064.032-.129.032-.193.064v2.432c0 .669-.503 1.088-1.056 1.088a1.08 1.08 0 01-1.088-1.088V7.199a1.789 1.789 0 01-.704-1.408C5.103 4.8 5.903 4 6.895 4Z"/></svg>
));