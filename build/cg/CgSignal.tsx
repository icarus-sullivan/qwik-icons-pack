import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7Z" fill="currentColor"/>
  <path d="M7 15C7 14.4477 7.44772 14 8 14C8.55228 14 9 14.4477 9 15V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V15Z" fill="currentColor"/>
  <path d="M12 10C11.4477 10 11 10.4477 11 11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V11C13 10.4477 12.5523 10 12 10Z" fill="currentColor"/></svg>
));