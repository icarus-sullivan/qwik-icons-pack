import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3H9V5H6.46173L11.3047 9.84298L9.8905 11.2572L5 6.3667V9H3V3Z" fill="currentColor"/>
  <path d="M3 21H9V19H6.3764L11.3046 14.0718L9.89038 12.6576L5 17.548V15H3V21Z" fill="currentColor"/>
  <path d="M15 21H21V15H19V17.5244L14.1332 12.6576L12.719 14.0718L17.6472 19H15V21Z" fill="currentColor"/>
  <path d="M21 3H15V5H17.5619L12.7189 9.84301L14.1331 11.2572L19 6.39032V9H21V3Z" fill="currentColor"/></svg>
));