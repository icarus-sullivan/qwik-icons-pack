import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="m21 15.344-2.121 2.121-3.172-3.172-1.414 1.414 3.172 3.172L15.344 21H21zM3 8.656l2.121-2.121 3.172 3.172 1.414-1.414-3.172-3.172L8.656 3H3zM21 3h-5.656l2.121 2.121-3.172 3.172 1.414 1.414 3.172-3.172L21 8.656zM3 21h5.656l-2.121-2.121 3.172-3.172-1.414-1.414-3.172 3.172L3 15.344z"/></svg>
));