import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M256 16c-7.5 67.5-37.5 150-37.5 180 0 15 15 30 37.5 30s37.5-15 37.5-30c0-30-30-112.5-37.5-180zm-60 202.5c-30 0-112.5 30-180 37.5 67.5 7.5 150 37.5 180 37.5 15 0 30-15 30-37.5s-15-37.5-30-37.5zm120 0c-15 0-30 15-30 37.5s15 37.5 30 37.5c30 0 112.5-30 180-37.5-67.5-7.5-150-37.5-180-37.5zM256 286c-22.5 0-37.5 15-37.5 30 0 30 30 112.5 37.5 180 7.5-67.5 37.5-150 37.5-180 0-15-15-30-37.5-30z"/></svg>
));