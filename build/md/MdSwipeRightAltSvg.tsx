import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1em" viewBox="0 0 24 24" width="1em"><g><rect fill="none" height="24" width="24"/></g><g><path d="M13.9,11C13.44,8.72,11.42,7,9,7c-2.76,0-5,2.24-5,5s2.24,5,5,5c2.42,0,4.44-1.72,4.9-4h4.27l-1.59,1.59L18,16l4-4l-4-4 l-1.41,1.41L18.17,11H13.9z"/></g></svg>
));