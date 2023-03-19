import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="m21,20.9999v218.8438h59.1907v-159.6532h159.6533v-59.1907h-218.844zm251.1566,0v59.1907h159.7999v159.6532h59.0435v-218.8438h-218.8434zm-163.0315,88.125v293.7501h293.7503v-293.7501h-293.7503zm146.8748,58.7501c48.64,0 88.1253,39.4852 88.1253,88.125s-39.4853,88.125-88.1253,88.125-88.1246-39.4853-88.1246-88.125 39.4847-88.125 88.1246-88.125zm-234.9999,104.2813v218.8438h218.844v-59.1906h-159.6533v-159.6532h-59.1907zm410.9565,0v159.6532h-159.7999v59.1906h218.8434v-218.8438h-59.0435z"/></svg>
));