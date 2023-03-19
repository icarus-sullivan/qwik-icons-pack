import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="m256,21c-129.7644,0-235,105.1923-235,235s105.2356,235 235,235 235-105.1923 235-235-105.2356-235-235-235zm14.8344,21.15 8.6657,45.3843 17.9187-35.5437 2.6438,39.8031 25.4094-38.3344-3.3781,45.825 26.7312-29.9625-7.7844,39.5094 34.3687-30.55-14.8344,43.6219 33.6344-22.1782-17.9187,36.1313 41.2719-20.4156-25.9969,38.0406 38.1875-12.7781-26.5843,30.2563 45.2375-8.6657-34.9562,29.9625 39.9499-2.35-33.0468,22.1781 45.6781,2.9375-41.125,19.975 39.2156,8.225-38.0407,12.7781 43.475,14.9813-45.0906,8.5187 35.6906,17.9187-39.8031,2.6438 38.1875,25.4094-45.825-3.2313 29.8156,26.7313-39.3625-7.9313 30.4031,34.6626-43.475-14.9813 22.0312,33.1938-35.8375-17.625 20.4156,40.9781-38.0407-25.5563 12.4844,38.0407-30.1094-26.4375 8.8125,44.9437-29.9625-34.6625 2.2031,39.95-22.0313-33.0469-2.9375,45.5312-19.975-40.9781-8.225,39.0688-12.925-38.0406-14.8343,43.3281-8.3719-45.0906-18.0656,35.9844-2.6438-39.8031-25.4093,38.0406 3.0843-45.825-26.4374,29.9624 7.7843-39.3625-34.6625,30.2563 15.1281-43.475-33.6344,22.325 17.9188-36.1312-41.2719,20.2688 25.85-37.7469-38.0406,12.6312 26.4375-30.4031-45.0907,8.9594 34.9563-29.9625-40.2438,2.2031 33.3406-22.1782-45.9718-3.0844 41.4187-19.975-39.2156-8.0781 37.8937-12.925-43.6219-14.6875 45.2375-8.8125-35.6906-17.7719 39.9499-2.6438-38.3343-25.4093 45.825,3.2313-29.9625-26.5844 39.5094,7.6375-30.4031-34.5156 43.4749,15.1281-22.0312-33.4875 35.9844,17.7719-20.2688-41.1251 37.8937,25.7032-12.6313-37.8937 30.2563,26.2906-8.9594-45.0907 29.9625,34.8094-2.35-40.2437 22.325,33.4875 2.9375-45.9719 19.975,41.4187 8.0781-39.2156 12.925,37.7469 14.8344-43.6219zm-14.8344,60.3656c-84.7894,0-153.4843,68.6666-153.4843,153.4843s68.695,153.6313 153.4843,153.6313 153.6313-68.8136 153.6313-153.6313-68.8418-153.4843-153.6313-153.4843zm9.6938,13.8062 5.7282,29.6688 11.6031-23.3531 1.7625,26.1437 16.5969-25.1156-2.2031,29.9625 17.4781-19.5344-5.1406,25.85 22.6187-19.975-9.8406,28.4937 22.0313-14.5406-11.75,23.6469 27.025-13.3656-16.8906,24.8219 24.8219-8.3718-17.3312,19.8281 29.5218-5.7281-22.7656,19.5344 25.9968-1.4688-21.5906,14.5407 29.8156,1.9093-26.8781,13.0719 25.7031,5.2875-24.8219,8.3718 28.3468,9.8406-29.5218,5.5813 23.3531,11.6031-25.9969,1.7625 24.9687,16.5969-29.9625-2.0563 19.5344,17.3312-25.7031-4.9937 19.8281,22.6187-28.3468-9.8406 14.3937,21.7375-23.5-11.4563 13.3656,26.7313-24.8219-16.7437 8.0781,24.8219-19.6812-17.1844 5.8749,29.2281-19.5344-22.6187 1.3219,26.1437-14.3937-21.5906-1.9094,29.8156-13.0719-26.8781-5.2875,25.5562-8.5188-24.8219-9.6938,28.2-5.4343-29.3749-11.75,23.5-1.7625-25.9969-16.5969,24.8219 2.0562-29.9625-17.3312,19.6813 5.1407-25.7031-22.7657,19.6813 9.8406-28.3469-21.8844,14.5406 11.75-23.5-27.025,13.2188 16.8906-24.8219-24.8219,8.3719 17.3312-19.8281-29.5219,5.7281 22.7656-19.5343-26.2906,1.4687 21.8843-14.5406-30.1094-2.0563 27.025-12.925-25.5562-5.4343 24.8219-8.3719-28.6406-9.5469 29.6688-5.7281-23.3531-11.6032 26.1437-1.7625-25.1156-16.5969 29.9625,2.0562-19.5344-17.3312 25.85,4.9938-19.975-22.6188 28.4937,9.8406-14.3937-21.7375 23.5,11.6031-13.2188-26.8781 24.675,16.7437-8.225-24.8219 19.8281,17.3312-5.875-29.5219 19.5344,22.7656-1.4688-26.2906 14.5407,21.8843 1.9093-30.1093 13.0719,27.025 5.2875-25.5563 8.3718,24.675 9.6938-28.4937zm-9.6938,51.1125c-48.8883,0-88.4187,39.661-88.4187,88.5656s39.5305,88.5656 88.4187,88.5656 88.5656-39.661 88.5656-88.5656-39.6773-88.5656-88.5656-88.5656zm5.5813,8.0781 3.3781,17.0375 6.6094-13.3656 1.0281,14.9813 9.5469-14.3937-1.175,17.1844 9.9875-11.3094-2.9374,14.9813 13.0718-11.6032-5.5812,16.45 12.6313-8.3718-6.7562,13.6594 15.5687-7.6375-9.8406,14.2469 14.3937-4.8469-9.9874,11.4563 17.0375-3.2313-13.2188,11.1625 15.1281-.8812-12.4844,8.5187 17.1844,1.0282-15.5688,7.4906 14.8344,3.0844-14.2469,4.8468 16.3031,5.5813-17.0375,3.3781 13.5125,6.6094-14.9813,1.0281 14.3938,9.6938-17.3312-1.3218 11.3094,9.9875-14.8343-2.9375 11.4562,13.0719-16.45-5.5813 8.3719,12.4844-13.5125-6.6094 7.6375,15.4218-14.2469-9.6938 4.5531,14.3938-11.3094-9.9875 3.3781,16.8906-11.3094-13.0719 .8812,15.1281-8.3718-12.4843-1.0281,17.1844-7.4907-15.4219-3.0843,14.6875-4.9938-14.3937-5.5813,16.45-3.0843-17.0375-6.9032,13.5125-.8812-14.9812-9.6938,14.3937 1.175-17.3312-9.9875,11.3094 3.0844-14.8343-13.0719,11.4562 5.5812-16.45-12.6312,8.3719 6.7562-13.5125-15.5688,7.6375 9.8406-14.2469-14.3937,4.7 9.9875-11.4562-17.0375,3.3781 13.2188-11.3094-15.275.8813 12.6313-8.3719-17.3312-1.175 15.5687-7.4906-14.6875-3.0844 14.2469-4.8469-16.45-5.5812 17.0375-3.2313-13.5125-6.7562 15.1282-.8813-14.3937-9.6938 17.1844,1.175-11.3094-9.9875 14.9813,2.9375-11.4563-12.925 16.3031,5.5813-8.225-12.4844 13.5125,6.6094-7.6376-15.4219 14.2469,9.6938-4.7-14.3937 11.4563,9.9875-3.3781-17.0375 11.1625,13.0719-.8812-15.1282 8.5187,12.6313 1.0282-17.3312 7.4906,15.5687 3.0844-14.6875 4.8468,14.2469 5.5813-16.45zm-5.5813,37.7469c-23.6392,0-42.7407,19.0935-42.7407,42.7406s19.1015,42.8875 42.7407,42.8875 42.8875-19.2404 42.8875-42.8875-19.2484-42.7406-42.8875-42.7406zm2.7906,3.8187 1.4687,8.225 3.3781-6.4625 .4403,7.3437 4.5532-7.05-.5873,8.3719 4.8468-5.4344-1.3218,7.1969 6.3156-5.5812-2.7906,7.9312 6.1688-4.1125-3.3781,6.6094 7.6375-3.6719-4.7,6.9031 6.9031-2.35-4.8469,5.5813 8.225-1.6157-6.3156,5.4344 7.1969-.4403-6.0219,4.1125 8.3719.4403-7.4907,3.6719 7.05,1.4688-6.9031,2.35 7.9313,2.7906-8.225,1.4688 6.6094,3.3781-7.3437.4403 7.05,4.5531-8.3718-.5873 5.4343,4.8468-7.1969-1.3218 5.4344,6.3156-7.7844-2.7906 3.9657,6.0219-6.6094-3.2313 3.8187,7.4906-6.9031-4.5531 2.2031,6.9031-5.4343-4.8469 1.6156,8.225-5.4343-6.3156 .294,7.1969-3.9657-6.0219-.5874,8.3719-3.525-7.4907-1.6156,7.05-2.35-6.9031-2.6438,7.9313-1.4687-8.225-3.3781,6.6094-.4403-7.3437-4.7,6.9031 .5874-8.225-4.8469,5.4343 1.4688-7.1969-6.3156,5.5813 2.7906-7.9313-6.1687,3.9657 3.2313-6.6094-7.4907,3.8187 4.7001-6.9031-6.9031,2.2031 4.8468-5.4343-8.225,1.6156 6.3156-5.4343-7.3438.294 6.1688-3.9656-8.3718-.5874 7.4906-3.6719-7.1969-1.4687 6.9031-2.35-7.9312-2.6437 8.225-1.6157-6.4625-3.2313 7.3437-.4403-7.05-4.7 8.3719.5874-5.4344-4.8469 7.1969,1.4688-5.5812-6.3156 7.9312,2.7906-3.9656-6.1688 6.4625,3.2313-3.6719-7.4906 6.9031,4.7-2.2031-6.9031 5.4344,4.8468-1.6157-8.225 5.4344,6.3156-.4403-7.3437 4.1125,6.1687 .5873-8.3718 3.525,7.4906 1.4687-7.1969 2.35,6.9031 2.7906-7.9312z"/></svg>
));