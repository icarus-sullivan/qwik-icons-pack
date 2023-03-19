import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M1.22 1.22a.75.75 0 011.06 0l20.5 20.5a.75.75 0 11-1.06 1.06L17.94 19H15.5a3.5 3.5 0 11-7 0H3.518a1.518 1.518 0 01-1.263-2.36l2.2-3.298A3.25 3.25 0 005 11.539V7c0-.294.025-.583.073-.866L1.22 2.28a.75.75 0 010-1.06zM10 19a2 2 0 104 0h-4zM6.5 7.56l9.94 9.94H3.517l-.007-.001-.006-.004-.004-.006-.001-.007.003-.01 2.2-3.298a4.75 4.75 0 00.797-2.635V7.56z"/><path d="M12 2.5c-1.463 0-2.8.485-3.788 1.257l-.04.032a.75.75 0 11-.935-1.173l.05-.04C8.548 1.59 10.212 1 12 1c3.681 0 7 2.565 7 6v4.539c0 .642.19 1.269.546 1.803l1.328 1.992a.75.75 0 11-1.248.832l-1.328-1.992a4.75 4.75 0 01-.798-2.635V7c0-2.364-2.383-4.5-5.5-4.5z"/></svg>
));