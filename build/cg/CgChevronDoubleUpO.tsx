import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.8284 12.7071L16.2426 11.2929L12 7.05027L7.75739 11.2929L9.1716 12.7071L12 9.87869L14.8284 12.7071Z" fill="currentColor"/>
  <path d="M14.8284 16.9497L16.2426 15.5355L12 11.2929L7.75739 15.5355L9.1716 16.9497L12 14.1213L14.8284 16.9497Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12ZM3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z" fill="currentColor"/></svg>
));