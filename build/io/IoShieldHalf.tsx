import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path d="M48.9,112.37C138.32,96.33,175.29,84.45,256,48c80.71,36.45,117.68,48.33,207.1,64.37C479.3,369.13,271.42,457.79,256,464,240.58,457.79,32.7,369.13,48.9,112.37Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M256,48c80.71,36.45,117.68,48.33,207.1,64.37C479.3,369.13,271.42,457.79,256,464Z"/></svg>
));