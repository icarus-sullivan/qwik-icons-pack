import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em"><g>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zm1.69-6.929l-.975.563 1 1.732.976-.563c.501.51 1.14.887 1.854 1.071V16h2v-1.126a3.996 3.996 0 0 0 1.854-1.071l.976.563 1-1.732-.975-.563a4.004 4.004 0 0 0 0-2.142l.975-.563-1-1.732-.976.563A3.996 3.996 0 0 0 13 7.126V6h-2v1.126a3.996 3.996 0 0 0-1.854 1.071l-.976-.563-1 1.732.975.563a4.004 4.004 0 0 0 0 2.142zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
    </g></svg>
));