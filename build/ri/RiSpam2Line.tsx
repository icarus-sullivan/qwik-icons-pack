import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em"><g>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path fill-rule="nonzero" d="M15.936 2.5L21.5 8.067v7.87L15.936 21.5h-7.87L2.5 15.936v-7.87L8.066 2.5h7.87zm-.829 2H8.894L4.501 8.895v6.213l4.393 4.394h6.213l4.394-4.394V8.894l-4.394-4.393zM11 15h2v2h-2v-2zm0-8h2v6h-2V7z"/>
    </g></svg>
));