import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em"><title>Erlang</title><path d="M8.859 7.889c.154-1.863 1.623-3.115 3.344-3.119 1.734.004 2.986 1.256 3.029 3.119zm12.11 11.707c.802-.86 1.52-1.872 2.172-3.03l-3.616-1.807c-1.27 2.064-3.127 3.965-5.694 3.977-3.738-.012-5.206-3.208-5.198-7.322h13.966c.019-.464.019-.68 0-.904.091-2.447-.558-4.504-1.737-6.106l-.007.005H24v15.186h-3.039zm-17.206-.001C1.901 17.62.811 14.894.813 11.64c-.002-2.877.902-5.35 2.456-7.232H0v15.187h3.761Z"/></svg>
));