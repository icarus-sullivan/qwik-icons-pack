import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em"><title>Uploaded</title><path d="m14.651 13.862c0 2.5477-2.0653 4.613-4.613 4.613-2.5477 0-4.613-2.0653-4.613-4.613 0-6.1507 9.226-6.1507 9.226 0zm3.497 6.04c-1.33 1.334-3.109 3.957-8.119 4.095-5.451 0.148-9.959-4.484-9.978-10.282-0.01-2.945 0.774-4.659 2.82-6.792 1.224-1.278 7.004-6.923 7.004-6.923 2.052 2.052 0.96 4.873-0.108 5.93l-3.732 3.705c-0.47 0.465-1.968 1.925-1.931 4.444 0.045 3.202 2.51 5.85 5.799 5.8 2.632-0.042 3.756-1.356 4.376-1.98l3.841-3.828c1.103-1.093 3.77-2.027 5.829 5e-3z"/></svg>
));