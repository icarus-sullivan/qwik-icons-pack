import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em"><g>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M16.218 2.5l5.683 5.682v8.036l-5.683 5.683H8.182l-5.683-5.683V8.182l5.683-5.683h8.036zM11 15v2h2v-2h-2zm0-8v6h2V7h-2z"/>
    </g></svg>
));