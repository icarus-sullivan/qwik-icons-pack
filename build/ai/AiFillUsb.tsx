import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="1em" width="1em"><path d="M408 312h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm352 120V144c0-17.7-14.3-32-32-32H296c-17.7 0-32 14.3-32 32v288c-66.2 0-120 52.1-120 116v356c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8V548c0-63.9-53.8-116-120-116zm-72 0H336V184h352v248zM568 312h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"/></svg>
));