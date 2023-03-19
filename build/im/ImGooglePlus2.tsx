import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#000000" d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM6 12c-2.212 0-4-1.787-4-4s1.788-4 4-4c1.081 0 1.984 0.394 2.681 1.047l-1.088 1.044c-0.297-0.284-0.816-0.616-1.594-0.616-1.366 0-2.481 1.131-2.481 2.525s1.116 2.525 2.481 2.525c1.584 0 2.178-1.137 2.269-1.725h-2.269v-1.372h3.778c0.034 0.2 0.063 0.4 0.063 0.663 0 2.287-1.531 3.909-3.841 3.909zM14 8h-1v1h-1v-1h-1v-1h1v-1h1v1h1v1z"/></svg>
));