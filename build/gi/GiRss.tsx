import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M27.906 27.28v91.44a365.765 365.765 0 0 1 365.75 365.78h91.438A457.207 457.207 0 0 0 27.906 27.28zm0 154.157v88.813a214.234 214.234 0 0 1 214.22 214.25h88.843A303.063 303.063 0 0 0 27.905 181.437zM88.75 359.125a62.703 62.703 0 0 0-60.844 62.656 62.703 62.703 0 0 0 125.375 0 62.703 62.703 0 0 0-64.53-62.655z"/></svg>
));