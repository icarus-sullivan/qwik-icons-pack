import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M149.9 27.2L34.25 56.74v76.76L157.8 93.85l46.7-44.67-54.6-21.98zm132.8 57c-7.4.18-10.1 1.88.9 7.13C346.9 121.6 441.7 206.8 391.3 216.9 232.2 249 130.4 292.3 48.51 390.8 25.42 418.6 18 494.8 18 494.8h432.6s-139-21.1-147.8-75.7c-14.9-92.2 194.5-102.7 196.5-199.9.9-43.2-88.3-124.99-184.4-132.52-5.6-.44-22.7-2.71-32.2-2.48zm-163.5 40.9l-32.69 10.5v122.2l35.99-10-3.3-122.7z"/></svg>
));