import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="1em" width="1em"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm376 272h-48.1c-4.2 0-7.8-3.2-8.1-7.4C604 636.1 562.5 597 512 597s-92.1 39.1-95.8 88.6c-.3 4.2-3.9 7.4-8.1 7.4H360a8 8 0 0 1-8-8.4c4.4-84.3 74.5-151.6 160-151.6s155.6 67.3 160 151.6a8 8 0 0 1-8 8.4zm24-224a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"/></svg>
));