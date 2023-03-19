import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M21.844 17.813v20.843l252.062 103.28-18.03 12.814L21.843 58.844v47.5l192 78.344-102.813 73.218-3.968 2.844.032 4.844.156 19.75 223.313 88.562-.094 20.094-223.033-88.47.25 30.47.126 13.188.593-.22v.594l221.875 90.75-.217 45.282L491.5 454.188l-160.625-146.25-.188 44.343-132.312-54.124 91.03-65.72 3.94-2.842-.064-4.875-.092-7.657.218.093-1.156-88.53L21.844 17.81zM273.78 164.97l.75 55.155-96.53 69.72-50.53-20.69L273.78 164.97z"/></svg>
));