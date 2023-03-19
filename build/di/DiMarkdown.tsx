import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#444444" d="M25.674 9.221h-19.348c-0.899 0-1.63 0.731-1.63 1.63v10.869c0 0.899 0.731 1.63 1.63 1.63h19.348c0.899 0 1.63-0.731 1.63-1.63v-10.869c0-0.899-0.731-1.63-1.63-1.63zM17.413 20.522l-2.826 0.003v-4.239l-2.12 2.717-2.12-2.717v4.239h-2.826v-8.478h2.826l2.12 2.826 2.12-2.826 2.826-0.003v8.478zM21.632 21.229l-3.512-4.943h2.119v-4.239h2.826v4.239h2.119l-3.553 4.943z"/></svg>
));