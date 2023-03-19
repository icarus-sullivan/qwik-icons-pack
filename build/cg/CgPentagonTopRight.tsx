import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.3301 15.1601L5 14.3922L10 5.73193L15.3301 6.49988L18.6603 10.7319L13.6603 19.3922L10.3301 15.1601ZM13.4052 15.8339L11.4072 13.2947L8.20908 12.8339L11.055 7.90459L14.2531 8.36536L16.2512 10.9046L13.4052 15.8339Z" fill="currentColor"/></svg>
));