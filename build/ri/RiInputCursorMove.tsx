import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em"><path fill="none" d="M0 0h24v24H0z"/>
    <path d="M8 21v-2h3V5H8V3h8v2h-3v14h3v2H8zM18.05 7.05L23 12l-4.95 4.95-1.414-1.414L20.172 12l-3.536-3.536L18.05 7.05zm-12.1 0l1.414 1.414L3.828 12l3.536 3.536L5.95 16.95 1 12l4.95-4.95z"/></svg>
));