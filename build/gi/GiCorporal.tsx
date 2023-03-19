import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M255.978 93.103C226.38 140.78 161.383 218.66 106 257.6v52.892c53.113-38.92 105.113-92.537 140.56-145.71l9.44-14.158 9.44 14.16c35.333 53 87.963 106.296 140.56 145.47v-52.593c-56.39-38.937-120.654-116.944-150.022-164.557zm0 108.403C226.38 249.183 161.384 327.066 106 366.01v52.887c53.113-38.92 105.113-92.537 140.56-145.71L256 259.03l9.44 14.158c35.333 53 87.963 106.298 140.56 145.473v-52.594c-56.39-38.937-120.654-116.947-150.022-164.56z"/></svg>
));