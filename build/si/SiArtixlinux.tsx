import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em"><title>Artix Linux</title><path d="M12 0L7.873 8.462l11.358 6.363zM6.626 11.018L.295 24l18.788-7.762zm13.846 6.352l-5.926 3.402L23.706 24Z"/></svg>
));