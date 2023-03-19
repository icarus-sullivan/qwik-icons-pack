import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M55 18v476h18v-37h46v37h274v-37h46v37h18V18h-18v37h-46V18h-18v60H137V18h-18v37H73V18H55zm18 55h46v46H73V73zm320 0h46v46h-46V73zm-256 41h238v156H137V114zm-64 23h46v46H73v-46zm320 0h46v46h-46v-46zM73 201h46v46H73v-46zm320 0h46v46h-46v-46zM73 265h46v46H73v-46zm320 0h46v46h-46v-46zm-256 41h238v156H137V306zm-64 23h46v46H73v-46zm320 0h46v46h-46v-46zM73 393h46v46H73v-46zm320 0h46v46h-46v-46z"/></svg>
));