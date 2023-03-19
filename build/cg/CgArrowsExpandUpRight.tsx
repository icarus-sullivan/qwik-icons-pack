import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 5V3L21 3V11H19V6.41424L13.6361 11.7782C13.2456 12.1687 12.6124 12.1687 12.2219 11.7782C11.8314 11.3876 11.8314 10.7545 12.2219 10.3639L17.5858 5L13 5Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5 13C3.89543 13 3 13.8954 3 15L3 19C3 20.1046 3.89543 21 5 21H9C10.1046 21 11 20.1046 11 19V15C11 13.8954 10.1046 13 9 13H5ZM5 15L5 19H9V15H5Z" fill="currentColor"/></svg>
));