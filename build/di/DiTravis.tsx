import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#444444" d="M11.392 9.374h4.096v13.12h-1.536v2.24h6.080v-2.496h-1.92v-13.056h4.352v1.92h1.984v-3.904h-15.296v3.904h2.24zM29.263 2.718h-24.848c-0.433 0-0.832 0.321-0.832 0.749v24.845c0 0.428 0.398 0.774 0.832 0.774h24.848c0.433 0 0.753-0.347 0.753-0.774v-24.845c0-0.428-0.319-0.749-0.753-0.749zM25.728 12.382h-4.544v-1.92h-1.792v10.496h1.92v5.056h-8.64v-4.8h1.536v-10.56h-1.536v1.728h-4.8v-6.464h17.856v6.464z"/></svg>
));