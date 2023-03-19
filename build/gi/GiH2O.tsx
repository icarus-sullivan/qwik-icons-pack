import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M256 57c-65.8 0-119 53.2-119 119s53.2 119 119 119 119-53.2 119-119S321.8 57 256 57zm-91.5 220.9l-46.9 59.6c5.2 3.1 10 6.9 14.2 11.2l46.9-59.7c-5-3.4-9.8-7.1-14.2-11.1zm183 0c-4.4 4-9.2 7.7-14.2 11.2l46.9 59.6c4.2-4.3 9-8.1 14.2-11.2zM80 345c-30.48 0-55 24.5-55 55s24.52 55 55 55c30.5 0 55-24.5 55-55s-24.5-55-55-55zm352 0c-30.5 0-55 24.5-55 55s24.5 55 55 55 55-24.5 55-55-24.5-55-55-55z"/></svg>
));