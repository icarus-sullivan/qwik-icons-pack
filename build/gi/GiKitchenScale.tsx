import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M50.73 121l49.57 62h311.4l49.6-62H50.73zM245 201v46h22v-46h-22zm-126 64L75.53 439H436.5L393 265H119zm137 14c40.2 0 73 32.8 73 73s-32.8 73-73 73-73-32.8-73-73 32.8-73 73-73zm0 18c-30.5 0-55 24.5-55 55s24.5 55 55 55 55-24.5 55-55-24.5-55-55-55zm16 12.5l-5.9 65.7-30.2-10.5 36.1-55.2zM41 457v30h430v-30H41z"/></svg>
));