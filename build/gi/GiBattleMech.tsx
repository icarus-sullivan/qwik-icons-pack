import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="M217 25v32.512l39 13.002 39-13.002V25h-78zm0 51.488v.787L244.816 119h22.368L295 77.275v-.787l-39 12.998-39-12.998zm-1.04 31.678l-54.245 18.084-9.51 38.033 15.71 39.27L217 269v24h78v-24l49.086-65.447 15.709-39.27-9.51-38.033-54.246-18.084L276.816 137h-41.632l-19.223-28.834zm-69.437 4.635l-43.164 21.582L81.822 199h43.15l21.551-86.2zm218.954 0L387.027 199h43.15l-21.536-64.617-43.164-21.582zM247 160h18v52.473l52.816-13.203 4.368 17.46L256 233.277l-66.184-16.547 4.368-17.46L247 212.473V160zM87.664 217l28.322 86.287 18.244-18.246L120.621 217H87.664zm303.715 0l-13.61 68.041 18.245 18.246L424.336 217h-32.957zM199 286.563l-46.54 23.269-5.5 55.002 28.349 9.45L199 362.437v-75.875zm114 0v75.875l23.691 11.845 28.348-9.449-5.5-55.002L313 286.562zM217 311v16h78v-16h-78zm-18 71.563l-22.309 11.154-31.566-10.522-6.693 66.938L199 425.906v-43.344zm114 0v43.343l60.568 24.227-6.693-66.938-31.566 10.522L313 382.563zm-111.23 61.62l-67.25 26.903L126.562 487h85.91l-10.702-42.816zm108.46 0L299.527 487h85.91l-7.957-15.914-67.25-26.902z"/></svg>
));