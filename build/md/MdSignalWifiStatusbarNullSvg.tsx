import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1em" viewBox="0 0 24 24" width="1em"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,4C7.31,4,3.07,5.9,0,8.98L12,21L24,8.98C20.93,5.9,16.69,4,12,4z M2.92,9.07C5.51,7.08,8.67,6,12,6 c3.33,0,6.49,1.08,9.08,3.07L12,18.17L2.92,9.07z"/></g></svg>
));