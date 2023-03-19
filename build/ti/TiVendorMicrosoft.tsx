import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M10 12.5c0-.3-.2-.5-.5-.5h-6c-.3 0-.5.2-.5.5v5c0 .3.2.5.5.6l6 .7c.3 0 .5-.2.5-.4v-5.9zM11.5 12c-.3 0-.5.2-.5.5v5.9c0 .3.2.5.5.6l9 1c.3 0 .5-.2.5-.4v-7c0-.3-.2-.5-.5-.5l-9-.1zM10 4.7c0-.3-.2-.5-.5-.4l-6 .7c-.3 0-.5.2-.5.5v5c0 .3.2.5.5.5h6c.3 0 .5-.2.5-.5v-5.8zM11.5 4.1c-.3 0-.5.3-.5.6v5.9c0 .3.2.5.5.5h9c.3 0 .5-.2.5-.5v-7c0-.3-.2-.5-.5-.4l-9 .9z"/></svg>
));