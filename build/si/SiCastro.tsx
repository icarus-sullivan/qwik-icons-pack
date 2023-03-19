import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em"><title>Castro</title><path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm-.002 13.991a2.052 2.052 0 1 1 0-4.105 2.052 2.052 0 0 1 0 4.105zm4.995 4.853l-2.012-2.791a5.084 5.084 0 1 0-5.982.012l-2.014 2.793A8.526 8.526 0 0 1 11.979 3.42a8.526 8.526 0 0 1 8.526 8.526 8.511 8.511 0 0 1-3.512 6.898z"/></svg>
));