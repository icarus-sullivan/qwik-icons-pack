import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em"><title>Jamboard</title><path d="M12.143 0v7.877h7.783V0zm0 8.155v7.784h7.783V8.155zm-.28.005a7.926 7.923 0 0 0-7.789 7.917A7.926 7.923 0 0 0 12 24a7.926 7.923 0 0 0 7.918-7.78h-8.056Z"/></svg>
));