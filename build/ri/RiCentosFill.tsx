import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em"><g>
        <path fill="none" d="M0 0H24V24H0z"/>
        <path d="M12 13.06l4.47 4.471L12 22l-4.47-4.47L12 13.06zm-8 3.06L7.879 20H4v-3.88zm16 0V20h-3.88L20 16.12zm-2.47-8.59L22 12l-4.469 4.47-4.47-4.47 4.469-4.47zm-11.06 0L10.94 12l-4.471 4.469L2 12l4.47-4.47zM12 2l4.469 4.469L12 10.939 7.53 6.47 12 2zM7.879 4l-3.88 3.879L4 4h3.879zM20 4v3.879l-3.88-3.88L20 4z"/>
    </g></svg>
));