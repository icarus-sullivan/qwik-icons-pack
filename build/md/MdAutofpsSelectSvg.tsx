import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1em" viewBox="0 0 24 24" width="1em"><g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="12.03,6.3 11.97,6.3 10.95,9.19 13.05,9.19"/><rect height="5" width="2" x="3" y="17"/><path d="M12,15c3.31,0,6-2.69,6-6s-2.69-6-6-6S6,5.69,6,9S8.69,15,12,15z M11.37,5h1.25l2.63,7h-1.21l-0.63-1.79h-2.83L9.96,12 H8.74L11.37,5z"/><rect height="5" width="2" x="7" y="17"/><rect height="5" width="2" x="11" y="17"/><rect height="5" width="6" x="15" y="17"/></g></g></svg>
));