import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em"><g>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM4 5v2h2V5H4zm14 0v2h2V5h-2zM4 9v2h2V9H4zm14 0v2h2V9h-2zM4 13v2h2v-2H4zm14 0v2h2v-2h-2zM4 17v2h2v-2H4zm14 0v2h2v-2h-2z"/>
    </g></svg>
));