import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M256 44.158L19.76 165.816 32 173.937l224-112 224 112 12.24-8.12L256 44.157zm0 37.904l-215 107.5V495h30V203h370v292h30V189.562l-215-107.5zM92 223v18h328v-18H92zm0 36v18h328v-18H92zm100 36c-8.5 0-14.393 5.524-18.95 11.6-4.556 6.075-8.276 13.701-11.478 22.24-4.27 11.389-7.54 24.334-9.248 36.887-8.722-2.235-22.048-4.431-24.324 2.273-2.354 6.934 7.344 13.583 16.668 18.217-.32 1.067-.63 2.17-.906 3.344C141.969 397.18 141 406.6 141 416c0 9.4.969 18.82 2.762 26.44 1.272 5.406 3.108 9.766 4.744 12.56h214.988c1.636-2.794 3.472-7.154 4.744-12.56C370.031 434.82 371 425.4 371 416c0-9.4-.969-18.82-2.762-26.44a56.768 56.768 0 0 0-.906-3.343c9.324-4.634 19.022-11.283 16.668-18.217-2.276-6.704-15.602-4.508-24.324-2.273-1.707-12.553-4.977-25.498-9.248-36.887-3.202-8.539-6.922-16.165-11.479-22.24C334.393 300.524 328.5 295 320 295H192zm0 18h128c-.5 0 1.607.476 4.55 4.4 2.944 3.925 6.224 10.299 9.022 17.76 3.673 9.795 6.488 21.437 8.028 32.414C318.195 361.125 292.18 361 256 361c-36.18 0-62.195.125-85.6 6.574 1.54-10.977 4.355-22.62 8.028-32.414 2.798-7.461 6.078-13.835 9.021-17.76 2.944-3.924 5.051-4.4 4.551-4.4zm-16 87a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm160 0a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm-183 73v22h30v-22h-30zm176 0v22h30v-22h-30z"/></svg>
));