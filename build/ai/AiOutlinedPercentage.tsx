import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="1em" width="1em"><path d="M855.7 210.8l-42.4-42.4a8.03 8.03 0 0 0-11.3 0L168.3 801.9a8.03 8.03 0 0 0 0 11.3l42.4 42.4c3.1 3.1 8.2 3.1 11.3 0L855.6 222c3.2-3 3.2-8.1.1-11.2zM304 448c79.4 0 144-64.6 144-144s-64.6-144-144-144-144 64.6-144 144 64.6 144 144 144zm0-216c39.7 0 72 32.3 72 72s-32.3 72-72 72-72-32.3-72-72 32.3-72 72-72zm416 344c-79.4 0-144 64.6-144 144s64.6 144 144 144 144-64.6 144-144-64.6-144-144-144zm0 216c-39.7 0-72-32.3-72-72s32.3-72 72-72 72 32.3 72 72-32.3 72-72 72z"/></svg>
));