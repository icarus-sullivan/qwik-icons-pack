import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M416.104 18A88 84.324 0 0 0 494 99.674V18h-77.896zM128 137c-42.657 0-79.727 10.965-110 25.322v128.002c30.184-5.45 59.138-8.394 86.82-9.08 50.9-1.26 97.525 5.05 139.744 17.12 42.768-27.11 86.74-52.815 134.387-73.048C304.435 169.018 211.563 137 128 137zm366 71.98c-85.695 15.81-157.66 53.443-226.953 96.485 22.08 7.666 42.85 16.937 62.283 27.537 73.712 40.21 128.137 99.163 162.81 160.998H494V208.98zm-373.03 90.008c-5.196-.034-10.44.016-15.738.15-27.682.703-56.767 3.78-87.232 9.5V494h453.242c-33.246-55.78-83.587-108.678-150.53-145.195-55.257-30.142-121.817-49.31-199.743-49.817z"/></svg>
));