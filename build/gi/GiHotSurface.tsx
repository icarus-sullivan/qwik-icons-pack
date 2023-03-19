import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M106 53.5c45 150-45 150 0 300h60c-45-150 45-150 0-300h-60zm120 0c45 150-45 150 0 300h60c-45-150 45-150 0-300h-60zm120 0c45 150-45 150 0 300h60c-45-150 45-150 0-300h-60zm-270 315c-15 0-30 30-30 30-30 0-30 0-30 30v30h480v-30c0-30 0-30-30-30 0 0-15-30-30-30-30 0-30 45-60 45s-30-45-60-45-30 45-60 45-30-45-60-45-30 45-60 45-30-45-60-45z"/></svg>
));