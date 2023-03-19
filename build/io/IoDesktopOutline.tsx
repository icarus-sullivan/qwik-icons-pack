import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><title>ionicons-v5-h</title><rect x="32" y="64" width="448" height="320" rx="32" ry="32" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px"/><polygon points="304 448 296 384 216 384 208 448 304 448" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="368" y1="448" x2="144" y2="448" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M32,304v48a32.09,32.09,0,0,0,32,32H448a32.09,32.09,0,0,0,32-32V304Zm224,64a16,16,0,1,1,16-16A16,16,0,0,1,256,368Z"/></svg>
));