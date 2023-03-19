import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M174.844 14.875c47.1 42.275 78.124 90.35 95.312 138.063C200.613 126.285 119.028 114.165 32 129.155c96.11-8.437 180.524 13 245.625 47.72 43.035 161.78-70.46 307.352-250.97 192.155 112.67 95.877 201.475 101.817 254.94 60.908 307.477 77.54 238.903-156.1 27.374-260.094-25.886-55.805-69.74-110.694-134.126-154.97zM323 205.345c123.386 90.75 139.423 227.623-38.656 222.436C336.51 385.317 353.196 296.868 323 205.345z"/></svg>
));