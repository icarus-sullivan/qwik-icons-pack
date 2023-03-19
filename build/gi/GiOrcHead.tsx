import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M256 51c-1.216 1.157-3.235 3.694-5.595 7.47-4.552 7.283-10.594 19.233-18.383 34.8v9.94c6.19 4.752 14.906 7.626 23.978 7.626 9.072 0 17.787-2.874 23.978-7.627v-9.94c-7.79-15.567-13.83-27.517-18.383-34.8-2.36-3.776-4.38-6.313-5.595-7.47zm-42.743 54.286c-28.17 6.895-55.87 20.62-82.175 41.132-16.04 80.706-31.2 175.83-16.89 254.565 6.188 2.322 12.687 4.44 19.403 6.398l-3.062-12.257-4.305-6.455 7.807-5.204c6.304-4.203 13.54-7.85 21.487-10.99-5.028-6.777-8.326-15.44-11.545-24.286-5.46-15.013-9.66-31.84-13.654-44.028l-9.792-29.87 24.565 19.616c24.47 19.543 49.132 32.704 82.918 56.314l10.07 7.037c5.944-.26 11.928-.39 17.917-.39 5.99 0 11.973.13 17.916.39l10.07-7.037c33.787-23.61 58.45-36.77 82.92-56.314l24.563-19.616-9.793 29.87c-3.995 12.19-8.193 29.015-13.654 44.028-3.22 8.847-6.517 17.51-11.545 24.287 7.948 3.138 15.183 6.786 21.487 10.99l7.807 5.203-4.305 6.455-3.062 12.258c6.716-1.956 13.215-4.075 19.402-6.397 14.31-78.736-.85-173.86-16.89-254.565-26.305-20.51-54.004-34.237-82.174-41.132v6.31l-2.75 2.746c-10.55 10.552-25.398 15.26-39.993 15.26-14.595 0-29.442-4.708-39.994-15.26l-2.75-2.746v-6.31zm75.98 55.876l13.39 13.145-6.572 6.695c-12.91 13.147-27.168 19.604-41.277 18.865-14.108-.74-26.793-8.077-38.39-18.442l-6.995-6.253 12.504-13.99 6.996 6.25c9.774 8.735 18.788 13.273 26.867 13.696 8.08.423 16.495-2.67 26.905-13.272l6.573-6.694zm-149.998 3.885c19.807 0 41.364 9.12 60.852 19.946 19.487 10.826 36.416 23.397 45.862 32.843l-13.268 13.267c-7.234-7.234-23.665-19.683-41.708-29.707-18.043-10.024-38.186-17.584-51.74-17.584v-18.765zm233.52 0v18.765c-13.552 0-33.695 7.56-51.738 17.584-18.043 10.024-34.474 22.473-41.708 29.707l-13.268-13.267c9.446-9.446 26.375-22.017 45.862-32.843 19.488-10.827 41.045-19.946 60.853-19.946zm-226.887 36.11c16.68 16.68 47.577 47.29 93.447 47.29v.316l16.757-24.214 16.603 24.475v-.578c45.87 0 76.767-30.61 93.447-47.29l13.268 13.266c-8.234 8.233-21.14 21.197-38.61 32.218 4.916 4.755 7.998 11.397 7.998 18.697 0 14.283-11.78 26.063-26.063 26.063-14.282 0-26.062-11.78-26.062-26.063 0-.183.01-.364.014-.546-3.9.798-7.922 1.415-12.06 1.828l28.074 41.386-3.79 5.315c-7.152 10.026-16.657 15.68-26.033 18.204-9.376 2.525-18.523 2.41-26.863 2.41s-17.496.107-26.944-2.4-19.065-8.05-26.67-17.95l-4.17-5.425 28.773-41.58c-4-.41-7.887-1.017-11.662-1.79.004.183.014.364.014.547 0 14.283-11.78 26.063-26.062 26.063-14.283 0-26.063-11.78-26.063-26.063 0-7.3 3.082-13.942 7.998-18.696-17.47-11.02-30.376-23.984-38.61-32.217l13.268-13.267zm-128.076 16.11c2.95 6.932 8.367 15.73 16.54 27.413 12.455 17.8 29.556 41.635 46.575 75.674 1.848 3.697 4.587 6.08 8.64 7.774.07-13.807.677-27.726 1.7-41.656l-24.876-21.55 12.286-14.184 14.638 12.68c.938-9.016 2.026-18.007 3.23-26.948-7.94-6.23-17.723-10.416-28.564-13.373-16.628-4.535-34.943-5.58-50.17-5.83zm476.406 0c-15.226.25-33.54 1.295-50.17 5.83-10.84 2.957-20.623 7.142-28.562 13.373 1.204 8.94 2.292 17.932 3.23 26.947l14.638-12.68 12.286 14.185-24.875 21.55c1.02 13.93 1.628 27.848 1.7 41.656 4.05-1.694 6.79-4.077 8.638-7.774 17.02-34.04 34.12-57.873 46.575-75.674 8.173-11.682 13.59-20.48 16.54-27.412zm-238.28 40.48L221.81 307.04c3.74 3.347 7.608 5.175 12.06 6.356 6.265 1.663 13.79 1.772 22.13 1.772s15.874-.117 21.982-1.762c4.345-1.17 8.01-2.94 11.476-6.216l-33.535-49.442zm-66.643.292c-4.142 0-7.298 3.155-7.298 7.297 0 4.14 3.156 7.297 7.298 7.297 4.14 0 7.297-3.156 7.297-7.297 0-4.142-3.156-7.298-7.297-7.298zm133.44 0c-4.14 0-7.297 3.155-7.297 7.297 0 4.14 3.156 7.297 7.297 7.297 4.142 0 7.298-3.156 7.298-7.297 0-4.142-3.156-7.298-7.298-7.298zm-166.322 67.34c1.684 5.604 3.355 11.28 5.214 16.392 4.053 11.14 9.25 19.18 12.498 22.424l27.458-9.153c-16.38-10.857-31.114-20.08-45.17-29.662zm199.204 0c-14.056 9.583-28.79 18.806-45.17 29.663l27.458 9.153c3.247-3.245 8.445-11.283 12.498-22.424 1.86-5.112 3.53-10.788 5.214-16.39zM256 375.634c-41.212 0-82.64 7.558-105.97 20.12l13.58 54.32c61.668 14.57 123.112 14.57 184.78 0l13.58-54.32c-23.33-12.562-64.758-20.12-105.97-20.12zm-.018 10.543c23.4-.08 46.826 4.167 70.074 13.005l8.77 3.334-6.67 17.542-8.77-3.336c-42.466-16.144-84.223-15.572-126.88.04l-8.814 3.226-6.448-17.623 8.81-3.223c23.152-8.473 46.527-12.883 69.928-12.964z"/></svg>
));