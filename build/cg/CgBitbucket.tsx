import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5831 4.63507C4.03082 4.63507 3.66768 5.07472 3.77202 5.61706L6.22804 18.383C6.33238 18.9253 6.86468 19.3649 7.41696 19.3649H16.583C17.1353 19.3649 17.6676 18.9253 17.7719 18.383L20.2279 5.61706C20.3323 5.07472 19.9691 4.63507 19.4168 4.63507H4.5831ZM13.5449 14.3649L14.4549 9.63507H9.54504L10.455 14.3649H13.5449Z" fill="currentColor"/></svg>
));