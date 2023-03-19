import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1em" viewBox="0 0 24 24" width="1em"><g><rect fill="none" height="24" width="24"/></g><g><path d="M9,6H8V4.65l1-0.12V6z M9,12H8V7h1V12z M6,7h1v5H6V7z M6,4.88l1-0.12V6H6V4.88z M22,3V2L5,4v8H2c0,3.69,2.47,6.86,6,8.25 V22h8v-1.75c3.53-1.39,6-4.56,6-8.25H10V7h12V6H10V4.41L22,3z"/></g></svg>
));