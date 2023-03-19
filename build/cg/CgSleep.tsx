import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM16.899 17C15.6364 18.2372 13.9073 19 12 19C10.0927 19 8.36355 18.2372 7.10102 17H16.899ZM18.3264 15C18.7583 14.0907 19 13.0736 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 13.0736 5.24169 14.0907 5.67363 15H18.3264Z" fill="currentColor"/></svg>
));