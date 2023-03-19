import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M255.977 121.95C226.38 169.626 161.382 247.503 106 286.446v52.48c38 29.073 86 51.098 150 51.124 64 .027 112-22.05 150-51.124V286.51c-56.388-38.936-120.655-116.947-150.023-164.56zm.023 57.523l9.44 14.158c27.838 41.76 66.42 83.7 107.26 118.774-46.064 25.842-81.895 37.647-116.7 37.647-34.718 0-70.455-11.744-116.352-37.45 40.87-35.015 79.02-77.128 106.913-118.97l9.44-14.157z"/></svg>
));