import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#444444" d="M11.067 10.423l-4.817 5.863 4.817 5.862 1.139-1.874-3.246-3.989 3.246-3.989zM13.175 22.008h2.114l3.361-11.477h-2.115zM20.933 10.423l-1.139 1.874 3.246 3.989-3.246 3.989 1.139 1.874 4.817-5.862z"/></svg>
));