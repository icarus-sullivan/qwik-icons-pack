import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M224 60.04 113 74.4l25.6 1.78 85.7-4.91 104.2 6.45 10.6-2.89 42.7-1.4zM92.14 81.84 98.8 352.2 271.9 378l-172.48-5.9-7.35 66.7 201.73 30.7 10.6-95.3-7-279.51-74.3-5.08c-.9 37.49-55.9 34.19-55.4-3.29zm317.96 2.48-49 1.84 2.7 270.94 43.4 68.7-6.6-65.5zm-65.8 2.84-24.2 7.53L322 371.9l-11.2 81.8 36.7-96.6zm13 290.34-34 88 76.5-24.3z"/></svg>
));