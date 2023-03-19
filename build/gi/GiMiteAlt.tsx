import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M370.06 77.686c-10.644.085-21.42 1.936-31.816 5.86-14.63 5.53-17.103 17.274-12.506 23.895 14.11 29.535 18.452 62.364 3.78 90.1-17.168-25.923-43.89-42.415-73.518-42.415-29.626 0-56.347 16.496-73.516 42.42-14.672-27.734-10.335-60.56 3.772-90.09 4.606-6.62 2.138-18.37-12.5-23.894-41.58-15.69-89.25 1.756-110.16 32.82 30.66-8.7 66.99-27.915 103.05-7.155.675.39 1.342.735 1.997 1.045-13.33 33.103-15.584 70.885 5.423 102.39-3.543 7.674-6.336 15.914-8.263 24.588-26.844-17.095-39.352-48.493-41.52-81.71l-.17.01c-.018-8.626-13.526-18.352-30.46-12.02C52.03 159.1 27.61 203.606 32.32 240.76c17.003-26.187 38.658-65.485 77.91-74.688 4.368 35.197 20.396 69.337 53.086 87.086-.373 4.018-.572 8.1-.572 12.246 0 2.983.097 5.85.283 8.614-25.055-5.735-46.175-23.645-61.806-46.41-.038-.06-.084-.12-.124-.18-.353-.516-.72-1.02-1.067-1.54l-.08.05c-5.773-6.48-18.946-7.902-28.93 4.216-28.26 34.29-25.08 73.666-13.86 107.116 1.65-31.567 8.098-64.37 38.725-91.67 17.705 22.113 41.41 39.493 69.43 44.134 2.336 9.984 6.2 18.202 11.322 25.02-21.07 2.364-43.31-3.103-63.85-13.248l-.03.064c-7.296-3.463-17.49.828-19.402 16.125-5.475 43.83 14.19 87.256 39.99 101.73-13.334-23.954-23.805-58.905-13.8-98.31.023-.09.035-.177.057-.267 22.498 8.685 47.02 12.214 70.2 6.79 4.84 3.53 10.313 6.46 16.288 8.858-9.288 2.466-18.875 12.258-19.66 26.29-1.815 32.91 28.185 46.034 51.105 39.704-18.345-8.55-27.09-37.8-13.695-52.14-.348-3.926-1.426-6.985-3.006-9.262C231.57 343.6 243.418 344.8 256 344.8c13.92 0 26.943-1.463 38.55-4.556-1.927 2.343-3.25 5.674-3.646 10.106 13.395 14.34 4.652 43.59-13.693 52.14 22.92 6.33 52.92-6.795 51.104-39.705-.827-14.944-11.646-25.085-21.457-26.68 5.61-2.327 10.77-5.13 15.358-8.474 23.173 5.414 47.688 1.882 70.18-6.802.023.097.035.19.06.287 9.99 39.405-.466 74.34-13.8 98.31 25.8-14.46 45.465-57.885 39.99-101.73-1.912-15.3-12.11-19.59-19.405-16.123l-.04-.082c-20.533 10.14-42.762 15.61-63.825 13.252 5.114-6.814 8.976-15.025 11.31-25.002 28.02-4.637 51.726-22.026 69.43-44.14 30.627 27.3 37.074 60.104 38.725 91.656 11.22-33.45 14.4-72.81-13.86-107.115-9.984-12.11-23.157-10.683-28.93-4.2l-.08-.053c-.347.52-.713 1.025-1.066 1.54-.04.062-.086.12-.125.182-15.633 22.765-36.754 40.682-61.81 46.413.188-2.765.286-5.634.286-8.62 0-4.146-.2-8.233-.572-12.253 32.683-17.75 48.722-51.882 53.08-87.09 39.246 9.22 60.9 48.513 77.9 74.684 4.71-37.155-19.71-81.658-61.334-97.228-16.928-6.326-30.434 3.41-30.447 12.035l-.182-.01c-2.153 33.22-14.666 64.602-41.503 81.698-1.926-8.672-4.72-16.91-8.26-24.582 21.006-31.508 18.75-69.293 5.417-102.398.656-.31 1.324-.656 2-1.047 36.06-20.76 72.405-1.53 103.05 7.155-15.682-23.3-46.416-38.936-78.345-38.68zM210.58 244.42c19.455 0 35.22 15.766 35.22 35.22 0 19.44-15.765 35.22-35.22 35.22-19.44 0-35.22-15.764-35.22-35.22 0-19.44 15.765-35.22 35.22-35.22zm90.84 0c19.44 0 35.22 15.766 35.22 35.22 0 19.44-15.765 35.22-35.22 35.22-19.44 0-35.22-15.764-35.22-35.22 0-19.44 15.765-35.22 35.22-35.22zm-97.006 8.97c-9.72 0-17.61 7.89-17.61 17.61 0 9.72 7.89 17.61 17.61 17.61 9.72 0 17.61-7.89 17.61-17.61 0-9.72-7.89-17.61-17.61-17.61zm90.842 0c-9.72 0-17.61 7.89-17.61 17.61 0 9.72 7.89 17.61 17.61 17.61 9.72 0 17.61-7.89 17.61-17.61 0-9.72-7.89-17.61-17.61-17.61zm-69.182 35.43c-4.86 0-8.804 3.945-8.804 8.805 0 4.86 3.944 8.805 8.804 8.805s8.807-3.945 8.807-8.805c0-4.86-3.946-8.805-8.806-8.805zm90.84 0c-4.86 0-8.805 3.945-8.805 8.805 0 4.86 3.944 8.805 8.804 8.805s8.807-3.945 8.807-8.805c0-4.86-3.946-8.805-8.806-8.805z"/></svg>
));