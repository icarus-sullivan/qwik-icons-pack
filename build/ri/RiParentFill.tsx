import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em"><g>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M7 11a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm10.5 4a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1a4.5 4.5 0 0 1 4.5 4.5v.5h-9v-.5a4.5 4.5 0 0 1 4.5-4.5zM7 12a5 5 0 0 1 5 5v4H2v-4a5 5 0 0 1 5-5z"/>
    </g></svg>
));