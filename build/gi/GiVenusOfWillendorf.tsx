import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M247.8 27.78c-5.1.63-10 1.82-14.6 3.5l.1 18.09 14.2.27zm18 .15L265.5 50l13.9.27-.2-18.99c-4.2-1.55-8.7-2.69-13.4-3.35zm-50.5 13.59c-2.7 2.25-5.2 4.7-7.4 7.35l7.4.15zm82 .14l.1 8.96 8.6.17a54.7 54.7 0 0 0-8.7-9.13zm-99 25.03c-1.3 4.36-2 8.92-2 13.61 0 1.28.1 2.55.2 3.81h19l-.1-17.09zm35.1.68l.1 16.74h13.4l.3-16.47zm31.8.62l-.3 16.12h14.8l-.1-15.83zm32.4.64l.1 15.48h18.2c.1-1.26.2-2.53.2-3.81 0-3.88-.5-7.67-1.4-11.34zm-96 33.47c9.3 18.3 29.9 31.2 54.6 31.2 24.7 0 45.3-12.9 54.6-31.2zm9.7 36.2c-20.2.1-31.5 8.5-40.2 22.8-4.6 7.4-8.1 16.9-10.8 27.7 5.1-2.5 10.5-4.6 16.3-6.5l9.3-22.2 16.6 7-4.1 9.8c9.7-1.9 19.8-3.4 30-4.6l2.2 17.8c-17.8 2.2-34.9 5-48.5 9.4-12.6 4-21.8 9.3-26.4 15.1-.6 4-1 8.1-1.4 12.3 5.1 22.3 11.8 37.5 18.4 45.8 6.8 8.8 11.9 10.4 17.9 9.2 6-1.2 14.2-6.9 22.5-18.1 8.2-11.2 16.4-27.3 23.2-47.3l14.9 5.1 15.4-5.3c6.8 19.9 15.3 36 24 47.3 8.7 11.3 17.6 17.3 24.5 18.6 6.9 1.4 12.7-.4 20-9.1 6.9-8.2 13.8-23.1 19-45.2-.1-2.6-.3-5.1-.4-7.6-4.6-10.1-16.2-16.6-32-20-16.1-3.5-35.2-3.5-49.7-2.6l-1.2-18c3.9-.2 8.1-.4 12.5-.5 1.6 0 3.3-.1 5-.1 7.5 0 15.6.4 23.7 1.4-1.5-2.5-3.3-5-5.1-7.6l14.6-10.4c4.4 6.2 9.9 13.4 12.6 22.5 6.1 1.8 11.9 4.3 17.2 7.4-1.2-7.4-3.1-14.2-6.1-20.2-7-13.7-19.6-24.9-49-31-11.8 6.4-25.5 10.1-40 10.1-16.6 0-32.1-4.8-44.8-13zm40.2 89.1c-6.9 19-15 34.9-23.9 47.1-9.8 13.2-20.7 22.6-33.5 25.1s-26.1-3.6-35.6-15.8c-6.6-8.4-12.1-19.7-16.7-34.2-11.6 14-11.7 28.1-8.2 41.3 2.1 8 5.8 15.4 9.6 21 3.7 5.7 8.1 9.8 8.6 10.1 19 12.4 34.1 18.1 61.9 11.7l7.4-1.7 2.9 7.1c2.4 5.7 7.3 12.2 12.9 16.8 5.6 4.5 11.7 6.8 15 6.6 11.1-.5 18.3-9.1 22.2-19.2l2.7-7 7.3 1.3c25.8 4.6 51.1 3.2 69.5-9.7 19.2-13.4 26.8-27.9 26.9-43.3.1-11.4-4.3-24-13.1-36.8-5 15.8-11.1 28-18.5 36.9-10.2 12.1-24.1 17.8-37.3 15.2-13.3-2.6-24.9-11.9-35.3-25.3-9.4-12.2-17.9-28.1-24.8-47.2zm3.4 77.2a13.79 7.423 0 0 1 13.8 7.4 13.79 7.423 0 0 1-13.8 7.4 13.79 7.423 0 0 1-13.8-7.4 13.79 7.423 0 0 1 13.8-7.4zm-90.5 44c4.9 16.6 8.6 33 14.8 46.8 8.9 19.6 21 33.7 51 38.6 5.3.9 5.6.2 6.9-1.4 1.3-1.7 2.8-6.2 3.3-12.5 1-11.5-.6-27.1.7-40.8-.2-.2-.4-.5-.5-.7-5.4-1.9-10.5-5.1-15-8.8-5.9-4.8-11.1-10.7-15-17.3-17.8 3-32.7 1.1-46.2-3.9zm178.6 4.5c-17.5 5.7-36.6 5.9-55.2 3.3-5.6 10.3-14.8 20-28 23.1-.8 1.6-1.5 3.3-2.3 5.1-.5 24.1-2.6 41.6-1 48.8.8 3.7 1.2 4.1 3.5 5.3 2.4 1.1 8.1 2.1 17.7 1.6 30-1.7 41.4-15.4 50.1-35.8 6.4-14.9 9.9-33.5 15.2-51.4zM198.4 443l6.2 33s3.9 4.7 8.5 5.8c2.4.5 4.5.4 6.1-.2 1.5-.6 2.8-1.5 4.1-4.2l12.6-25.5c-2.8.4-5.7.4-8.7-.1-10.4-1.7-19.4-4.7-27.2-8.7zm112.6 6.7c-8.9 4.8-19.6 7.9-32.3 8.6-1.6.1-3.1.1-4.5.2l10.5 21.3c1.1 2.2 2.3 3.1 4.7 3.8 2.4.8 5.9.8 9.4.1 3.5-.8 6.9-2.3 8.9-3.8 1.5-1.1 1.9-2 1.9-1.9z"/></svg>
));