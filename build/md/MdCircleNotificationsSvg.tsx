import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16.5c-.83 0-1.5-.67-1.5-1.5h3c0 .83-.67 1.5-1.5 1.5zm5-2.5H7v-1l1-1v-2.61C8 9.27 9.03 7.47 11 7v-.5c0-.57.43-1 1-1s1 .43 1 1V7c1.97.47 3 2.28 3 4.39V14l1 1v1z"/></svg>
));