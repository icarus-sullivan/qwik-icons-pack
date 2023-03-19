import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M477.02 283.53l-23.338 168.596-120.823-64.287 19.638-88.924zm-4.953-28.205l-82.372-132.09-82.893 89.128 42.711 72.504zM365.623 110.01l-140.96-50.136-4.137 115.327 75.487 26.853zm-158.758 65.346l-16.654-107.38L72.903 131.91l75.975 73.551zm-67.171 43.635l-76.87-54.12L26 281.035l94.478-4.857zM43.666 321.713l65.223 85.991 45.154-71.366-31.928-42.6zm127.649 24.632l-13.204 71.352 93.372-11.528-35.625-65.002zm57.931-16.63l51.942 32.37 8.63-85.684-54.99 14.104zm.152-51.805l41.678-25.176-54.839-37.302-14.706 48.982z"/></svg>
));