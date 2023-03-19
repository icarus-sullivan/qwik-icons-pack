import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M97.812 23.375v92.875l46.22 51.72V351h-25.845L94.594 491.906H414.53L390.938 351h-25.875V167.97l46.22-51.72V23.375h-53.938v43.97H324.5v-43.97h-53.938v43.97h-32.437v-43.97h-53.938v43.97H151.75v-43.97H97.812zm73.75 152.875h18.688v50.22h-18.688v-50.22zm73.594 0h18.688v50.22h-18.688v-50.22zm74.156 0H338v50.22h-18.688v-50.22z"/></svg>
));