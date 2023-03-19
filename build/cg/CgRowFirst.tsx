import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5">
    <path d="M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H14C14.5523 13 15 12.5523 15 12C15 11.4477 14.5523 11 14 11H6Z" fill="currentColor"/>
    <path d="M6 15C5.44772 15 5 15.4477 5 16C5 16.5523 5.44772 17 6 17H14C14.5523 17 15 16.5523 15 16C15 15.4477 14.5523 15 14 15H6Z" fill="currentColor"/>
  </g>
  <path d="M5 8C5 7.44772 5.44772 7 6 7H18C18.5523 7 19 7.44772 19 8C19 8.55228 18.5523 9 18 9H6C5.44772 9 5 8.55228 5 8Z" fill="currentColor"/></svg>
));