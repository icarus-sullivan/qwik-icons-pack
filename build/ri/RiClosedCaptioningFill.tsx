import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em"><g>
        <path fill="none" d="M0 0H24V24H0z"/>
        <path d="M21 3c.552 0 1 .448 1 1v16c0 .552-.448 1-1 1H3c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h18zM9 8c-2.208 0-4 1.792-4 4s1.792 4 4 4c1.1 0 2.1-.45 2.828-1.172l-1.414-1.414C10.053 13.776 9.553 14 9 14c-1.105 0-2-.895-2-2s.895-2 2-2c.55 0 1.048.22 1.415.587l1.414-1.414C11.105 8.448 10.105 8 9 8zm7 0c-2.208 0-4 1.792-4 4s1.792 4 4 4c1.104 0 2.104-.448 2.828-1.172l-1.414-1.414c-.362.362-.862.586-1.414.586-1.105 0-2-.895-2-2s.895-2 2-2c.553 0 1.053.224 1.415.587l1.414-1.414C18.105 8.448 17.105 8 16 8z"/>
    </g></svg>
));