import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M102.78 20.625V113.5L149 165.22v183.03h-25.875L99.53 489.156h319.94L395.874 348.25H370.03V165.22l46.22-51.72V20.625h-53.938v43.97H329.47v-43.97h-53.94v43.97h-32.436v-43.97h-53.938v43.97H156.72v-43.97h-53.94zM263.813 157.72c30.17 0 54.625 24.455 54.625 54.624 0 20.84-11.65 38.946-28.812 48.156l27.625 140.25H210.375L238 260.5c-17.148-9.214-28.813-27.326-28.813-48.156 0-30.17 24.457-54.625 54.625-54.625z"/></svg>
));