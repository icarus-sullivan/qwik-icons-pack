import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M237.688 20.25L18.344 288.344l174.625 63.094c-8.217 8.152-18.068 15.154-29.876 20.78L276.5 399.282c-10.966 11.894-24.456 22.08-41 30.22l125.563 12.406c-16.877 21.158-38.8 38.795-67.063 52.03l204.688-29.623L412.5 273.125c-1.632 34.214-5.993 66.51-14.688 95.813L320 270.03c-1.03 21.615-3.57 42.188-8.438 61.22l-80.843-72.47c-1.363 11.97-3.38 23.5-6.25 34.408l-45.94-28.657L496.69 20.25h-90.75l-284.72 250.844 158.313 87.03-211.655-76.78L318.5 20.25h-80.813z"/></svg>
));