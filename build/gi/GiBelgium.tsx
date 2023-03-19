import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M23.58 140.134l96.345-50.655c31.372 11.322 59.187 49.92 97.835 5.463 78.342-53.327 130.757-8.132 183.254 36.75L388.6 207.178c57.963-4.414 73.467 31.762 81.942 53.636-29.926 53.54-26.342 95.11 17.879 122.17l-27.811 56.614c-65.426 10.644-105.67-33.69-166.369-52.145l-6.953-74.99c-16.112 16.186-24.636 38.348-51.152 46.682-29.97 9.42-25.983-39.012-31.784-70.024-67.292-2.234-91.53-47.524-116.21-92.372l-30.79 16.886c-38.186-13.53-28.485-46.568-33.77-73.5z"/></svg>
));