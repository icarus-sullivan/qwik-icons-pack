import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M23.018 20.705l135.64 163.623-107.33-32.39 168.79 111.326L82.784 224.11l192.51 111.87-130.525-1.76 282.08 126.116c13.913 7.198 28.182 13.638 42.728 19.246l2.297.885 20.797 9.3-16.895-37.82c-3.67-9.115-7.69-18.094-12.03-26.926L338.312 144.24l1.094 129.362L228.352 82.393l38.482 136.49L155.906 50.668l31.684 106.467L23.018 20.705zm225.148 225.178c94.262 38.75 169.608 116.195 208.152 207.924-91.01-40.827-168.835-115.908-208.152-207.924z"/></svg>
));