import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.9479 3.20946C12.7721 2.83236 12.391 2.61645 11.9997 2.63269C11.6086 2.61666 11.2278 2.83255 11.0521 3.20948L5.1354 15.8978C4.90199 16.3983 5.11855 16.9933 5.61909 17.2267C6.11963 17.4601 6.71461 17.2436 6.94801 16.743L8.39869 13.632H15.6013L17.052 16.743C17.2854 17.2435 17.8804 17.4601 18.3809 17.2267C18.8814 16.9933 19.098 16.3983 18.8646 15.8978L12.9479 3.20946ZM14.6687 11.632L12 5.909L9.33131 11.632H14.6687Z" fill="currentColor"/>
  <path d="M6 19.3682C5.44772 19.3682 5 19.816 5 20.3682C5 20.9205 5.44772 21.3682 6 21.3682H18C18.5523 21.3682 19 20.9205 19 20.3682C19 19.816 18.5523 19.3682 18 19.3682H6Z" fill="currentColor"/></svg>
));