import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M9.618 1.76a.75.75 0 01.623.859L9.46 7.5h6.48l.82-5.118a.75.75 0 011.48.237L17.46 7.5h3.79a.75.75 0 010 1.5h-4.03l-.96 6h3.99a.75.75 0 110 1.5h-4.23l-.78 4.869a.75.75 0 01-1.48-.237l.74-4.632H8.02l-.78 4.869a.75.75 0 01-1.48-.237L6.5 16.5H2.745a.75.75 0 010-1.5H6.74l.96-6H3.75a.75.75 0 010-1.5h4.19l.82-5.118a.75.75 0 01.858-.622zM14.741 15l.96-6H9.22l-.96 6h6.48z"/></svg>
));