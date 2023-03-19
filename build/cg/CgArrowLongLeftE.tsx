import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.26323 7.75737L1.01343 11.9928L5.24893 16.2426L6.66553 14.8308L4.85123 13.0104L16.9685 13.0519L16.9596 15.0507L22.9595 15.0777L22.9865 9.07773L16.9865 9.05079L16.9775 11.0519L4.83252 11.0103L6.67505 9.17397L5.26323 7.75737ZM20.9775 11.0687L20.9685 13.0687L18.9685 13.0597L18.9775 11.0597L20.9775 11.0687Z" fill="currentColor"/></svg>
));