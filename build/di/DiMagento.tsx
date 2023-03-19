import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#444444" d="M26.941 10.161l-10.934-6.753-10.966 6.764v12.228l2.924 1.743v-12.287l8.041-4.992 8.027 4.992v12.317l2.924-1.772v-12.228zM17.595 15.458v10.073l-1.588 1.004-1.602-1.004v-14.325l-3.574 2.215v12.524l5.176 3.22 5.162-3.22v-12.524l-3.574-2.215z"/></svg>
));