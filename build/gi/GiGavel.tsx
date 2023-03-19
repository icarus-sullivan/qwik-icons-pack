import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M129.75 24.47L21.625 211.655l55.78 32.188L185.532 56.656 129.75 24.47zm55.97 69.25l-75.626 130.874L326.47 349.47l75.592-130.876L185.72 93.72zm83.468.686l-11.22 19.438 84.97 49.03 11.25-19.468-85-49zM434.25 200.22L326.156 387.405l55.78 32.188 108.095-187.188-55.78-32.187zm-270.53 76.905l-11.282 19.53 84.968 49 11.25-19.5-84.937-49.03zm-3.095 45.844L61.312 494.81h67.157l82.28-142.968-50.125-28.875z"/></svg>
));