import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M196 496c-16.62 0-30-13.38-30-30V346H46c-16.62 0-30-13.38-30-30V196c0-16.62 13.38-30 30-30h120V46c0-16.62 13.38-30 30-30h120c16.62 0 30 13.38 30 30v120h120c16.62 0 30 13.38 30 30v120c0 16.62-13.38 30-30 30H346v120c0 16.62-13.38 30-30 30zm0-135h120l-60-60zm0-75h120l-60-60zm0-75h120l-60-60z"/></svg>
));