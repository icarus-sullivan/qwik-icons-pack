import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M1.565 2.018a.75.75 0 00-.88 1.214L5 6.357v14.902a.75.75 0 001.219.585L12 17.21l5.781 4.633A.75.75 0 0019 21.259v-4.764l3.435 2.487a.75.75 0 10.88-1.215L1.565 2.017zM17.5 15.408l-11-7.965v12.254l5.031-4.032a.75.75 0 01.938 0l5.031 4.032v-4.288z"/><path d="M7.25 2a.75.75 0 000 1.5h10a.25.25 0 01.25.25v6.5a.75.75 0 001.5 0v-6.5A1.75 1.75 0 0017.25 2h-10z"/></svg>
));