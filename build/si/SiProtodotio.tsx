import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em"><title>Proto.io</title><path d="M12 11.997c-.728 0-1.316-.59-1.316-1.317S11.272 9.363 12 9.363s1.316.589 1.316 1.316-.588 1.318-1.316 1.318zm2.916-.021c0-2.828-1.109-5.397-2.916-7.298-1.807 1.9-2.916 4.47-2.916 7.298 0 1.297.234 2.535.66 3.683-.618.9-1.074 2.16-1.275 3.616.639-.767 1.422-1.306 2.292-1.591.363.555.78 1.096 1.239 1.574.461-.494.876-1.02 1.239-1.59.87.271 1.653.826 2.29 1.576-.199-1.456-.655-2.716-1.275-3.615.427-1.155.66-2.385.66-3.69l.002.037zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-22C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/></svg>
));