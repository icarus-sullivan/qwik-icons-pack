import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M18.831 4.059c-.107-.095-.243-.139-.394-.121l-11 1.25c-.249.031-.437.244-.437.496v10.316c-1.654 0-3 1.122-3 2.5s1.346 2.5 3 2.5 3-1.122 3-2.5v-7.609l6-.625v3.734c-1.654 0-3 1.122-3 2.5s1.346 2.5 3 2.5 3-1.122 3-2.5v-12.066c0-.144-.062-.28-.169-.375z"/></svg>
));