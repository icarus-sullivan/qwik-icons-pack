import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M375 16v199h18v-14h46v14h18V16h-18v39h-46V16h-18zm18 57h46v46h-46V73zm0 64h46v46h-46v-46zM25 233v46h462v-46H25zm30 64v199h18v-39h46v39h18V297h-18v14H73v-14H55zm18 32h46v46H73v-46zm0 64h46v46H73v-46z"/></svg>
));