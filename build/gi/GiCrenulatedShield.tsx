import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M45.063 17.406v99.938l63.656 60.312 2.936 2.78v185.25c33.96 43.39 82.572 83.76 148.906 122.627 67.823-39.784 116.793-81.943 150.688-126.094V180.436l2.906-2.78 63.656-60.282v-99.97h-58.968V85.157h-66v-67.75h-58.97v67.75H228.47v-67.75h-59v67.75H104.06v-67.75h-59zm56.656 100.47h160.03v152.75H148.437v-108.97l-46.718-43.78zM262.312 271.81h112.156v73.813c-24.952 33.1-61.87 64.714-112.158 94.03V271.814z"/></svg>
));