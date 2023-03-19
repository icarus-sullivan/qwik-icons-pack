import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.17154 11.508L7.75732 10.0938L12 5.85114L16.2426 10.0938L14.8284 11.508L12 8.67956L9.17154 11.508Z" fill="currentColor"/>
  <path d="M9.17154 12.492L7.75732 13.9062L12 18.1489L16.2426 13.9062L14.8284 12.492L12 15.3204L9.17154 12.492Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" fill="currentColor"/></svg>
));