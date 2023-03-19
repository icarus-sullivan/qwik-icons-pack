import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M63.6 33c-17.23 0-31 13.77-31 31s13.77 31 31 31 31-13.77 31-31-13.77-31-31-31zm171.7 6.74l-122.7 25.6c-.4 14.13-6.9 26.86-16.83 35.56l42.83 114.5 11.5-20.8-41.2-110.1 115-24 9.4-17.15zm8.5 21.9L161.7 210.8l53.6 16.9 71.4-129.9zM48.6 110.6V479h30V110.6c-4.73 1.6-9.77 2.4-15 2.4s-10.27-.8-15-2.4zm288 29.3l-59.2 107.4 62.3 19.6 46.8-85zm99.9 84.1l-34.4 62.5 53.5 16.9 23.8-43.2z"/></svg>
));