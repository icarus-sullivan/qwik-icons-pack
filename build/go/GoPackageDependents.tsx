import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M9.126.64a1.75 1.75 0 011.75 0l8.25 4.762c.103.06.199.128.286.206a.748.748 0 01.554.96c.023.113.035.23.035.35v3.332a.75.75 0 01-1.5 0V7.64l-7.75 4.474V22.36a.75.75 0 01-1.125.65l-8.75-5.052a1.75 1.75 0 01-.875-1.515V6.917c0-.119.012-.236.035-.35a.748.748 0 01.554-.96 1.75 1.75 0 01.286-.205L9.126.639zM1.501 7.638v8.803c0 .09.048.172.125.216l7.625 4.402v-8.947l-7.75-4.474zm8.5 3.175L2.251 6.34l7.625-4.402a.25.25 0 01.25 0l7.625 4.402-7.75 4.474z"/><path d="M21.347 17.5l-2.894-2.702a.75.75 0 111.023-1.096l4.286 4a.75.75 0 010 1.096l-4.286 4a.75.75 0 11-1.023-1.096L21.347 19h-6.633a.75.75 0 010-1.5h6.633z"/></svg>
));