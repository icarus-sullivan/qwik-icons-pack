import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7 11.5v3.848a1.75 1.75 0 001.57 1.74l6.055.627 1.006 1.174a1.75 1.75 0 001.329.611h1.29A1.75 1.75 0 0020 17.75V15.5h3.25a.75.75 0 000-1.5H20V7.5h3.25a.75.75 0 000-1.5H20V3.75A1.75 1.75 0 0018.25 2h-1.29c-.51 0-.996.223-1.329.611l-1.006 1.174-6.055.626A1.75 1.75 0 007 6.151V10H2.937A2.938 2.938 0 000 12.938v8.312a.75.75 0 001.5 0v-8.313c0-.793.644-1.437 1.438-1.437H7zm9.77-7.913a.25.25 0 01.19-.087h1.29a.25.25 0 01.25.25v14a.25.25 0 01-.25.25h-1.29a.25.25 0 01-.19-.087l-1.2-1.401a.75.75 0 00-.493-.258l-6.353-.657a.25.25 0 01-.224-.249V6.152a.25.25 0 01.224-.249l6.353-.657a.75.75 0 00.492-.258l1.201-1.4z"/></svg>
));