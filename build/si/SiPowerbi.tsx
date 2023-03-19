import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em"><title>Power BI</title><path d="M21 1v22a1 1 0 0 1-1 1h-3.5V7c0-.827-.673-1.5-1.5-1.5h-2V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zm-6 5H9a1 1 0 0 0-1 1v4.5h2c.827 0 1.5.673 1.5 1.5v11H16V7a1 1 0 0 0-1-1zm-5 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h7V13a1 1 0 0 0-1-1z"/></svg>
));