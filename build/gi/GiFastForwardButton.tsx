import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M44.62 106a26 26 0 0 0-25.69 29.3c16 124 16 117.4 0 241.4A26 26 0 0 0 54.72 404l138.68-57.7c-1.2 9.5-2.4 18.9-3.9 30.4-2.5 19.8 17.3 35 35.8 27.3l252-124c9.7-4 16-13.5 16-24s-6.3-20-16-24l-252-124c-3.2-1.3-6.6-2-10.1-2-15.6.1-27.7 13.8-25.7 29.3 1.5 11.5 2.7 20.9 3.9 30.4L54.72 108a26 26 0 0 0-10.1-2z"/></svg>
));