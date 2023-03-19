import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M29.018 18.875c-2.63 10.297.047 21.72 8.044 29.72 10.035 10.034 25.46 11.696 37.29 5 5.914 5.346 11.686 10.373 17.357 15.12-.338 1.818-.522 3.687-.522 5.597 0 17.024 14.008 31 31.03 31 4.917 0 9.576-1.17 13.72-3.24 5.755 3.91 11.562 7.715 17.482 11.48-.474 2.142-.732 4.36-.732 6.635 0 17.024 14.008 31 31.03 31 7.577 0 14.55-2.772 19.964-7.345l13.873 8.125c-.263 1.535-.414 3.113-.414 4.732v38.904L114.07 255.27v160.064l138.284 80.053 138.283-80.053V255.27l-104.047-60.233V156.7c0-.983-.067-1.946-.172-2.897 5.393-3.07 10.655-6.08 15.697-8.994 5.226 3.992 11.736 6.377 18.762 6.377 17.023 0 31-13.976 31-31 0-1.867-.176-3.695-.498-5.476 6.047-3.987 12.012-8.058 17.978-12.298 3.97 1.855 8.38 2.9 13.02 2.9 17.023 0 31.03-13.976 31.03-31 0-1.973-.194-3.903-.553-5.78 5.273-4.45 10.697-9.14 16.318-14.116 11.6 5.714 26.135 3.778 35.736-5.822 7.998-7.998 10.675-19.42 8.045-29.72h-20.413c4.018 4.888 3.736 11.916-.85 16.5-4.887 4.888-12.55 4.89-17.437 0-4.585-4.585-4.867-11.614-.85-16.5h-20.414c-1.915 7.5-1 15.592 2.72 22.528-4.12 3.636-8.123 7.105-12.034 10.434-5.575-5.288-13.083-8.555-21.297-8.555-17.024 0-31.03 14.01-31.03 31.032 0 5.45 1.438 10.583 3.948 15.05-4.245 2.958-8.5 5.84-12.797 8.673-5.6-5.48-13.24-8.88-21.62-8.88-17.025 0-31.032 14.01-31.032 31.032 0 3.166.484 6.225 1.383 9.11-4.23 2.445-8.744 5.028-13.247 7.605-1.028-.994-2.112-1.91-3.246-2.716-6.692-4.768-14.72-6.882-22.714-7.014-7.996-.132-16.15 1.718-22.97 6.504-.807.565-1.586 1.186-2.337 1.85-4.367-2.573-8.764-5.164-12.947-7.622.642-2.47.984-5.056.984-7.716 0-17.024-14.007-31.032-31.03-31.032-7.977 0-15.29 3.075-20.812 8.094-4.47-2.838-8.894-5.69-13.248-8.596 2.267-4.297 3.56-9.178 3.56-14.34 0-17.025-13.977-31.033-31-31.033-8.26 0-15.804 3.304-21.388 8.642-4.515-3.827-9.1-7.833-13.79-12.067 3.063-6.575 3.715-14.03 1.94-20.98H68.568c4.018 4.887 3.736 11.915-.85 16.5-4.887 4.887-12.55 4.888-17.437 0-4.584-4.586-4.865-11.615-.848-16.5H29.018zm93.2 43.094c6.924 0 12.313 5.42 12.313 12.343s-5.387 12.312-12.31 12.312c-6.926 0-12.345-5.39-12.345-12.313 0-6.923 5.42-12.343 12.344-12.343zm260.157 0c6.924 0 12.344 5.42 12.344 12.343s-5.42 12.312-12.345 12.312c-6.924 0-12.344-5.39-12.344-12.313 0-6.923 5.42-12.343 12.345-12.343zM183.72 107.843c6.922 0 12.343 5.42 12.343 12.344 0 6.923-5.42 12.312-12.344 12.312-6.926 0-12.345-5.39-12.345-12.313 0-6.923 5.42-12.343 12.344-12.343zm137.155 0c6.924 0 12.313 5.42 12.313 12.344 0 6.923-5.39 12.312-12.313 12.312-6.924 0-12.344-5.39-12.344-12.313 0-6.923 5.42-12.343 12.345-12.343zm-69.164 38.013c4.695.078 9.355 1.536 12.18 3.55 2.826 2.012 4.01 3.805 4.01 7.292v27.52l-15.546-9-16.526 9.565V156.7c0-4.09 1.258-5.835 3.953-7.725 2.696-1.89 7.237-3.195 11.93-3.118zm-8.122 56.03v32.728l-74.182 43.21-28.558-16.462 102.74-59.476zm18.687.67l102.16 59.138-28.624 16.502-73.533-42.83-.002-32.81zm-9.988 48.62l72.256 42.085-.002 84.316-72.253 42.086-72.256-42.086.003-84.314 72.254-42.088zm.465 18.33l-56.883 98.15v.724l56.566 32.977L309 368.38v-66.085l-56.248-32.79zm-119.994 8.764l28.586 16.48v84.027l-28.586 16.48V278.272zm239.19.668l-.003 115.648-28.715-16.553v-82.54l28.717-16.555zM333.493 393.99l28.414 16.38-99.63 57.677v-32.574l71.216-41.483zm-161.77.375l71.864 41.86v32.494l-100.21-58.013 28.345-16.342z"/></svg>
));