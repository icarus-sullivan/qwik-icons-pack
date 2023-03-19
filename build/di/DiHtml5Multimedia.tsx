import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#444444" d="M27.33 7.595h-5.003l-3.535 3.535h5.003zM16.021 11.13l3.535-3.535h-5.002l-3.537 3.535zM23.804 21.438h-15.608v-10.274l3.568-3.569h-5.004l-2.103 2.103v15.278h22.685v-13.846h-3.538z"/></svg>
));