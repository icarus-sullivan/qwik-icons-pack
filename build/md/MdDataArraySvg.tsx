import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1em" viewBox="0 0 24 24" width="1em"><g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="15,4 15,6 18,6 18,18 15,18 15,20 20,20 20,4"/><polygon points="4,20 9,20 9,18 6,18 6,6 9,6 9,4 4,4"/></g></g></svg>
));