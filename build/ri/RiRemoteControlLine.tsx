import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em"><g>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M17 12a1 1 0 0 1 1 1v9h-2v-8H8v8H6v-9a1 1 0 0 1 1-1h10zm-5 4v2h-2v-2h2zm0-10a6 6 0 0 1 5.368 3.316l-1.79.895a4 4 0 0 0-7.157 0l-1.789-.895A6 6 0 0 1 12 6zm0-4a10 10 0 0 1 8.946 5.527l-1.789.895A8 8 0 0 0 12 4a8 8 0 0 0-7.157 4.422l-1.79-.895A10 10 0 0 1 12 2z"/>
    </g></svg>
));