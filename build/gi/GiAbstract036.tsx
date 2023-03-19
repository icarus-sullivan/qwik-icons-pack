import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path fill="#000" d="m255.9994,21.0012c-22.6696,0-44.6174,3.2623-65.3591,9.2531-.5383.1557-1.0789.2818-1.6157.4403-.5492.1629-1.0695.4209-1.6156.5873-2.3698.7192-4.7131,1.4157-7.05,2.2031-.9302.3156-1.8671.5542-2.7906.8812-.4994.1751-.971.4093-1.4687.5873-.7431.2688-1.4647.6054-2.2031.8812-1.6506.6082-3.3614,1.1198-4.9937,1.7625-.5873.2349-1.1764.4951-1.7625.7343-1.7648.7113-3.5437,1.4506-5.2875,2.2031-1.6294.7135-3.2367,1.4542-4.8468,2.2031-7.5698,3.4761-14.9379,7.3382-22.0312,11.6031v.1463c-4.8786,2.9358-9.606,6.1283-14.2468,9.3999v-.1463c-.5657.3978-1.054.9186-1.6156,1.3218-2.2076,1.5844-4.461,3.1886-6.6094,4.8468-.7215.5571-1.4882,1.0503-2.2031,1.6157-.0505.0432-.0951.1045-.147.1463-2.8031,2.2211-5.5257,4.5588-8.2249,6.9031-2.1498,1.8711-4.2354,3.7808-6.3156,5.7281-.8841.826-1.7724,1.6575-2.6437,2.4969-1.8372,1.7738-3.6573,3.6018-5.4344,5.4344-1.2859,1.3202-2.5647,2.6156-3.8187,3.9656-.9832,1.0624-1.9716,2.1507-2.9375,3.2312-1.763,1.9723-3.443,3.9905-5.1406,6.0219-1.2934,1.5504-2.5648,3.1159-3.8187,4.7-2.2658,2.8563-4.4765,5.7037-6.6094,8.6656-.0504.0577-.1095.0915-.147.147-2.0915,2.9088-4.061,5.9532-6.0219,8.9593-1.0458,1.6075-2.0762,3.2125-3.0844,4.8469-1.5561,2.5199-3.0895,5.0555-4.5531,7.6375-.1412.2472-.2998.4864-.4403.7344-17.2232,30.6653-27.7825,65.6158-29.6687,102.8121v.8812c-.1737,3.7149-.294,7.4044-.294,11.1624s.1196,7.4476.294,11.1625v.8812c1.8837,37.151 12.4825,72.0268 29.6687,102.6655 2.0656,3.6824 4.2074,7.3122 6.4625,10.8687 .0937.1504.2047.2914.294.4418 .4374.6895.8768,1.371 1.3218,2.0558 1.9379,2.9723 3.9553,5.9356 6.0219,8.8125 .0577.0893.0858.2068.147.2961 2.499,3.4695 5.1039,6.8093 7.7843,10.1341 .0843.1081.209.188.294.2914 2.6724,3.3032 5.3806,6.689 8.225,9.8404 2.953,3.2721 5.9755,6.2989 9.1062,9.4 3.0945,3.0653 6.2879,6.0691 9.5469,8.9596 6.0494,5.3627 12.3663,10.4039 18.9468,15.1278 .5405.3901 1.0718.792 1.6156,1.175 4.6408,3.2717 9.3682,6.4643 14.2468,9.4 .8258.4973 1.6645.9818 2.4969,1.4692 3.1665,1.8499 6.4329,3.5852 9.6937,5.2875 .3481.1833.6781.4042 1.0281.5875 2.3397,1.2055 4.6648,2.396 7.05,3.525 2.1794,1.0359 4.3948,1.9669 6.6094,2.9375 2.3341,1.0218 4.6783,1.9895 7.05,2.9375 2.8528,1.1336 5.76,2.3528 8.6655,3.3779 1.9059.674 3.7993,1.2821 5.7281,1.9096 1.6069.5208 3.2253.9809 4.8468,1.4683 .8244.2491 1.6701.4954 2.4969.7346 20.7416,5.9906 42.6895,9.2529 65.3591,9.2529 22.6203,0 44.5111-3.2872 65.2123-9.2529 .8846-.2538 1.7639-.47 2.6437-.7346 1.5873-.4775 3.127-.9583 4.7001-1.4683 .4006-.1316.775-.3102 1.1749-.4418 2.0272-.6697 4.0206-1.3334 6.0219-2.0562 7.2234-2.6071 14.2761-5.538 21.1499-8.8125 3.8037-1.8072 7.4734-3.7219 11.1624-5.7279 .73-.3948 1.4785-.7713 2.2032-1.175 1.402-.7821 2.8756-1.5397 4.2593-2.35 .7967-.4653 1.5605-.994 2.35-1.4692 23.7596-14.2795 44.6554-32.5793 61.981-54.0498 2.7007-3.3473 5.4144-6.6392 7.9313-10.1341 .065-.0893.084-.2068.147-.2914 2.0849-2.8891 4.0675-5.8261 6.0219-8.8125 .4446-.6834.8833-1.3682 1.3218-2.0562 .095-.1504.1989-.2914.2941-.4418 2.255-3.5565 4.3968-7.1858 6.4624-10.8682 17.1861-30.6387 27.7849-65.5142 29.6687-102.6653 .014-.2928-.014-.5881 0-.8812 .2032-3.6876.294-7.4284.294-11.1625v-.1467c0-4.0545-.091-8.0396-.294-12.0437-1.8861-37.1963-12.4454-72.1468-29.6687-102.8121-.1398-.2493-.3005-.4857-.4403-.7344-1.4631-2.5819-2.9969-5.1176-4.5531-7.6375-.5996-.9705-1.1491-1.9764-1.7625-2.9375-.4165-.6529-.9002-1.261-1.3218-1.9094-1.9713-3.0207-3.9182-6.0374-6.0219-8.9593-2.1705-3.0188-4.4485-5.9032-6.7562-8.8125-1.2554-1.5805-2.5239-3.153-3.8188-4.7-1.6976-2.0314-3.3771-4.0495-5.1406-6.0219-.7178-.8002-1.4756-1.5597-2.2031-2.35-1.0434-1.1345-2.0203-2.2643-3.0843-3.3781-1.4858-1.5514-3.027-3.0427-4.5532-4.5532-3.0945-3.0653-6.2869-6.0686-9.5468-8.9593-6.0494-5.363-12.3664-10.4038-18.9468-15.1281-.2861-.2061-.5938-.3834-.8812-.5873-.2537-.1802-.48-.4079-.7345-.5873-4.6746-3.2956-9.4769-6.4452-14.3936-9.4-.7896-.4749-1.5534-1.0028-2.3501-1.4687-5.7368-3.355-11.5966-6.5587-17.6249-9.4-.4763-.2248-.9907-.3654-1.4687-.5873-.9349-.4367-1.8502-.8969-2.7906-1.3219-1.4594-.6522-2.9309-1.2865-4.4062-1.9093-1.6563-.7077-3.3182-1.3858-4.9938-2.0563-2.4604-.9729-4.9883-1.8969-7.4906-2.7906-2.0017-.7228-3.9947-1.3868-6.0218-2.0562-.9306-.3048-1.854-.5866-2.7907-.8813-1.041-.3293-2.0362-.7127-3.0843-1.0281-.8798-.2638-1.7597-.4793-2.6437-.7344-20.7013-5.9658-42.5921-9.2531-65.2123-9.2531zm-173.7524,9.6937c-31.778,0-57.4279,25.5031-57.4279,57.281v80.4872c23.2592-61.3275 70.2142-110.9451 129.6901-137.7683h-72.2622zm275.2427,0c59.4759,26.8232 106.4309,76.4408 129.6902,137.7683v-80.4872c0-31.778-25.5032-57.281-57.2811-57.281h-72.4091zm-101.4903,25.9968c21.7508,0 42.766,2.8779 62.5686,8.3718-3.2195,28.8707-8.8411,55.909-16.45,80.1935 26.4122-11.8517 48.5472-33.6789 63.0092-61.3935 4.9862,2.6862 9.8193,5.6319 14.5405,8.6655-4.6046,8.9221-9.9813,17.2178-15.8624,24.9687h.147l64.7719,74.906c-.022.0332.022.1156 0,.1467h.1463c6.7689-8.4733 13.0015-17.4549 18.7999-26.878 .036-.0649.1074-.0829.147-.1463 .1838-.2991.405-.5809.5874-.8812 13.6112,24.2546 21.927,51.4 23.6467,80.1934 .1874,3.6878.2941,7.4284.2941,11.1625 0,3.4389-.106,6.8853-.2941,10.2812-.014.2914.014.5903 0,.8812-1.7197,28.791-10.0355,55.9392-23.6467,80.1937-.1831-.3008-.4036-.5819-.5874-.8817-.043-.0656-.1088-.0846-.147-.1457-5.7984-9.423-12.031-18.5516-18.7999-27.0249l-.1463.2937-64.7716,74.905h-.147c5.8891,7.7611 11.1298,16.3202 15.7155,25.2624-4.668,2.9929-9.4676,5.718-14.3937,8.3716-14.4615-27.729-36.5598-49.5247-63.0092-61.3931 7.6141,24.2998 13.2324,51.3252 16.45,80.193-19.8026,5.4948-40.8178,8.3721-62.5685,8.3721-21.7644,0-42.7471-3.0179-62.5686-8.5187 3.2632-28.8114 8.8495-55.7883 16.45-80.0464-26.4489,11.8679-48.5059,33.665-63.0092,61.3931-4.9392-2.6593-9.8607-5.3721-14.5405-8.3716 4.5816-8.9648 9.8081-17.4783 15.7156-25.2624h-.147l-64.7719-74.906v-.2938h-.147c-6.7708,8.4733-13.0024,17.6019-18.7999,27.0249-.0504.0656-.1095.0846-.147.1457-.1737.282-.2717.6007-.4403.8817-13.6479-24.27-22.0688-51.3785-23.7937-80.1937v-.8812c-.16-3.4001-.294-6.8417-.294-10.2812s.1477-6.8809.294-10.2812v-.8812c1.7248-28.8175 10.1457-55.9234 23.7937-80.1934 .1694.2789.2717.6039.4403.8812 .0504.0649.1095.0829.147.1463 5.7975,9.4231 12.0291,18.4047 18.7999,26.878h.147v-.1467l64.7717-74.906h.147c-5.8803-7.7496-11.0102-16.1918-15.5687-25.1156 4.6487-2.975 9.4906-5.8792 14.3937-8.5187 14.5042,27.7146 36.5969,49.5418 63.0092,61.3935-7.5957-24.2428-13.1849-51.2327-16.45-80.0466 19.8214-5.5005 40.8041-8.5187 62.5685-8.5187zm0,27.1718c-18.9401,0-34.2217,15.4345-34.2217,34.3686s15.2816,34.2217 34.2217,34.2217 34.2218-15.2876 34.2218-34.2217-15.2817-34.3686-34.2218-34.3686zm-95.0277,48.7623-64.6248,75.0529c2.2818,2.4418 4.5371,5.0051 6.9031,7.3437 .0432.0281.1189-.0281.147,0 2.3646,2.3359 4.7518,4.5271 7.1968,6.7562 .0432.0281.1189-.0281.147,0 2.4454,2.2274 4.8203,4.6395 7.3437,6.7562 .0432.0281.1139-.0281.147,0 2.5221,2.1146 5.0412,4.1686 7.6375,6.1687 .0432.0281.1139-.0281.147,0 2.5973,1.9975 5.1171,3.9958 7.7844,5.875 .0432.0238.1139-.0238.147,0 2.6682,1.8777 5.3413,3.8256 8.0781,5.5812 .0432.0238.1095-.0238.147,0 2.2522,1.4436 4.4786,2.8847 6.7562,4.2594 1.9139-37.738 23.4158-70.3 54.4904-87.8309-.9785-.4238-1.9575-.8434-2.9375-1.3218-.0432-.0216-.1045.0216-.147,0-1.7625-.8626-3.5635-1.9969-5.2874-2.9375-.0432-.0216-.1095.0216-.147,0-1.7225-.9416-3.3093-1.92-4.9938-2.9375-.0432-.0216-.1095.0216-.147,0-1.6859-1.0203-3.3473-2.1369-4.9937-3.2312-.0432-.0216-.1095.0216-.147,0-1.645-1.0968-3.3901-2.3561-4.9938-3.525-.0432-.0216-.1139.0216-.147,0-3.2397-2.3667-6.3393-4.8413-9.3999-7.4906-.0504-.0288-.1139.0288-.147,0-3.0593-2.654-5.9483-5.5982-8.8125-8.5188-.0432-.0288-.1189.0288-.147,0zm189.9086,0c-2.8966,2.9495-5.8667,5.8412-8.9593,8.5188-.036.0288-.1167-.0288-.147,0-3.063,2.6463-6.157,5.1269-9.4,7.4906-.036.0216-.1117-.0216-.147,0-1.6032,1.1674-3.2009,2.4298-4.8468,3.525-.036.0216-.1132-.0216-.147,0-1.6479,1.0927-3.3079,2.2126-4.9938,3.2312-.036.0216-.1088-.0216-.147,0-1.6849,1.0158-3.2708,1.9977-4.9937,2.9375-.043.0216-.1045-.0216-.147,0-1.724.9388-3.525,2.0767-5.2875,2.9375-.043.0216-.1067-.0216-.1471,0-.9799.4771-1.9594.8977-2.9375,1.3218 31.0343,17.5082 52.5282,50.0084 54.4905,87.6841 2.2174-1.3433 4.4126-2.7069 6.6093-4.1125 .036-.0238.1117.0238.147,0 2.7392-1.7539 5.5573-3.7051 8.225-5.5812 .036-.0238.1117.0238.1471,0 2.6681-1.8777 5.1866-3.879 7.7843-5.875 .036-.0238.1138.0238.147,0 2.5972-1.9986 5.114-4.0556 7.6374-6.1687 .036-.0281.1161.0281.1463,0 2.5249-2.1153 4.8956-4.5302 7.3438-6.7562 .029-.0281.116.0281.147,0 2.4455-2.2277 4.8318-4.4215 7.1969-6.7562 .029-.0281.1196.0281.147,0 2.3669-2.3374 4.6198-4.9032 6.9031-7.3437l-64.7704-75.0529zm-94.8809,42.0061c-44.983,0-81.5153,36.3998-81.5153,81.3684s36.5323,81.5153 81.5153,81.5153 81.5153-36.5467 81.5153-81.5153-36.5324-81.3684-81.5153-81.3684zm-107.0714,86.9497c-19.2551,11.3704-36.8347,25.7705-52.5811,42.5936l64.6248,75.0529h.147c12.3592-12.5659 26.6265-22.692 42.153-29.8158-31.0154-17.5455-52.4316-50.1374-54.3435-87.8307zm214.1429.1467c-1.9623,37.6756-23.4562,70.1759-54.4904,87.684 15.526,7.1238 29.7933,17.2499 42.1529,29.8158l64.9186-75.0529c-15.699-16.7724-33.3618-31.0926-52.5811-42.4467zm-338.2519,81.9562v80.3401c0,31.778 25.65,57.4282 57.4279,57.4282h72.4091c-59.536-26.8031-106.5547-76.4039-129.837-137.7683zm462.3609,0c-23.2824,61.3639-70.301,110.9652-129.8371,137.7682h72.556c31.7779,0 57.2811-25.6502 57.2811-57.4286v-80.3401zm-231.1805,16.0091c-18.9401,0-34.2217,15.2876-34.2217,34.222s15.2816,34.2215 34.2217,34.2215 34.2218-15.2876 34.2218-34.2215-15.2817-34.222-34.2218-34.222z"/></svg>
));