import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#000000" d="M16 10v6h-16v-6h2v4h12v-4zM3 11h10v2h-10zM3.237 8.835l0.433-1.953 9.763 2.164-0.433 1.953zM4.37 4.821l0.845-1.813 9.063 4.226-0.845 1.813zM15.496 5.648l-1.218 1.587-7.934-6.088 0.88-1.147h0.91z"/></svg>
));