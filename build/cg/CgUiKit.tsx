import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 6H10C9.44772 6 9 6.44772 9 7V17C9 17.5523 9.44772 18 10 18H14C14.5523 18 15 17.5523 15 17V7C15 6.44772 14.5523 6 14 6ZM10 4C8.34315 4 7 5.34315 7 7V17C7 18.6569 8.34315 20 10 20H14C15.6569 20 17 18.6569 17 17V7C17 5.34315 15.6569 4 14 4H10Z" fill="currentColor"/>
  <path d="M6 7.45936L3.4932 7.04156C1.6646 6.73679 0 8.14692 0 10.0007V14.918C0 16.7718 1.6646 18.1819 3.4932 17.8772L6 17.4594V15.4318L3.1644 15.9044C2.55487 16.006 2 15.5359 2 14.918V10.0007C2 9.3828 2.55487 8.91276 3.1644 9.01435L6 9.48695V7.45936Z" fill="currentColor"/>
  <path d="M18 7.45936L20.5068 7.04156C22.3354 6.73679 24 8.14692 24 10.0007V14.918C24 16.7718 22.3354 18.1819 20.5068 17.8772L18 17.4594V15.4318L20.8356 15.9044C21.4451 16.006 22 15.5359 22 14.918V10.0007C22 9.3828 21.4451 8.91276 20.8356 9.01435L18 9.48695V7.45936Z" fill="currentColor"/></svg>
));