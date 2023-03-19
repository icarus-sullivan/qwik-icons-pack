import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M249.28 106.28V250h-77.186v-56.25H22.47V319.406h149.624v-50.719h77.187v148.407h18.69V357.22h71.686v50.718H489.28V282.28H339.657v56.251H267.97V189.407h71.686v50.72H489.28V114.47H339.657V170.718H267.97v-64.44h-18.69zm109.064 26.876h112.25v88.28h-112.25v-88.28zm-317.188 79.28h112.25v88.283H41.156v-88.283zm317.188 88.533h112.25v88.28h-112.25v-88.28z"/></svg>
));