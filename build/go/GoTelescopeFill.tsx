import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M17.155 22.87a.75.75 0 00.226-1.036l-4-6.239a.75.75 0 00-.941-.277l-2.75 1.25a.75.75 0 00-.318.273l-3.25 4.989a.75.75 0 001.256.819l3.131-4.806.51-.232v5.64a.75.75 0 101.5 0v-6.22l3.6 5.613a.75.75 0 001.036.226z"/><path fill-rule="evenodd" d="M.408 15.13a2 2 0 01.59-2.642L17.038 1.33a2 2 0 012.85.602l2.828 4.644a2 2 0 01-.851 2.847l-17.762 8.43a2 2 0 01-2.59-.807L.408 15.13zm5.263-4.066l1.987 3.44-1.36.645-1.862-3.225 1.235-.86zm7.842-5.455l2.857 4.76 1.361-.646-2.984-4.973-1.234.859z"/></svg>
));