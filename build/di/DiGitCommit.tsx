import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#444444" d="M22.161 14.689c-0.711-2.75-3.188-4.791-6.161-4.791s-5.449 2.041-6.161 4.791h-5.018v3.194h5.018c0.712 2.751 3.19 4.791 6.161 4.791s5.45-2.040 6.161-4.791h5.019v-3.194h-5.019zM16 19.48c-1.763 0-3.194-1.432-3.194-3.194s1.431-3.194 3.194-3.194c1.762 0 3.194 1.431 3.194 3.194s-1.432 3.194-3.194 3.194z"/></svg>
));