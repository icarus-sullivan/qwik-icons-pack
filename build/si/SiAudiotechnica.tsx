import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em"><title>Audio-Technica</title><path d="M12 0A11.992 11.992 0 00.015 11.985 12.019 12.019 0 0012 24a12.019 12.019 0 0011.985-12.015A11.992 11.992 0 0012.004 0zm0 .903a11.078 11.078 0 0111.085 11.078c0 6.123-4.958 11.112-11.085 11.112A11.104 11.104 0 01.922 11.985 11.078 11.078 0 0111.996.907zm.087 1.16l-.43 1.252-5.674 16.063-.204.604h12.654l-.23-.604L12.524 3.31zm0 2.797l2.007 5.643-3.024 8.553H7.056zm2.502 7.038l2.532 7.155h-5.09z"/></svg>
));