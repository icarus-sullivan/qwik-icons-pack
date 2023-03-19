import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.405 6.252L8 1l1.595 5.252H15l-4.373 3.4L12.25 15 8 11.695 3.75 15l1.623-5.348L1 6.252h5.405zM8 10.032l1.915 1.49-.731-2.41 1.915-1.49H8.732L8 5.214v4.82zm0-7.525zm5.652 4.215H9.28h4.372z"/></svg>
));