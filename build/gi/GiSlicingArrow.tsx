import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M94.027 17.81l-.763 71.667-71.254.355 85.51 64.35 27.94-9.082 277.542 277.537-39.828 9.345 118.6 56.215-56.22-118.597-9.34 39.818-277.376-277.37 9.54-28.726-64.35-85.51zm83.41.465L393.99 308.74 280.887 18.275h-103.45zm123.506 0l129.922 333.66-39.35-333.66h-90.572zm109.39 0l34.173 289.768 51.24-289.768h-85.414zM20.98 174.443V277.9l295.903 117.153L20.98 174.443zm0 123.557v90.557l335.89 42.425L20.98 298zm0 109.393v85.36l281.59-49.792-281.59-35.567z"/></svg>
));