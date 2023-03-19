import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.14648 11.7071C8.36544 12.4882 8.36544 13.7545 9.14648 14.5356C9.92753 15.3166 11.1939 15.3166 11.9749 14.5356L12 14.5104L12.0251 14.5355C12.8061 15.3166 14.0725 15.3166 14.8535 14.5355C15.6346 13.7545 15.6346 12.4881 14.8535 11.7071L12.0251 8.87865L12 8.90377L11.9749 8.87871L9.14648 11.7071Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3 20C3 21.6569 4.34315 23 6 23H18C19.6569 23 21 21.6569 21 20V4C21 2.34315 19.6569 1 18 1H6C4.34315 1 3 2.34315 3 4V20ZM6 21H18C18.5523 21 19 20.5523 19 20V4C19 3.44772 18.5523 3 18 3H6C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21Z" fill="currentColor"/></svg>
));