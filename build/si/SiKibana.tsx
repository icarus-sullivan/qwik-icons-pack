import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em"><title>Kibana</title><path d="M2.625 0v21.591L21.375 0zm10.864 12.47L3.477 24h17.522a18.755 18.755 0 0 0-7.51-11.53z"/></svg>
));