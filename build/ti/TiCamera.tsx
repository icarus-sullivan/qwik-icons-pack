import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M19 6h-1.586l-1-1c-.579-.579-1.595-1-2.414-1h-4c-.819 0-1.835.421-2.414 1l-1 1h-1.586c-1.654 0-3 1.346-3 3v8c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-8c0-1.654-1.346-3-3-3zm-7 10c-1.933 0-3.5-1.568-3.5-3.5 0-1.934 1.567-3.5 3.5-3.5s3.5 1.566 3.5 3.5c0 1.932-1.567 3.5-3.5 3.5zm6-4.701c-.719 0-1.3-.58-1.3-1.299s.581-1.301 1.3-1.301 1.3.582 1.3 1.301-.581 1.299-1.3 1.299z"/></svg>
));