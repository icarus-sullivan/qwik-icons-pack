import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 8.9c.1.6.2 1.1.4 1.7l.6 1.7-.5.7H10c0 .5-.2 1-.6 1.4-.4.4-.9.6-1.4.6-.5 0-1.1-.2-1.4-.6-.4-.4-.6-.9-.6-1.4H2.5l-.5-.7.6-1.7c.2-.8.4-1.6.4-2.4V6c0-.7.1-1.4.4-2 .3-.7.7-1.2 1.2-1.7s1.1-.8 1.8-1C6.9 1.1 7.5 1 8 1c-.2.3-.4.7-.6 1.1-.2 0-.4 0-.7.2-.5.1-1 .4-1.4.8-.4.3-.8.8-1 1.3-.2.5-.3 1-.3 1.6v2.2c0 .9-.2 1.8-.4 2.7L3.2 12h9.6l-.4-1.1c-.175-.526-.274-1.13-.363-1.674L12 9c.4 0 .7 0 1-.1zM8 14c.2 0 .5-.1.7-.3.2-.2.3-.4.3-.7H7c0 .3.1.5.3.7.2.2.5.3.7.3zm7-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/></svg>
));