import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M25 41v46h94V41H25zm368 0v46h94V41h-94zM137 55v18h110v110h18V73h110V55H137zM73 201v30h366v-30H73zm32 48v190h302V249H105zm151 17l96 150H160l96-150zm-9 38v64h18v-64h-18zm9 75a12 12 0 0 0-12 12 12 12 0 0 0 12 12 12 12 0 0 0 12-12 12 12 0 0 0-12-12zM73 457v30h366v-30H73z"/></svg>
));