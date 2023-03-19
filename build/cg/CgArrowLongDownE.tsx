import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.998 1.02014H8.99801V7.02014H10.9991L11.012 19.1652L9.16751 17.3309L7.75726 18.7491L12.0118 22.9799L16.2427 18.7253L14.8246 17.315L13.012 19.1378L12.9991 7.02014H14.998V1.02014ZM10.998 3.02014H12.998V5.02014H10.998V3.02014Z" fill="currentColor"/></svg>
));