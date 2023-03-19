import { component$ } from '@builder.io/qwik';
import type { HTMLAttributes } from '@builder.io/qwik';

export default component$((props: HTMLAttributes<unknown>) => (
  <svg {...props} stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em"><title>Walmart</title><path d="M21.41818 9.10219c-.22048 0-.39583.12308-.39583.27297l.13393 1.51627c.01478.09132.12669.16185.26197.16185.13555-.00017.24705-.07065.26214-.16185l.13424-1.51627c0-.1499-.17555-.27297-.39645-.27297zM-.00002 10.3184s.59713 2.44699.69242 2.84417c.11123.46362.3117.63419.88954.51913l.37291-1.51718c.0945-.37683.1579-.64553.21866-1.02883h.01065c.04269.3871.10354.65314.18131 1.03017 0 0 .15176.68869.22949 1.05042.07795.36163.29482.5895.86083.46542l.88851-3.3633h-.71735l-.30339 1.45411c-.08155.42325-.15544.75396-.21251 1.14117h-.01022c-.05189-.38347-.11777-.70096-.20072-1.11331l-.31586-1.48197h-.7474l-.3378 1.44462c-.09569.43899-.18528.79337-.2422 1.16745h-.01023c-.05832-.35224-.13599-.7977-.22006-1.22261 0 0-.20074-1.03328-.27115-1.38946zm6.83845 0v3.3633h.68299v-3.3633zm9.6188 0v2.48118c0 .34202.0644.5817.20213.72811.12033.12806.31854.21094.55604.21094.20193 0 .40062-.0383.49426-.07317l-.0088-.53367c-.06968.01711-.1498.03078-.25942.03078-.23265 0-.31068-.149-.31068-.45611v-.94921h.59479v-.64351h-.59481v-.79533zm2.77885 0c-.11446.0027-.24452.08936-.32723.23277-.11062.19096-.09105.40434.03838.47923l1.3799.64254c.0862.03205.20323-.02912.27103-.14597.06814-.11745.0629-.2496-.0088-.3082l-1.24635-.8741c-.03237-.01874-.06877-.02717-.10693-.02627zm4.36427 0c-.03815-.0009-.0745.0075-.1068.02628l-1.2464.8741c-.07112.05846-.07653.1901-.0092.30734.00006.00013.00015.00023.00025.00036.00009.00016.00015.00033.00024.00049.06804.11686.18472.17803.27091.14598l1.38004-.64254c.12997-.0749.14861-.28827.03874-.47923-.08309-.1434-.21333-.23006-.32777-.23277zM5.312 11.0981c-.42444 0-.76136.11916-.94501.22529l.13442.46019c.16808-.10595.43566-.19366.68907-.19366.41954-.0011.48817.23728.48817.39012v.03613c-.9142-.0014-1.49164.31493-1.49164.9598 0 .3937.29399.76266.80512.76266.31466 0 .57778-.12554.73548-.32662h.01545s.10445.4367.67982.26969c-.03022-.18174-.04002-.37546-.04002-.60884v-.89849c0-.57263-.24452-1.07627-1.07086-1.07627zm4.08552 0c-.42739 0-.61944.2166-.7359.40034h-.01016v-.34335h-.65173v2.5266h.68658V12.2c0-.06945.00799-.1429.03223-.2068.05689-.1492.19565-.3237.41725-.3237.27704 0 .40667.2342.40667.57222v1.44h.68585v-1.4996c0-.06636.0091-.14622.02859-.20486.05639-.16969.20602-.30776.41201-.30776.28086 0 .41567.23012.41567.62788v1.38434h.68633v-1.48805c0-.78478-.39845-1.09555-.8483-1.09555-.19922 0-.35646.04996-.49863.13722-.1195.07334-.22655.17753-.32006.3147h-.0101c-.10853-.27228-.36375-.45192-.6963-.45192zm3.7702 0c-.42435 0-.76113.11916-.94495.22529l.13454.46019c.16792-.10595.43572-.19366.689-.19366.41926-.0011.48806.23728.48806.39012v.03613c-.91407-.0014-1.49164.31494-1.49164.9598 0 .3937.29418.76266.8056.76266.31441 0 .57759-.12554.735-.32662h.01557s.10437.4367.67982.26969c-.03027-.18174-.03996-.37546-.03996-.60884v-.89849c0-.57263-.24458-1.07627-1.07104-1.07627zm2.85129 0c-.26292 0-.56205.1697-.68761.53354h-.0191v-.47655h-.6181v2.5266h.70453V12.388c0-.06985.0042-.1307.01527-.1865.0521-.27102.25945-.44425.55696-.44425.08167 0 .1401.0088.20333.018v-.66151c-.05302-.0107-.0893-.01563-.15528-.01563zm4.35946 1.22067c-.01785-.00025-.03513.0026-.05134.0087l-1.3799.6418c-.12943.07519-.149.28868-.03838.47984.11028.1906.30469.28118.43415.20644l1.24634-.87349c.0717-.05929.07696-.19127.0088-.30862l.0006.00025c-.05507-.09558-.14292-.15388-.22027-.15492zm2.07955 0c-.07727.001-.1649.05934-.22012.15491l.00049-.00025c-.06781.11735-.06254.24934.0088.30862l1.2464.87349c.12921.07474.3238-.01584.43458-.20644.10986-.19116.09122-.40466-.03875-.47983l-1.38012-.64181c-.0162-.0061-.03344-.0089-.05128-.0087zm-16.75741.14518v.31519c0 .0466-.00406.09467-.01697.13673-.05286.17506-.23415.32303-.46086.32303-.18901 0-.33916-.1073-.33916-.33422 0-.34707.38204-.443.81699-.44073zm7.85577 0v.31519c0 .0466-.0041.09467-.0169.13673-.05287.17506-.23421.32303-.46093.32303-.18905 0-.3392-.1073-.3392-.33422 0-.34707.38209-.443.81703-.44073zm7.86138.48324c-.13506.00016-.24672.07024-.26148.16137l-.13393 1.5162c0 .15015.17535.27304.39583.27304.2209 0 .39645-.12289.39645-.27303l-.13424-1.51621c-.01509-.09113-.12659-.1612-.26214-.16137z"/></svg>
));