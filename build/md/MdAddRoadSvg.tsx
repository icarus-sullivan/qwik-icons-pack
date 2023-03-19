import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1em" viewBox="0 0 24 24" width="1em"><g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="20,18 20,15 18,15 18,18 15,18 15,20 18,20 18,23 20,23 20,20 23,20 23,18"/><rect height="9" width="2" x="18" y="4"/><rect height="16" width="2" x="4" y="4"/><rect height="4" width="2" x="11" y="4"/><rect height="4" width="2" x="11" y="10"/><rect height="4" width="2" x="11" y="16"/></g></g></svg>
));