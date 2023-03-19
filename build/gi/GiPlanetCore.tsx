import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M256 16A240 240 0 0 0 16 256a240 240 0 0 0 240 240 240 240 0 0 0 240-240A240 240 0 0 0 256 16zm-9 14.73v86.342c-35.304 2.47-124.423 31.35-127.033 129.928H37.605C39.993 81.83 189.513 34.292 247 30.73zm18 .874c.596.158 1.148.33 1.62.52 78.82 31.677 84.33 217.118 77.042 268.052l-36.498-22.813c3.486-34.36-.902-132.647-42.164-156.877V31.604zM41.258 265h85.996c19.485 15.47 77.33 34.583 166.902 25.46l37.7 23.563C163.39 333.03 61.252 291.425 41.26 265z"/></svg>
));