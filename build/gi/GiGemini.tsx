import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M40.222 392.1c23.715-6.93 47.498-12.842 71.872-17.062V134.755c-24.37-4.214-48.157-10.137-71.872-17.06V27.4c70.673 20.643 133.888 29.363 207.96 29.363 78.793 0 145.615-9.52 220.073-33.702v90.575c-26 8.44-51.744 15.286-78.683 20.18v242.157c26.934 4.89 52.69 11.736 78.683 20.18v90.575c-74.463-24.188-141.285-33.702-220.07-33.702-74.08 0-137.29 8.72-207.963 29.368V392.1zm207.96-28.18c9.728 0 29.432.16 38.915.473V145.396c-9.483.31-29.187.462-38.913.462-7.916 0-25.85-.104-33.62-.312v218.68c7.77-.197 25.704-.306 33.62-.306z"/></svg>
));