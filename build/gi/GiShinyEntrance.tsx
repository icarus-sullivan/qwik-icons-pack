import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M242.32 17.94l.002.02v-.02h-.002zm.002.02c-9.777 267.328-40.363 268.207-134.91 84.388 63.917 197.254 43.578 238.65-92.275 152.175 93.67 96.082 122.627 146.377-2.336 133.153 63.004 22.264 124.558 45.33 170.675 94.094 4.806-229.74 138.285-224.31 143.375-.426 35.077-44.42 115.908-71.653 173.023-93.668-162.9 3.97-73.26-108.208-10.514-188.436-141.634 124.216-177.264 99.476-113.883-137.314-82.824 219.86-120.17 213.04-133.155-43.965z"/></svg>
));