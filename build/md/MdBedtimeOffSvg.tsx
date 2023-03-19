import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1em" viewBox="0 0 24 24" width="1em"><g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M21.19,21.19L2.81,2.81L1.39,4.22l2.27,2.27C2.61,8.08,2,9.97,2,12c0,5.52,4.48,10,10,10c2.04,0,3.93-0.62,5.51-1.66 l2.27,2.27L21.19,21.19z"/></g><g><path d="M12.34,2.02c-2.18-0.07-4.19,0.55-5.85,1.64l4.59,4.59C10.81,6.2,11.18,4.03,12.34,2.02z"/></g></g></g></svg>
));