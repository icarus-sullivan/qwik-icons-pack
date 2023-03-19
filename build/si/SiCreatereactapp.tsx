import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em"><title>Create React App</title><path d="M21.9192 10.846c0-1.22327-1.4398-2.30804-3.6538-2.97027.5326-2.24945.3001-4.03906-.7599-4.64447a1.69497 1.69497 0 0 0-.8504-.21305c-.9889 0-2.2388.69063-3.5011 1.88548-1.2623-1.18597-2.5086-1.87306-3.49577-1.87306a1.6796 1.6796 0 0 0-.86285.2166c-1.05459.60719-1.27297 2.38616-.74744 4.62495-2.20329.65868-3.63604 1.73458-3.6396 2.95252-.00355 1.2179 1.44164 2.308 3.65557 2.9685-.53262 2.2512-.30182 4.039.75988 4.6444.25893.1452.55186.2187.84865.2131.99066 0 2.24056-.6906 3.50286-1.8855 1.2606 1.186 2.5069 1.8731 3.4958 1.8731a1.7034 1.7034 0 0 0 .8629-.2166c1.0545-.6072 1.2711-2.3862.7474-4.6161 2.2033-.6676 3.636-1.7435 3.6378-2.9596Zm-7.952-5.54106c1.454-1.30138 2.363-1.44164 2.6862-1.44164a.83617.83617 0 0 1 .4296.10298c.5078.28939.7102 1.31025.5486 2.66311a10.07519 10.07519 0 0 1-.1775 1.02796 17.34708 17.34708 0 0 0-2.2335-.36751 17.49042 17.49042 0 0 0-1.4629-1.78961c.0656-.06569.1367-.13138.2095-.19529ZM9.56591 11.8526c.13848.2664.28584.5327.43849.8008.1527.268.3125.5397.4901.8078-.4812-.0693-.94812-.1563-1.39197-.2592.12428-.451.28229-.8948.46338-1.3494Zm-.49179-3.38033c.44918-.10475.91967-.19175 1.40788-.25921-.1775.26276-.3302.53262-.48999.81491-.15979.28229-.30004.53262-.43675.80249-.18109-.46161-.34147-.91434-.48114-1.35819Zm.92499 2.36843c.22019-.4652.46219-.93035.72619-1.39551.2663-.46516.5521-.91789.8468-1.35109.5167-.03905 1.0493-.06036 1.5979-.05858.5486.00177 1.0652.0213 1.5783.06214.2948.42965.577.8877.8434 1.34043.2663.45273.5113.92681.7314 1.39011-.2184.4652-.4616.9321-.7243 1.3937-.2628.4616-.5522.9197-.8469 1.3529-.5167.0408-1.0493.0604-1.5979.0604-.5486 0-1.0652-.0231-1.5783-.064-.2947-.4296-.5788-.877-.8451-1.3404-.2663-.4634-.5025-.9268-.7244-1.3901h-.00709Zm5.83399-2.62232c.4829.06747.9499.15446 1.3919.25744-.1313.43852-.2876.8877-.4687 1.34043-.1402-.26631-.2858-.53262-.4403-.80071-.1544-.26808-.3178-.53795-.4758-.79716h-.0071Zm.49 4.42432c.1527-.2687.2983-.5368.4368-.8043.1775.4617.3551.9162.4793 1.36-.4474.1048-.9179.19-1.4061.2574.1716-.2627.3373-.5338.4971-.8131h-.0071Zm-3.1655-6.53883c.3195.34088.6338.71016.9409 1.10608-.3036-.01243-.6143-.0213-.9285-.0213-.3143 0-.6356 0-.9463.0213.3036-.39414.6143-.7652.9339-1.10608ZM9.21971 3.97338a.85576.85576 0 0 1 .43852-.09943 2.32778 2.32778 0 0 1 .92147.23258 6.93702 6.93702 0 0 1 1.7754 1.20373l.2077.18997a17.47747 17.47747 0 0 0-1.4487 1.77541 17.55257 17.55257 0 0 0-2.24593.36574c-.07811-.34443-.14203-.68176-.17754-1.00666-.18464-1.34044.02841-2.36307.5273-2.65424l.00178-.0071Zm-.9392 9.00132a10.39917 10.39917 0 0 1-.98357-.3551c-1.26054-.5326-2.04172-1.2161-2.04172-1.8002 0-.5841.78473-1.26413 2.04349-1.78788a10.23244 10.23244 0 0 1 .96583-.34443 17.3821 17.3821 0 0 0 .80958 2.15531 17.53382 17.53382 0 0 0-.79361 2.1323Zm4.08349 3.391c-1.4541 1.3014-2.3631 1.4399-2.68801 1.4399a.83246.83246 0 0 1-.42965-.103c-.50777-.2894-.71017-1.3102-.5486-2.6631a9.95672 9.95672 0 0 1 .17754-1.0262c.7359.1695 1.48192.2917 2.23342.3658.4471.6285.9359 1.2264 1.463 1.7896l-.2077.197Zm.8113-.8007c-.3196-.3408-.6338-.7101-.9427-1.106.3053.0142.616.0213.9303.0213.3142 0 .6356 0 .9463-.0196-.3072.3942-.6196.7635-.9357 1.1043h.0018Zm3.9379 2.1305a.85608.85608 0 0 1-.4403.1048c-.3231 0-1.2428-.1421-2.6915-1.4381l-.2078-.19a17.46647 17.46647 0 0 0 1.447-1.7754 17.23638 17.23638 0 0 0 2.2477-.3657c.0781.3444.1402.6817.1775 1.0066.1758 1.3387-.0284 2.3613-.5344 2.6507l.0018.0071Zm1.9174-5.0492c-.3036.1242-.6249.2396-.9658.3426a17.48732 17.48732 0 0 0-.8114-2.1553c.3119-.6921.5782-1.40375.7972-2.13053.3336.10184.6619.22035.9836.35508 1.2587.53263 2.0417 1.21615 2.0399 1.80025-.0018.5841-.7847 1.257-2.0453 1.7808l.0018.0071Zm-5.873-.1811c.3223.0003.6375-.0949.9057-.2737a1.6294 1.6294 0 0 0 .6011-.7308c.1237-.2977.1563-.6254.0938-.9416a1.63017 1.63017 0 0 0-.4451-.83497 1.6301 1.6301 0 0 0-.8341-.44695 1.62958 1.62958 0 0 0-.9417.09172 1.62962 1.62962 0 0 0-.7321.59948 1.6301 1.6301 0 0 0-.2757.90522 1.6278 1.6278 0 0 0 .1229.6241c.0816.1979.2015.3778.3527.5294.1512.1515.3309.2718.5286.3538.1978.082.4098.1243.6239.1243ZM2.32756 1.012v19.6449H24V1.012H2.32756ZM23.1531 19.8118H3.17621V1.85886H23.1531V19.8118ZM8.06214 13.7932c-.53262 2.2512-.30182 4.039.75988 4.6444.25893.1452.55186.2187.84864.2131.99064 0 2.24054-.6906 3.50284-1.8855 1.2606 1.186 2.5069 1.8731 3.4958 1.8731.3018.0055.5995-.0692.8629-.2166 1.0546-.6072 1.2712-2.3862.7474-4.6161 2.2033-.6605 3.6361-1.7364 3.6378-2.9525.0018-1.21616-1.4398-2.30804-3.6538-2.97027.5327-2.24944.3001-4.03906-.7598-4.64447a1.69549 1.69549 0 0 0-.8504-.21305c-.989 0-2.2388.69063-3.5012 1.88548-1.2623-1.18597-2.5086-1.87305-3.49574-1.87305a1.67948 1.67948 0 0 0-.86285.2166c-1.0546.60719-1.27297 2.38615-.74745 4.62494-2.20328.65868-3.63604 1.73458-3.6396 2.95252-.00354 1.2179 1.44342 2.2974 3.65735 2.9614h-.00177Zm4.29826 2.5725c-1.4541 1.3014-2.36306 1.4399-2.68796 1.4399a.83246.83246 0 0 1-.42965-.103c-.50777-.2894-.71017-1.3102-.5486-2.6631a9.95672 9.95672 0 0 1 .17754-1.0262 17.6808 17.6808 0 0 0 2.23347.3658c.4471.6285.9358 1.2264 1.4629 1.7896l-.2077.197Zm4.4013-6.54945c-.1403-.26631-.2859-.53262-.4404-.80071-.1544-.26808-.3195-.53262-.4829-.79716.4829.06747.9499.15446 1.392.25744-.1296.43852-.2859.8877-.467 1.34043h-.0017Zm.4829 3.37325c-.4474.1048-.9179.19-1.4062.2575.1669-.2628.3303-.5338.4901-.8132.1597-.2793.3053-.5474.4367-.8042.1864.4705.348.9214.4758 1.3688l.0036-.0089Zm-.925-2.3701c-.2184.4651-.4616.9321-.7244 1.3937-.2628.4616-.5521.9196-.8469 1.3528-.5166.0409-1.0492.0604-1.5978.0604-.5486 0-1.0653-.0231-1.5784-.0639-.2947-.4297-.5788-.8771-.8451-1.3405-.2663-.4633-.5095-.9267-.73144-1.3901.22014-.4652.46224-.93033.72614-1.39548.2663-.46516.5522-.91789.8469-1.35109.5166-.03906 1.0492-.06037 1.5978-.05859.5486.00177 1.0653.0213 1.5784.06214.2947.42965.577.8877.8433 1.34043.2663.45273.5131.93569.7332 1.39899l-.0017-.0088Zm-5.8251 2.6418c-.4812-.0693-.94812-.1563-1.39197-.2592.13138-.4368.28939-.8877.47048-1.3405.13848.2663.28584.5326.43849.8007.1527.2681.3054.5309.483.799Zm-.49539-4.43856c-.15446.26632-.30004.53263-.43675.80249-.18583-.45806-.34857-.90901-.48824-1.35286.44918-.10475.91967-.19175 1.40788-.25921-.1651.26276-.3231.5344-.48289.80958ZM13.1735 15.565c-.3195-.3408-.6338-.7101-.9427-1.106.3054.0142.6161.0213.9303.0213.3143 0 .6356 0 .9463-.0196-.3054.3942-.6178.7635-.9339 1.1043Zm3.9379 2.1305a.85608.85608 0 0 1-.4403.1048c-.3231 0-1.2428-.1421-2.6915-1.4381l-.2077-.19a17.479 17.479 0 0 0 1.4469-1.7754 17.23363 17.23363 0 0 0 2.2477-.3657c.0781.3444.1402.6817.1775 1.0066.1776 1.3387-.0266 2.3613-.5326 2.6507v.0071Zm.9374-8.99421c.3336.10185.6619.22036.9836.35509 1.2588.53262 2.0417 1.21612 2.0399 1.80022-.0017.5842-.7829 1.2712-2.0435 1.795-.3035.1243-.6249.2397-.9658.3426a17.4868 17.4868 0 0 0-.8113-2.1553c.3124-.6967.5787-1.41311.7971-2.14471v.0071Zm-4.0834-3.38925c1.454-1.30138 2.3631-1.44164 2.6862-1.44164a.83626.83626 0 0 1 .4296.10298c.5078.28939.7102 1.31025.5486 2.66311a10.07586 10.07586 0 0 1-.1775 1.02797 17.34535 17.34535 0 0 0-2.2335-.36751 17.4762 17.4762 0 0 0-1.4629-1.78962c.0674-.07279.1385-.13848.2113-.20239l-.0018.0071Zm-.8078.79183c.3195.34088.6338.71016.9409 1.10608-.3036-.01243-.6143-.0213-.9285-.0213-.3143 0-.6356 0-.9463.0213.3036-.39414.6143-.7652.9339-1.10608ZM9.21971 3.97338a.85576.85576 0 0 1 .43852-.09943 2.32778 2.32778 0 0 1 .92147.23258 6.93702 6.93702 0 0 1 1.7754 1.20373l.2077.18997a17.47747 17.47747 0 0 0-1.4487 1.77541 17.55257 17.55257 0 0 0-2.24593.36574c-.07811-.34443-.14203-.68176-.17754-1.00666-.18464-1.34044.02841-2.36307.5273-2.65424l.00178-.0071Zm-1.921 5.05814a10.23244 10.23244 0 0 1 .96583-.34443 17.3821 17.3821 0 0 0 .80958 2.15531 17.53576 17.53576 0 0 0-.79716 2.1305 10.42642 10.42642 0 0 1-.98357-.355c-1.26054-.5327-2.04173-1.2162-2.04173-1.8003 0-.5841.78829-1.26233 2.04705-1.78608Zm5.85889.17754a1.62977 1.62977 0 0 0-.9058.27369 1.63023 1.63023 0 0 0-.6011.73075 1.63018 1.63018 0 0 0-.0938.9416c.0626.3162.2175.6068.4452.835.2277.2282.5179.3837.834.447.3161.0632.6438.0313.9418-.0918.2979-.123.5527-.3316.7321-.5995.1793-.2678.2753-.5828.2756-.9051a1.62678 1.62678 0 0 0-.1203-.6269 1.6295 1.6295 0 0 0-.3521-.53238 1.62911 1.62911 0 0 0-.5297-.35613 1.62834 1.62834 0 0 0-.6259-.1251v.00887Za1.62977 1.62977 0 0 0-.9058.27369 1.63023 1.63023 0 0 0-.6011.73075 1.63018 1.63018 0 0 0-.0938.9416c.0626.3162.2175.6068.4452.835.2277.2282.5179.3837.834.447.3161.0632.6438.0313.9418-.0918.2979-.123.5527-.3316.7321-.5995.1793-.2678.2753-.5828.2756-.9051a1.62678 1.62678 0 0 0-.1203-.6269 1.6295 1.6295 0 0 0-.3521-.53238 1.62911 1.62911 0 0 0-.5297-.35613 1.62834 1.62834 0 0 0-.6259-.1251v.00887Za1.62977 1.62977 0 0 0-.9058.27369 1.63023 1.63023 0 0 0-.6011.73075 1.63018 1.63018 0 0 0-.0938.9416c.0626.3162.2175.6068.4452.835.2277.2282.5179.3837.834.447.3161.0632.6438.0313.9418-.0918.2979-.123.5527-.3316.7321-.5995.1793-.2678.2753-.5828.2756-.9051a1.62678 1.62678 0 0 0-.1203-.6269 1.6295 1.6295 0 0 0-.3521-.53238 1.62911 1.62911 0 0 0-.5297-.35613 1.62834 1.62834 0 0 0-.6259-.1251v.00887Zm8.7616 1.64044c0-1.22322-1.4398-2.30799-3.6538-2.97022.5326-2.24944.3001-4.03906-.7599-4.64447a1.69497 1.69497 0 0 0-.8504-.21305c-.9889 0-2.2388.69063-3.5011 1.88548-1.2623-1.18597-2.5086-1.87305-3.49577-1.87305a1.6795 1.6795 0 0 0-.86285.2166c-1.05459.60719-1.27297 2.38615-.74744 4.62494-2.20329.65868-3.63604 1.73458-3.6396 2.95247-.00355 1.218 1.44164 2.3081 3.65557 2.9685-.53262 2.2512-.30182 4.0391.75988 4.6445.25893.1451.55186.2187.84865.213.99066 0 2.24056-.6906 3.50286-1.8854 1.2606 1.1859 2.5069 1.873 3.4958 1.873.3017.0056.5995-.0692.8629-.2166 1.0545-.6072 1.2711-2.3861.7474-4.616 2.2033-.6712 3.636-1.7471 3.6378-2.9632v.0035Zm-7.952-5.54456c1.454-1.30138 2.363-1.44164 2.6862-1.44164a.83617.83617 0 0 1 .4296.10298c.5078.28939.7102 1.31025.5486 2.66311a10.07519 10.07519 0 0 1-.1775 1.02796 17.34708 17.34708 0 0 0-2.2335-.36751 17.49042 17.49042 0 0 0-1.4629-1.78961c.0656-.06569.1367-.13138.2095-.19529ZM9.56591 11.8526c.13848.2664.28584.5327.43849.8008.1527.268.3125.5397.4901.8078-.4812-.0693-.94812-.1563-1.39197-.2592.12428-.451.28229-.8948.46338-1.3494Zm-.49179-3.38033c.44918-.10475.91967-.19175 1.40788-.25921-.1775.26276-.3302.53262-.48999.81491-.15979.28229-.30004.53262-.43675.80249-.18109-.46161-.34147-.91434-.48114-1.35819Zm.92499 2.36843c.22019-.4652.46219-.93035.72619-1.39551.2663-.46516.5521-.91789.8468-1.35109.5167-.03905 1.0493-.06036 1.5979-.05858.5486.00177 1.0652.0213 1.5783.06214.2948.42965.577.8877.8434 1.34043.2663.45273.5113.92681.7314 1.39011-.2184.4652-.4616.9321-.7243 1.3937-.2628.4616-.5522.9197-.8469 1.3529-.5167.0408-1.0493.0604-1.5979.0604-.5486 0-1.0652-.0231-1.5783-.064-.2947-.4296-.5788-.877-.8451-1.3404-.2663-.4634-.5025-.9268-.7244-1.3901h-.00709Zm5.83399-2.62232c.4829.06747.9499.15446 1.3919.25744-.1313.43852-.2876.8877-.4687 1.34043-.1402-.26631-.2858-.53262-.4403-.80071-.1544-.26808-.3178-.53795-.4758-.79716h-.0071Zm.49 4.42432c.1527-.2687.2983-.5368.4368-.8043.1775.4617.3551.9162.4793 1.36-.4474.1048-.9179.19-1.4061.2574.1716-.2627.3373-.5338.4971-.8131h-.0071Zm-3.1655-6.53883c.3195.34088.6338.71016.9409 1.10608-.3036-.01243-.6143-.0213-.9285-.0213-.3143 0-.6356 0-.9463.0213.3036-.39414.6143-.7652.9339-1.10608ZM9.21971 3.97338a.85576.85576 0 0 1 .43852-.09943 2.32778 2.32778 0 0 1 .92147.23258 6.93702 6.93702 0 0 1 1.7754 1.20373l.2077.18997a17.47747 17.47747 0 0 0-1.4487 1.77541 17.55257 17.55257 0 0 0-2.24593.36574c-.07811-.34443-.14203-.68176-.17754-1.00666-.18464-1.34044.02841-2.36307.5273-2.65424l.00178-.0071Zm-.9392 9.00132a10.39917 10.39917 0 0 1-.98357-.3551c-1.26054-.5326-2.04172-1.2161-2.04172-1.8002 0-.5841.78473-1.26413 2.04349-1.78788a10.23244 10.23244 0 0 1 .96583-.34443 17.3821 17.3821 0 0 0 .80958 2.15531 17.53382 17.53382 0 0 0-.79361 2.1323Zm4.08349 3.391c-1.4541 1.3014-2.3631 1.4399-2.68801 1.4399a.83246.83246 0 0 1-.42965-.103c-.50777-.2894-.71017-1.3102-.5486-2.6631a9.95672 9.95672 0 0 1 .17754-1.0262c.7359.1695 1.48192.2917 2.23342.3658.4471.6285.9359 1.2264 1.463 1.7896l-.2077.197Zm.8113-.8007c-.3196-.3408-.6338-.7101-.9427-1.106.3053.0142.616.0213.9303.0213.3142 0 .6356 0 .9463-.0196-.3072.3942-.6196.7635-.9357 1.1043h.0018Zm3.9379 2.1305a.85608.85608 0 0 1-.4403.1048c-.3231 0-1.2428-.1421-2.6915-1.4381l-.2078-.19a17.46647 17.46647 0 0 0 1.447-1.7754 17.23638 17.23638 0 0 0 2.2477-.3657c.0781.3444.1402.6817.1775 1.0066.1758 1.3387-.0284 2.3613-.5344 2.6507l.0018.0071Zm1.9174-5.0492c-.3036.1242-.6249.2396-.9658.3426a17.48732 17.48732 0 0 0-.8114-2.1553c.3119-.6921.5782-1.40375.7972-2.13053.3336.10184.6619.22035.9836.35508 1.2587.53263 2.0417 1.21615 2.0399 1.80025-.0018.5841-.7847 1.257-2.0453 1.7808l.0018.0071Zm-5.873-.1811c.3223.0003.6375-.0949.9057-.2737a1.6294 1.6294 0 0 0 .6011-.7308c.1237-.2977.1563-.6254.0938-.9416a1.63017 1.63017 0 0 0-.4451-.83497 1.6301 1.6301 0 0 0-.8341-.44695 1.62958 1.62958 0 0 0-.9417.09172 1.62962 1.62962 0 0 0-.7321.59948 1.6301 1.6301 0 0 0-.2757.90522 1.6278 1.6278 0 0 0 .1229.6241c.0816.1979.2015.3778.3527.5294.1512.1515.3309.2718.5286.3538.1978.082.4098.1243.6239.1243ZM.85042 22.1412V2.48913L0 3.34133V22.988h21.6689l.8486-.8468H.85042Z"/></svg>
));