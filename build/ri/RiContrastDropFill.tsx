import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em"><g>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M5.636 6.636L12 .272l6.364 6.364a9 9 0 1 1-12.728 0zM7.05 8.05A7 7 0 0 0 12.004 20L12 3.1 7.05 8.05z"/>
    </g></svg>
));