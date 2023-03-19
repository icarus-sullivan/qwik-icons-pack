import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M256 16C164.8 16-10.99 191.2 56.01 336c32.8 67.2 64.59 89.6 96.99 144h23c-23.7-72.7-108.09-117.2-98.99-190.1C87.41 207.4 176 128 256 112c80 16 168.6 95.4 179 177.9 9.1 72.9-75.3 117.4-99 190.1h23c32.4-54.4 64.2-76.8 97-144C523 191.2 347.2 16 256 16zm120 188.4l-81.1 60.8 70.9-10.1zm-239.8.1l10.1 50.6 70.8 10.1zM256 266.7c-39.2 26.1-49.5 30.7-98.6 43.1L256 493l98.6-183.2c-49.1-12.4-59.4-17-98.6-43.1zm-23.5 98.5l16 48-17 5.6-16-48zm47 0l17 5.6-16 48-17-5.6z"/></svg>
));