import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.3639 7.75735L16.9497 6.34314L11.2929 12L16.9497 17.6568L18.3639 16.2426L14.1213 12L18.3639 7.75735Z" fill="currentColor"/>
  <path d="M11.2929 6.34314L12.7071 7.75735L8.46447 12L12.7071 16.2426L11.2929 17.6568L5.63605 12L11.2929 6.34314Z" fill="currentColor"/></svg>
));