import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em"><g>
        <path fill="none" d="M0 0H24V24H0z"/>
        <path d="M17 2v2h-1v14c0 2.21-1.79 4-4 4s-4-1.79-4-4V4H7V2h10zm-3 8h-4v8c0 1.105.895 2 2 2s2-.895 2-2v-8zm-1 5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-2-3c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm3-8h-4v4h4V4z"/>
    </g></svg>
));