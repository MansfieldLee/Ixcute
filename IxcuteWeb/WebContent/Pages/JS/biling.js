(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return;
    }
    echarts.registerMap('碧岭', {
"type": "FeatureCollection",
"name": "biling",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "id": 440100 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 242.603431414235445, -338.400716708715322 ], [ 241.394995322731063, -341.757483629560795 ], [ 241.198550046772226, -345.097053320861107 ], [ 239.234097287183829, -352.561973807297022 ], [ 237.073199251636595, -357.080215154350356 ], [ 237.269644527595403, -361.00912067352715 ], [ 234.322965388212822, -362.187792329280228 ], [ 229.608278765200623, -362.187792329280228 ], [ 230.001169317118297, -366.116697848457022 ], [ 231.769176800747886, -367.491814780168909 ], [ 227.840271281571063, -370.634939195510356 ], [ 227.054490177735715, -377.510523854069788 ], [ 227.643826005612226, -382.814546304958469 ], [ 231.376286248830183, -387.332787652011802 ], [ 234.126520112253957, -390.279466791394441 ], [ 238.64476145930729, -389.886576239476767 ], [ 237.073199251636595, -394.994153414406583 ], [ 233.93007483629512, -402.066183348924824 ], [ 229.411833489241786, -405.79864359214281 ], [ 226.661599625818042, -409.727549111319604 ], [ 227.840271281571063, -415.424462114126015 ], [ 228.822497661365276, -417.388914873714384 ], [ 227.250935453694552, -419.942703461179349 ], [ 225.482927970064964, -420.532039289055888 ], [ 228.036716557529928, -421.710710944808909 ], [ 231.376286248830183, -420.728484565014696 ], [ 231.179840972871375, -423.675163704397278 ], [ 230.001169317118297, -427.407623947615321 ], [ 228.233161833488737, -427.407623947615321 ], [ 225.286482694106155, -427.211178671656455 ], [ 223.125584658558893, -428.979186155286015 ], [ 224.893592142188481, -432.318755846586328 ], [ 229.804724041159488, -436.051216089804257 ], [ 230.197614593077162, -439.19434050514576 ], [ 231.45444933398278, -439.740790392496024 ], [ 231.278063610850808, -439.88189897100159 ], [ 230.394059869036028, -442.337464920487093 ], [ 232.260289990644992, -443.614359214219576 ], [ 232.456735266603829, -444.596585594013789 ], [ 232.456735266603829, -447.346819457437562 ], [ 230.688727782974269, -448.525491113190583 ], [ 226.956267539756311, -449.311272217025987 ], [ 225.581150608044425, -451.177502338634952 ], [ 224.991814780167886, -454.025958840038129 ], [ 226.465154349859205, -455.990411599626555 ], [ 225.777595884003262, -458.151309635173789 ], [ 224.598924228250212, -459.133536014968001 ], [ 224.206033676332538, -460.803320860618157 ], [ 223.616697848455999, -462.374883068288852 ], [ 222.438026192702978, -465.812675397568569 ], [ 224.893592142188481, -469.250467726848342 ], [ 227.054490177735715, -472.590037418148654 ], [ 228.233161833488765, -476.715388213284314 ], [ 230.786950420953701, -477.402946679140257 ], [ 234.715855940130496, -479.662067352666895 ], [ 237.073199251636595, -481.822965388214129 ], [ 239.03765201122502, -483.001637043967207 ], [ 238.742984097286751, -485.35898035547325 ], [ 236.680308699718921, -486.635874649205732 ], [ 235.894527595883545, -488.796772684753023 ], [ 235.894527595883545, -491.055893358279661 ], [ 233.340739008418609, -492.332787652012144 ], [ 231.081618334891971, -494.395463049579973 ], [ 229.706501403180084, -496.654583723106612 ], [ 229.804724041159488, -499.503040224509789 ], [ 227.545603367632822, -500.092376052386328 ], [ 226.072263797941503, -502.351496725913023 ], [ 226.170486435920935, -504.217726847521988 ], [ 225.679373246023829, -507.655519176801704 ], [ 223.518475210476595, -509.619971936390129 ], [ 222.339803554723545, -512.370205799813903 ], [ 220.375350795135148, -512.370205799813903 ], [ 218.607343311505588, -510.602198316184285 ], [ 218.410898035546722, -508.441300280637051 ], [ 217.232226379793701, -507.164405986904569 ], [ 217.428671655752538, -505.003507951357335 ], [ 214.678437792328765, -504.217726847521988 ], [ 213.106875584658042, -504.708840037419066 ], [ 211.633536014966751, -505.789289055192739 ], [ 209.669083255378325, -505.691066417213278 ], [ 208.686856875584112, -507.164405986904569 ], [ 208.490411599625304, -509.619971936390129 ], [ 206.722404115995715, -510.700420954163747 ], [ 204.954396632366155, -508.834190832554725 ], [ 202.695275958839488, -506.771515434986895 ], [ 199.945042095415715, -505.691066417213278 ], [ 199.453928905518637, -503.137277829748371 ], [ 198.668147801683261, -499.699485500468654 ], [ 198.569925163703829, -497.440364826941959 ], [ 196.900140318053701, -495.672357343312399 ], [ 197.194808231991942, -493.806127221703434 ], [ 197.391253507950807, -490.466557530403122 ], [ 197.980589335827318, -488.894995322732427 ], [ 201.811272217024708, -488.403882132835292 ], [ 202.891721234798325, -486.439429373246924 ], [ 202.498830682880651, -483.98386342376142 ], [ 199.257483629559772, -482.903414405987803 ], [ 199.061038353600935, -481.037184284378782 ], [ 201.320159027127602, -479.367399438728626 ], [ 203.579279700654268, -478.974508886810952 ], [ 206.231290926098609, -477.697614593078526 ], [ 206.918849391954552, -476.420720299346044 ], [ 204.757951356407318, -474.849158091675349 ], [ 202.891721234798325, -474.063376987839945 ], [ 200.927268475209928, -472.590037418148654 ], [ 199.846819457436311, -470.330916744621959 ], [ 199.355706267539205, -466.893124415342299 ], [ 198.275257249765616, -464.142890551918526 ], [ 195.230355472403602, -462.669550982227236 ], [ 193.560570626753446, -460.508652946679945 ], [ 193.462347988774042, -456.972637979420824 ], [ 192.185453695041588, -455.695743685688399 ], [ 193.069457436856339, -453.829513564079377 ], [ 194.248129092609389, -453.240177736202895 ], [ 194.739242282506495, -450.882834424696796 ], [ 191.105004677267942, -449.605940130964314 ], [ 187.667212347988254, -448.230823199252427 ], [ 184.425865294667375, -446.168147801684597 ], [ 181.872076707202439, -445.185921421890384 ], [ 182.166744621140708, -443.02502338634315 ], [ 179.220065481758098, -442.239242282507803 ], [ 178.925397567819829, -440.962347988775321 ], [ 178.336061739943318, -439.19434050514576 ], [ 174.308933582787091, -438.703227315248682 ], [ 173.03203928905458, -437.033442469598526 ], [ 170.478250701589673, -435.461880261927831 ], [ 168.61202057998068, -433.792095416277675 ], [ 168.120907390083573, -431.140084190833306 ], [ 166.451122544433417, -428.880963517306668 ], [ 166.254677268474609, -426.621842843779973 ], [ 164.879560336762722, -424.559167446212143 ], [ 164.977782974742126, -422.791159962582583 ], [ 163.111552853133162, -419.844480823200001 ], [ 161.147100093544736, -417.487137511693902 ], [ 156.923526660429673, -414.638681010290725 ], [ 155.155519176800112, -413.165341440599434 ], [ 152.99462114125285, -410.807998129093335 ], [ 151.619504209540963, -408.352432179607831 ], [ 149.851496725911403, -405.602198316184058 ], [ 148.27993451824068, -404.718194574369249 ], [ 148.967492984096623, -402.360851262863207 ], [ 148.672825070158353, -397.646164639851008 ], [ 149.655051449952566, -394.208372310571235 ], [ 147.98526660430241, -392.440364826941732 ], [ 147.395930776425871, -389.493685687559093 ], [ 149.065715622076027, -384.386108512629221 ], [ 153.092843779232282, -381.242984097287774 ], [ 156.039522918614864, -379.769644527596483 ], [ 158.5933115060798, -377.510523854069788 ], [ 159.77198316183285, -374.269176800748937 ], [ 158.691534144059233, -372.010056127222299 ], [ 162.42399438727719, -370.045603367633873 ], [ 161.245322731524141, -366.509588400374753 ], [ 162.325771749297758, -363.46468662301271 ], [ 164.093779232927346, -360.616230121609533 ], [ 165.468896164639204, -358.651777362021107 ], [ 171.165809167445616, -358.455332086062299 ], [ 173.32670720299285, -356.0979887745562 ], [ 177.255612722169644, -355.115762394761987 ], [ 182.264967259120084, -354.428203928906044 ], [ 185.604536950420368, -353.7406454630501 ], [ 185.211646398502694, -354.722871842844313 ], [ 182.264967259120084, -357.080215154350412 ], [ 180.791627689428765, -357.669550982226895 ], [ 182.363189897099517, -358.455332086062299 ], [ 184.916978484564424, -358.357109448082838 ], [ 186.979653882132254, -356.981992516370951 ], [ 188.551216089803006, -354.03531337698837 ], [ 190.221000935453134, -353.053086997194157 ], [ 191.89078578110329, -354.329981290926639 ], [ 193.953461178671091, -357.767773620206356 ], [ 193.953461178671091, -354.821094480823717 ], [ 192.676566884938637, -352.365528531338214 ], [ 191.694340505144453, -350.695743685688058 ], [ 193.757015902712283, -348.731290926099689 ], [ 194.54279700654763, -346.177502338634724 ], [ 198.471702525724425, -346.37394761459359 ], [ 200.632600561271687, -349.90996258185271 ], [ 201.614826941065871, -351.874415341441136 ], [ 205.249064546304453, -351.579747427502866 ], [ 207.606407857810524, -350.892188961646923 ], [ 210.356641721234297, -351.481524789523405 ], [ 212.321094480822694, -353.445977549111831 ], [ 208.3921889616459, -355.508652946679661 ], [ 206.427736202057474, -356.785547240412143 ], [ 208.883302151542978, -357.473105706268086 ], [ 210.945977549110808, -356.392656688494469 ], [ 212.8122076707198, -355.410430308700256 ], [ 214.973105706267063, -355.017539756782583 ], [ 216.544667913937758, -353.642422825070696 ], [ 217.134003741814297, -352.463751169317618 ], [ 218.70556594948502, -351.874415341441136 ], [ 219.491347053320396, -349.615294667914441 ], [ 217.330449017773134, -349.222404115996767 ], [ 215.857109448081815, -350.892188961646923 ], [ 213.303320860616907, -351.088634237605731 ], [ 211.437090739007914, -349.713517305893902 ], [ 212.713985032740368, -347.84728718428488 ], [ 214.383769878390524, -347.159728718428937 ], [ 215.955332086061247, -345.195275958840512 ], [ 216.05355472404068, -344.01660430308749 ], [ 214.089101964452254, -344.213049579046356 ], [ 213.10687558465807, -344.998830682881703 ], [ 210.749532273151971, -344.01660430308749 ], [ 211.142422825069673, -341.659260991581391 ], [ 214.089101964452254, -341.168147801684313 ], [ 216.446445275958325, -339.989476145931235 ], [ 216.839335827875999, -337.926800748363405 ], [ 219.294901777361503, -336.551683816651575 ], [ 222.241580916744113, -337.435687558466327 ], [ 224.500701590270779, -339.105472404116483 ], [ 227.15271281571512, -339.989476145931235 ], [ 229.117165575303545, -339.694808231992965 ], [ 231.867399438727318, -338.712581852198809 ], [ 232.947848456500935, -337.239242282507462 ], [ 232.456735266603829, -334.390785781104285 ], [ 232.75140318054207, -331.935219831618781 ], [ 236.090972871842382, -331.149438727783433 ], [ 239.332319925163233, -332.22988774555705 ], [ 241.002104770813389, -333.703227315248341 ], [ 239.332319925163233, -335.667680074836767 ], [ 239.528765201122098, -337.239242282507462 ], [ 242.180776426566439, -338.025023386342866 ], [ 242.603431414235445, -338.400716708715322 ] ] ] ] ,"encodeOffsets":[[116086,23320]]},"properties":{"cp":/*[409.9,-337.7]*/[193.4,-400.6],"name":"碧岭社区","childNum":1 } },
{ "type": "Feature", "properties": { "id": 440200 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 235.948794246700885, -433.717750104657796 ], [ 235.501637043965843, -432.711646398503945 ], [ 237.073199251636595, -428.586295603368342 ], [ 241.984331150607602, -426.818288119738781 ], [ 247.681244153413957, -424.068054256315008 ], [ 250.038587464920056, -420.924929840973562 ], [ 253.181711880261503, -420.335594013097023 ], [ 257.307062675397162, -419.35336763330281 ], [ 260.646632366697418, -417.388914873714384 ], [ 263.789756782038921, -412.084892422825703 ], [ 264.575537885874269, -404.816417212348597 ], [ 267.718662301215716, -401.869738072966015 ], [ 270.665341440598297, -399.512394761459916 ], [ 266.932881197380311, -397.940832553789221 ], [ 265.361318989709616, -394.797708138447774 ], [ 267.718662301215716, -390.672357343312115 ], [ 273.219130028063205, -387.136342376052994 ], [ 277.148035547240056, -381.635874649205448 ], [ 276.951590271281248, -376.528297474275575 ], [ 278.130261927034212, -373.385173058934129 ], [ 278.130261927034212, -368.67048643592193 ], [ 275.18358278765163, -365.723807296539348 ], [ 272.236903648269049, -363.955799812909788 ], [ 270.468896164639489, -365.134471468662809 ], [ 266.932881197380311, -362.187792329280228 ], [ 264.968428437791943, -357.669550982226895 ], [ 260.646632366697418, -360.223339569691802 ], [ 259.075070159026723, -362.580682881197902 ], [ 256.32483629560295, -360.812675397568341 ], [ 253.181711880261503, -356.490879326473873 ], [ 250.038587464920056, -352.758419083255887 ], [ 247.877689429372822, -353.7406454630501 ], [ 244.931010289990184, -351.972637979420483 ], [ 244.931010289990184, -344.507717492984568 ], [ 245.175455769124511, -339.863253389432828 ], [ 246.207904583722666, -340.087698783910696 ], [ 247.877689429372822, -340.284144059869504 ], [ 253.181711880261503, -339.007249766137079 ], [ 256.619504209541219, -337.141019644528114 ], [ 259.369738072964992, -335.765902712816228 ], [ 262.807530402244652, -334.881898971001419 ], [ 265.263096351730155, -334.881898971001419 ], [ 267.81688493919512, -336.158793264733902 ], [ 269.093779232927545, -337.632132834425192 ], [ 271.254677268474836, -339.596585594013618 ], [ 271.254677268474836, -341.168147801684313 ], [ 269.58489242282468, -342.5432647333962 ], [ 267.816884939195177, -343.132600561272568 ], [ 270.174228250701276, -347.650841908325901 ], [ 272.728016838166184, -349.615294667914327 ], [ 275.085360149672283, -348.53484565014071 ], [ 277.540926099157787, -346.963283442469958 ], [ 280.487605238540368, -345.784611786716937 ], [ 280.094714686622694, -343.525491113190242 ], [ 283.728952291861276, -339.793030869972256 ], [ 286.675631431243858, -337.533910196445618 ], [ 290.604536950420652, -337.533910196445618 ], [ 294.729887745556312, -336.355238540692596 ], [ 298.265902712815489, -335.274789522918923 ], [ 300.426800748362723, -336.74812909261027 ], [ 301.50724976613634, -340.971702525725334 ], [ 304.945042095416056, -347.945509822264171 ], [ 307.793498596819234, -355.80332086061776 ], [ 311.133068288119546, -364.545135640786214 ], [ 313.785079513563915, -371.715388213283916 ], [ 316.240645463049418, -375.93896164639898 ], [ 316.142422825069957, -377.608746492049136 ], [ 313.686856875584454, -378.001637043966809 ], [ 313.097521047707971, -379.76964452759637 ], [ 312.901075771749106, -381.734097287184795 ], [ 311.722404115996085, -383.010991580917221 ], [ 312.115294667913759, -385.564780168382185 ], [ 313.195743685687376, -387.922123479888285 ], [ 315.847754911131744, -387.529232927970611 ], [ 316.633536014967092, -389.297240411600114 ], [ 314.669083255378666, -391.654583723106214 ], [ 314.669083255378666, -393.520813844715235 ], [ 318.499766136576056, -396.369270346118412 ], [ 322.625116931711716, -401.869738072965902 ], [ 323.803788587464737, -405.111085126286753 ], [ 322.232226379794042, -408.254209541628256 ], [ 318.401543498596652, -410.70977549111376 ], [ 313.981524789522723, -413.067118802619802 ], [ 310.347287184284198, -415.031571562208228 ], [ 307.695275958839829, -416.406688493920115 ], [ 303.766370439663035, -417.290692235734923 ], [ 301.409027128156936, -417.880028063611405 ], [ 300.328578110383319, -420.630261927035178 ], [ 299.641019644527375, -422.594714686623604 ], [ 297.873012160897815, -424.559167446211973 ], [ 295.221000935453446, -424.559167446211973 ], [ 291.78320860617373, -424.657390084191434 ], [ 290.211646398503035, -425.443171188026781 ], [ 287.95252572497634, -427.898737137512285 ], [ 285.791627689429106, -430.648971000936058 ], [ 284.51473339569668, -432.515201122545022 ], [ 282.059167446211177, -433.988540692236313 ], [ 281.764499532272907, -434.970767072030526 ], [ 282.059167446211177, -437.328110383536625 ], [ 280.782273152478695, -437.328110383536625 ], [ 278.916043030869673, -436.738774555660086 ], [ 276.46047708138417, -437.033442469598356 ], [ 276.656922357343035, -433.30098222638037 ], [ 276.558699719363631, -430.059635173059519 ], [ 274.692469597754609, -430.059635173059519 ], [ 272.040458372310297, -428.880963517306498 ], [ 269.290224508886524, -428.782740879327093 ], [ 266.539990645462751, -429.273854069224171 ], [ 265.361318989709673, -430.747193638915462 ], [ 262.414639850327092, -430.845416276894866 ], [ 259.467960710944453, -430.452525724977193 ], [ 256.914172123479545, -431.53297474275081 ], [ 255.047942001870581, -433.6938727782981 ], [ 252.887043966323319, -434.970767072030526 ], [ 250.431478016837758, -434.086763330215774 ], [ 248.958138447146439, -433.300982226380427 ], [ 246.502572497660935, -433.890318054256966 ], [ 245.520346117866751, -434.872544434051179 ], [ 242.868334892422411, -435.167212347989448 ], [ 241.591440598689928, -434.577876520112909 ], [ 238.939429373245588, -434.577876520112909 ], [ 238.546538821327914, -434.086763330215774 ], [ 235.992750233862978, -433.595650140318696 ], [ 235.948794246700885, -433.717750104657796 ] ] ] ],"encodeOffsets":[[116086,23320]]},"properties":{"cp":/*249.6,-380.6*/[290.4,-395.9],"name":"沙湖社区","childNum":1  } },
{ "type": "Feature", "properties": { "id": 440300 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 231.45444933398278, -439.740790392496024 ], [ 230.197614593077162, -439.19434050514576 ], [ 229.804724041159488, -436.051216089804257 ], [ 224.893592142188481, -432.318755846586328 ], [ 223.125584658558893, -428.979186155286015 ], [ 225.286482694106155, -427.211178671656455 ], [ 228.233161833488737, -427.407623947615321 ], [ 230.001169317118297, -427.407623947615321 ], [ 231.179840972871375, -423.675163704397278 ], [ 231.376286248830183, -420.728484565014696 ], [ 228.036716557529928, -421.710710944808909 ], [ 225.482927970064964, -420.532039289055888 ], [ 227.250935453694552, -419.942703461179349 ], [ 228.822497661365276, -417.388914873714384 ], [ 227.840271281571063, -415.424462114126015 ], [ 226.661599625818042, -409.727549111319604 ], [ 229.411833489241786, -405.79864359214281 ], [ 233.93007483629512, -402.066183348924824 ], [ 237.073199251636595, -394.994153414406583 ], [ 238.64476145930729, -389.886576239476767 ], [ 234.126520112253957, -390.279466791394441 ], [ 231.376286248830183, -387.332787652011802 ], [ 227.643826005612226, -382.814546304958469 ], [ 227.054490177735715, -377.510523854069788 ], [ 227.840271281571063, -370.634939195510356 ], [ 231.769176800747886, -367.491814780168909 ], [ 230.001169317118297, -366.116697848457022 ], [ 229.608278765200623, -362.187792329280228 ], [ 234.322965388212822, -362.187792329280228 ], [ 237.269644527595403, -361.00912067352715 ], [ 237.073199251636595, -357.080215154350356 ], [ 239.234097287183829, -352.561973807297022 ], [ 241.198550046772226, -345.097053320861107 ], [ 241.394995322731063, -341.757483629560795 ], [ 242.603431414235445, -338.400716708715322 ], [ 243.948783910195999, -339.596585594013561 ], [ 245.175455769124511, -339.863253389432828 ], [ 244.931010289990184, -344.507717492984568 ], [ 244.931010289990184, -351.972637979420483 ], [ 247.877689429372822, -353.7406454630501 ], [ 250.038587464920056, -352.758419083255887 ], [ 253.181711880261503, -356.490879326473873 ], [ 256.32483629560295, -360.812675397568341 ], [ 259.075070159026723, -362.580682881197902 ], [ 260.646632366697418, -360.223339569691802 ], [ 264.968428437791943, -357.669550982226895 ], [ 266.932881197380311, -362.187792329280228 ], [ 270.468896164639489, -365.134471468662809 ], [ 272.236903648269049, -363.955799812909788 ], [ 275.18358278765163, -365.723807296539348 ], [ 278.130261927034212, -368.67048643592193 ], [ 278.130261927034212, -373.385173058934129 ], [ 276.951590271281248, -376.528297474275575 ], [ 277.148035547240056, -381.635874649205448 ], [ 273.219130028063205, -387.136342376052994 ], [ 267.718662301215716, -390.672357343312115 ], [ 265.361318989709616, -394.797708138447774 ], [ 266.932881197380311, -397.940832553789221 ], [ 270.665341440598297, -399.512394761459916 ], [ 267.718662301215716, -401.869738072966015 ], [ 264.575537885874269, -404.816417212348597 ], [ 263.789756782038921, -412.084892422825703 ], [ 260.646632366697418, -417.388914873714384 ], [ 257.307062675397162, -419.35336763330281 ], [ 253.181711880261503, -420.335594013097023 ], [ 250.038587464920056, -420.924929840973562 ], [ 247.681244153413957, -424.068054256315008 ], [ 241.984331150607602, -426.818288119738781 ], [ 237.073199251636595, -428.586295603368342 ], [ 235.501637043965843, -432.711646398503945 ], [ 235.948794246700885, -433.717750104657796 ], [ 235.108746492048198, -436.0512160898042 ], [ 233.242516370439205, -438.310336763330838 ], [ 231.45444933398278, -439.740790392496024 ] ] ] ],"encodeOffsets":[[116086,23320]]},"properties":{"cp":/*290.4,-395.9*/[249.6,-380.6],"name":"汤坑社区","childNum":1  } }
]
}

);
}));