import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M105 105v302h151c148 0 148-302 0-302H105zm-89 46v18h71v-18H16zm400 82c-12.8 0-23 10.2-23 23s10.2 23 23 23 23-10.2 23-23-10.2-23-23-23zm40 14c.6 2.9 1 5.9 1 9 0 3.1-.4 6.1-1 9h40v-18h-40zM16 343v18h71v-18H16z"/></svg>
));