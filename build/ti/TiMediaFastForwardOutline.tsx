import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g><path d="M14 8.676l4.133 4.025-4.133 4.026v-8.051m-.2-2.276c-.994 0-1.8.807-1.8 1.801v9c0 .994.806 1.799 1.8 1.799.488 0 .93-.195 1.253-.512 2.381-2.314 5.947-5.787 5.947-5.787s-3.566-3.475-5.944-5.789c-.327-.314-.768-.512-1.256-.512zM5 8.676l4.133 4.025-4.133 4.026v-8.051m-.2-2.276c-.994 0-1.8.807-1.8 1.801v9c0 .994.806 1.799 1.8 1.799.488 0 .93-.195 1.253-.512 2.381-2.314 5.947-5.787 5.947-5.787s-3.566-3.474-5.944-5.789c-.327-.314-.768-.512-1.256-.512z"/></g></svg>
));