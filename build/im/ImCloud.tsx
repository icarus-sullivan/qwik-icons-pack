import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#000000" d="M16 10.274c0-1.283-0.886-2.358-2.078-2.648-0.051-2.011-1.695-3.626-3.717-3.626-1.184 0-2.239 0.555-2.92 1.418-0.382-0.494-0.98-0.812-1.652-0.812-1.153 0-2.088 0.936-2.088 2.089 0 0.101 0.007 0.199 0.021 0.296-0.175-0.032-0.356-0.049-0.54-0.049-1.672-0-3.027 1.356-3.027 3.029s1.355 3.029 3.027 3.029l10.254-0c1.502-0.003 2.719-1.222 2.719-2.726z"/></svg>
));