import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M144 26.43L76.99 65.1v77.4l20.09 11.6 39.32-62.87 15.2 9.57-38.9 62.3 31.3 18.1 67-38.7V131h90v11.5l67 38.7 31.3-18.1-38.9-62.3 15.2-9.57 39.3 62.87 20.1-11.6V65.13l-67-38.7-67 38.67V77h-90V65.13zM211 95h90v18h-90zm22 90v68.3l14 21V480h18V274.3l14-21V185zm-17.6 74.2L118 332.3 151.2 482l17.6-4L138 339.7l87.3-65.5zm81.2 0l-9.9 15 87.3 65.5L343.2 478l17.6 4L394 332.3z"/></svg>
));