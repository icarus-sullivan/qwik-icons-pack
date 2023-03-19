import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M23 23v466h466v-18h-40.893V256h-48v215h-31.675V159.33h-48V471h-31.227V320.242h-48V471H207.2V80.418h-48V471H128V192H80v279H41V23H23z"/></svg>
));