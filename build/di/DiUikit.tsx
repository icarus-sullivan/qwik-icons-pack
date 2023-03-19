import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#444444" d="M17.859 9.882l4.544 2.479v7.023l-6.61 3.718-6.197-3.718v-5.784l-4.131-2.066v10.742l10.328 6.197 10.742-6.197v-12.394l-4.958-2.479-3.718 2.479zM19.512 6.164l-4.131-2.066-3.718 2.479 4.131 2.066 3.718-2.479z"/></svg>
));