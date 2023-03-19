import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M227.752 139.172l51.998 54.29 13-12.45-52-54.29-12.998 12.45zM187.74 256.424l9.683 10.11 56.33-53.952-9.684-10.11-56.33 53.952zM385.14 72.18l-38.345 72.733 24.227 25.294 74.315-35.176-60.198-62.85zm15.994-9.322l54.207 56.595 7.832-35.195-26.54-27.708-35.498 6.308zM48.828 433.784l20.75 21.666 9.39-8.992-20.752-21.666-9.388 8.992zm22.388-21.442l20.75 21.665 264.318-253.164-20.75-21.666L71.215 412.342z"/></svg>
));