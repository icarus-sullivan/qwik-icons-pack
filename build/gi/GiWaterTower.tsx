import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M256 25.49L119.5 71h273L256 25.49zM105 89v30h78V89h-78zm96 0v30h110V89H201zm128 0v30h78V89h-78zM89 137v30h334v-30H89zm16 48v46h78v-46h-78zm96 0v46h110v-46H201zm128 0v46h78v-46h-78zm-224 64v14h78v-14h-78zm96 0v14h110v-14H201zm128 0v14h78v-14h-78zM32 283v18h448v-18H32zm71 37v176h18v-25.8l135-52.5 135 52.5V496h18V320h-18v25.8l-135 52.5-135-52.5V320h-18zm18 45.2L231.1 408 121 450.8v-85.6zm270 0v85.6L280.9 408 391 365.2z"/></svg>
));