import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M8 4.999c-1.657 0-3.011 1.344-3.011 3l.005 9c0 2.209 1.793 4 4.002 4l9.003.001c1.655 0 3-1.346 3-3.001.001-7.179-5.819-13-12.999-13zm1.001 14c-1.105.002-2.001-.894-2.001-1.999-.002-1.105.894-2.001 2.001-2.001 1.105-.002 2.001.894 1.999 2.001.002 1.105-.894 2.001-1.999 1.999zm4.499 0c-.829 0-1.5-.671-1.5-1.5 0-1.931-1.57-3.5-3.5-3.5-.829 0-1.5-.671-1.5-1.5s.671-1.5 1.5-1.5c3.584 0 6.5 2.916 6.5 6.5 0 .829-.671 1.5-1.5 1.5zm4 0c-.829 0-1.5-.671-1.5-1.5 0-4.136-3.364-7.5-7.5-7.5-.829 0-1.5-.671-1.5-1.5s.671-1.5 1.5-1.5c5.79 0 10.5 4.71 10.5 10.5 0 .829-.671 1.5-1.5 1.5z"/></svg>
));