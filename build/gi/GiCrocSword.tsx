import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M59.563 22.22c-19.707 5.93-33.054 18.817-39.407 39.436 52.72 22.56 98.5 67.61 122.188 119.97L83.75 240.218l14.47 14.436 155.968-155.97L239.75 84.22l-60.188 60.186c-25.63-11.673-49.807-28.375-70.218-48.78C87.88 74.167 71.057 49.08 59.564 22.218zm172.062 125.436l-36.47 36.47 58.126 58.905 61.94 61.94 62.374 61.56 61.125 61.94 56.967 56.217V411.72L231.625 147.655zm-52.156 52.156l-31.345 31.375 262.438 262.438h24.343l-9.406-51.938-52.438-9.5-9.093-52.03-52.47-9.5-9.47-52.47-52.467-9.5-9.5-52.437-52.032-9.094-8.56-47.344z"/></svg>
));