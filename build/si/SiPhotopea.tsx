import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em"><title>Photopea</title><path d="M20.098 0A3.899 3.899 0 0 1 24 3.903v16.194A3.899 3.899 0 0 1 20.098 24H6.393l-.051-10.34v-.074c0-3.92 3.112-7.09 6.963-7.09 2.31 0 4.177 1.902 4.177 4.254 0 2.352-1.867 4.254-4.177 4.254-.77 0-1.393-.634-1.393-1.418 0-.783.623-1.418 1.393-1.418.769 0 1.392-.634 1.392-1.418 0-.784-.623-1.418-1.392-1.418-2.31 0-4.178 1.9-4.178 4.253 0 2.352 1.868 4.254 4.178 4.254 3.85 0 6.962-3.169 6.962-7.09 0-3.92-3.112-7.089-6.962-7.089-5.39 0-9.75 4.436-9.75 9.925v.086l.023 10.315A3.899 3.899 0 0 1 0 20.097V3.903A3.899 3.899 0 0 1 3.902 0z"/></svg>
));