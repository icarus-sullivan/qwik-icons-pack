import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em"><g>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M4 20v-6a8 8 0 1 1 16 0v6h1v2H3v-2h1zm2-6h2a4 4 0 0 1 4-4V8a6 6 0 0 0-6 6zm5-12h2v3h-2V2zm8.778 2.808l1.414 1.414-2.12 2.121-1.415-1.414 2.121-2.121zM2.808 6.222l1.414-1.414 2.121 2.12L4.93 8.344 2.808 6.222z"/>
    </g></svg>
));