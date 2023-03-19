import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="m256,11c-83.484,0-157.231,10.8258-202.8907,27.4094-26.5885,62.0598-42.1094,136.9446-42.1094,217.5906 0,55.1164 7.2716,107.4897 20.3656,154.9625 57.6344,15.2522 136.711,24.8062 224.4813,24.8062s167.1107-9.554 224.7874-24.8062c13.0493-47.4734 20.3657-99.845 20.3657-154.9625 0-80.6461-15.3679-155.5308-41.9563-217.5906-45.6596-16.5836-119.5598-27.4094-203.0437-27.4094zm.1533,62.3219c25.8452,0 46.7031,81.8135 46.7031,182.6781s-20.8579,125.5625-46.7031,125.5625-46.8563-24.6979-46.8563-125.5625 21.011-182.6781 46.8563-182.6781zm-128.1657,22.05c22.7258,0 41.0375,71.9377 41.0375,160.6281s-18.3117,103.3594-41.0375,103.3594-41.1906-14.669-41.1906-103.3594 18.4649-160.6281 41.1906-160.6281zm256.3313,0c22.7257,0 41.0375,71.9377 41.0375,160.6281s-18.3118,103.3594-41.0375,103.3594-41.1907-14.669-41.1907-103.3594 18.465-160.6281 41.1907-160.6281zm-347.7469,333.2c4.8955,15.5677 10.418,30.5696 16.5375,44.8656 45.6581,16.6316 119.3953,27.5625 202.8907,27.5625s157.3855-10.9309 203.0437-27.5625c6.1195-14.296 11.6545-29.298 16.5375-44.8656-52.9175,16.5242-131.646,27.1031-219.7343,27.1031-88.0113,0-166.3832-10.6037-219.2751-27.1031z"/></svg>
));