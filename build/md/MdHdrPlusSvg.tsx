import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1em" viewBox="0 0 24 24" width="1em"><g><rect fill="none" height="24" width="24"/></g><g><g><rect height="1" width="2" x="8.5" y="14.5"/><rect height="3" width="1.5" x="14.5" y="7.5"/><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,15.5c0,0.6-0.4,1.1-0.9,1.4L12,19h-1.5l-0.9-2 H8.5v2H7v-6h3.5c0.8,0,1.5,0.7,1.5,1.5V15.5z M12,12h-1.5V9.5h-2V12H7V6h1.5v2h2V6H12V12z M17.5,16H16v1.5h-1.5V16H13v-1.5h1.5V13 H16v1.49h1.5V16z M17.5,10.5c0,0.8-0.7,1.5-1.5,1.5h-3V6h3c0.8,0,1.5,0.7,1.5,1.5V10.5z"/></g></g></svg>
));