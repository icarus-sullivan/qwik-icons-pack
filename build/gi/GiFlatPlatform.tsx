import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M256.5 87.9L39.7 213.5l216.9 125.7 216.6-125.7L256.5 87.9zM31 227.4v71l218 125.7v-71L31 227.4zm450 .2L265 353.1V424l216-125.5v-70.9z"/></svg>
));