import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em"><g>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path fill-rule="nonzero" d="M19 13H5v7h14v-7zm0-2a7 7 0 0 0-14 0h14zM6.382 3.968A8.962 8.962 0 0 1 12 2c2.125 0 4.078.736 5.618 1.968l1.453-1.453 1.414 1.414-1.453 1.453A8.962 8.962 0 0 1 21 11v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11c0-2.125.736-4.078 1.968-5.618L3.515 3.93l1.414-1.414 1.453 1.453zM9 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
    </g></svg>
));