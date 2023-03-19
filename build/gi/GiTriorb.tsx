import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M133.813 38.28C70.838 38.28 20.406 89.5 20.406 152.47c0 62.972 50.432 113.405 113.406 113.405 12.027 0 23.638-1.835 34.532-5.25-.437-.958-.844-1.932-1.25-2.906l-69.78-120.876-8.19-13.625 16-.345h138.97c-13.07-48.662-57.543-84.596-110.28-84.594zm247.843 0c-52.74 0-96.672 35.93-109.562 84.595H426.47l-8.19 14.28-71.124 123.314c-.004.007.004.02 0 .03-.013.03-.017.064-.03.094 10.874 3.434 22.47 5.28 34.53 5.28 62.975 0 114.156-50.432 114.156-113.405 0-62.972-51.18-114.19-114.156-114.19zm-260.53 103.314l39.093 67.562c3.127-27.534 17.792-51.71 39-67.562h-78.095zm125.405 0c-38.53 5.45-68.186 38.596-68.186 78.625 0 11.152 2.282 21.772 6.437 31.405l1.064 1.844c36.87-18.726 62.156-56.763 62.156-101 0-3.67-.19-7.295-.53-10.876h-.94zm22.25 0c-.334 3.58-.53 7.206-.53 10.875 0 44.112 24.748 82.062 61.22 100.843l1.75-3.032c3.8-9.275 5.905-19.42 5.905-30.06 0-40.03-29.657-73.175-68.188-78.626h-.156zm47.47 0c21.134 15.798 35.742 39.864 38.938 67.28l38.937-67.28H316.25zm-58.5 109.28c-23.044 0-44.42 6.85-62.25 18.626.005.006-.005.025 0 .03 14.546 18.33 37.014 30.095 62.22 30.095 25.257 0 47.766-11.823 62.31-30.22-17.92-11.708-39.308-18.53-62.28-18.53zm-77.094 30.345c-22.37 20.864-36.312 50.707-36.312 83.81 0 62.974 50.43 113.408 113.406 113.408 62.975 0 114.156-50.434 114.156-113.407 0-33.095-14.16-62.915-36.72-83.78l-69.06 119.72-8.5 13.967-7.813-13.968-69.157-119.75zm38 28.936l38.97 67.344 38.905-67.22c-11.92 5.183-25.052 8.064-38.81 8.064-13.87 0-27.07-2.93-39.064-8.188z"/></svg>
));