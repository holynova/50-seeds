const lines = (value) => value.trim().split("\n").map((line) => {
  const [name, englishName] = line.split("|").map((part) => part.trim());
  return { name, englishName };
});

const category = (name, englishName, description, englishDescription, promptZh, promptEn, items) => ({
  name,
  englishName,
  description,
  englishDescription,
  promptZh,
  promptEn,
  items: lines(items)
});

export const extraCatalog = {
  photographers: category(
    "摄影师", "Photographers", "以作品辨识度、行业影响与大众传播度综合排序的摄影师。", "Photographers ranked by visual recognition, influence, and public reach.",
    "提炼这位摄影师的光线、取景、色调与纪实或造型语言，转化为原创摄影画面。", "Extract the photographer's light, framing, tonality, and documentary or staged language for an original photographic image.", `
安塞尔·亚当斯|Ansel Adams
安妮·莱博维茨|Annie Leibovitz
亨利·卡蒂埃-布列松|Henri Cartier-Bresson
史蒂夫·麦凯瑞|Steve McCurry
多萝西娅·兰格|Dorothea Lange
罗伯特·卡帕|Robert Capa
塞巴斯蒂昂·萨尔加多|Sebastião Salgado
赫尔穆特·牛顿|Helmut Newton
理查德·阿维顿|Richard Avedon
辛迪·舍曼|Cindy Sherman
曼·雷|Man Ray
黛安·阿勃丝|Diane Arbus
薇薇安·迈尔|Vivian Maier
欧文·佩恩|Irving Penn
阿尔弗雷德·斯蒂格利茨|Alfred Stieglitz
爱德华·韦斯顿|Edward Weston
罗伯特·弗兰克|Robert Frank
戈登·帕克斯|Gordon Parks
何藩|Fan Ho
森山大道|Daido Moriyama
杉本博司|Hiroshi Sugimoto
荒木经惟|Nobuyoshi Araki
威廉·埃格尔斯顿|William Eggleston
安德烈亚斯·古尔斯基|Andreas Gursky
格雷戈里·克鲁德森|Gregory Crewdson
彼得·林德伯格|Peter Lindbergh
马里奥·特斯蒂诺|Mario Testino
蒂姆·沃克|Tim Walker
尤尔根·泰勒|Juergen Teller
南·戈尔丁|Nan Goldin
李·米勒|Lee Miller
玛格丽特·伯克-怀特|Margaret Bourke-White
伊芙·阿诺德|Eve Arnold
埃利奥特·厄威特|Elliott Erwitt
布鲁斯·吉尔登|Bruce Gilden
约瑟夫·寇德卡|Josef Koudelka
索尔·雷特|Saul Leiter
亚历克斯·韦伯|Alex Webb
马丁·帕尔|Martin Parr
拉古·莱|Raghu Rai
詹姆斯·纳赫特韦|James Nachtwey
尼克·奈特|Nick Knight
普拉顿|Platon
爱德华·伯汀斯基|Edward Burtynsky
川内伦子|Rinko Kawauchi
胁田尚揮|Masashi Wakui
陈漫|Chen Man
郎静山|Lang Jingshan
卢广|Lu Guang
任航|Ren Hang`
  ),
  film_directors: category(
    "电影导演", "Film Directors", "以代表作热度、视听辨识度与全球影响综合排序的电影导演。", "Film directors ranked by landmark works, audiovisual identity, and global influence.",
    "提炼这位导演的镜头调度、色彩、节奏与叙事母题，生成原创电影感画面。", "Extract the director's staging, color, rhythm, and narrative motifs for an original cinematic image.", `
克里斯托弗·诺兰|Christopher Nolan
史蒂文·斯皮尔伯格|Steven Spielberg
马丁·斯科塞斯|Martin Scorsese
昆汀·塔伦蒂诺|Quentin Tarantino
詹姆斯·卡梅隆|James Cameron
宫崎骏|Hayao Miyazaki
斯坦利·库布里克|Stanley Kubrick
阿尔弗雷德·希区柯克|Alfred Hitchcock
弗朗西斯·福特·科波拉|Francis Ford Coppola
黑泽明|Akira Kurosawa
王家卫|Wong Kar-wai
李安|Ang Lee
张艺谋|Zhang Yimou
丹尼斯·维伦纽瓦|Denis Villeneuve
雷德利·斯科特|Ridley Scott
大卫·芬奇|David Fincher
彼得·杰克逊|Peter Jackson
乔治·卢卡斯|George Lucas
蒂姆·伯顿|Tim Burton
韦斯·安德森|Wes Anderson
吉尔莫·德尔·托罗|Guillermo del Toro
奉俊昊|Bong Joon-ho
朴赞郁|Park Chan-wook
格蕾塔·葛韦格|Greta Gerwig
索菲亚·科波拉|Sofia Coppola
简·坎皮恩|Jane Campion
赵婷|Chloé Zhao
凯瑟琳·毕格罗|Kathryn Bigelow
佩德罗·阿莫多瓦|Pedro Almodóvar
费德里科·费里尼|Federico Fellini
英格玛·伯格曼|Ingmar Bergman
安德烈·塔可夫斯基|Andrei Tarkovsky
让-吕克·戈达尔|Jean-Luc Godard
弗朗索瓦·特吕弗|François Truffaut
奥逊·威尔斯|Orson Welles
查理·卓别林|Charlie Chaplin
比利·怀尔德|Billy Wilder
大卫·林奇|David Lynch
泰伦斯·马力克|Terrence Malick
保罗·托马斯·安德森|Paul Thomas Anderson
科恩兄弟|Coen Brothers
斯派克·李|Spike Lee
乔丹·皮尔|Jordan Peele
阿方索·卡隆|Alfonso Cuarón
亚历杭德罗·冈萨雷斯·伊尼亚里图|Alejandro González Iñárritu
欧格斯·兰斯莫斯|Yorgos Lanthimos
S·S·拉贾穆里|S. S. Rajamouli
吴宇森|John Woo
杨德昌|Edward Yang
贾樟柯|Jia Zhangke`
  ),
  illustrators: category(
    "插画家", "Illustrators", "跨出版、广告、概念艺术与数字创作的高辨识度插画家。", "Highly recognizable illustrators across publishing, advertising, concept art, and digital media.",
    "提炼这位插画家的线条、造型、叙事细节与色彩组织，用于原创插画构思。", "Extract the illustrator's linework, forms, narrative detail, and color organization for an original illustration.", `
诺曼·洛克威尔|Norman Rockwell
阿尔丰斯·穆夏|Alphonse Mucha
亚瑟·拉克姆|Arthur Rackham
碧雅翠丝·波特|Beatrix Potter
昆汀·布莱克|Quentin Blake
莫里斯·桑达克|Maurice Sendak
托芙·扬松|Tove Jansson
苏斯博士|Dr. Seuss
艾瑞·卡尔|Eric Carle
N·C·怀斯|N. C. Wyeth
马克斯菲尔德·派黎施|Maxfield Parrish
奥布里·比亚兹莱|Aubrey Beardsley
杰茜·威尔科克斯·史密斯|Jessie Willcox Smith
古斯塔夫·多雷|Gustave Doré
凯·尼尔森|Kay Nielsen
爱德蒙·杜拉克|Edmund Dulac
J·C·莱恩德克尔|J. C. Leyendecker
查尔斯·亚当斯|Charles Addams
拉尔夫·斯特德曼|Ralph Steadman
索尔·斯坦伯格|Saul Steinberg
爱德华·戈里|Edward Gorey
克里斯·韦尔|Chris Ware
陈志勇|Shaun Tan
奥利弗·杰弗斯|Oliver Jeffers
洛伊丝|Loish
江杉|James Jean
清水裕子|Yuko Shimizu
Victo Ngai|Victo Ngai
玛丽卡·法弗尔|Malika Favre
克里斯托夫·尼曼|Christoph Niemann
托默·哈努卡|Tomer Hanuka
帕斯卡尔·坎皮恩|Pascal Campion
丽贝卡·多特梅|Rebecca Dautremer
本杰明·拉孔布|Benjamin Lacombe
安娜·邦德|Anna Bond
玛丽·布莱尔|Mary Blair
艾文德·厄尔|Eyvind Earle
上杉忠弘|Tadahiro Uesugi
天野喜孝|Yoshitaka Amano
寺田克也|Katsuya Terada
吉田明彦|Akihiko Yoshida
伊利亚·库夫希诺夫|Ilya Kuvshinov
Heikala|Heikala
阿泰·盖兰|Atey Ghailan
罗维娜·蔡|Rovina Cai
WLOP|WLOP
Guweiz|Guweiz
冯立思|Lisk Feng
卤猫|Oamul Lu
早稻|Zao Dao`
  ),
  fashion_designers: category(
    "时装设计师", "Fashion Designers", "以品牌影响、秀场传播与造型辨识度综合排序的时装设计师。", "Fashion designers ranked by brand influence, runway reach, and recognizable silhouettes.",
    "提炼这位设计师的廓形、材质、配色与时代态度，转化为原创时装造型。", "Extract the designer's silhouette, materials, palette, and cultural attitude for an original fashion look.", `
可可·香奈儿|Coco Chanel
克里斯汀·迪奥|Christian Dior
伊夫·圣罗兰|Yves Saint Laurent
乔治·阿玛尼|Giorgio Armani
詹尼·范思哲|Gianni Versace
亚历山大·麦昆|Alexander McQueen
卡尔·拉格斐|Karl Lagerfeld
薇薇安·韦斯特伍德|Vivienne Westwood
缪西娅·普拉达|Miuccia Prada
拉夫·劳伦|Ralph Lauren
汤姆·福特|Tom Ford
马克·雅可布|Marc Jacobs
让·保罗·高缇耶|Jean Paul Gaultier
瓦伦蒂诺·加拉瓦尼|Valentino Garavani
于贝尔·德·纪梵希|Hubert de Givenchy
克里斯托瓦尔·巴伦西亚加|Cristóbal Balenciaga
皮尔·卡丹|Pierre Cardin
三宅一生|Issey Miyake
山本耀司|Yohji Yamamoto
川久保玲|Rei Kawakubo
高田贤三|Kenzo Takada
维吉尔·阿布洛|Virgil Abloh
菲比·费洛|Phoebe Philo
斯特拉·麦卡特尼|Stella McCartney
多纳泰拉·范思哲|Donatella Versace
约翰·加利亚诺|John Galliano
尼古拉·盖斯奇埃尔|Nicolas Ghesquière
德姆纳|Demna
乔纳森·安德森|Jonathan Anderson
里克·欧文斯|Rick Owens
拉夫·西蒙斯|Raf Simons
埃迪·斯理曼|Hedi Slimane
汤姆·布朗|Thom Browne
德里斯·范诺顿|Dries Van Noten
阿瑟丁·阿拉亚|Azzedine Alaïa
蒂埃里·穆勒|Thierry Mugler
艾尔莎·夏帕瑞丽|Elsa Schiaparelli
黛安·冯芙丝汀宝|Diane von Furstenberg
奥斯卡·德拉伦塔|Oscar de la Renta
卡罗琳娜·海莱拉|Carolina Herrera
王薇薇|Vera Wang
扎克·珀森|Zac Posen
西蒙娜·罗查|Simone Rocha
玛琳·塞尔|Marine Serre
艾里斯·范·赫彭|Iris van Herpen
郭培|Guo Pei
韩枫|Han Feng
长尾智明|Nigo
金·琼斯|Kim Jones
格蕾丝·威尔士·邦纳|Grace Wales Bonner`
  ),
  graphic_designers: category(
    "平面设计师", "Graphic Designers", "以视觉系统、海报、字体与大众文化影响综合排序的平面设计师。", "Graphic designers ranked by identity systems, posters, typography, and cultural influence.",
    "提炼这位设计师的网格、字体、图形与信息层级，转化为原创视觉系统。", "Extract the designer's grid, typography, shapes, and information hierarchy for an original visual system.", `
保罗·兰德|Paul Rand
索尔·巴斯|Saul Bass
米尔顿·格拉泽|Milton Glaser
马西莫·维涅里|Massimo Vignelli
宝拉·谢尔|Paula Scher
斯特凡·萨格迈斯特|Stefan Sagmeister
大卫·卡森|David Carson
内维尔·布罗迪|Neville Brody
维姆·克劳威尔|Wim Crouwel
约瑟夫·米勒-布罗克曼|Josef Müller-Brockmann
阿明·霍夫曼|Armin Hofmann
扬·奇肖尔德|Jan Tschichold
赫伯特·拜尔|Herbert Bayer
拉斯洛·莫霍利-纳吉|László Moholy-Nagy
埃尔·利西茨基|El Lissitzky
亚历山大·罗德琴科|Alexander Rodchenko
田中一光|Ikko Tanaka
福田繁雄|Shigeo Fukuda
原研哉|Kenya Hara
横尾忠则|Tadanori Yokoo
龟仓雄策|Yusaku Kamekura
杰西卡·沃尔什|Jessica Walsh
迈克尔·比鲁特|Michael Bierut
彼得·萨维尔|Peter Saville
沃恩·奥利弗|Vaughan Oliver
斯托姆·索格森|Storm Thorgerson
苏珊·凯尔|Susan Kare
艾普丽尔·格雷曼|April Greiman
穆丽尔·库珀|Muriel Cooper
西佩·皮内莱斯|Cipe Pineles
阿列克谢·布罗多维奇|Alexey Brodovitch
赫伯·卢巴林|Herb Lubalin
艾伦·弗莱彻|Alan Fletcher
奥托·艾舍|Otl Aicher
兰斯·怀曼|Lance Wyman
布鲁诺·穆纳里|Bruno Munari
马克斯·胡贝尔|Max Huber
沃尔夫冈·魏因加特|Wolfgang Weingart
埃米尔·鲁德|Emil Ruder
阿德里安·弗鲁提格|Adrian Frutiger
埃里克·施皮克曼|Erik Spiekermann
大卫·鲁德尼克|David Rudnick
乔纳森·巴恩布鲁克|Jonathan Barnbrook
谢泼德·费尔雷|Shepard Fairey
奇普·基德|Chip Kidd
伊尔玛·博姆|Irma Boom
艾伦·卢普顿|Ellen Lupton
吕敬人|Lu Jingren
韩家英|Han Jiaying
王序|Wang Xu`
  ),
  art_movements: category(
    "艺术流派", "Art Movements", "覆盖艺术史与当代视觉文化中最常被识别和调用的流派。", "Widely recognized movements across art history and contemporary visual culture.",
    "运用这一流派的形式原则、材料、色彩和文化语境，构建原创画面。", "Use the movement's formal principles, materials, color, and cultural context to build an original image.", `
文艺复兴|Renaissance
印象派|Impressionism
后印象派|Post-Impressionism
巴洛克|Baroque
浪漫主义|Romanticism
超现实主义|Surrealism
立体主义|Cubism
表现主义|Expressionism
抽象表现主义|Abstract Expressionism
波普艺术|Pop Art
新艺术运动|Art Nouveau
装饰艺术|Art Deco
极简主义|Minimalism
达达主义|Dada
野兽派|Fauvism
洛可可|Rococo
新古典主义|Neoclassicism
现实主义|Realism
象征主义|Symbolism
未来主义|Futurism
构成主义|Constructivism
至上主义|Suprematism
风格派|De Stijl
包豪斯|Bauhaus
欧普艺术|Op Art
观念艺术|Conceptual Art
激浪派|Fluxus
照相写实主义|Photorealism
新表现主义|Neo-Expressionism
街头艺术|Street Art
涂鸦艺术|Graffiti Art
低眉艺术|Lowbrow Art
形而上绘画|Metaphysical Painting
拉斐尔前派|Pre-Raphaelite Brotherhood
浮世绘|Ukiyo-e
日本画|Nihonga
中国文人画|Chinese Literati Painting
社会主义现实主义|Socialist Realism
哈莱姆文艺复兴|Harlem Renaissance
维也纳分离派|Vienna Secession
工艺美术运动|Arts and Crafts Movement
色域绘画|Color Field Painting
硬边绘画|Hard-edge Painting
动态艺术|Kinetic Art
大地艺术|Land Art
贫穷艺术|Arte Povera
精确主义|Precisionism
色调主义|Tonalism
地域主义|Regionalism
当代原住民艺术|Contemporary Indigenous Art`
  ),
  architectural_styles: category(
    "建筑风格", "Architectural Styles", "跨地域、时代与建造技术的高辨识度建筑语言。", "Highly recognizable architectural languages across regions, eras, and construction systems.",
    "运用这一建筑风格的体量、结构、立面、材料与空间秩序，设计原创建筑场景。", "Use the style's massing, structure, facade, materials, and spatial order for an original architectural scene.", `
哥特式|Gothic
巴洛克式|Baroque
古典主义|Classical
新古典主义|Neoclassical
罗曼式|Romanesque
文艺复兴式|Renaissance
拜占庭式|Byzantine
伊斯兰建筑|Islamic
莫卧儿式|Mughal
中国传统建筑|Traditional Chinese
日本传统建筑|Traditional Japanese
新艺术建筑|Art Nouveau
装饰艺术建筑|Art Deco
包豪斯建筑|Bauhaus
国际主义风格|International Style
现代主义|Modernism
粗野主义|Brutalism
后现代主义|Postmodernism
解构主义|Deconstructivism
高技派|High-tech
有机建筑|Organic Architecture
草原学派|Prairie School
世纪中叶现代主义|Mid-century Modern
斯堪的纳维亚风格|Scandinavian
地中海风格|Mediterranean
殖民地风格|Colonial
维多利亚式|Victorian
乔治亚式|Georgian
都铎式|Tudor
美术学院派|Beaux-Arts
洛可可式|Rococo
哥特复兴式|Gothic Revival
埃及复兴式|Egyptian Revival
希腊复兴式|Greek Revival
罗马复兴式|Roman Revival
新陈代谢派|Metabolism
表现主义建筑|Expressionist Architecture
构成主义建筑|Constructivist Architecture
未来主义建筑|Futurist Architecture
参数化主义|Parametricism
新未来主义|Neo-futurism
可持续建筑|Sustainable Architecture
亲生命建筑|Biophilic Architecture
乡土建筑|Vernacular Architecture
土坯建筑|Adobe Architecture
热带现代主义|Tropical Modernism
极简建筑|Minimalist Architecture
工业风建筑|Industrial Architecture
开普荷兰式|Cape Dutch
流线型现代式|Streamline Moderne`
  ),
  photography_genres: category(
    "摄影类型", "Photography Genres", "适合直接控制题材、镜头语言与成像方式的常用摄影类型。", "Common photography genres that directly control subject, camera language, and image-making method.",
    "采用这一摄影类型的典型主体选择、镜头距离、光线与成像习惯，创作原创照片。", "Apply the genre's typical subjects, camera distance, light, and image-making conventions to an original photograph.", `
人像摄影|Portrait Photography
街头摄影|Street Photography
风光摄影|Landscape Photography
野生动物摄影|Wildlife Photography
时尚摄影|Fashion Photography
纪实摄影|Documentary Photography
新闻摄影|Photojournalism
建筑摄影|Architectural Photography
微距摄影|Macro Photography
天文摄影|Astrophotography
美食摄影|Food Photography
产品摄影|Product Photography
体育摄影|Sports Photography
旅行摄影|Travel Photography
航拍摄影|Aerial Photography
水下摄影|Underwater Photography
夜景摄影|Night Photography
艺术摄影|Fine Art Photography
观念摄影|Conceptual Photography
静物摄影|Still Life Photography
婚礼摄影|Wedding Photography
活动摄影|Event Photography
新生儿摄影|Newborn Photography
宠物摄影|Pet Photography
演唱会摄影|Concert Photography
舞蹈摄影|Dance Photography
戏剧摄影|Theater Photography
编辑摄影|Editorial Photography
商业摄影|Commercial Photography
生活方式摄影|Lifestyle Photography
环境人像|Environmental Portraiture
抓拍摄影|Candid Photography
黑白摄影|Black and White Photography
胶片摄影|Film Photography
即时成像|Instant Photography
长曝光摄影|Long Exposure Photography
光绘摄影|Light Painting
红外摄影|Infrared Photography
高速摄影|High-speed Photography
移轴摄影|Tilt-shift Photography
全景摄影|Panoramic Photography
无人机摄影|Drone Photography
城市探险摄影|Urban Exploration Photography
极简摄影|Minimalist Photography
抽象摄影|Abstract Photography
超现实摄影|Surreal Photography
双重曝光|Double Exposure
剪影摄影|Silhouette Photography
倒影摄影|Reflection Photography
动态照片|Cinemagraph`
  ),
  lighting_setups: category(
    "灯光方案", "Lighting Setups", "可直接改变明暗结构、情绪与主体轮廓的高频布光方法。", "Popular lighting setups that directly shape contrast, mood, and subject silhouette.",
    "使用这一布光方案控制主光方向、软硬、色温、阴影与空间层次。", "Use this setup to control key direction, softness, color temperature, shadows, and spatial depth.", `
黄金时刻光|Golden Hour Light
蓝调时刻光|Blue Hour Light
伦勃朗布光|Rembrandt Lighting
蝴蝶光|Butterfly Lighting
环形布光|Loop Lighting
分割光|Split Lighting
宽面光|Broad Lighting
窄面光|Short Lighting
蛤壳光|Clamshell Lighting
三点布光|Three-point Lighting
主光造型|Key Light
轮廓光|Rim Light
逆光|Backlighting
侧光|Side Lighting
顶光|Top Lighting
底光|Underlighting
柔光箱|Softbox Lighting
窗边自然光|Window Light
烛光|Candlelight
霓虹灯光|Neon Lighting
明暗对照光|Chiaroscuro Lighting
低调布光|Low-key Lighting
高调布光|High-key Lighting
体积光|Volumetric Light
丁达尔光束|God Rays
斑驳树影光|Dappled Light
阴天漫射光|Overcast Diffuse Light
正午硬光|Hard Noon Sun
月光|Moonlight
实景光源|Practical Lighting
动机光|Motivated Lighting
彩色滤片光|Color Gel Lighting
RGB彩光|RGB Lighting
投影图案光|Projector Lighting
遮光片图案|Gobo Lighting
剪影逆光|Silhouette Backlight
边缘光|Edge Lighting
反射补光|Bounce Light
雷达罩光|Beauty Dish Lighting
环形灯光|Ring Light
菲涅尔聚光|Fresnel Lighting
纸灯笼光|Lantern Light
篝火光|Campfire Light
街灯光|Streetlight
办公室荧光灯|Fluorescent Office Light
钨丝暖光|Tungsten Warmth
生物荧光|Bioluminescent Light
水下焦散光|Underwater Caustics
闪电瞬时光|Lightning Flash
日食光|Eclipse Light`
  ),
  color_palettes: category(
    "色彩方案", "Color Palettes", "适合直接写入提示词并控制画面气质的常用配色体系。", "Prompt-ready palettes for directly controlling the image's visual character.",
    "以这一配色方案限定主色、辅助色、明度和饱和度关系，形成统一画面。", "Use this palette to constrain dominant, supporting, value, and saturation relationships for a cohesive image.", `
黑白配色|Black and White
红黑白配色|Red Black and White
大地色系|Earth Tones
柔和粉彩|Soft Pastels
霓虹配色|Neon Palette
宝石色系|Jewel Tones
单色蓝|Monochrome Blue
单色红|Monochrome Red
蓝橙互补色|Blue and Orange Complementary
青橙电影色|Teal and Orange
粉绿配色|Pink and Green
紫黄互补色|Purple and Yellow
暖调日落色|Warm Sunset
冷调月光色|Cool Moonlight
秋日色系|Autumn Palette
春日色系|Spring Palette
冬日色系|Winter Palette
夏日色系|Summer Palette
海洋色系|Ocean Palette
森林色系|Forest Palette
沙漠色系|Desert Palette
热带色系|Tropical Palette
赛博朋克配色|Cyberpunk Palette
蒸汽波配色|Vaporwave Palette
合成波配色|Synthwave Palette
田园核配色|Cottagecore Palette
暗黑学院配色|Dark Academia Palette
浅色学院配色|Light Academia Palette
韦斯·安德森粉彩|Wes Anderson Pastels
黑色电影配色|Film Noir Palette
怀旧棕褐色|Sepia Palette
蓝晒色调|Cyanotype Blue
三原色|Primary Colors
包豪斯配色|Bauhaus Palette
孟菲斯配色|Memphis Palette
斯堪的纳维亚中性色|Scandinavian Neutrals
侘寂自然色|Wabi-sabi Neutrals
中国朱金配色|Chinese Cinnabar and Gold
波斯青金石配色|Persian Turquoise and Lapis
摩洛哥香料色|Moroccan Spice Palette
地中海蓝白|Mediterranean Blue and White
北欧极光色|Nordic Aurora Palette
虹彩色|Iridescent Palette
全息色|Holographic Palette
金黑配色|Metallic Gold and Black
银铬色|Silver Chrome
玫瑰金|Rose Gold
糖果色|Candy Colors
低饱和复古色|Muted Vintage Palette
高反差编辑色|High-contrast Editorial Palette`
  ),
  materials_textures: category(
    "材质纹理", "Materials and Textures", "用于增强触感、表面细节与真实度的高频材质和纹理。", "Popular materials and textures for stronger tactility, surface detail, and realism.",
    "突出这一材质的反射、粗糙度、透光性、微小瑕疵与接缝细节。", "Emphasize the material's reflectivity, roughness, translucency, imperfections, and joins.", `
大理石|Marble
清水混凝土|Concrete
木纹|Wood Grain
拉丝金属|Brushed Metal
镜面铬|Chrome
透明玻璃|Clear Glass
磨砂玻璃|Frosted Glass
陶瓷釉|Ceramic Glaze
白瓷|Porcelain
赤陶|Terracotta
皮革|Leather
麂皮|Suede
天鹅绒|Velvet
真丝|Silk
缎面|Satin
亚麻|Linen
牛仔布|Denim
羊毛|Wool
针织纹理|Knit
蕾丝|Lace
纸张|Paper
手工纸|Handmade Paper
瓦楞纸板|Cardboard
塑料|Plastic
亚克力|Acrylic
橡胶|Rubber
碳纤维|Carbon Fiber
天然石材|Natural Stone
花岗岩|Granite
砂岩|Sandstone
板岩|Slate
砖墙|Brick
石膏|Plaster
灰泥|Stucco
铁锈|Rust
铜绿|Patinated Copper
金箔|Gold Leaf
银箔|Silver Leaf
贝母|Mother of Pearl
珍珠|Pearl
水晶|Crystal
冰面|Ice
水面|Water
烟雾|Smoke
浓雾|Fog
苔藓|Moss
树皮|Bark
羽毛|Feathers
皮毛|Fur
鳞片|Scales`
  ),
  fashion_styles: category(
    "服装风格", "Fashion Styles", "从历史衣着到网络审美、地域服饰与未来造型的热门风格。", "Popular styles spanning historical dress, internet aesthetics, regional clothing, and future fashion.",
    "以这一服装风格控制轮廓、层次、面料、配饰、妆发与人物姿态。", "Use this fashion style to control silhouette, layering, fabric, accessories, grooming, and pose.", `
街头服饰|Streetwear
高级定制|Haute Couture
静奢风|Quiet Luxury
老钱风|Old Money
千禧风|Y2K
赛博朋克服装|Cyberpunk Fashion
机能风|Techwear
山系机能风|Gorpcore
田园核|Cottagecore
暗黑学院风|Dark Academia
浅色学院风|Light Academia
朋克风|Punk
哥特风|Goth
垃圾摇滚风|Grunge
学院预科风|Preppy
极简穿搭|Minimalist Fashion
极繁主义穿搭|Maximalist Fashion
波西米亚风|Bohemian
嬉皮风|Hippie
1950年代复古|1950s Vintage
1960年代摩登|1960s Mod
1970年代迪斯科|1970s Disco
1980年代权力套装|1980s Power Dressing
1990年代极简|1990s Minimalism
先锋时装|Avant-garde Fashion
解构时装|Deconstructed Fashion
日系街头|Japanese Street Style
原宿风|Harajuku
洛丽塔风|Lolita Fashion
视觉系|Visual Kei
韩系时尚|K-fashion
汉服|Hanfu
旗袍|Qipao
和服|Kimono
纱丽|Sari
非洲印花服饰|African Print Fashion
西部牛仔风|Western Cowboy
军装风|Military Fashion
工装风|Workwear
运动装|Sportswear
运动休闲风|Athleisure
芭蕾核|Balletcore
蝴蝶结少女风|Coquette
美人鱼核|Mermaidcore
摄政时代风|Regencycore
蒸汽朋克服装|Steampunk Fashion
柴油朋克服装|Dieselpunk Fashion
太阳朋克服装|Solarpunk Fashion
未来铬金属风|Futuristic Chrome Fashion
无性别剪裁|Gender-fluid Tailoring`
  ),
  interior_spaces: category(
    "室内空间", "Interior Spaces", "覆盖住宅、商业、文化与幻想场景的高频室内空间原型。", "Popular interior archetypes across homes, commerce, culture, and speculative settings.",
    "围绕这一空间的功能动线、家具尺度、材质、光线与生活痕迹构建场景。", "Build the scene around the space's circulation, furniture scale, materials, light, and signs of life.", `
客厅|Living Room
卧室|Bedroom
厨房|Kitchen
浴室|Bathroom
餐厅|Dining Room
家庭办公室|Home Office
私人图书馆|Library
艺术家工作室|Artist Studio
音乐录音室|Music Studio
摄影棚|Photo Studio
温室|Greenhouse
玻璃花房|Conservatory
阁楼公寓|Loft
顶层公寓|Penthouse
微型住宅|Tiny House
林中小屋|Cabin
日式旅馆客房|Ryokan Room
榻榻米房|Tatami Room
茶室|Tea Room
中式庭院|Chinese Courtyard
摩洛哥里亚德|Moroccan Riad
巴黎公寓|Paris Apartment
北欧公寓|Scandinavian Apartment
世纪中叶住宅|Mid-century Home
粗野主义室内|Brutalist Interior
工业仓库|Industrial Warehouse
装饰艺术大堂|Art Deco Lobby
哥特大厅|Gothic Hall
巴洛克舞厅|Baroque Ballroom
宫殿王座厅|Palace Throne Room
城堡大厅|Castle Great Hall
博物馆展厅|Museum Gallery
剧院后台|Theater Backstage
电影院|Cinema
酒店大堂|Hotel Lobby
精品酒店客房|Boutique Hotel Room
奢华餐厅|Luxury Restaurant
咖啡馆|Café
地下酒吧|Speakeasy
夜总会|Nightclub
地铁站|Subway Station
机场休息室|Airport Lounge
火车车厢|Train Carriage
宇宙飞船舱室|Spacecraft Cabin
研究实验室|Research Laboratory
医院病房|Hospital Ward
教室|Classroom
书店|Bookstore
花店|Flower Shop
便利店|Convenience Store`
  ),
  vehicles: category(
    "交通工具", "Vehicles", "从日常交通、工业机械到未来载具的高辨识度对象。", "Recognizable vehicles spanning everyday transport, industrial machinery, and speculative mobility.",
    "突出这一载具的比例、结构、表面材料、运动状态与所处环境。", "Emphasize the vehicle's proportions, structure, surface materials, motion, and environment.", `
跑车|Sports Car
超级跑车|Supercar
一级方程式赛车|Formula 1 Car
拉力赛车|Rally Car
经典肌肉车|Classic Muscle Car
复古敞篷车|Vintage Convertible
豪华轿车|Luxury Sedan
越野车|Off-road SUV
皮卡|Pickup Truck
露营车|Camper Van
城市公交车|City Bus
双层巴士|Double-decker Bus
有轨电车|Tram
地铁列车|Subway Train
高速列车|Bullet Train
蒸汽机车|Steam Locomotive
货运列车|Freight Train
摩托车|Motorcycle
咖啡骑士摩托|Café Racer
踏板摩托|Scooter
公路自行车|Road Bicycle
山地自行车|Mountain Bike
滑板|Skateboard
帆船|Sailboat
游艇|Yacht
快艇|Speedboat
集装箱船|Container Ship
潜艇|Submarine
战斗机|Fighter Jet
民航客机|Passenger Airliner
私人飞机|Private Jet
直升机|Helicopter
热气球|Hot Air Balloon
滑翔机|Glider
火箭|Rocket
航天飞机|Space Shuttle
行星探测车|Planetary Rover
飞行汽车|Flying Car
悬浮摩托|Hoverbike
机甲步行器|Mech Walker
水上飞机|Seaplane
装甲车|Armored Vehicle
消防车|Fire Truck
救护车|Ambulance
警车|Police Car
挖掘机|Excavator
起重机|Crane
拖拉机|Tractor
雪地摩托|Snowmobile
狗拉雪橇|Dog Sled`
  ),
  food_dishes: category(
    "世界美食", "World Dishes", "以全球知名度、传播热度与视觉表现力综合排序的代表性菜肴。", "Iconic dishes ranked by global recognition, reach, and visual appeal.",
    "呈现这道美食的关键食材、烹饪质感、摆盘、热气与地域餐桌环境。", "Show the dish's key ingredients, cooking textures, plating, steam, and regional dining context.", `
披萨|Pizza
寿司|Sushi
汉堡|Hamburger
拉面|Ramen
墨西哥玉米卷|Tacos
培根蛋面|Pasta Carbonara
牛排|Steak
炸鸡|Fried Chicken
咖喱|Curry
印度香饭|Biryani
越南河粉|Pho
泰式炒河粉|Pad Thai
饺子|Dumplings
北京烤鸭|Peking Duck
火锅|Hot Pot
广式点心|Dim Sum
麻婆豆腐|Mapo Tofu
小笼包|Xiaolongbao
西班牙海鲜饭|Paella
意式烩饭|Risotto
千层面|Lasagna
炸鱼薯条|Fish and Chips
烤肉串|Kebab
沙威玛|Shawarma
炸豆丸子|Falafel
鹰嘴豆泥|Hummus
希腊茄盒|Moussaka
韩式拌饭|Bibimbap
韩式烤肉|Korean Barbecue
韩式泡菜锅|Kimchi Stew
天妇罗|Tempura
日式烤鸡串|Yakitori
日式炸猪排|Tonkatsu
越南法棍|Bánh Mì
叻沙|Laksa
印尼炒饭|Nasi Goreng
沙嗲|Satay
冬阴功汤|Tom Yum
印度黄油鸡|Butter Chicken
印度薄饼|Dosa
波兰饺子|Pierogi
匈牙利炖牛肉|Goulash
维也纳炸肉排|Schnitzel
可颂|Croissant
法棍|Baguette
提拉米苏|Tiramisu
芝士蛋糕|Cheesecake
焦糖布蕾|Crème Brûlée
意式冰淇淋|Gelato
麻薯|Mochi`
  ),
  festivals: category(
    "节日庆典", "Festivals and Celebrations", "以公众参与度、全球知名度与视觉仪式感综合排序的节庆。", "Celebrations ranked by public participation, global recognition, and visual ceremony.",
    "展现这一节庆的时间、地域、服饰、装饰、群体活动与标志性仪式。", "Show the celebration's season, place, dress, decoration, collective activity, and signature rituals.", `
春节|Chinese New Year
圣诞节|Christmas
万圣节|Halloween
排灯节|Diwali
胡里节|Holi
开斋节|Eid al-Fitr
复活节|Easter
感恩节|Thanksgiving
里约狂欢节|Rio Carnival
慕尼黑啤酒节|Oktoberfest
亡灵节|Day of the Dead
日本花见|Hanami
七夕祭|Tanabata
祇园祭|Gion Matsuri
盂兰盆节|Obon
宋干节|Songkran
水灯节|Loy Krathong
中秋节|Mid-Autumn Festival
端午节|Dragon Boat Festival
元宵节|Lantern Festival
哈尔滨冰雪节|Harbin Ice Festival
火人节|Burning Man
科切拉音乐节|Coachella
格拉斯顿伯里音乐节|Glastonbury Festival
明日世界电子音乐节|Tomorrowland
新奥尔良狂欢节|Mardi Gras
威尼斯狂欢节|Venice Carnival
西红柿节|La Tomatina
奔牛节|Running of the Bulls
圣帕特里克节|St. Patrick's Day
法国国庆日|Bastille Day
诺丁山狂欢节|Notting Hill Carnival
太阳祭|Inti Raymi
阿尔伯克基热气球节|Albuquerque Balloon Fiesta
圣丹斯电影节|Sundance Film Festival
戛纳电影节|Cannes Film Festival
威尼斯电影节|Venice Film Festival
爱丁堡艺穗节|Edinburgh Festival Fringe
圣迭戈动漫展|San Diego Comic-Con
骄傲游行|Pride Parade
时代广场跨年夜|Times Square New Year's Eve
秋夕|Chuseok
诺鲁孜节|Nowruz
卫塞节|Vesak
大壶节|Kumbh Mela
普什卡骆驼节|Pushkar Camel Fair
天灯节|Yi Peng
保宁泥浆节|Boryeong Mud Festival
圣彼得堡白夜节|White Nights Festival
魁北克冬季狂欢节|Quebec Winter Carnival`
  ),
  mythology: category(
    "神话角色", "Mythological Figures", "跨主要神话体系、宗教叙事与民间传说的高辨识度角色。", "Recognizable figures across major mythologies, sacred narratives, and folklore.",
    "结合这一神话角色的身份、象征物、服饰、神力与原生文化语境创作原创形象。", "Combine the figure's identity, symbols, dress, powers, and source culture into an original depiction.", `
宙斯|Zeus
雅典娜|Athena
波塞冬|Poseidon
哈迪斯|Hades
阿佛洛狄忒|Aphrodite
阿波罗|Apollo
阿耳忒弥斯|Artemis
赫尔墨斯|Hermes
阿瑞斯|Ares
索尔|Thor
奥丁|Odin
洛基|Loki
芙蕾雅|Freyja
阿努比斯|Anubis
拉|Ra
伊西斯|Isis
奥西里斯|Osiris
荷鲁斯|Horus
孙悟空|Sun Wukong
哪吒|Nezha
二郎神|Erlang Shen
观音|Guanyin
嫦娥|Chang'e
女娲|Nüwa
伏羲|Fuxi
玉皇大帝|Jade Emperor
天照大神|Amaterasu
须佐之男|Susanoo
月读命|Tsukuyomi
稻荷神|Inari
湿婆|Shiva
毗湿奴|Vishnu
梵天|Brahma
迦梨|Kali
象头神|Ganesha
哈奴曼|Hanuman
黑天|Krishna
羽蛇神|Quetzalcoatl
库库尔坎|Kukulkan
火山女神佩蕾|Pele
毛伊|Maui
莫莉甘|The Morrígan
凯尔努诺斯|Cernunnos
芭芭雅嘎|Baba Yaga
吉尔伽美什|Gilgamesh
伊什塔尔|Ishtar
提亚马特|Tiamat
妈祖|Mazu
佩伦|Perun
雷鸟|Thunderbird`
  ),
  fantasy_creatures: category(
    "奇幻生物", "Fantasy Creatures", "跨古典神话、民间怪谈与现代类型文学的热门幻想生物。", "Popular fantasy creatures spanning classical mythology, folklore, and modern genre fiction.",
    "以这一生物的解剖结构、尺度、习性、材质与栖息环境设计原创形象。", "Design an original creature through its anatomy, scale, behavior, surface, and habitat.", `
龙|Dragon
凤凰|Phoenix
独角兽|Unicorn
美人鱼|Mermaid
吸血鬼|Vampire
狼人|Werewolf
丧尸|Zombie
幽灵|Ghost
仙子|Fairy
精灵|Elf
矮人|Dwarf
兽人|Orc
哥布林|Goblin
巨魔|Troll
巨人|Giant
半人马|Centaur
弥诺陶洛斯|Minotaur
狮鹫|Griffin
鹰马|Hippogriff
飞马|Pegasus
斯芬克斯|Sphinx
北海巨妖|Kraken
利维坦|Leviathan
九头蛇|Hydra
奇美拉|Chimera
蛇怪|Basilisk
独眼巨人|Cyclops
戈耳工|Gorgon
地狱犬刻耳柏洛斯|Cerberus
狐妖|Kitsune
狸猫妖|Tanuki
鬼|Oni
天狗|Tengu
雪女|Yuki-onna
麒麟|Qilin
貔貅|Pixiu
中国龙|Chinese Dragon
僵尸|Jiangshi
那伽|Naga
迦楼罗|Garuda
大鹏|Roc
魔像|Golem
精灵魔神|Djinn
女妖|Banshee
水马|Kelpie
海豹人|Selkie
天蛾人|Mothman
大脚怪|Bigfoot
卓柏卡布拉|Chupacabra
尼斯湖水怪|Loch Ness Monster`
  ),
  historical_civilizations: category(
    "古代文明", "Historical Civilizations", "以文化影响、遗迹辨识度与大众叙事热度综合排序的历史文明。", "Historical civilizations ranked by cultural influence, recognizable remains, and public interest.",
    "还原这一文明的时代、城市结构、建筑、服饰、器物与日常生活，避免混搭年代。", "Reconstruct the civilization's period, urban form, architecture, dress, objects, and daily life without anachronism.", `
古埃及|Ancient Egypt
古希腊|Ancient Greece
罗马帝国|Roman Empire
汉朝|Han China
唐朝|Tang China
宋朝|Song China
明朝|Ming China
印度河文明|Indus Valley Civilization
孔雀王朝|Maurya Empire
笈多王朝|Gupta Empire
莫卧儿帝国|Mughal Empire
美索不达米亚|Mesopotamia
苏美尔文明|Sumer
巴比伦文明|Babylon
亚述帝国|Assyria
波斯帝国|Persian Empire
拜占庭帝国|Byzantine Empire
奥斯曼帝国|Ottoman Empire
玛雅文明|Maya Civilization
阿兹特克文明|Aztec Civilization
印加文明|Inca Civilization
奥尔梅克文明|Olmec Civilization
高棉帝国|Khmer Empire
吴哥文明|Angkor Civilization
三佛齐帝国|Srivijaya Empire
满者伯夷帝国|Majapahit Empire
平安时代日本|Heian Japan
江户时代日本|Edo Japan
蒙古帝国|Mongol Empire
吐蕃帝国|Tibetan Empire
维京时代|Viking Age
凯尔特文明|Celtic Civilization
加洛林帝国|Carolingian Empire
神圣罗马帝国|Holy Roman Empire
文艺复兴意大利|Renaissance Italy
中世纪欧洲|Medieval Europe
马里帝国|Mali Empire
桑海帝国|Songhai Empire
古加纳帝国|Ghana Empire
库施王国|Kingdom of Kush
阿克苏姆王国|Kingdom of Aksum
大津巴布韦|Great Zimbabwe
贝宁王国|Kingdom of Benin
波利尼西亚文明|Polynesian Civilization
密西西比文化|Mississippian Culture
普韦布洛文化|Ancestral Puebloans
商朝|Shang China
周朝|Zhou China
腓尼基文明|Phoenicia
迦太基文明|Carthage`
  ),
  professions: category(
    "职业角色", "Professions", "具备清晰服装、工具、动作与工作环境的高频职业角色。", "Popular professions with clear clothing, tools, actions, and work environments.",
    "通过这一职业的服装、工具、工作动作、人物气质与真实环境塑造角色。", "Build the character through profession-specific clothing, tools, work actions, demeanor, and authentic environment.", `
宇航员|Astronaut
医生|Doctor
护士|Nurse
科学家|Scientist
工程师|Engineer
建筑师|Architect
艺术家|Artist
摄影师|Photographer
电影导演|Filmmaker
音乐家|Musician
厨师|Chef
面包师|Baker
农民|Farmer
渔民|Fisherman
消防员|Firefighter
警察|Police Officer
侦探|Detective
士兵|Soldier
飞行员|Pilot
空乘人员|Flight Attendant
列车长|Train Conductor
水手|Sailor
潜水员|Diver
考古学家|Archaeologist
古生物学家|Paleontologist
植物学家|Botanist
动物学家|Zoologist
天文学家|Astronomer
教师|Teacher
图书管理员|Librarian
作家|Writer
记者|Journalist
时装设计师|Fashion Designer
裁缝|Tailor
机械师|Mechanic
木匠|Carpenter
铁匠|Blacksmith
陶艺家|Potter
花艺师|Florist
咖啡师|Barista
调酒师|Bartender
舞者|Dancer
演员|Actor
运动员|Athlete
登山者|Mountaineer
探险家|Explorer
程序员|Programmer
游戏设计师|Game Designer
机器人技师|Robot Technician
街头小贩|Street Vendor`
  ),
  musical_instruments: category(
    "乐器", "Musical Instruments", "跨古典、流行与世界音乐的高辨识度演奏乐器。", "Recognizable instruments across classical, popular, and world music.",
    "表现这一乐器的结构、材质、演奏姿态、音响空间与文化场景。", "Show the instrument's construction, materials, playing posture, acoustic space, and cultural setting.", `
钢琴|Piano
木吉他|Acoustic Guitar
电吉他|Electric Guitar
小提琴|Violin
大提琴|Cello
低音提琴|Double Bass
竖琴|Harp
长笛|Flute
单簧管|Clarinet
双簧管|Oboe
巴松管|Bassoon
萨克斯管|Saxophone
小号|Trumpet
长号|Trombone
圆号|French Horn
大号|Tuba
架子鼓|Drum Kit
定音鼓|Timpani
木琴|Xylophone
马林巴|Marimba
颤音琴|Vibraphone
手风琴|Accordion
口琴|Harmonica
尤克里里|Ukulele
班卓琴|Banjo
曼陀林|Mandolin
西塔琴|Sitar
塔布拉鼓|Tabla
二胡|Erhu
古筝|Guzheng
琵琶|Pipa
笛子|Dizi
唢呐|Suona
三味线|Shamisen
日本筝|Koto
太鼓|Taiko
伽倻琴|Gayageum
乌德琴|Oud
卡农琴|Qanun
金贝鼓|Djembe
科拉琴|Kora
排箫|Pan Flute
风笛|Bagpipes
迪吉里杜管|Didgeridoo
钢鼓|Steelpan
合成器|Synthesizer
特雷门琴|Theremin
手碟|Handpan
拇指琴|Kalimba
唱盘|Turntables`
  ),
  space_objects: category(
    "宇宙天体", "Space Objects", "覆盖太阳系、恒星、星云、星系与极端天体的热门对象。", "Popular objects spanning the solar system, stars, nebulae, galaxies, and cosmic extremes.",
    "依据这一宇宙天体的真实尺度、色彩、结构和周围空间现象构建画面。", "Build the image from the object's real scale, color, structure, and surrounding space phenomena.", `
太阳|Sun
月球|Moon
地球|Earth
火星|Mars
木星|Jupiter
土星|Saturn
金星|Venus
水星|Mercury
天王星|Uranus
海王星|Neptune
冥王星|Pluto
谷神星|Ceres
阋神星|Eris
妊神星|Haumea
鸟神星|Makemake
木卫一|Io
木卫二|Europa
木卫三|Ganymede
木卫四|Callisto
土卫六|Titan
土卫二|Enceladus
海卫一|Triton
火卫一|Phobos
火卫二|Deimos
冥卫一|Charon
灶神星|Vesta
智神星|Pallas
哈雷彗星|Halley's Comet
海尔-波普彗星|Comet Hale-Bopp
新智彗星|Comet NEOWISE
小行星带|Asteroid Belt
柯伊伯带|Kuiper Belt
奥尔特云|Oort Cloud
银河系|Milky Way
仙女座星系|Andromeda Galaxy
猎户座星云|Orion Nebula
鹰状星云|Eagle Nebula
蟹状星云|Crab Nebula
船底座星云|Carina Nebula
创生之柱|Pillars of Creation
昴星团|Pleiades
天狼星|Sirius
参宿四|Betelgeuse
比邻星|Proxima Centauri
人马座A星|Sagittarius A*
M87黑洞|M87 Black Hole
超新星|Supernova
中子星|Neutron Star
脉冲星|Pulsar
类星体|Quasar`
  ),
  sci_fi_concepts: category(
    "科幻概念", "Science Fiction Concepts", "可直接驱动世界观、道具和环境设计的经典科幻母题。", "Classic science-fiction concepts that directly drive worldbuilding, props, and environment design.",
    "围绕这一科幻概念建立技术逻辑、尺度、使用方式、社会痕迹与视觉奇观。", "Build the concept through technological logic, scale, use, social traces, and visual spectacle.", `
太空殖民地|Space Colony
世代飞船|Generation Ship
行星改造|Terraforming
戴森球|Dyson Sphere
太空电梯|Space Elevator
轨道环|Orbital Ring
月球基地|Moon Base
火星城市|Mars City
小行星采矿|Asteroid Mining
低温休眠|Cryosleep
曲速引擎|Warp Drive
虫洞|Wormhole
时间机器|Time Machine
多元宇宙门户|Multiverse Portal
平行宇宙|Parallel Universe
人工重力|Artificial Gravity
有意识人工智能|Sentient AI
人形机器人|Humanoid Robot
仿生人伴侣|Android Companion
赛博格|Cyborg
脑机接口|Brain-computer Interface
全息影像|Hologram
增强现实|Augmented Reality
虚拟现实|Virtual Reality
数字孪生|Digital Twin
纳米技术|Nanotechnology
群体机器人|Swarm Robots
自我复制机器|Self-replicating Machines
量子计算机|Quantum Computer
核聚变反应堆|Fusion Reactor
反物质引擎|Antimatter Engine
零点能|Zero-point Energy
力场|Force Field
牵引光束|Tractor Beam
瞬间传送|Teleportation
物质复制器|Matter Replicator
隐形装置|Cloaking Device
外骨骼|Exoskeleton
动力装甲|Power Armor
机甲战服|Mech Suit
赛博城市|Cybernetic City
水下城市|Underwater City
漂浮城市|Floating City
生态巨构城|Arcology
末日地堡|Post-apocalyptic Bunker
外星首次接触|Alien First Contact
远古外星遗物|Ancient Alien Artifact
外星生态系统|Extraterrestrial Ecosystem
基因工程|Genetic Engineering
合成生命|Synthetic Life`
  ),
  emotions_atmospheres: category(
    "情绪氛围", "Emotions and Atmospheres", "适合控制叙事温度、人物状态与观众感受的高频情绪词。", "Popular mood terms for controlling narrative temperature, character state, and audience response.",
    "用光线、色彩、空间、天气、动作和细节共同传达这一情绪，不依赖文字标签。", "Convey this emotion through light, color, space, weather, action, and detail rather than text labels.", `
宁静|Serenity
喜悦|Joy
怀旧|Nostalgia
忧郁|Melancholy
孤独|Loneliness
惊奇|Wonder
敬畏|Awe
浪漫|Romance
温柔|Tenderness
希望|Hope
胜利感|Triumph
自由|Freedom
兴奋|Excitement
好奇|Curiosity
神秘|Mystery
悬疑|Suspense
恐惧预感|Dread
恐怖|Horror
焦虑|Anxiety
混乱|Chaos
愤怒|Anger
悲伤|Grief
绝望|Despair
隔绝|Isolation
疏离|Alienation
梦幻|Dreaminess
奇想|Whimsy
玩心|Playfulness
纯真|Innocence
温暖|Warmth
舒适|Coziness
亲密|Intimacy
肃穆|Solemnity
灵性|Spirituality
崇敬|Reverence
宏伟|Grandeur
优雅|Elegance
奢华|Luxury
颓靡|Decadence
反叛|Rebellion
紧迫|Urgency
张力|Tension
暴风雨前的平静|Calm Before the Storm
苦乐参半|Bittersweetness
超现实不安|Surreal Unease
阈限感|Liminality
狂喜|Euphoria
宣泄|Catharsis
韧性|Resilience
静观|Quiet Contemplation`
  ),
  props_objects: category(
    "道具与物件", "Props and Objects", "适合快速建立叙事线索、时代感与画面焦点的高频视觉物件。", "High-signal visual objects for establishing narrative clues, period, and a focal point.",
    "把这一物件放进明确的空间、光线、尺度和使用痕迹中，让它成为画面的叙事锚点。", "Place the object in a specific space, light, scale, and evidence of use so it becomes the narrative anchor of the image.", `
红色雨伞|Red Umbrella
复古行李箱|Vintage Suitcase
打字机|Typewriter
怀表|Pocket Watch
黑胶唱片|Vinyl Record
留声机|Gramophone
胶卷相机|Film Camera
台灯|Desk Lamp
油灯|Oil Lamp
蜡烛|Candle
火柴盒|Matchbox
陶瓷花瓶|Ceramic Vase
茶壶|Teapot
咖啡杯|Coffee Cup
玻璃瓶|Glass Bottle
旧书|Old Book
古地图|Antique Map
指南针|Compass
望远镜|Telescope
纸飞机|Paper Airplane
风筝|Kite
纸灯笼|Paper Lantern
面具|Mask
王冠|Crown
钥匙|Key
挂锁|Padlock
剪刀|Scissors
羽毛笔|Quill Pen
墨水瓶|Ink Bottle
信封|Envelope
邮票|Postage Stamp
墙上时钟|Wall Clock
木制棋盘|Wooden Chessboard
扑克牌|Playing Cards
玻璃弹珠|Glass Marbles
木积木|Wooden Blocks
泰迪熊|Teddy Bear
风铃|Wind Chime
装饰镜|Ornate Mirror
相框|Picture Frame
手提灯|Hand Lantern
陶土雕像|Clay Figurine
铜制烛台|Brass Candlestick
古董收音机|Antique Radio
缝纫机|Sewing Machine
工具箱|Toolbox
油漆刷|Paintbrush
调色盘|Painter's Palette
折叠扇|Folding Fan
绳索卷|Coil of Rope`
  ),
  weather_seasons: category(
    "天气与季节", "Weather and Seasons", "用季节、天空和天气变化快速改变画面色温、能见度与叙事节奏。", "Seasonal, sky, and weather cues that quickly shift color temperature, visibility, and narrative pace.",
    "用云层、空气质感、地面反光、服装反应和光线方向呈现这一天气或季节。", "Express the weather or season through cloud layers, air texture, ground reflections, wardrobe response, and light direction.", `
晴天|Clear Sky
阴天|Overcast Sky
蓝调时刻|Blue Hour
黄金时刻|Golden Hour
黎明|Dawn
黄昏|Twilight
午夜|Midnight
日蚀|Solar Eclipse
月夜|Moonlit Night
满月|Full Moon
新月|New Moon
雷暴|Thunderstorm
暴雨|Downpour
毛毛雨|Drizzle
大雪|Heavy Snow
暴风雪|Blizzard
雨夹雪|Sleet
冰雹|Hailstorm
浓雾|Fog
薄雾|Mist
霜冻|Frost
结冰|Freeze
热浪|Heatwave
干旱|Drought
沙尘暴|Sandstorm
飓风|Hurricane
龙卷风|Tornado
极光|Aurora
彩虹|Rainbow
双彩虹|Double Rainbow
云海|Sea of Clouds
积雨云|Cumulonimbus
卷云|Cirrus Clouds
低云|Low Clouds
烟霾|Haze
潮湿空气|Humid Air
晨雾|Morning Fog
海雾|Sea Fog
雨后清新|Fresh After Rain
雪后寂静|Post-snow Silence
春雨|Spring Rain
夏日暴雨|Summer Rain
秋日薄雾|Autumn Mist
冬日霜冻|Winter Frost
樱花季|Cherry Blossom Season
梅雨季|Rainy Season
盛夏|Midsummer
枫叶季|Autumn Foliage
午夜太阳|Midnight Sun
极夜|Polar Night`
  )
};
