import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M254.375 25.986v38.881c.152-.002.303-.01.455-.012 5.852-.07 11.703.121 17.545.516V25.986h-18zm68.895 14.44l-9.489 6.53 10.205 14.827 9.489-6.531-10.205-14.826zM134.246 57.63l-6.682 16.715 10.696 4.275 6.681-16.713-10.695-4.277zm121.11 25.203c-24.453.266-48.59 5.191-71.575 16.539-12.608 6.225-31.654 22.672-43.385 36.893-4.32 5.238-7.341 10.026-9.07 13.466l262.12 13.46c-1.479-8.165-4.711-17.912-9.675-27.069-8.814-16.263-22.438-30.598-34.31-34.969-30.707-11.304-62.667-18.662-94.106-18.32zM60.475 97.5l-10.513 4.705 7.351 16.43 10.516-4.705-7.353-16.43zm137.045 13.963l1.178 11.459-17.906 1.84-1.178-11.46 17.906-1.84zm255.352 9.228l-10.975 14.268 9.131 7.021 10.975-14.265-9.131-7.024zm-334.404 46.407c-18.28 5.306-26.596 15.856-32.145 29.543-4.034 9.952-5.995 21.298-7.793 32.427 10.527-.301 24.034-.489 39.88-.548 33.755-.127 77.542.312 122.267 1.414 44.725 1.101 90.368 2.862 127.886 5.396 23.78 1.606 43.785 3.28 59.004 5.615-.938-8.96-1.28-17.423-2.857-25.119-2.565-12.517-7.385-23.23-23.246-34.199l-282.996-14.53zm265.611 21.529l10.742 4.158-6.498 16.787-10.74-4.158 6.496-16.787zm-313.484.039l-16.957 6.04 3.865 10.85 16.957-6.038-3.865-10.852zm82.095 11.432l4.705 10.511-16.43 7.356-4.704-10.518 16.43-7.35zm-21.177 46.4c-4.491-.002-8.843.006-13.035.022-16.771.063-31.02.268-41.524.597-5.252.165-9.573.361-12.734.578-3.103.213-5.564.652-5.026.5l-.017.004c-3.453.908-6.708 3.687-9.44 8.717-2.732 5.03-4.55 12.007-4.886 19.006-.337 6.999.817 13.99 3.07 19.027 2.15 4.808 4.871 7.536 8.336 8.776 89.935 11.121 188.271 16.132 268.637 17.148 4.445-28.47 18.07-54.228 43.126-52.582 35.248 2.316 31.394 28.35 31.252 52.322 20.68-.46 38.668-1.247 53.073-2.302l.05-.004.05-.002c4.196-.261 5.74-1.713 7.65-6.131 1.909-4.419 2.705-11.703 1.763-19.238-.941-7.535-3.531-15.297-6.949-20.848-3.418-5.551-7.28-8.417-10.484-8.979l-.744-.13-.711-.252c-8.623-3.06-38.522-6.932-75.62-9.438-37.097-2.506-82.563-4.264-127.117-5.361-38.984-.96-77.284-1.416-108.72-1.43zM250.86 272.85l16.715 6.681-4.277 10.696-16.713-6.682 4.275-10.695zM65.64 322.992c-2.322 8.681-2.062 18.384.687 26.951 3.932 12.252 12.18 21.466 23.871 23.979 119.772 18.231 234.305 22.915 345.037 17.6 7.433-11.564 11.426-25.36 10.834-36.758-.381-7.353-2.174-13.285-5.68-17.664-80.254 4.466-235.272 2.235-374.75-14.108zm60.064 29.64l10.74 4.159-6.496 16.787-10.744-4.158 6.5-16.787zm285.813 19.23l7.785 8.488-13.266 12.166-7.785-8.489 13.266-12.166zm-368.45 12.296l-16.955 6.04 3.864 10.85 16.957-6.038-3.866-10.852zm64.332 10.47c2.186 4.205 4.176 8.284 6.27 12.034 5.635 10.09 11.512 18.064 24.879 24.092 53.427 24.095 100.693 32.588 159.752 29.814l-3.045-1.216 4.277-10.698 16.713 6.682-1.683 4.21c5.24-.407 10.566-.885 16.013-1.448 17.618-1.824 34.517-11.655 47.256-23.592 8.202-7.686 14.244-16.306 18.006-23.3l-1.797-.134c-67.939 1.674-137.374-.507-208.566-7.267l5.295 2.049-6.497 16.787-10.744-4.157 5.907-15.252a1748.346 1748.346 0 0 1-72.036-8.603zm-63.496 20.585L32.928 429.48l9.13 7.024 10.975-14.268-9.13-7.023zm419.377 17.582l-10.904 3.715 5.805 17.039 10.904-3.715-5.805-17.04zm-78.816 32.982l-6.682 16.715 10.696 4.276 6.681-16.715-10.695-4.276zm-241.541 10.944l-4.158 10.742 16.785 6.498 4.158-10.742-16.785-6.498z"/></svg>
));