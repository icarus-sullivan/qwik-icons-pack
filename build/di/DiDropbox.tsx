import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#444444" d="M4.79 17.467l6.595 4.304 4.616-3.849-6.65-4.104zM11.385 5.865l-6.595 4.301 4.56 3.651 6.65-4.105zM27.21 10.166l-6.595-4.301-4.615 3.848 6.649 4.105zM16 17.922l4.615 3.849 6.595-4.304-4.56-3.65zM16.014 18.75l-4.629 3.839-1.981-1.294v1.451l6.609 3.961 6.609-3.961v-1.451l-1.981 1.294z"/></svg>
));