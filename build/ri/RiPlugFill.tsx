import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em"><g>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M13 18v2h6v2h-6a2 2 0 0 1-2-2v-2H8a4 4 0 0 1-4-4v-4h16v4a4 4 0 0 1-4 4h-3zm3-12h3a1 1 0 0 1 1 1v2H4V7a1 1 0 0 1 1-1h3V2h2v4h4V2h2v4zm-4 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
    </g></svg>
));