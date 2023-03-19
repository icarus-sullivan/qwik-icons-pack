import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M279 31.1L263.8 183H282l15-150.1-18-1.8zm80.5 14.05L313.6 183h18.8l44.1-132.15-17-5.7zM118.3 189.6l-77.21 92.6 13.82 11.6L123 212.1l-3.8-18.2-.9-4.3zm275.4 0l-4.7 22.5 68.1 81.7 6.9-5.8 6.9-5.8-77.2-92.6zM144.8 201l52 78h118.4l52-78H144.8zm63.2 30h96v18h-96v-18zm-61.6 4.9L189.2 439h133.6l42.8-203.1-40.8 61.1H187.2l-40.8-61.1zM193 457l6.3 30h113.4l6.3-30H193z"/></svg>
));