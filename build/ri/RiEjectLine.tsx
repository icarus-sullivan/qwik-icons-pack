import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em"><g>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M7.737 13h8.526L12 6.606 7.737 13zm4.679-9.376l7.066 10.599a.5.5 0 0 1-.416.777H4.934a.5.5 0 0 1-.416-.777l7.066-10.599a.5.5 0 0 1 .832 0zM5 17h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2z"/>
    </g></svg>
));