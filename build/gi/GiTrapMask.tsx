import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M196.36 25.44c-45.063 17.44-69.198 37.01-86.17 86.17v70.624h-.126v9.346c0 57.256-.92 108.17-16.478 163.72l-1.324 4.73 103.545 124.32H202.045l1.715-.71c36.42-15.074 71.277-16.862 107.068-.167l6.62 3.088 102.29-126.445-1.078-4.48c-13.006-54.042-13.137-108.684-13.76-164.16l-.105-9.24h-.018V111.61c-14.466-42.988-43.59-70.49-86.172-86.17-41.74 20.564-81.495 18.426-122.244 0zm-55.145 101.794h45.23l47.284 55h-92.515v-55zm187.3 0h45.23v55h-92.513l47.284-55zM162.378 233.857h.066l34.817 85.883 33.115-81.68 26.914 66.383 27.106-66.857 33.307 82.154 34.47-85.02 16.704 41.206 17.057-42.07h.904c.896 40.145 3.36 80.682 12.676 121.546l-9.707 11.998-31.08-35.582-4.213 79.21-14.725 18.202-37.856-50.257-9.887 78.363c-4.457-1.096-8.92-1.957-13.38-2.596l-21.378-52.726-21.585 53.242c-4.616.744-9.223 1.7-13.816 2.86l-9.443-78.403h-.002l-37.377 49.238.793 2.25-17.92-21.516-4.14-77.866-31.08 35.578-9.92-11.91c11.155-41.838 14.49-81.232 15.47-121.607l17.05 42.046 17.057-42.07z"/></svg>
));