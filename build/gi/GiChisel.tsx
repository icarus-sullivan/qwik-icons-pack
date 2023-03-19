import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M426.2 30.65L405 51.82l55.2 55.08 21.2-21.1-55.2-55.15zM173.6 55.12c-13.3 19.1-31.3 28.5-50 31.6-12.3 2-24.91 1.5-37.41.4 10.5 10.6 19.91 22.18 24.21 36.18 36.7.2 69.2-9.9 98.6-36.28-8.9-13.4-21.3-23.1-35.4-31.9zm218.7 9.47L231.6 225.3c0 10.1-.1 20.4-1.5 30-1.1 7.8-3.1 15.4-7 21.9l11.7 11.7c6.5-3.9 14.1-5.9 21.9-7 9.6-1.4 19.9-1.5 30-1.5l160.7-160.7-55.1-55.11zM188.6 268.2l-21.2 21.2 55.2 55.2 21.2-21.2-55.2-55.2zm-24.8 43c-28.8 11.1-48.7 30.5-59.4 41.2l-79.14 79.2c-.71.7-1.72 2.6-1.98 6.2-.26 3.7.28 8.5 1.52 13.5 2.48 9.9 8.22 20.5 11.79 24.1 3.55 3.6 14.15 9.3 24.08 11.8 4.97 1.2 9.83 1.8 13.45 1.5 3.61-.2 5.59-1.3 6.3-2l79.18-79.2c10.7-10.6 30.1-30.5 41.2-59.3l-37-37zM314 375.6c-17.2 13-25.1 26.3-27 37.2-2.1 11.1 1.5 19.7 8.2 25.5l40.2 13.7c-3.9-9.7-6.8-19.9-5.8-30.8.8-9.2 4.8-18.5 12.6-26.2 3.2-3.2 7-6 11.3-8.7L314 375.6zm85.4 40.5c-17.7 1.8-36.1 5-52 9.7.2 7.8 3.6 17.2 7.9 27.1 22.7-9.5 54.8-17.6 87.9-19.6-15.9-8.6-28.4-13.7-43.8-17.2z"/></svg>
));