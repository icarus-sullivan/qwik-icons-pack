import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em"><g>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M3 11h18v2H3v-2zm15 7v3h-2v-3h-3l4-4 4 4h-3zM8 18v3H6v-3H3l4-4 4 4H8zM18 6h3l-4 4-4-4h3V3h2v3zM8 6h3l-4 4-4-4h3V3h2v3z"/>
    </g></svg>
));