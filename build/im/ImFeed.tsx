import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#000000" d="M6 8c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM10.38 3.602c1.56 0.846 2.62 2.498 2.62 4.398s-1.059 3.552-2.62 4.398c0.689-1.096 1.12-2.66 1.12-4.398s-0.431-3.302-1.12-4.398zM4.5 8c0 1.738 0.431 3.302 1.12 4.398-1.56-0.846-2.62-2.498-2.62-4.398s1.059-3.552 2.62-4.398c-0.689 1.096-1.12 2.66-1.12 4.398zM1.5 8c0 2.686 0.85 5.097 2.198 6.746-2.223-1.421-3.698-3.911-3.698-6.746s1.474-5.325 3.698-6.746c-1.348 1.649-2.198 4.060-2.198 6.746zM12.302 1.254c2.223 1.421 3.698 3.911 3.698 6.746s-1.474 5.325-3.698 6.746c1.348-1.649 2.198-4.060 2.198-6.746s-0.85-5.097-2.198-6.746z"/></svg>
));