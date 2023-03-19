import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M256 23C127.425 23 23 127.425 23 256s104.425 233 233 233 233-104.425 233-233S384.575 23 256 23zM149.268 71.287h213.168L256 256h213.17L362.732 440.713 256 256 149.564 440.713 42.83 256H256L149.268 71.287z"/></svg>
));