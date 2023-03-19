import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M341.21 18.004l-3.04 6.248 6.585 13.173-9.588-7.005-8.31 17.076 5.96 13.107-9.99-4.824-3.554 7.3 17.35 29.683-33.874 69.606a416.538 416.538 0 0 0 18.326 3.477l31.722-65.19.04-.005 21.937-45.078-.04.006 8.346-17.153-16.184-7.875-8.338 17.133-17.348-29.682zM55.578 34.978c-.634.002-1.267.02-1.9.057-5.067.296-10.09 1.74-14.67 4.56-4.553 2.804-6.37 6.767-7.827 10.832-1.457 4.066-2.388 8.677-3.095 14.045-1.413 10.738-1.816 24.476-1.486 40.66.658 32.37 4.336 74.363 9.923 118.346 8.822 69.45 22.01 143.094 36.53 191.793l.054-.014c.545 1.88 1.134 3.9 1.77 5.962l.01.04c.362 1.148.725 2.282 1.087 3.398 1.698 5.15 3.677 10.255 5.957 13.908 1.857 2.973 3.763 4.76 5.17 5.465 1.405.703 2.444 1.013 5.48-.07 1.757-.626 1.752-.61 2.35-3.255.6-2.647.505-7.635-.522-13.617-1.064-6.19-2.98-13.38-5.028-20.86-13.193-46.49-26.532-118.342-35.002-185.017-5.53-43.537-9.145-85.127-9.783-116.443-.32-15.658.13-28.787 1.336-37.945.604-4.58 1.424-8.17 2.194-10.318.38-1.06.784-1.647.94-1.883 4.144-2.356 7.705-2.46 13.236-.394 5.81 2.17 13.136 7.287 20.948 14.655 15.623 14.735 33.2 37.99 51.013 61.012 17.813 23.023 35.792 45.84 54.308 60.533 5.98 4.747 12.075 8.698 18.43 11.374 2.59.674 5.962 1.44 9.43 1.905 3.61.482 7.23.544 9.443.148 1.64-.293 2.058-.586 2.116-.625 3.39-6.163 1.936-8.012-1.37-11.398-3.317-3.398-10.153-5.99-12.435-6.143l.03-.433c-4.388-1.84-9.276-4.82-14.453-8.928-15.74-12.492-33.554-34.564-51.26-57.45-17.705-22.884-35.368-46.557-52.9-63.09-8.766-8.268-17.5-14.873-26.996-18.42-4.154-1.554-8.585-2.4-13.022-2.388zm191.127 4.06L238.56 63.14l9.3 21.06-13.648-8.19-3.554 10.52 20.972 27.243-10.406 30.8c5.658 2.05 11.33 3.997 17.027 5.84l10.427-30.86.037-.01 16.05-47.495-.042.012 6.106-18.072-17.053-5.762-6.1 18.053-20.97-27.243zm162.064 11.94l-12.565 1.7-12.026 24.71 18.306-13.502 6.283-12.908zm-90.872 12.205L305.65 66.46l-16.045 47.495 12.248-3.278 16.045-47.494zm106.797 5.508l-8.807 12.15 2.262 28.574-9.654-18.375-13.225 18.24 11.938 32.24-21.738 29.987c7.335.094 14.8.016 22.416-.25l13.883-19.154.04.002 29.424-40.588-.04-.002 11.194-15.443-14.572-10.566-11.184 15.427-11.937-32.242zm-28.916 8.982l-13.41 3.433-8.103 16.65 12.564-1.7 8.95-18.383zm77.06 34.71l-4.803 6.625 12.77.366 4.702-6.487-12.67-.505zm-5.733 7.905l-23.69 32.68 12.668.507 6.422-8.857-6.08-3.598 9.475-1.087 10.926-15.072-9.72-4.573zm-238.152 38.83c-1.702 3.462-3.393 6.85-5.09 10.285 5.506 1.805 10.928 5.036 15.63 9.854 7.124 7.297 10.943 20.566 4.212 32.744-3.314 5.994-9.456 8.64-14.668 9.572-5.214.932-10.3.602-14.998-.025-6.17-.825-11.544-2.263-14.677-3.19-1.432 2.818-2.863 5.64-4.3 8.443 50.84 27.08 109.533 22.75 167.438 10.64 12.018-15.735 23.947-31.747 35.897-48.106-62.995.883-117.13-10.59-169.445-30.217zm-42.14 83.683c-25.922 49.92-52.78 98.18-83.245 146.836 2.912 10.984 6.645 23.148 8.578 34.405 1.223 7.123 1.856 13.942.338 20.64-1.518 6.7-6.486 13.604-13.86 16.234-6.776 2.417-13.994 2.012-19.59-.793-5.598-2.804-9.44-7.322-12.374-12.025-.223-.356-.433-.717-.647-1.078-2.342 3.425-4.683 6.85-7.072 10.287C73.4 482.04 98.747 494.51 121.21 493.98c90.72-76.612 159.746-152.114 224.65-235.01-53.372 9.265-109.005 10.413-159.044-16.17z"/></svg>
));