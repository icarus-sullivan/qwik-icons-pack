import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.00885 6.99103L11.0333 11.0332L6.99114 9.00874L4.96666 4.96655L9.00885 6.99103ZM9.43541 9.4353L8.48072 7.51916L6.56458 6.56447L7.51926 8.48062L9.43541 9.4353Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.9795 8.5C13.739 11.4149 11.4149 13.739 8.49999 13.9795V13H7.49999V13.9795C4.57233 13.7379 2.24067 11.3945 2.0175 8.46167H3V7.46167H2.02382C2.28141 4.56475 4.59788 2.25996 7.49999 2.02054V3H8.49999V2.02054C11.4149 2.26101 13.739 4.5851 13.9795 7.5H13V8.5H13.9795ZM8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"/></svg>
));