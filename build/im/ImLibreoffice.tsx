import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#000000" d="M8.354 0.354c-0.194-0.194-0.579-0.354-0.854-0.354h-6c-0.275 0-0.5 0.225-0.5 0.5v15c0 0.275 0.225 0.5 0.5 0.5h12c0.275 0 0.5-0.225 0.5-0.5v-9c0-0.275-0.159-0.659-0.354-0.854l-5.293-5.293zM13 15h-11v-14h5.487c0.046 0.008 0.131 0.043 0.169 0.070l5.274 5.274c0.027 0.038 0.062 0.123 0.070 0.169v8.487zM13.5 0h-3c-0.275 0-0.341 0.159-0.146 0.354l3.293 3.293c0.194 0.194 0.354 0.129 0.354-0.146v-3c0-0.275-0.225-0.5-0.5-0.5z"/></svg>
));