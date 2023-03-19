import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M247.196 26l-104.38 104.358 104.38 104.391V26zm17.608 0v208.75l104.39-104.392L264.805 26zm116.838 116.805L277.25 247.196H486l-104.358-104.39zm-251.284.011L26 247.196h208.75l-104.392-104.38zM26 264.804l104.358 104.39 104.391-104.39H26zm251.25 0l104.392 104.38L486 264.804H277.25zm-30.054 12.447L142.782 381.64 247.196 486V277.25zm17.608 0V486l104.358-104.358L264.804 277.25z"/></svg>
));