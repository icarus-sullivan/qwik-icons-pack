import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em"><g>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M12 10.667l9.223-6.149a.5.5 0 0 1 .777.416v14.132a.5.5 0 0 1-.777.416L12 13.333v5.733a.5.5 0 0 1-.777.416L.624 12.416a.5.5 0 0 1 0-.832l10.599-7.066a.5.5 0 0 1 .777.416v5.733z"/>
    </g></svg>
));