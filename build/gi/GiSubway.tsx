import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M136.1 37.15L105.4 328.8l26.3 26.3h248.6l26.3-26.3-30.7-291.65H361v44H151v-44zm32.9 0v26h174v-26zm-16.9 60h207.8l18.3 145.95H133.8zm15.8 17.95l-13.7 110h203.6l-13.7-110zm-7.9 158c18.1 0 33 14.9 33 33 0 18.2-14.9 33-33 33s-33-14.8-33-33c0-18.1 14.9-33 33-33zm192 0c18.1 0 33 14.9 33 33 0 18.2-14.9 33-33 33s-33-14.8-33-33c0-18.1 14.9-33 33-33zm-192 18c-8.4 0-15 6.7-15 15 0 8.4 6.6 15 15 15s15-6.6 15-15c0-8.3-6.6-15-15-15zm192 0c-8.4 0-15 6.7-15 15 0 8.4 6.6 15 15 15s15-6.6 15-15c0-8.3-6.6-15-15-15zm-204.5 82L91.6 486.8h46.8l13.5-28.7h208.2l13.5 28.7h46.8l-55.9-113.7h-42.4l6.3 14H183.6l6.3-14zm28 32h161l10.2 23H165.3z"/></svg>
));