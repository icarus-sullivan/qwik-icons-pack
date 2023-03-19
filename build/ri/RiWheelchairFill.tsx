import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em"><g>
        <path fill="none" d="M0 0H24V24H0z"/>
        <path d="M8 10.341v2.194C6.804 13.227 6 14.52 6 16c0 2.21 1.79 4 4 4 1.48 0 2.773-.804 3.465-2h2.193c-.823 2.33-3.046 4-5.658 4-3.314 0-6-2.686-6-6 0-2.613 1.67-4.835 4-5.659zM12 17c-1.657 0-3-1.343-3-3v-4c0-1.657 1.343-3 3-3s3 1.343 3 3v5h1.434c.648 0 1.253.314 1.626.836l.089.135 2.708 4.515-1.714 1.028L16.433 17H12zm0-15c1.38 0 2.5 1.12 2.5 2.5S13.38 7 12 7 9.5 5.88 9.5 4.5 10.62 2 12 2z"/>
    </g></svg>
));