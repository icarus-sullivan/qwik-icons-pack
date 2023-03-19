import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M238 16a12 12 0 0 0-12 12v50.5C140.87 92.783 76 166.81 76 256s64.87 163.217 150 177.5V484a12 12 0 0 0 12 12h36a12 12 0 0 0 12-12v-50.5c85.13-14.283 150-88.31 150-177.5S371.13 92.783 286 78.5V28a12 12 0 0 0-12-12h-36zm-12 155.125V199a12 12 0 0 0 12 12h36a12 12 0 0 0 12-12v-27.875c34.955 12.356 60 45.69 60 84.875 0 39.186-25.045 72.52-60 84.875V313a12 12 0 0 0-12-12h-36a12 12 0 0 0-12 12v27.875c-34.955-12.356-60-45.69-60-84.875 0-39.186 25.045-72.52 60-84.875z"/></svg>
));