import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#444444" d="M16 9.875l-9.539-5.438v23.698l9.539-5.438 9.539 5.438v-23.698l-9.539 5.438zM11.248 16.286l4.752-2.709 4.752 2.709-4.752 2.709-4.752-2.709zM9.618 9.643l3.399 1.938-3.399 1.938v-3.876zM9.618 19.053l3.145 1.792-3.145 1.793v-3.585zM22.382 22.638l-3.145-1.793 3.145-1.793v3.585zM18.982 11.581l3.399-1.938v3.876l-3.399-1.938z"/></svg>
));