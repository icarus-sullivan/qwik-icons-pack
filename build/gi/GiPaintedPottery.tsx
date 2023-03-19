import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M240 24c-16 0-48 16-64 32 0 13 0 26 8.582 39h142.836C336 82 336 69 336 56c-16-16-48-32-64-32zm-44.072 89c10.008 26.313 10.699 59.404 2.084 78h115.976c-8.615-18.596-7.924-51.687 2.084-78zm-16.471 96c-36.902 28.393-62.07 65.607-66.684 94h286.454c-4.614-28.393-29.782-65.607-66.684-94zm-66.908 112c5.395 44.88 49.453 88 79.451 103 8.465 8.465 12.43 16.904 14.307 23h99.386c1.878-6.096 5.842-14.535 14.307-23 29.998-15 74.056-58.12 79.451-103zm84.105 144c-11.436 6.993-20.654 7-20.654 7-16 0-16 16 0 16h160c16 0 16-16 0-16 0 0-9.218-.007-20.654-7z"/></svg>
));