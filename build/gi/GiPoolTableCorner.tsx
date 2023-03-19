import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M25 25v78h238V25H25zm256 0v78h.2c-5.9 12.4-9.2 26.3-9.2 41 0 52.9 43.1 96 96 96 14.7 0 28.6-3.3 41-9.2v.2h78V25H281zm87 41.02c43.2 0 78 34.78 78 77.98s-34.8 78-78 78-78-34.8-78-78 34.8-77.99 78-77.98zM25 121v30h195.3l30-30H25zm384 128v238h78V249h-78zm-18 12.7l-30 30V487h30V261.7zM252.5 265a51.5 51.5 0 0 0-51.5 51.5 51.5 51.5 0 0 0 51.5 51.5 51.5 51.5 0 0 0 51.5-51.5 51.5 51.5 0 0 0-51.5-51.5zm-68.7 111.7L160 416l43.6 24.3 20.9-41-40.7-22.6zm-33.1 54.7L117.1 487h62.7l15.6-30.6-44.7-25z"/></svg>
));