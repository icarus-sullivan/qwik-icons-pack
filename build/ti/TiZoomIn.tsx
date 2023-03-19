import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M13 11h-2v-2c0-.276-.224-.5-.5-.5s-.5.224-.5.5v2h-2c-.276 0-.5.224-.5.5s.224.5.5.5h2v2c0 .276.224.5.5.5s.5-.224.5-.5v-2h2c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zM18.432 14.97l-.536-.537-.749-.75c.227-.688.354-1.42.354-2.183 0-3.859-3.141-7-7-7s-7 3.141-7 7 3.141 7 7 7c.763 0 1.496-.127 2.184-.354l.75.749 1.512 1.51.061.061.064.055c.601.506 1.348.784 2.104.784 1.726 0 3.13-1.404 3.13-3.131 0-.84-.328-1.628-.924-2.218l-.95-.986zm-12.932-3.47c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5z"/></svg>
));