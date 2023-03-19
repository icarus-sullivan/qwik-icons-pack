import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 12L18 7H8L6 12L8 17H18L16 12ZM15.0459 15L13.8459 12L15.0459 9H9.35407L8.15407 12L9.35407 15H15.0459Z" fill="currentColor"/></svg>
));