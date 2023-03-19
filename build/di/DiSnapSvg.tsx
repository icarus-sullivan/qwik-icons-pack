import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#444444" d="M15.99 25.903l-4.018-1.96 0.005-0.002-0.001-0-4.269 2.082 8.286 4.041 8.299-4.032-4.284-2.122zM7.718 26.036v-4.165l4.108-2.004 4.225 2.084zM20.549 8.896v6.585l-4.593 2.239 4.224 2.103 4.112-2.003v-11.263zM24.293 26.033v0-4.165l-12.831-6.39v-6.585l-3.743-2.339v11.263zM11.45 8.886v-0.001l4.543-2.216 4.544 2.216 3.738-2.336-8.285-4.041-8.283 4.043 3.739 2.337z"/></svg>
));