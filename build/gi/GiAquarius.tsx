import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M301.313 68.906l-88.875 69.438-35.157-68.156-141.218 93.406v85.72l108.626-76.69 39.437 67 93.03-65.06 34.658 69.28 93.343-68.094 67.97 78.563 1.28-112.75L426.5 70.438 337.437 137l-36.125-68.094zm0 194.125l-88.875 69.44-35.157-68.126L36.063 357.72v85.717L144.69 366.75l39.437 67 93.03-65.063 34.658 69.282 93.343-68.064 67.97 78.53 1.28-112.748-47.906-71.094-89.063 66.53-36.125-68.093z"/></svg>
));