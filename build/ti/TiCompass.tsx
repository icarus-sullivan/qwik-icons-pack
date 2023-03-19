import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g><path d="M12 5c3.859.001 7 3.142 7 7.001 0 3.858-3.141 6.998-7 6.999-3.859 0-7-3.14-7-6.999s3.141-7 7-7.001m0-2c-4.971.001-9 4.03-9 9.001 0 4.97 4.029 8.999 9 8.999 4.97-.001 9-4.03 9-8.999 0-4.971-4.029-9-9-9.001zM16.182 7.819c-.129-.128-.315-.178-.491-.127l-5.951 1.706c-.166.048-.295.177-.342.343l-1.707 5.951c-.051.175-.002.363.127.491.095.095.223.146.354.146l.138-.02 5.95-1.708c.165-.047.295-.177.342-.343l1.707-5.949c.05-.173.002-.361-.127-.49zm-7.282 7.282l1.383-4.817 3.434 3.435-4.817 1.382z"/></g></svg>
));