import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em"><title>Fandango</title><path d="M13.664 6.956L8.05 8.496 9.19 12.72l5.615-1.54L15.95 15.4l-5.615 1.49 1.093 4.224-5.615 1.49L4.42 17.54c.846-.995 1.194-2.386.846-3.728-.398-1.342-1.392-2.385-2.584-2.832L1.29 5.763 12.57 2.78zm7.106-.198L18.932.05 0 5.068l1.838 6.758c1.093.2 2.087 1.043 2.385 2.236.348 1.193-.1 2.385-.944 3.18l1.788 6.708L24 18.882l-1.79-6.708c-1.142-.2-2.086-1.043-2.434-2.236-.298-1.193.1-2.435.994-3.18z"/></svg>
));