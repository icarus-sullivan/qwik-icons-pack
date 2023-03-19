import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4388 7L14.8387 4H7V10H14.8387L12.4388 7ZM19 12H7V22H5V2H19L15 7L19 12Z" fill="currentColor"/></svg>
));