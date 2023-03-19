import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M256 25c-25.1 0-50.2 3.95-69.2 11.38-18.8 7.34-30.8 17.65-33.9 29.36L138.8 235c29.9 13 73.6 20 117.2 20 43.6 0 87.3-7 117.2-20L359.1 65.74C356 54.03 344 43.72 325.2 36.38 306.2 28.95 281.1 25 256 25zm-73 39h18v160h-18zm-51.6 43.1c-12.1 15.3-21.3 33.6-26.7 55.1C73.84 285.7 73.04 378.9 73.01 487H439c0-108.1-.9-201.3-31.7-324.8-5.4-21.5-14.7-39.9-26.7-55.1L393 255.6v.4c0 11-5.8 20.7-14.1 27.8-8.4 7.2-19.3 12.5-32.1 16.7-25.4 8.5-58 12.5-90.8 12.5s-65.4-4-90.8-12.5c-12.8-4.2-23.7-9.5-32.1-16.7-8.3-7.1-14.1-16.8-14.1-27.8v-.4zm5.8 146.8l-.2 2.3c.1 4.9 2.3 9.2 7.9 14 5.6 4.8 14.7 9.5 25.9 13.3 22.6 7.5 54 11.5 85.2 11.5 31.2 0 62.6-4 85.2-11.5 11.2-3.8 20.3-8.5 25.9-13.3 5.6-4.8 7.8-9.1 7.9-14l-.2-2.3C341.9 266.9 299 273 256 273s-85.9-6.1-118.8-19.1zm25.7 121.6c62.7 21 124.4 20.4 186.3 0l5.6 17c-65.1 21.6-131.4 22.2-197.7 0zm15.4 63.8c53.1 14.3 104.6 13.2 155.4 0l4.6 17.4c-53.6 14-108.5 15.1-164.6 0z"/></svg>
));