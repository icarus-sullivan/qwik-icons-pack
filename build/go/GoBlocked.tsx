import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7.638 2.22a.75.75 0 01.53-.22h7.664a.75.75 0 01.53.22l5.418 5.418c.141.14.22.332.22.53v7.664a.75.75 0 01-.22.53l-5.418 5.418a.75.75 0 01-.53.22H8.168a.75.75 0 01-.53-.22l-5.42-5.418a.75.75 0 01-.219-.53V8.168a.75.75 0 01.22-.53l5.418-5.42zM8.48 3.5L3.5 8.48v7.04l4.98 4.98h7.04l4.98-4.98V8.48L15.52 3.5H8.48zM7 11.75a.75.75 0 01.75-.75h8.5a.75.75 0 010 1.5h-8.5a.75.75 0 01-.75-.75z"/></svg>
));