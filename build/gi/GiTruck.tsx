import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M33 120v127.648c5.023 1.863 9.31 5.103 12.68 8.682 5.238 5.562 9.034 12.113 12.498 18.242 3.463 6.13 6.61 11.886 9.343 15.446C70.257 293.578 71.618 294 72 294c.59 0 .78.075 2.36-1.8 1.583-1.877 3.57-5.405 5.683-9.405 2.114-4 4.356-8.472 7.832-12.596 3.476-4.125 9.172-8.2 16.125-8.2 6.953 0 12.65 4.075 16.125 8.2 3.476 4.123 5.718 8.595 7.832 12.595s4.1 7.528 5.682 9.404c1.58 1.875 1.77 1.8 2.36 1.8.59 0 .78.075 2.36-1.8 1.583-1.877 3.57-5.405 5.683-9.405 2.114-4 4.356-8.472 7.832-12.596 3.476-4.125 9.172-8.2 16.125-8.2 6.953 0 12.65 4.075 16.125 8.2 3.476 4.123 5.718 8.595 7.832 12.595s4.1 7.528 5.682 9.404c1.58 1.875 1.77 1.8 2.36 1.8.59 0 .78.075 2.36-1.8 1.583-1.877 3.57-5.405 5.683-9.405 2.114-4 4.356-8.472 7.832-12.596 3.476-4.125 9.172-8.2 16.125-8.2 6.953 0 12.65 4.075 16.125 8.2 3.476 4.123 5.718 8.595 7.832 12.595s4.1 7.528 5.682 9.404c1.58 1.875 1.77 1.8 2.36 1.8.59 0 .78.075 2.36-1.8 1.583-1.877 3.57-5.405 5.683-9.405 2.114-4 4.356-8.472 7.832-12.596 3.476-4.125 9.172-8.2 16.125-8.2 6.953 0 12.448 3.3 17.025 7.004 2.142 1.733 4.125 3.638 5.975 5.617V120H33zm320 49.377v140.27l8-.026V326h3.81c9.298-18.914 28.774-32 51.19-32 19.463 0 36.707 9.867 47 24.846V262h16v-36.275l-28.256-42.385L353 169.377zm18.543 19.516l64.77 7.726 24.8 35.51v16.735h-89.57v-59.972zM33 269.148V294h15.537c-2.12-3.493-4.065-7.096-6.03-10.572-3.173-5.617-6.4-10.827-9.507-14.28zM104 280c-.59 0-.78-.075-2.36 1.8-1.583 1.877-3.57 5.405-5.683 9.405-.48.91-.972 1.847-1.478 2.795h19.04c-.505-.948-.997-1.886-1.477-2.795-2.114-4-4.1-7.528-5.682-9.404-1.58-1.875-1.77-1.8-2.36-1.8zm64 0c-.59 0-.78-.075-2.36 1.8-1.583 1.877-3.57 5.405-5.683 9.405-.48.91-.972 1.847-1.478 2.795h19.04c-.505-.948-.997-1.886-1.477-2.795-2.114-4-4.1-7.528-5.682-9.404-1.58-1.875-1.77-1.8-2.36-1.8zm64 0c-.59 0-.78-.075-2.36 1.8-1.583 1.877-3.57 5.405-5.683 9.405-.48.91-.972 1.847-1.478 2.795h19.04c-.505-.948-.997-1.886-1.477-2.795-2.114-4-4.1-7.528-5.682-9.404-1.58-1.875-1.77-1.8-2.36-1.8zm64 0c-.59 0-.78-.075-2.36 1.8-1.583 1.877-3.57 5.405-5.683 9.405-.48.91-.972 1.847-1.478 2.795h25.157c-.376-.512-.74-1.022-1.13-1.535-2.787-3.646-5.967-7.173-8.804-9.47C298.866 280.7 296.59 280 296 280zm185 0v46h14v-46h-14zM72 310c-22.537 0-41 18.463-41 41s18.463 41 41 41 41-18.463 41-41-18.463-41-41-41zm104 0c-22.537 0-41 18.463-41 41s18.463 41 41 41 41-18.463 41-41-18.463-41-41-41zm240 0c-22.537 0-41 18.463-41 41s18.463 41 41 41 41-18.463 41-41-18.463-41-41-41zm-399 2v14h3.81c2.532-5.15 5.824-9.86 9.72-14H17zm96.47 0c3.896 4.14 7.188 8.85 9.72 14h1.62c2.532-5.15 5.824-9.86 9.72-14h-21.06zm104 0c3.896 4.14 7.188 8.85 9.72 14H231v-14h-13.53zM343 327.678l-94 .295v30l94-.295v-30zM72 328c12.81 0 23 10.19 23 23s-10.19 23-23 23-23-10.19-23-23 10.19-23 23-23zm104 0c12.81 0 23 10.19 23 23s-10.19 23-23 23-23-10.19-23-23 10.19-23 23-23zm240 0c12.81 0 23 10.19 23 23s-10.19 23-23 23-23-10.19-23-23 10.19-23 23-23z"/></svg>
));