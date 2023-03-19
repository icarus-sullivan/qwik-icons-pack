import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em"><title>Unraid</title><path d="M11.406 8.528h1.17v6.926h-1.17zM1.17 15.454H0V8.528h1.17zm4.534.828h1.17v2.645h-1.17zm-2.86-2.969h1.169v4.282h-1.17zm5.703 0h1.17v4.282h-1.17zM22.83 8.528H24v6.926h-1.17zm-4.534-.81h-1.17V5.073h1.17zm2.86 2.95h-1.169V6.406h1.17zm-5.72 0h-1.17V6.406h1.17z"/></svg>
));