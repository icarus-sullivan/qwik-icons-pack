import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1em" viewBox="0 0 24 24" width="1em"><rect fill="none" height="24" width="24" y="0"/><path d="M16,4h-2c-1.1,0-2,0.9-2,2v5c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2V6C18,4.9,17.1,4,16,4z M9.5,16H18v2H9.49 c-0.88,0-1.66-0.58-1.92-1.43L5,8V4h2v4L9.5,16z M8,19h10v2H8V19z"/></svg>
));