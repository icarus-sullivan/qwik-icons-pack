import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M87.195 53.838v79.494h44.213V53.838H87.195zm344.291 89.422c.34 7.22.677 14.441 1.014 21.662l27.861 41.004-46.379 17.504 9.409 16.57-24.334 32.486h86.273V143.26h-53.844zm-387.562 2.303v124.619H266.61l5.389-54.61-63.18-17.166 21.7-38.656-9.46-14.188H43.925zm6.709 134.802V482.076h53.316V321.408h96.614v160.668h271.152v-201.71h-83.766l-34.537 13.61-23.178 30.768-34.505-29.69-26.827-14.689H50.632z"/></svg>
));