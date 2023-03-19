import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.18535 1.08325L7.62706 1.08717L1.71796 5.12422L1.72152 5.95233L7.63062 9.91528L8.1818 9.91912L14.2727 5.95617L14.2762 5.1203L8.18535 1.08325ZM2.89198 5.53323L7.91335 2.10268L13.0891 5.5332L7.91329 8.90079L2.89198 5.53323ZM7.63059 12.4153L1.79257 8.5H3.58794L7.91326 11.4008L12.3716 8.5H14.2053L13.4056 9.02031C13.2722 9.00688 13.1369 9 13 9C11.224 9 9.71839 10.1574 9.19622 11.7591L8.18177 12.4191L7.63059 12.4153ZM9.00447 13.1908L7.91326 13.9008L3.58794 11H1.79257L7.63059 14.9153L8.18177 14.9191L9.20113 14.2559C9.08965 13.9185 9.02187 13.5612 9.00447 13.1908Z"/><circle cx="13" cy="13" r="3"/></svg>
));