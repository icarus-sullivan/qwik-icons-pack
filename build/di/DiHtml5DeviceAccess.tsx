import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#444444" d="M21.092 10.206l4.59-4.59h-4.919l-4.763 4.763-4.763-4.763h-4.919l4.59 4.59h-6.224v16.749h8.189l3.126-3.127 3.127 3.127h8.189v-16.749h-6.224zM16 18.907l-4.567 4.569h-3.27v-9.792h15.674v9.792h-3.269l-4.568-4.569z"/></svg>
));