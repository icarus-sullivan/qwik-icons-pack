import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M73 25v62h78V25H73zm96 0v62h78V25h-78zm96 0v62h78V25h-34.8L297 58.6 278 25h-13zm96 0v62h78V25h-78zM41 105v24.4L53.21 151H471v-46H41zm32 64v174h78V169H73zm96 0v174h78V169h-78zm96 0v174h78V169h-78zm96 0v151.9l12.5 22.1H439V169h-78zM41 361v46h430v-46H41zm32 64v62h68l10-30.2V425H73zm96 0v62h78v-62h-78zm96 0v62h78v-62h-78zm96 0v62h78v-62h-78z"/></svg>
));