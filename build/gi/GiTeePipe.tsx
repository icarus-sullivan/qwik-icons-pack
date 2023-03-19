import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M25 115v154h30V115zm432 0v154h30V115zM73 128v128h103.8l40-53.4 14.4 10.8-39.2 52.3V439h128V265.7l-39.2-52.3 14.4-10.8 40 53.4H439V128zm23 23h320v18H96zm119 137h18v128h-18zm-36 169v30h154v-30z"/></svg>
));