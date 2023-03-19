import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M85.183 408.608H26V103.313h59.183v305.295zm0-373.513L35.075 85.072h50.108V35.095zM408.72 85.15V25.967H103.386v59.184H408.72zM35.075 426.849l50.108 50.11v-50.11H35.075zM476.978 85.164l-50.109-50.109v50.109h50.109zm-68.311 341.685H103.386v59.184h305.281v-59.184zm.42-323.536v305.124H103.965V103.313h305.124zm-21.91 17.098H121.062v268.482c13.152-230.342 44.059-239.548 266.115-268.482zM486 103.313h-59.183v305.295H486V103.313zm-59.183 373.619l50.108-50.109h-50.108v50.109z"/></svg>
));