import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em"><g>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm8.126 9H4v7h16v-7h-1.126a4.002 4.002 0 0 1-7.748 0zm0-2a4.002 4.002 0 0 1 7.748 0H20V5H4v5h7.126zM15 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-9 2h2v2H6v-2z"/>
    </g></svg>
));