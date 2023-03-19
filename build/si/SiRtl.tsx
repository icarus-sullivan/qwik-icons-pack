import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em"><title>RTL</title><path d="M0 9.953h7.812v4.094H0zm4.58 3.384h2.071l-1.308-.932.059-.006a.784.784 0 0 0 .569-.235.874.874 0 0 0 .252-.604c0-.164-.03-.299-.082-.416a.847.847 0 0 0-.211-.282.805.805 0 0 0-.294-.164 1.04 1.04 0 0 0-.328-.053H1.185l-.006 2.68h1.976v-.88h.405zm-.521-2.064c.088 0 .158.03.21.094a.339.339 0 0 1 .077.199.288.288 0 0 1-.076.205.283.283 0 0 1-.188.1h-.927v-.598zm4.035-1.32h7.812v4.094H8.094zm6.375 1.337v-.633H9.39v.633h1.496v2.047h2.111V11.29zm1.719-1.337H24v4.094h-7.812zm6.422 3.384v-.616h-2.903v-2.064h-2.258v2.68z"/></svg>
));