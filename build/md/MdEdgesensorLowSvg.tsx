import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1em" viewBox="0 0 24 24" width="1em"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M2,7h2v7H2V7z M20,10h2v7h-2V10z M16,2.01L8,2C6.9,2,6,2.9,6,4v16c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V4 C18,2.9,17.1,2.01,16,2.01z M16,17H8V7h8V17z"/></g></g></svg>
));