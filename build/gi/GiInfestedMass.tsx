import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M233.656 22.094c-13.884.19-28.38 2.95-42.97 8.843 30 .765 65.91 7.887 84.97 31.22 8.688 10.636 11.745 27.18 10 44.062 1.995 1.7 3.902 3.464 5.72 5.28 3.9 3.9 7.358 8.075 10.374 12.47 2.473-.76 5.003-1.38 7.563-1.845 4.732-.858 9.63-1.285 14.593-1.28 3.103 0 6.236.192 9.375.53 10.447-50.18-36.918-98.625-96.842-99.28-.92-.01-1.856-.014-2.782 0zM203.186 95c-15.846.105-29.938 4.536-39.31 13.906-10.155 10.152-13.038 23.736-10.75 39.188.014.05.015.105.03.156 3.632 12.436 9.568 22.548 18.563 29.47 9.19 7.07 21.93 11.32 40.81 10.31 24.243-1.287 44.017 5.027 58.157 16.157 7.786-4.726 16.25-8.435 25.157-10.906 6.824-23.556.928-49.983-17.688-68.593-13.622-13.617-36.4-24.738-58.656-28.374-5.564-.91-11.03-1.348-16.313-1.313zm-67.092 26.125c-36.665 3.137-65.013 16.806-77.188 58.313-7.66 26.115-8.875 48.963-37 42.312 13.805 21.97 35.546 21.773 51.938-.656 2.116-31.247 23.968-60.177 60.22-77-.498-7.816.06-15.584 2.03-22.97zm187.75 18.47c-3.887-.025-7.656.296-11.188.936-.622.114-1.24.247-1.844.376 5.944 14.818 7.712 30.933 5.313 46.53L318.47 190c1.865-.037 3.74-.044 5.592.03 14.12.574 27.756 4.417 39.907 10.97 6.124-8.08 14.654-13.623 24-16.188-4.018-16.57-14.876-28.428-28.75-36.062-10.943-6.02-23.716-9.085-35.376-9.156zm111.094 15.718c-10.65-.035-22.264 3.12-34.47 9.75 2.88 5.69 5.06 11.92 6.376 18.656 5.33.822 10.604 2.593 15.53 5.436.342.197.667.42 1 .625 31.248-10.763 50.928 7.43 70.126 41.282-3.826-47.476-26.85-75.648-58.563-75.75zm-296.407 7.562c-34.192 17.036-49.508 44.107-45.624 71.188 6.8 47.39 54.347 88.916 127.906 80.375 40.473-4.73 57.84-33.015 56.625-59.282-.606-13.133-6.022-25.582-16.312-34.625-10.29-9.04-25.668-15.007-47.594-13.843-22.24 1.19-40.093-4.082-53.186-14.156-10.115-7.78-17.108-18.17-21.813-29.655zm261.376 38.906c-.635 0-1.275.02-1.906.064-7.11.492-13.873 3.88-18.563 9.687 12.788 10.704 22.776 24.935 28.25 41.75 6.082-1.892 11.504-5.998 14.97-12 7.316-12.67 3.046-28.624-9.626-35.936-4.157-2.4-8.675-3.548-13.124-3.563zm-79.22 6.814c-6.33-.01-12.773.812-19.186 2.53-6.16 1.652-12.062 4.055-17.594 7.095 7.51 10.74 11.598 23.335 12.188 36.093.61 13.195-2.598 26.637-9.344 38.625 14.722 8.054 24.75 23.693 24.75 41.562 0 12.122-4.618 23.225-12.188 31.625 15.78 8.356 32.223 11.792 45.907 8.125 18.044-4.835 32.42-21.747 40.81-43.688 8.393-21.94 10.268-48.213 5.033-67.75-8.508-31.746-36.493-52.947-67.657-54.156-.9-.035-1.814-.06-2.72-.062zm105.377 56.062c-4.356 3.1-9.218 5.382-14.313 6.78 1.583 11.985 1.287 24.688-.688 37.252 25.354 13.418 30.89 27.678 22.657 54.937-16.6 54.96 19.597 83.604 54.56 65.125-32.506-9.75-28.104-27.133-20.56-58.188 12.61-51.91-4.718-81.086-41.658-105.906zM85 269.5c-5.774 1.98-11.213 5.275-15.844 9.906-16.14 16.137-16.142 42.08 0 58.22 2.552 2.55 5.35 4.694 8.313 6.437 9.93-14.787 20.88-29.138 34.874-40.657C100.827 293.713 91.594 282.19 85 269.5zm190.438 38.625c-9.886 10.296-23.166 18.38-39.657 22.53-.166 1.262-.28 2.536-.28 3.845-.002 15.91 12.732 28.657 28.656 28.656 15.925 0 28.656-12.743 28.656-28.656.002-11.91-7.12-22.03-17.375-26.375zm-138.563 11.313c-6.775 36.136 8.59 62.088 28.938 72.75 13.032 6.828 28.22 7.607 43 .28 8.532-4.23 17.05-11.36 24.656-22.03-10.166-8.704-16.66-21.6-16.657-35.938v-.875l-.032-.03c-30.54 2.5-57.68-3.067-79.905-14.158zm-19.313 4.437c-11.573 11.33-21.445 25.583-31.25 40.75-18.82 36.482-17.525 82.327 20.657 111.47 31.69 24.19 77.54 21.817 99.968 5.405 19.914-14.573 25.155-45.586 6.812-68.97 4.42 16.066-4.613 41.808-18.5 49.345-16.21 8.8-38.286 7.45-56.625-12.656-21.554-23.633-18.893-43.104-3.625-58.876-13.2-16.448-20.353-39.638-17.438-66.47zm169.032 56.656c-11.754 43.65 16.39 92.464 79.156 95.5-31.95-16.928-51.635-50.344-46.813-82.936-11.11-2.13-22.064-6.57-32.343-12.563z"/></svg>
));