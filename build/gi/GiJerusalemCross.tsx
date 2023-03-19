import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M352 23v18h-78v197h197v-78h18v192h-18v-78H274v197h78v18H160v-18h78V274H41v78H23V160h18v78h197V41h-78V23zm41 41v55h55v18h-55v55h-18v-55h-55v-18h55V64zm-256 0v55h55v18h-55v55h-18v-55H64v-18h55V64zm256 256v55h55v18h-55v55h-18v-55h-55v-18h55v-55zm-256 0v55h55v18h-55v55h-18v-55H64v-18h55v-55z"/></svg>
));