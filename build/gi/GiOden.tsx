import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M480.2 31.81L351.5 50.26 461.7 160.5zm-92.7 79.99l-13.1 13.1c2.3 1.8 4.6 3.8 6.7 5.9 2.2 2.2 4.2 4.5 6 6.9l13.2-13.2zm-58.1 15.5c-14 0-28.1 5.4-38.9 16.2-21.5 21.5-21.5 56.2 0 77.8 21.6 21.5 56.3 21.5 77.8 0 21.6-21.6 21.6-56.3 0-77.8-10.8-10.8-24.8-16.2-38.9-16.2zm-127.1 82l-32.6 32.5 100.5 100.5 32.5-32.6zm69.6 18l-13.1 13.1 12.8 12.8 13.1-13.1c-2.4-1.9-4.7-3.9-6.9-6.1-2.1-2.1-4.1-4.4-5.9-6.7zm-71 71.1l-169.09 169 12.72 12.8L213.6 311.1z"/></svg>
));