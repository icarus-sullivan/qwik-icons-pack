import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em"><g>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M21.422 15.358c-3.83-1.153-6.055-1.84-6.678-2.062a12.41 12.41 0 0 0 1.32-3.32H12.8V8.872h4v-.68h-4V6.344h-1.536c-.28 0-.312.248-.312.248v1.592H7.2v.68h3.752v1.104H7.88v.616h6.224a10.972 10.972 0 0 1-.888 2.176c-1.408-.464-2.192-.784-3.912-.944-3.256-.312-4.008 1.48-4.128 2.576C5 16.064 6.48 17.424 8.688 17.424s3.68-1.024 5.08-2.72c1.167.558 3.338 1.525 6.514 2.902A9.99 9.99 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.983 9.983 0 0 1-.578 3.358zm-12.99 1.01c-2.336 0-2.704-1.48-2.584-2.096.12-.616.8-1.416 2.104-1.416 1.496 0 2.832.384 4.44 1.16-1.136 1.48-2.52 2.352-3.96 2.352z"/>
    </g></svg>
));