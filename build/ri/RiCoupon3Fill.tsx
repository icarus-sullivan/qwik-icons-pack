import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em"><g>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M11 21a1.5 1.5 0 0 0-3 0H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a1.5 1.5 0 0 0 3 0h10a1 1 0 0 1 1 1v5.5a2.5 2.5 0 1 0 0 5V20a1 1 0 0 1-1 1H11zM9.5 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
    </g></svg>
));