import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em"><g>
        <path fill="none" d="M0 0H24V24H0z"/>
        <path d="M15 3c.552 0 1 .448 1 1v2h5c.552 0 1 .448 1 1v13c0 .552-.448 1-1 1H3c-.552 0-1-.448-1-1V7c0-.552.448-1 1-1h5V4c0-.552.448-1 1-1h6zM8 8H6v11h2V8zm10 0h-2v11h2V8zm-4-3h-4v1h4V5z"/>
    </g></svg>
));