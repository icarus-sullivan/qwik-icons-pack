import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em"><g>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M20.997 2.992L21 21.008a1 1 0 0 1-.993.992H3.993A.993.993 0 0 1 3 21.008V2.992A1 1 0 0 1 3.993 2h16.01c.549 0 .994.444.994.992zM9 13V9a1 1 0 1 1 2 0v4a1 1 0 0 0 2 0V9a3 3 0 0 0-6 0v4a5 5 0 0 0 10 0V8h-2v5a3 3 0 0 1-6 0z"/>
    </g></svg>
));