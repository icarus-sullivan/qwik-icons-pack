import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1em" viewBox="0 0 24 24" width="1em"><rect fill="none" height="24" width="24"/><path d="M7,21H3V8l13-5v7H7V21z M19,10c-1.1,0-2,0.9-2,2H9v9h5v-5h2v5h5v-9C21,10.9,20.1,10,19,10z"/></svg>
));