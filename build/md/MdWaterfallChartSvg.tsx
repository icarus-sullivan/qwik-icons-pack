import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 4h3v16h-3zM3 13h3v7H3zm11-9h3v3h-3zm-4 1h3v4h-3zm-3 5h3v4H7z"/></svg>
));