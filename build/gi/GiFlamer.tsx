import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M166 121c0 90 90 105 90 180 0 30-30 75-75 75s-75-45-45-120c-45 30-60 60-60 90 0 75 75 150 180 150s180-45 180-135c.67-133.125-153.4-177.596-195-240-30-45-15-75 15-105-60 15-90 57-90 105z"/></svg>
));