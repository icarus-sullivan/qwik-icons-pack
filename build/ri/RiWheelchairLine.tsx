import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em"><g>
        <path fill="none" d="M0 0H24V24H0z"/>
        <path d="M8 10.341v2.194C6.804 13.227 6 14.52 6 16c0 2.21 1.79 4 4 4 1.48 0 2.773-.804 3.465-2h2.193c-.823 2.33-3.046 4-5.658 4-3.314 0-6-2.686-6-6 0-2.613 1.67-4.835 4-5.659zM12 17c-1.657 0-3-1.343-3-3v-4c0-1.044.534-1.964 1.343-2.501C9.533 6.964 9 6.044 9 5c0-1.657 1.343-3 3-3s3 1.343 3 3c0 1.044-.534 1.964-1.343 2.501C14.467 8.036 15 8.956 15 10v4.999l1.434.001c.648 0 1.253.314 1.626.836l.089.135 2.708 4.515-1.714 1.028L16.433 17 15 16.999 12 17zm0-8c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h.999L13 10c0-.552-.448-1-1-1zm0-5c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"/>
    </g></svg>
));