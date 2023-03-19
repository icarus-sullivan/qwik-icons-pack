import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M208 22.81c-7.636 5.524-21.8 17.4-22.885 24.467 2.354 3.189 6.509 5.994 9.506 7.723h26.758c3.704-2.789 7.49-4.404 9.506-7.723-4.548-11.043-13.671-18-22.885-24.466zM199.027 73l-11.5 46h40.946l-11.5-46zM304 95.5c-16.026 21.362-36.332 41.846-53.34 60.555-9.89 10.88-18.644 21.146-24.672 30.187C219.961 195.283 217 203 217 208c0 2.1.177 4.112.488 6.045 45.098-28.37 81.492-70.44 97.188-105.135-3.697-4.426-7.289-8.895-10.676-13.41zm23.549 28.225c-19.266 37.932-56.702 78.784-103.026 107.134 4.64 6.573 10.415 11.207 14.297 13.85 51.58-32.122 85.075-67.773 103.881-104.494-5.012-5.389-10.115-10.892-15.152-16.49zM184.219 137l-7.928 87.21 7.197 10.798c14.228 21.341 31.924 36.144 47.512 49.674v-23.537c-10.063-6.447-32-23.84-32-53.145 0-11 5.04-21.283 12.012-31.742 5.927-8.891 13.506-17.983 21.853-27.34L231.781 137zm171.416 17.197c-18.216 32.977-47.038 64.315-87.65 92.803h31.363c37.622-26.747 59.943-50.916 68.187-79.42-4.276-4.942-7.984-9.125-11.9-13.383zM416 159.312c-5.616 7.226-11.495 13.663-17.357 19.52.883 1.39 1.744 2.78 2.543 4.168h36.427c-7.252-6.935-14.636-14.711-21.613-23.688zm-35.309 25.022c-9.618 22.973-27.145 43.002-51.459 62.666h36.293c4.093-2.312 25.475-15.387 25.475-39 0-5-2.96-12.717-8.988-21.758-.417-.625-.878-1.27-1.32-1.908zM87 198.852c-7.35 15.662-12.948 29.163-16.316 41.515-5.113 18.745-5.594 34.937-.026 54.633H87zm18 0V295h4.45c5.076-4.732 9.897-8.9 14.782-13.13 2.197-14.161 1.018-27.08-2.916-41.503-3.368-12.352-8.967-25.852-16.316-41.515zM408.32 201c.88 4.77.795 9.509.248 14h64.584c-5.438-5.327-10.16-9.445-15.427-14zm-346.054 9.043C48.463 223.324 25.822 239.658 25 256c0 23.613 21.382 36.688 25.475 39h1.615c-4.93-20.694-4.132-39.721 1.226-59.367 2.265-8.302 5.289-16.737 8.95-25.59zm67.468 0c3.661 8.853 6.685 17.288 8.95 25.59 2.67 9.79 4.206 19.429 4.466 29.195 6.809-6.576 13.539-13.79 19.786-22.01-9.535-13.514-21.75-22.732-33.202-32.775zM403.111 233c-2.678 5.38-6.028 10.04-9.53 14h92.763c.417-2.222.656-4.551.656-7 0-2.444-.381-4.733-1.12-7zM176 255.313c-15.3 19.685-32.57 33.644-46.074 45.46-7.88 6.896-14.44 13.092-18.694 18.834C106.98 325.35 105 330.25 105 336c0 23.613 21.382 36.688 25.475 39h89.144c1.898-23.248 4.381-44.682 11.381-66.104-2.715-2.604-5.702-5.301-8.926-8.123-13.504-11.816-30.773-25.775-46.074-45.46zM249 265v46h110v-46zm128 0v14h84.525c2.295-1.296 10.023-5.978 16.371-14zm0 32v19.723c2.677 3.802 3.82 8.068 5.166 13.164 1.74 6.588 3.111 14.563 4.281 23.668 2.744 25.07 4.156 47.613 4.983 69.445H455V297zM57 313v126h62v-49.855c-10.063-6.447-32-23.84-32-53.145 0-8.494 2.766-16.195 6.982-23zm188.361 16c-3.624 9.431-4.982 21.037-6.05 30h129.658c-1.956-10.184-2.672-21.785-6.201-30zm-7.845 48c-1.072 12.843-1.899 27.011-2.524 41.39-.698 16.054-1.138 31.855-1.424 46.393L259.902 377zm45.463 0L304 482.104 325.021 377zm65.119 0l26.484 88.283c-.25-14.696-.655-30.688-1.334-46.951-.6-14.36-1.405-28.51-2.473-41.332zM137 393v46h78v-46zm133.252 12.152L243.598 494h44.423zm67.496 0L319.978 494h44.424zM392.025 441c.552 19.69.777 37.785.881 53h89.56c-4.867-18.226-10.506-38.14-22.66-53zM51.803 457c-11.084 11.094-20.588 21.15-24.643 37h68.145c3.994-12.66 9.09-26.375 15.052-37zm80.488 0c-8.132 12.682-14.35 25.025-18.12 37h100.993c.105-11.106.267-23.524.576-37z"/></svg>
));