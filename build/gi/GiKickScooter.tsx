import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M306.9 40v18h72.4l43.9 263.9L350.3 424h-203c-2.7-24-16.2-46.5-36.8-59.8-23.17-15-55.72-17.3-88.39 3.2l9.58 15.2c27.83-17.5 51.27-14.8 69.01-3.3 15.1 9.8 25.7 26.9 28.5 44.7h-24.3c-4.1-17.2-19.46-30-38-30-21.65 0-39 17.4-39 39s17.35 39 39 39c18.54 0 33.9-12.8 38-30h254.6l67.9-95.1 8.4 50.1c-14.1 5.9-23.9 19.8-23.9 36 0 21.6 17.4 39 39 39s39-17.4 39-39c0-20.7-16-37.5-36.3-38.9L397.5 58h21.4V40z"/></svg>
));