import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="m256,21c-57.8984,0-110.9102,20.9483-151.8688,55.6657-24.4626-22.459-62.275-34.8094-62.275-34.8094s12.3502,37.813 34.8096,62.2751c-34.7175,40.9585-55.6659,93.9705-55.6659,151.8688s20.9483,110.9102 55.6659,151.8688c-22.4594,24.4624-34.8096,62.275-34.8096,62.275s37.813-12.3504 62.275-34.8094c40.9586,34.7173 93.9704,55.6656 151.8688,55.6656s110.9101-20.9483 151.8688-55.6656c24.4625,22.459 62.2749,34.8094 62.2749,34.8094s-12.3502-37.813-34.8096-62.275c34.7175-40.9585 55.6659-93.9705 55.6659-151.8688s-20.9484-110.9102-55.6659-151.8688c22.4594-24.4624 34.8096-62.2751 34.8096-62.2751s-37.8128,12.3505-62.2749,34.8094c-40.9587-34.7174-93.9704-55.6657-151.8688-55.6657zm0,38.9219c25.9487.4043 53.8629,22.0455 46.4125,46.5594l-19.5341,63.1562c-3.3008-1.0254-6.684-1.8508-10.1346-2.4968l11.0153-42.0063c4.4575-17.2767-12.3835-32.615-27.9058-32.9-15.5265.2847-32.0723,15.6233-27.6125,32.9l11.0154,42.0063c-3.4508.6457-6.8338,1.4714-10.1347,2.4968l-19.6808-63.1562c-7.4523-24.5139 20.6095-46.1552 46.5592-46.5594zm-103.5467,42.3c12.6486-.5304 24.5161,3.974 30.55,15.275l30.6967,58.4562c-3.0855,1.6319-5.9516,3.4689-8.8125,5.4344l-21.8841-37.6c-5.0999-8.6449-14.4088-12.1198-23.6471-11.6032-7.1858.4014-14.3519,3.2169-19.2404,7.9313-10.7771,11.179-11.6974,33.9698 3.6716,43.0343l37.4534,21.8844c-2.0084,2.936-3.7784,5.9348-5.4346,9.1062l-58.6029-30.8437c-22.6018-12.0653-18.2148-47.3117-.1456-65.9468 9.3173-9.0321 22.7471-14.5977 35.3971-15.1282zm202.1,0c13.9111-.8621 29.6148,4.9671 40.0967,15.1282 18.0635,18.6351 22.4505,53.8813-.1456,65.9468l-58.3096,30.6969c-1.6539-3.155-3.5795-6.0379-5.5812-8.9593l37.6-22.0313c15.369-9.0645 14.3011-31.7088 3.525-42.8875-5.5897-5.388-14.1301-8.2765-22.3251-7.9313s-15.8817,3.9187-20.4158,11.6032l-21.8841,37.6c-2.9507-2.0272-5.9168-3.9094-9.1063-5.5813l30.6962-58.3094c5.2776-9.8884 15.0287-14.6045 25.85-15.275zm-98.5533,87.0969c36.8339,0 66.6812,29.8473 66.6812,66.6813s-29.8473,66.6813-66.6812,66.6813-66.6813-29.8473-66.6813-66.6813 29.8473-66.6813 66.6813-66.6813zm-158.625,19.0938c2.9384-.1045 5.8956.2443 8.9591,1.175l63.3034,19.6813c-1.0204,3.3024-1.8565,6.6817-2.4966,10.1344l-42.1534-11.0156c-2.1588-.5571-4.387-.9408-6.4625-.8813-14.5197.4158-26.1879,14.9102-26.4375,28.4938 .2868,15.5242 15.6242,32.2169 32.9,27.7594l42.1534-11.0156c.645,3.4506 1.4711,6.8343 2.4966,10.1344l-63.3034,19.6813c-24.5119,7.4506-46.1554-20.4627-46.5591-46.4125 .3524-22.7065 17.0299-47.0001 37.6-47.7344zm317.1034,0c20.5695.7343 37.2456,25.0282 37.5999,47.7344-.3992,25.9504-22.0458,53.8631-46.5596,46.4125l-63.1562-19.6813c1.0255-3.3001 1.8513-6.6837 2.4966-10.1344l42.0068,11.0156c17.2757,4.4575 32.6147-12.2352 32.8999-27.7594-.2493-13.5837-12.0634-28.0772-26.5846-28.4938-2.0741-.0577-4.1572.3236-6.3153.8813l-42.0068,11.0156c-.6399-3.4526-1.4762-6.832-2.4966-10.1344l63.1562-19.6813c3.0645-.9313 6.0203-1.2799 8.9597-1.175zm-238.5251,89.5937c1.6817,3.2045 3.393,6.2903 5.4342,9.2531l-37.6001,21.8844c-15.3685,9.0642-14.5939,31.5619-3.8187,42.7407 11.1785,10.7758 33.9693,11.8435 43.0346-3.525l22.0308-37.7469c2.9051,1.9901 5.8243,3.788 8.9596,5.4343l-30.9904,58.75c-12.0668,22.6021-47.3116,18.211-65.9471.147-18.0635-18.6351-22.4504-53.8814.1456-65.9469l58.75-30.9906zm160.0933.294 58.4568,30.6969c22.6003,12.0656 18.2139,47.3118.1455,65.9469-18.634,18.0642-53.8817,22.4551-65.9466-.1463l-30.8442-58.6032c3.172-1.6563 6.1701-3.4268 9.1067-5.4343l21.8841,37.6c9.0645,15.3684 31.8548,14.3008 43.0342,3.525 10.7752-11.179 11.6983-33.676-3.6717-42.7407l-37.6-21.8843c1.9909-2.8899 3.7849-5.8392 5.4341-8.9593zm-106.925,44.0625c3.3009,1.0254 6.6839,1.8508 10.1347,2.4969l-11.0154,42.1531c-4.4594,17.2767 12.086,32.6151 27.6125,32.9 15.5217-.2847 32.3651-15.6233 27.9058-32.9l-11.0153-42.1531c3.4507-.6457 6.8338-1.4714 10.1346-2.4969l19.5341,63.3032c7.4509,24.5138-20.4629,46.1552-46.4125,46.5594-25.9492-.4043-54.0119-22.0456-46.5592-46.5594l19.6808-63.3032z"/></svg>
));