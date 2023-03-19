import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M436 439.525V298.348c-30-28.235-60-56.47-60-84.706 0-56.47 30-141.176 120-169.41 0 0-30-28.237-60-28.237h-90c0 56.47-60 84.706-90 84.706s-90-28.234-90-84.705H76c-30 0-60 28.236-60 28.236 90 28.236 120 112.942 120 169.412 0 28.236-30 56.47-60 84.706v141.177c60 28.235 120 56.47 180 56.47s120-28.235 180-56.47z"/></svg>
));