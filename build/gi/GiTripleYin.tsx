import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M203.75 20.47c-1.01.016-2.025.056-3.03.093-69.79 2.51-132.772 49.368-151.782 120.312-11.035 41.196 13.555 83.82 54.718 94.875v-.03c41.166 11.03 82.972-13.647 93.97-54.69 7.923-29.58 22.853-50.832 43.624-62.155 20.77-11.323 46.34-12.32 74.125-4.875 10.463 2.807 19.977 7.03 28.563 12.656 4.368-2.276 8.902-4.23 13.593-5.843-8.625-20.886-21.314-39.854-37.75-55.407h-.03c-.064-.06-.123-.127-.187-.187-19.01-17.94-42.747-31.768-69.907-39.064-15.35-4.116-30.768-5.953-45.906-5.687zm-79.03 82.968c14.598 0 29.2 5.545 40.28 16.624 22.174 22.175 22.128 58.403-.03 80.563l-2.72 2.72h-.312c-22.33 19.338-56.345 18.467-77.532-2.72-22.174-22.174-22.16-58.403 0-80.563 11.088-11.087 25.713-16.626 40.313-16.624zm0 18.562c-9.78-.002-19.58 3.734-27.095 11.25-15.018 15.018-15.03 39.126 0 54.156 15.017 15.017 39.125 15.032 54.156 0 15.02-15.018 15.032-39.126 0-54.156-7.507-7.51-17.282-11.248-27.06-11.25zm143.343 7.063c-6.51 1.185-12.476 3.275-17.875 6.218-4.417 2.41-8.533 5.413-12.344 9.095 23.014.048 46.003 6.876 65.78 20.438 3.012-5.502 6.63-10.758 10.845-15.688-14.3-9.747-30.08-16.438-46.408-20.063zm119.718 5.343c-20.048.004-40.084 7.522-55.124 22.563-30.058 30.057-28.79 78.89 1.313 108.968 21.676 21.66 32.627 45.335 32.03 69.062-.598 23.727-12.554 46.43-32.906 66.78-9.87 9.872-21.2 16.368-32.875 20.845-.54 3.58-1.38 7.053-2.314 10.5 50.44 9.057 103.957-5.7 143.28-45 63.97-63.943 65.66-167.276 1.752-231.156-15.054-15.054-35.108-22.568-55.157-22.564zm-1.06 21.406c14.598.002 29.2 5.546 40.28 16.625 22.174 22.175 22.16 58.403 0 80.563-22.175 22.175-58.403 22.16-80.563 0-22.174-22.174-22.16-58.403 0-80.563 11.088-11.087 25.682-16.627 40.282-16.625zm0 18.563c-9.78-.002-19.548 3.766-27.064 11.28-15.017 15.02-15.03 39.096 0 54.126 15.017 15.018 39.094 15.033 54.125 0 15.02-15.017 15.032-39.093 0-54.124-7.507-7.508-17.282-11.28-27.06-11.28zm-147.25 15.03c-9.023 0-18.045 1.715-26.564 5.095-8.21 22.123-24.016 39.79-43.625 50.625-5.44 23.398.967 48.965 19.25 67.25.788.786 1.595 1.54 2.407 2.28 21.96-3.455 43.857.823 62.375 11.158l.768.316 7.326 3.932c10.58-3.39 20.552-9.27 28.97-17.687 12.41-12.41 19.362-28.18 20.843-44.344-12.14-16.447-18.558-35.98-19.033-55.592-.596-.64-1.188-1.283-1.812-1.907-14.092-14.09-32.493-21.124-50.906-21.124zM53.687 225.72C23.988 264.33 12.275 315.815 26 367.03c23.394 87.365 112.104 140.292 199.375 116.908.01-.003.02.003.03 0 41.136-11.06 66.126-54.206 55.126-95.313-4.106-15.327-12.586-28.302-23.718-37.875l-.218-.188c-18.772-16.008-45.2-22.64-70.907-15.75-29.576 7.933-55.557 5.666-75.843-6.625-20.287-12.29-34.017-33.912-41.47-61.718-2.738-10.267-3.397-20.456-2.843-30.158-4.223-3.207-8.168-6.725-11.843-10.593zm48.812 28.968c-.834 16.705 1.403 33.528 6.75 49.562 3.198 3.094 6.623 5.752 10.28 7.97 4.855 2.94 10.193 5.192 16.064 6.655-10.79-19.11-15.778-40.6-14.97-61.906-6.004-.174-12.06-.912-18.124-2.283zm240.78 57.093c-5.586 11.71-13.23 22.702-22.936 32.408-8.71 8.71-18.445 15.763-28.813 21.156 2.835 5.592 5.155 11.534 6.876 17.78 12.796-6.32 24.79-14.79 35.438-25.437 4.585-4.585 8.772-9.418 12.562-14.468.522-2.908.834-5.802.906-8.69.19-7.465-1.076-15.045-4.03-22.75zm-140 39.908c14.6.002 29.203 5.545 40.282 16.625 22.175 22.174 22.16 58.402 0 80.562-22.174 22.175-58.403 22.16-80.562 0-22.174-22.174-22.16-58.403 0-80.563 11.087-11.087 25.682-16.627 40.28-16.625zm0 18.562c-9.778-.002-19.546 3.766-27.06 11.28-15.02 15.02-15.032 39.096 0 54.126 15.016 15.017 39.092 15.032 54.124 0 15.017-15.018 15.03-39.094 0-54.125-7.51-7.507-17.283-11.278-27.063-11.28z"/></svg>
));