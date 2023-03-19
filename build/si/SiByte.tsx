import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em"><title>byte</title><path d="M0 0v16.114h16.14V9.838c-.025-.633-.579-1.082-1.317-1.082-.739 0-1.294.449-1.32 1.108v3.614c-1.712-.002-3.435.003-5.142-.002a6.536 6.536 0 0 1 6.435-5.248c3.64.027 6.567 2.955 6.567 6.568a6.552 6.552 0 0 1-12.369 3.032l-.053-.104c-.396-.818-.739-1.188-1.583-1.24-.844-.027-1.503.447-1.292 1.133A9.175 9.175 0 0 0 14.796 24 9.195 9.195 0 0 0 24 14.796c0-4.537-3.428-8.466-7.886-9.1V0zm2.638 2.638h10.84v3.059a9.175 9.175 0 0 0-7.781 7.78c-1.013.002-2.04 0-3.06 0Z"/></svg>
));