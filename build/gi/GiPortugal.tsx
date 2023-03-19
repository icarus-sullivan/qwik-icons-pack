import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M182.6 55.13l66-34.5-7.5 30.75 117.8-10.07-14 39.94 33.1-2.34c-47 52.19-45.7 119.19-60.8 178.49l-39.8-.7 40.5 57c-14.5 61.6-21 113.2-27.7 165-35.8 10.6-74.9 15.9-120.7 10.5 24.6-43 19.6-86 26.2-129l-33 .7-25.5-33.7c30.1-84.1 76-176.6 45.4-272.07z"/></svg>
));