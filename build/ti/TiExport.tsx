import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M8 16.5v.5c1.691-2.578 3.6-3.953 6-4v3c0 .551.511 1 1.143 1 .364 0 .675-.158.883-.391 1.933-2.029 5.974-6.109 5.974-6.109s-4.041-4.082-5.975-6.137c-.208-.205-.518-.363-.882-.363-.632 0-1.143.447-1.143 1v3c-4.66 0-6 4.871-6 8.5zM5 21h14c.553 0 1-.448 1-1v-6.046c-.664.676-1.364 1.393-2 2.047v2.999h-12v-12h7v-2h-8c-.553 0-1 .448-1 1v14c0 .552.447 1 1 1z"/></svg>
));