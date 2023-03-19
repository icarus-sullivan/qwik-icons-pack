import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M493.533 193.153l-342.76-178.4-16.106 16.107c15.92 23.5 10.473 59.73-15.28 85.483-25.753 25.753-62.812 32.066-86.31 16.106l-15.28 15.28L195.785 490.9l152.383-89.612-108.608-8.672 54.51-54.51-91.266-7.022 47.49-47.49-82.178-6.196 39.644-39.645-70.617-5.37 35.514-35.513-61.532-4.543c42.474-7.71 79.37-44.36 87.136-87.135l4.957 61.12 35.103-35.102 5.782 70.203 39.23-39.23 6.607 81.766 47.078-47.08 7.02 91.264 54.51-54.51 8.258 106.545 86.723-147.017z"/></svg>
));