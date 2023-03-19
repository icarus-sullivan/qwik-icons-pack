import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M443.535 120.186l-112 64 8.93 15.628 112-64-8.93-15.628zM297 153v206h17.973V153H297zm-18 9.367L73 235.072v41.856l206 72.705V162.367zM39 240v32h18v-32H39zm297 7v18h128v-18H336zM99.332 300.89l-14.8 40.215L181.02 379.7l16.11-40.364-16.716-6.672-9.434 23.635-63.51-25.405 8.755-23.786-16.893-6.22zm241.133 11.296l-8.93 15.628 112 64 8.93-15.628-112-64z"/></svg>
));