import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1em" viewBox="0 0 24 24" width="1em"><g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M18,3l-3,3V3H9C6.24,3,4,5.24,4,8h5v3h6V8l3,3h2V3H18z"/></g><g><path d="M9,13v7c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1v-7H9z"/></g></g></g></svg>
));