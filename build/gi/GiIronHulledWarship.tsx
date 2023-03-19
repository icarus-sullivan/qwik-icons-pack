import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M18 18v43.955c11.559 5.319 27.318 5.595 44.574 4.076 0 0 3.927 24.224 12.912 30.791 12.076 8.827 44.698 3.973 44.698 3.973-1.816 10.184 29.045 45.1 42.709 47.676l53.138-5.463c1.83-18.6-7.144-36.133-27.314-52.145 0 0 8.032-15.952 4.47-22.845-6.835-13.231-40.724-18.375-40.724-18.375 5.378-12.257 5.668-22.905-.098-31.643H18zm309.023 66.148l-17.734 3.073 6.104 35.224c-9.499 2.385-19.3 5.678-29.543 10.295 13.168 8.572 13.65 23.973 9.697 41.764 9.221-2.981 18.438-5.955 27.398-8.467l3.653 21.074c-14.187 2.634-29.59 6.017-46.368 10.244 13.783 20.976 16.347 44.754 14.303 69.686 15.789-4.862 30.21-8.455 44.016-10.959l3.478 20.076-63.578 7.43-8.463-45.14-35.367 3.75-17.373-84.13-48.207 5.864 2.578 68.685c-2.121-3.785-5.9-7.895-12.187-12.787l-24.166 3.95-4.936-24.678-17.65 3.53 4.81 24.054-31.101 5.084c20.884 16.833 8.088 38.689 11.273 57.882 9.167-5.718 19.171-11.38 29.192-16.148l5.435 27.17-64.685 7.56 17.546 23.162c-17.592 2.546-36.165 6.39-55.62 11.95l4.945 17.308c53.871-15.392 99.903-17.334 136.69-14.496l.081.572c.862-.123 1.733-.242 2.598-.365 36.772 3.103 64.027 10.895 80.242 14.428 39.037 8.504 109.468 26.473 213.355-16.477l-6.878-16.632a416.14 416.14 0 0 1-18.334 7.086c-14.378-4.14-29.115-7.39-44.075-9.907l17.188-39.15 48.54-5.674-2.089-17.879-101.857 11.906-3.577-20.642c16.169-1.905 31.918-2.342 48.547-1.578-3.749-24.348 4.032-47.702-15.812-72.05-13.216.395-28.053 1.786-44.744 4.32l-3.871-22.337c10.486-2.056 20.307-2.913 28.949-1.648 4.066-14.839 6.658-31.369-6.03-43.85-9.95.393-20.007 1.1-30.345 2.653l-6.028-34.786zm-124.054 93.79l13.666 66.167-26.469 2.807-2.52-67.111 15.323-1.863zm52.388 80.164l5.172 27.582-6.722.785c-6.881-12.546-19.094-21.792-33.536-24.647l35.086-3.72zm-63.808 6.767c-13.583 5.858-24.04 17.693-28.002 32.15l-8.858 1.036.864-29.37 35.996-3.816zm19.26 14.024c17.227 0 31 13.772 31 31 0 3.817-.68 7.464-1.92 10.83a1023.56 1023.56 0 0 0-19.041 1.756c3.742-2.93 6.156-7.476 6.156-12.596 0-8.837-7.164-16-16-16-8.837 0-16 7.163-16 16 0 6.365 3.726 11.845 9.107 14.422-6.534.761-12.98 1.583-19.38 2.43-3.115-4.84-4.922-10.612-4.922-16.842 0-17.228 13.772-31 31-31zm183.81 9.242l-14.932 34.01c-23.864-3.034-48.164-4.34-72.412-4.352-16.247-.008-32.46.566-48.502 1.562.677-2.892 1.036-6.039 1.036-9.462 0-2.017-.138-4.003-.377-5.957l135.187-15.801zm-257.998 11.967l-.002.064-.765.09.767-.154zm25.496 15.209c.541 4.861 1.812 9.028 3.68 12.601a395.72 395.72 0 0 0-21.662-.68 398.577 398.577 0 0 0-38.27 1.704l-4.906-6.477 61.158-7.148zm145.149 20.584c34.407.022 68.69 2.653 101.248 9.205-70.368 17.744-118.162 5.173-150.598-1.893-3.89-.847-8.947-2.072-14.627-3.408.787-.45 1.554-.92 2.295-1.416 20.375-1.57 41.047-2.502 61.682-2.488zm-134.522 39.06c-.81.008-1.602.024-2.377.049-33.221 1.077-92.55 16.266-92.55 16.266l4.367 17.46s60.646-14.822 88.765-15.734c19.692-.638 64.457 7.18 64.457 7.18l3.229-17.71s-40.8-7.757-65.89-7.51zm140.15 32.018c-28.792-.034-65.085 7.954-95.09 15.923-30.972 8.227-55.077 16.602-55.077 16.602l5.906 17.004s23.507-8.164 53.79-16.207c30.285-8.043 67.512-15.798 92.878-15.297 32.976.652 63.925 9.707 93.023 18.904s56.252 18.717 82.518 18.717v-18c-21.734 0-47.76-8.61-77.094-17.88-29.333-9.272-62.066-19.025-98.092-19.737-.912-.018-1.833-.028-2.761-.03z"/></svg>
));