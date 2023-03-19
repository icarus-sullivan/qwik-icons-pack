import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M15 13V14H1.5L1 13.5V0H2V13H15Z"/><rect x="5" y="2" width="2" height="2"/><rect x="12" y="1" width="2" height="2"/><rect x="8" y="5" width="2" height="2"/><rect x="5" y="9" width="2" height="2"/><rect x="12" y="8" width="2" height="2"/></svg>
));