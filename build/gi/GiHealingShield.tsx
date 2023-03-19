import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M256 21.98c-64 48-128 68-224.03 100.02C31.97 234 112 394 256 490c144-96 224-250 224-362-96-32.02-160-58.02-224-106.02zM229 128h54v101h101v54H283v101h-54V283H128v-54h101V128z"/></svg>
));