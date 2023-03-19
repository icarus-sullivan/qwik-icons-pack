import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M256 32L32 224h128l96-80 96 80h128L256 32zm0 176l-52 39H32v18h172l52 39 52-39h172v-18H308l-52-39zM32 288l224 192 224-192H352l-96 80-96-80H32z"/></svg>
));