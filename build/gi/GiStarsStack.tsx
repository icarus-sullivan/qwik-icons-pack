import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M256.65 38.984l-49.697 100.702-111.13 16.146 80.413 78.385-18.982 110.68 99.396-52.256 99.397 52.256-18.983-110.68 80.413-78.384-111.127-16.146-49.7-100.702zM112 308.826l-26.674 54.05-59.646 8.665 43.16 42.073-10.188 59.403L112 444.97l53.348 28.046-10.188-59.403 43.16-42.072-59.646-8.665L112 308.825zm288 0l-26.674 54.05-59.646 8.665 43.16 42.073-10.188 59.403L400 444.97l53.348 28.046-10.188-59.403 43.16-42.072-59.646-8.665L400 308.825z"/></svg>
));