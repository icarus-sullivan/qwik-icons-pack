import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1em" viewBox="0 0 24 24" width="1em"><rect fill="none" fill-rule="evenodd" height="24" width="24"/><path d="M13,9.5h5v-2h-5V9.5z M13,16.5h5v-2h-5V16.5z M19,21H5c-1.1,0-2-0.9-2-2V5 c0-1.1,0.9-2,2-2h14c1.1,0,2,0.9,2,2v14C21,20.1,20.1,21,19,21z M6,11h5V6H6V11z M7,7h3v3H7V7z M6,18h5v-5H6V18z M7,14h3v3H7V14z" fill-rule="evenodd"/></svg>
));