import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M156.115 34.48l-36.94.586 10.02 28.995 27.258-2.324zM18 37.727V494h297.682L304 448l-64-64-48-160-88.055-80L96 64zM219.076 98.58L160 112l16.38 30.342 17.65 5.394-1.223 19.672L244.664 144zm34.656 60.99l-19.56 21.05 27.508 12.61 12.855-20.804zm50.907 90.002l-34.38 25.012-11.766 58.662 100.53 22.97-4.163-98.218zm107.475 62.373l-20.886 3.465-15.988 20.033 4.873 21.23 40.848-15.55zm-43.62 95.996l-44.32 5.87 6.858 29.422 36.875-1.396zm37.573 59.982l-32.103 5.375L340.113 494h79.508z"/></svg>
));