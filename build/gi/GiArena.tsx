import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M76 16C36 36 31 46 31 46c40 160 5 275-15 375 0 0 10 25 90 45V256c0-80-30-240-30-240zm360 0s-30 160-30 240v210c80-20 90-45 90-45-20-100-55-215-15-375 0 0-5-10-45-30zM226 196c-40 0-90 15-90 15v270s50 15 90 15h60c40 0 90-15 90-15V211s-50-15-90-15h-60z"/></svg>
));