import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="none" stroke-width="0" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.4142 10.1091L13.4179 10.1128L12.0037 11.527L12 11.5233L11.9963 11.527L10.5821 10.1128L10.5858 10.1091L7.76105 7.28433L9.17526 5.87012L12 8.69486L14.8247 5.87012L16.239 7.28433L13.4142 10.1091Z" fill="currentColor"/>
  <path d="M12 15.3052L14.8247 18.1299L16.239 16.7157L13.4142 13.891L13.4179 13.8873L12.0037 12.4731L12 12.4767L11.9963 12.4731L10.5821 13.8873L10.5858 13.891L7.76105 16.7157L9.17526 18.1299L12 15.3052Z" fill="currentColor"/></svg>
));