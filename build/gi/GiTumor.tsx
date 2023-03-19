import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M287.47 17.875c-1.622.018-3.236.07-4.845.125-15.446.536-30.323 2.833-43.938 7.094-26.41 8.265-48.07 23.24-61.437 47.5 11.49 69.086 46.45 120.194 96.156 139.687 50.016 19.615 117.096 8.367 195.438-53.936l3.094-2.438c1.902-7.267 2.57-14.335 2.187-21.22-.42.165-.825.35-1.25.5-12.885 4.56-28 3.187-42.344-4.03-28.69-14.433-46.11-46.83-38.405-75.75 1.136-4.264 2.842-8.19 5-11.75-11.286-5.663-23.338-10.55-35.813-14.468-24.032-7.55-49.537-11.577-73.843-11.313zM140.56 23.938c-20.984.39-41.16 9.736-56.125 24.875C65.48 67.99 54.528 95.85 61.126 126.72c15.332-15.432 35.2-26.62 58.094-31.564l4.75-3.28 35.124-24.407c6.266-12.178 14.29-22.64 23.656-31.44-13.916-8.734-28.277-12.35-42.188-12.093zm294.125 17.718c-3.366.035-6.494.61-9.28 1.594-7.432 2.62-12.817 7.95-15.22 16.97-4.81 18.055 7.733 43.676 28.75 54.25 10.51 5.285 20.31 5.714 27.72 3.093 7.41-2.622 12.78-7.97 15.187-17 4.81-18.057-7.725-43.658-28.72-54.22-5.23-2.63-10.306-4.087-15-4.53-1.172-.11-2.314-.168-3.437-.157zM303.845 55.75c19.023-.023 36.438 11.03 40.344 29.188 4.606 21.422-11.99 41.562-34.657 46.437-22.666 4.875-46.08-6.67-50.686-28.094-4.607-21.42 11.99-41.562 34.656-46.436 2.833-.61 5.68-.953 8.5-1.063.617-.023 1.23-.03 1.844-.03zm1.062 18.656c-.727-.02-1.47-.004-2.22.03-1.708.082-3.45.302-5.248.69-14.388 3.093-22.417 14.58-20.344 24.218 2.072 9.638 14.113 16.844 28.5 13.75 14.387-3.094 22.385-14.612 20.312-24.25-1.7-7.906-10.094-14.154-21-14.438zm-143.594 14.28l-19.625 13.626c24.337 43.933 26.24 90.73 9.97 125.5-16.11 34.423-51.512 56.117-95.876 48.907l-2.874 12.78c38.52 7.824 58.506 28.87 64.313 53.25 5.81 24.394-.47 50.085-7.25 70.844l11.655 12.53c17.256-76.23 69.968-112.334 119.72-107.968 51.093 4.484 96.243 51.53 94.718 128.22l12.656-2c-2.215-64.055 5.032-113.256 24.624-152.688 19.614-39.48 51.56-68.53 95.812-92.782l-1.875-15.875c-76.438 56.238-146.205 68.023-200.686 46.657-53.834-21.11-90.856-73.527-105.28-141zm-35.187 24.033c-30.82 5.572-54.648 24.147-68.188 49.374-14.34 26.72-17.054 60.963-2.343 95.625 39.084 7.96 65.64-8.93 79.156-37.814 13.116-28.028 12.412-68.27-8.625-107.187zM473.28 217.874c-39.428 22.37-66.17 47.877-83.186 82.125-18.283 36.797-25.43 84.51-22.53 150.125 15.19-.46 30.058-4.782 44.155-12.25 23.675-12.543 44.86-34.124 59.717-60.53 26.14-46.46 32.765-106.86 1.844-159.47zm-267.374 8.594c9.153-.055 17.655 2.296 24.594 6.905 9.252 6.146 15.406 16.71 15.406 28.625 0 23.803-20.81 43.78-46.094 48.25-12.634 2.234-24.684.086-33.937-6.063-9.253-6.148-15.375-16.704-15.375-28.625 0-23.84 20.798-43.782 46.063-48.25 3.158-.558 6.292-.825 9.343-.843zm.063 18.686c-1.95.01-4.007.182-6.157.563-17.21 3.042-30.625 17.93-30.625 29.843 0 5.956 2.418 9.997 7.03 13.062 4.613 3.065 11.742 4.74 20.345 3.22 17.188-3.04 30.625-18.01 30.625-29.845 0-5.947-2.42-9.998-7.032-13.063-3.46-2.298-8.338-3.81-14.187-3.78zM40.03 306.094c-6.08 4.882-10.803 11.12-14.31 18.22-7.026 14.21-8.61 32.002-4.44 47.686 4.17 15.684 13.7 29 28.782 36.125 10.39 4.908 23.81 7.032 40.75 4.188 6.894-20.296 12.886-45.628 8.22-65.22-4.718-19.8-18.065-35.643-58.626-40.937l-.343-.062h-.032zM231.595 336.5c-40.026.7-82.537 32.44-94.25 106.406 11.802 19.927 34.678 37.115 62.406 45.22 37.307 10.903 81.57 5.792 117.063-29.532l.156-1.97c6.08-76.347-34.24-116.068-77.25-119.843-2.69-.235-5.405-.328-8.126-.28z"/></svg>
));