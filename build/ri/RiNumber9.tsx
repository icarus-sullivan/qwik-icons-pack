import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em"><g>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M12 1.5a6.5 6.5 0 0 1 5.619 9.77l-6.196 10.729H9.114l4.439-7.686A6.5 6.5 0 1 1 12 1.5zm0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z"/>
    </g></svg>
));