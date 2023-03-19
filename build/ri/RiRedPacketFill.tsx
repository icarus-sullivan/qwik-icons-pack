import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em"><g>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M21 5.937A11.985 11.985 0 0 1 14.194 9.8a2.5 2.5 0 0 0-4.388 0A11.985 11.985 0 0 1 3 5.937V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2.937zm0 2.787V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8.724A13.944 13.944 0 0 0 9.63 11.8a2.501 2.501 0 0 0 4.74 0A13.944 13.944 0 0 0 21 8.724z"/>
    </g></svg>
));