import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em"><g>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path fill-rule="nonzero" d="M21 1v12A9 9 0 1 1 7.375 5.278L14 1.453v2.77L21 1zm-2 3.122l-7 3.224v-2.43L8.597 6.881a6.997 6.997 0 0 0-3.592 5.845L5 13a7 7 0 0 0 13.996.24L19 13V4.122zM12 8a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
    </g></svg>
));