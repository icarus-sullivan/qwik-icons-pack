import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1em" viewBox="0 0 24 24" width="1em"><g><rect fill="none" height="24" width="24"/></g><g><path d="M22,21V7L12,3L2,7v14h5v-9h10v9H22z M11,19H9v2h2V19z M13,16h-2v2h2V16z M15,19h-2v2h2V19z"/></g></svg>
));