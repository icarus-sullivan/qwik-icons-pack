import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M159.4 26.23c-51.4.6-79.6 56.3-79.3 86.97 1.5 47.3 34.2 79.4 74.8 114.8 35.4 30.8 76.1 63.2 100.9 110 .1-.1.1-.2.2-.3.1.1.1.2.2.3 24.8-46.8 65.5-79.2 100.9-110 40.6-35.4 73.3-67.5 74.8-114.8.3-30.67-27.9-86.37-79.3-86.97-38-.5-82.6 25.7-96.6 67.7-14-42-58.6-68.2-96.6-67.7zM23 375v114h466V375H23zm18 18h430v78H334v-60H41v-18z"/></svg>
));