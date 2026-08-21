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

export const catalog = {
  artists: category(
    "艺术家", "Artists", "跨时代最具公众认知度与视觉影响力的艺术家。", "Highly recognized and visually influential artists across eras.",
    "提炼这位艺术家最具辨识度的媒介、色彩、笔触、造型与时代语境，转化为原创画面灵感。", "Extract the artist's most recognizable medium, color logic, mark-making, forms, and historical context as inspiration for an original image.", `
文森特·梵高|Vincent van Gogh
巴勃罗·毕加索|Pablo Picasso
列奥纳多·达·芬奇|Leonardo da Vinci
克劳德·莫奈|Claude Monet
萨尔瓦多·达利|Salvador Dalí
弗里达·卡罗|Frida Kahlo
安迪·沃霍尔|Andy Warhol
米开朗基罗|Michelangelo
伦勃朗|Rembrandt
葛饰北斋|Katsushika Hokusai
约翰内斯·维米尔|Johannes Vermeer
爱德华·蒙克|Edvard Munch
古斯塔夫·克里姆特|Gustav Klimt
亨利·马蒂斯|Henri Matisse
雷内·马格利特|René Magritte
杰克逊·波洛克|Jackson Pollock
班克斯|Banksy
草间弥生|Yayoi Kusama
乔治亚·欧姬芙|Georgia O'Keeffe
让-米歇尔·巴斯奎特|Jean-Michel Basquiat
爱德华·霍普|Edward Hopper
保罗·塞尚|Paul Cézanne
埃德加·德加|Edgar Degas
拉斐尔|Raphael
卡拉瓦乔|Caravaggio
彼得·保罗·鲁本斯|Peter Paul Rubens
保罗·高更|Paul Gauguin
琼·米罗|Joan Miró
瓦西里·康定斯基|Wassily Kandinsky
马塞尔·杜尚|Marcel Duchamp
奥古斯特·罗丹|Auguste Rodin
基思·哈林|Keith Haring
大卫·霍克尼|David Hockney
艾未未|Ai Weiwei
村上隆|Takashi Murakami
杰夫·昆斯|Jeff Koons
路易丝·布尔乔亚|Louise Bourgeois
希尔玛·阿夫·克林特|Hilma af Klint
马克·罗斯科|Mark Rothko
彼埃·蒙德里安|Piet Mondrian
埃贡·席勒|Egon Schiele
阿尔丰斯·穆夏|Alphonse Mucha
诺曼·洛克威尔|Norman Rockwell
阿尔布雷希特·丢勒|Albrecht Dürer
乔托|Giotto
弗朗西斯科·戈雅|Francisco Goya
雅克-路易·大卫|Jacques-Louis David
约翰·辛格·萨金特|John Singer Sargent
常玉|Sanyu
齐白石|Qi Baishi`
  ),
  mangaka: category(
    "漫画家", "Manga Artists", "以全球传播、销量与角色影响力综合排序的漫画创作者。", "Manga creators ranked by global reach, sales, and character impact.",
    "提炼这位漫画家的线条节奏、分镜语言、角色轮廓与情绪张力，用于原创漫画视觉。", "Extract the creator's line rhythm, panel language, character silhouettes, and emotional tension for an original comics-inspired image.", `
鸟山明|Akira Toriyama
尾田荣一郎|Eiichiro Oda
宫崎骏|Hayao Miyazaki
手冢治虫|Osamu Tezuka
岸本齐史|Masashi Kishimoto
藤本树|Tatsuki Fujimoto
荒木飞吕彦|Hirohiko Araki
井上雄彦|Takehiko Inoue
谏山创|Hajime Isayama
吾峠呼世晴|Koyoharu Gotouge
青山刚昌|Gosho Aoyama
浦泽直树|Naoki Urasawa
富坚义博|Yoshihiro Togashi
三浦建太郎|Kentaro Miura
大友克洋|Katsuhiro Otomo
高桥留美子|Rumiko Takahashi
矢泽爱|Ai Yazawa
武内直子|Naoko Takeuchi
CLAMP|CLAMP
久保带人|Tite Kubo
芥见下下|Gege Akutami
小畑健|Takeshi Obata
大场鸫|Tsugumi Ohba
原泰久|Yasuhisa Hara
森薰|Kaoru Mori
松本大洋|Taiyo Matsumoto
浅野一二〇|Inio Asano
臼井仪人|Yoshito Usui
北条司|Tsukasa Hojo
车田正美|Masami Kurumada
藤子·F·不二雄|Fujiko F. Fujio
永井豪|Go Nagai
水木茂|Shigeru Mizuki
伊藤润二|Junji Ito
安达充|Mitsuru Adachi
幸村诚|Makoto Yukimura
村田雄介|Yusuke Murata
ONE|ONE
奥浩哉|Hiroya Oku
真岛浩|Hiro Mashima
和月伸宏|Nobuhiro Watsuki
许斐刚|Takeshi Konomi
高桥和希|Kazuki Takahashi
赤坂明|Aka Akasaka
石田翠|Sui Ishida
远藤达哉|Tatsuya Endo
池田理代子|Riyoko Ikeda
萩尾望都|Moto Hagio
竹宫惠子|Keiko Takemiya
白土三平|Sanpei Shirato`
  ),
  films: category(
    "电影", "Films", "兼顾全球票房、口碑榜单与长期流行文化影响的电影。", "Films balancing global box office, audience charts, and lasting cultural impact.",
    "以这部电影的世界观、情绪、摄影语言和标志性美术为灵感，构建不复刻具体镜头的原创场景。", "Use the film's world, mood, cinematography, and iconic production design as inspiration for an original scene without recreating a specific shot.", `
肖申克的救赎|The Shawshank Redemption
教父|The Godfather
蝙蝠侠：黑暗骑士|The Dark Knight
泰坦尼克号|Titanic
阿凡达|Avatar
星球大战|Star Wars
指环王：王者归来|The Lord of the Rings: The Return of the King
低俗小说|Pulp Fiction
盗梦空间|Inception
黑客帝国|The Matrix
阿甘正传|Forrest Gump
辛德勒的名单|Schindler's List
侏罗纪公园|Jurassic Park
狮子王|The Lion King
复仇者联盟：终局之战|Avengers: Endgame
星际穿越|Interstellar
角斗士|Gladiator
沉默的羔羊|The Silence of the Lambs
搏击俱乐部|Fight Club
好家伙|Goodfellas
千与千寻|Spirited Away
寄生虫|Parasite
七武士|Seven Samurai
回到未来|Back to the Future
异形|Alien
终结者2：审判日|Terminator 2: Judgment Day
大白鲨|Jaws
E.T.外星人|E.T. the Extra-Terrestrial
夺宝奇兵|Raiders of the Lost Ark
银翼杀手|Blade Runner
这个杀手不太冷|Léon: The Professional
楚门的世界|The Truman Show
机器人总动员|WALL-E
飞屋环游记|Up
疯狂的麦克斯：狂暴之路|Mad Max: Fury Road
无间道|Infernal Affairs
卧虎藏龙|Crouching Tiger, Hidden Dragon
重庆森林|Chungking Express
花样年华|In the Mood for Love
霸王别姬|Farewell My Concubine
让子弹飞|Let the Bullets Fly
哪吒之魔童降世|Ne Zha
奥本海默|Oppenheimer
芭比|Barbie
沙丘2|Dune: Part Two
壮志凌云：独行侠|Top Gun: Maverick
瞬息全宇宙|Everything Everywhere All at Once
爱乐之城|La La Land
天使爱美丽|Amélie
天堂电影院|Cinema Paradiso`
  ),
  games: category(
    "游戏", "Games", "结合活跃玩家、销量、直播热度与历史影响力的电子游戏。", "Video games ranked by active players, sales, streaming attention, and historical impact.",
    "借鉴这款游戏的世界构建、关卡气质、交互视觉与材质语言，生成具有原创角色和场景的画面。", "Draw from the game's worldbuilding, level atmosphere, interaction visuals, and material language to create an image with original characters and environments.", `
我的世界|Minecraft
堡垒之夜|Fortnite
侠盗猎车手V|Grand Theft Auto V
英雄联盟|League of Legends
反恐精英2|Counter-Strike 2
绝地求生|PUBG: Battlegrounds
原神|Genshin Impact
塞尔达传说：旷野之息|The Legend of Zelda: Breath of the Wild
艾尔登法环|Elden Ring
巫师3：狂猎|The Witcher 3: Wild Hunt
荒野大镖客：救赎2|Red Dead Redemption 2
赛博朋克2077|Cyberpunk 2077
Dota 2|Dota 2
使命召唤：战区|Call of Duty: Warzone
Roblox|Roblox
宝可梦 红/蓝|Pokémon Red and Blue
超级马力欧兄弟|Super Mario Bros.
俄罗斯方块|Tetris
马里奥赛车8 豪华版|Mario Kart 8 Deluxe
集合啦！动物森友会|Animal Crossing: New Horizons
最终幻想VII|Final Fantasy VII
上古卷轴V：天际|The Elder Scrolls V: Skyrim
黑暗之魂|Dark Souls
战神|God of War
最后生还者|The Last of Us
传送门2|Portal 2
半衰期2|Half-Life 2
守望先锋|Overwatch
无畏契约|Valorant
Apex英雄|Apex Legends
火箭联盟|Rocket League
星露谷物语|Stardew Valley
泰拉瑞亚|Terraria
魔兽世界|World of Warcraft
暗黑破坏神II|Diablo II
星际争霸|StarCraft
文明VI|Sid Meier's Civilization VI
模拟人生4|The Sims 4
寂静岭2|Silent Hill 2
生化危机4|Resident Evil 4
合金装备3：食蛇者|Metal Gear Solid 3: Snake Eater
怪物猎人：世界|Monster Hunter: World
黑神话：悟空|Black Myth: Wukong
博德之门3|Baldur's Gate 3
霍格沃茨之遗|Hogwarts Legacy
双人成行|It Takes Two
糖豆人|Fall Guys
Among Us|Among Us
Palworld|Palworld
漫威争锋|Marvel Rivals`
  ),
  tv_series: category(
    "美剧", "US TV Series", "兼顾收视、流媒体热度、口碑与长尾影响的美国剧集。", "US series balancing viewership, streaming attention, acclaim, and lasting impact.",
    "以这部剧集的时代背景、人物关系、场景调度与整体色调为灵感，创作新的叙事画面。", "Use the series' period, character dynamics, blocking, and overall color mood as inspiration for a new narrative image.", `
权力的游戏|Game of Thrones
绝命毒师|Breaking Bad
老友记|Friends
怪奇物语|Stranger Things
黑道家族|The Sopranos
火线|The Wire
办公室|The Office
继承之战|Succession
最后生还者|The Last of Us
白莲花度假村|The White Lotus
行尸走肉|The Walking Dead
生活大爆炸|The Big Bang Theory
摩登家庭|Modern Family
广告狂人|Mad Men
真探|True Detective
熊家餐馆|The Bear
风骚律师|Better Call Saul
西部世界|Westworld
纸牌屋|House of Cards
黑镜|Black Mirror
迷失|Lost
越狱|Prison Break
国土安全|Homeland
冰血暴|Fargo
大小谎言|Big Little Lies
使女的故事|The Handmaid's Tale
黄石|Yellowstone
亢奋|Euphoria
星期三|Wednesday
龙之家族|House of the Dragon
幕府将军|Shōgun
辐射|Fallout
人生切割术|Severance
谜探休格|Sugar
早间新闻|The Morning Show
无耻之徒|Shameless
女子监狱|Orange Is the New Black
实习医生格蕾|Grey's Anatomy
豪斯医生|House
犯罪心理|Criminal Minds
海军罪案调查处|NCIS
法律与秩序：特殊受害者|Law & Order: Special Victims Unit
24小时|24
双峰|Twin Peaks
六尺之下|Six Feet Under
兄弟连|Band of Brothers
切尔诺贝利|Chernobyl
白宫风云|The West Wing
抑制热情|Curb Your Enthusiasm
马男波杰克|BoJack Horseman`
  ),
  manga: category(
    "日本漫画", "Japanese Manga", "综合累计销量、国际传播与当代讨论度的日本漫画作品。", "Japanese manga ranked by lifetime sales, global reach, and current conversation.",
    "提取这部漫画的核心世界观、人物动势、黑白节奏与情绪母题，形成原创漫画画面。", "Extract the manga's core world, character motion, black-and-white rhythm, and emotional themes into an original comics image.", `
海贼王|One Piece
龙珠|Dragon Ball
火影忍者|Naruto
鬼灭之刃|Demon Slayer: Kimetsu no Yaiba
进击的巨人|Attack on Titan
咒术回战|Jujutsu Kaisen
名侦探柯南|Detective Conan
灌篮高手|Slam Dunk
JOJO的奇妙冒险|JoJo's Bizarre Adventure
死神|Bleach
猎人|Hunter × Hunter
钢之炼金术师|Fullmetal Alchemist
死亡笔记|Death Note
剑风传奇|Berserk
链锯人|Chainsaw Man
间谍过家家|Spy × Family
我的英雄学院|My Hero Academia
一拳超人|One-Punch Man
东京喰种|Tokyo Ghoul
排球少年|Haikyu!!
浪客行|Vagabond
王者天下|Kingdom
阿基拉|Akira
美少女战士|Sailor Moon
犬夜叉|Inuyasha
乱马½|Ranma ½
幽游白书|YuYu Hakusho
足球小将|Captain Tsubasa
圣斗士星矢|Saint Seiya
北斗神拳|Fist of the North Star
哆啦A梦|Doraemon
蜡笔小新|Crayon Shin-chan
乌龙派出所|KochiKame
蓝色监狱|Blue Lock
葬送的芙莉莲|Frieren: Beyond Journey's End
药屋少女的呢喃|The Apothecary Diaries
辉夜大小姐想让我告白|Kaguya-sama: Love Is War
孤独摇滚！|Bocchi the Rock!
NANA|Nana
水果篮子|Fruits Basket
玻璃假面|Glass Mask
凡尔赛玫瑰|The Rose of Versailles
寄生兽|Parasyte
20世纪少年|20th Century Boys
怪物|Monster
浪客剑心|Rurouni Kenshin
食戟之灵|Food Wars!: Shokugeki no Soma
七大罪|The Seven Deadly Sins
妖精的尾巴|Fairy Tail
蓝色巨星|Blue Giant`
  ),
  architects: category(
    "建筑师", "Architects", "按建成作品辨识度、专业影响与公众传播综合排序的建筑师。", "Architects ranked by built-work recognition, professional impact, and public reach.",
    "提炼这位建筑师的空间秩序、结构逻辑、材料关系与光影策略，生成原创建筑概念。", "Extract the architect's spatial order, structural logic, material relationships, and light strategy into an original architectural concept.", `
安东尼·高迪|Antoni Gaudí
弗兰克·劳埃德·赖特|Frank Lloyd Wright
勒·柯布西耶|Le Corbusier
扎哈·哈迪德|Zaha Hadid
路德维希·密斯·凡·德·罗|Ludwig Mies van der Rohe
贝聿铭|I. M. Pei
弗兰克·盖里|Frank Gehry
诺曼·福斯特|Norman Foster
安藤忠雄|Tadao Ando
奥斯卡·尼迈耶|Oscar Niemeyer
伦佐·皮亚诺|Renzo Piano
隈研吾|Kengo Kuma
妹岛和世|Kazuyo Sejima
西泽立卫|Ryue Nishizawa
雷姆·库哈斯|Rem Koolhaas
路易·康|Louis Kahn
阿尔瓦·阿尔托|Alvar Aalto
圣地亚哥·卡拉特拉瓦|Santiago Calatrava
理查德·罗杰斯|Richard Rogers
菲利普·约翰逊|Philip Johnson
丹尼尔·里伯斯金|Daniel Libeskind
让·努维尔|Jean Nouvel
彼得·卒姆托|Peter Zumthor
赫尔佐格与德梅隆|Herzog & de Meuron
汤姆·梅恩|Thom Mayne
坂茂|Shigeru Ban
伊东丰雄|Toyo Ito
王澍|Wang Shu
马岩松|Ma Yansong
柳亦春|Liu Yichun
大卫·奇普菲尔德|David Chipperfield
比亚克·英格尔斯|Bjarke Ingels
藤本壮介|Sou Fujimoto
托马斯·赫斯维克|Thomas Heatherwick
路易斯·巴拉甘|Luis Barragán
卡洛·斯卡帕|Carlo Scarpa
埃罗·沙里宁|Eero Saarinen
约恩·乌松|Jørn Utzon
丹下健三|Kenzo Tange
黑川纪章|Kisho Kurokawa
矶崎新|Arata Isozaki
保罗·鲁道夫|Paul Rudolph
罗伯特·文丘里|Robert Venturi
丹尼斯·斯科特·布朗|Denise Scott Brown
查尔斯·雷尼·麦金托什|Charles Rennie Mackintosh
巴克敏斯特·富勒|Buckminster Fuller
彼得·埃森曼|Peter Eisenman
亚历杭德罗·阿拉维纳|Alejandro Aravena
迪埃贝多·弗朗西斯·凯雷|Diébédo Francis Kéré
林璎|Maya Lin`
  ),
  paintings: category(
    "世界名画", "Famous Paintings", "按全球认知、博物馆传播与艺术史影响综合排序的经典绘画。", "Classic paintings ranked by global recognition, museum reach, and art-historical impact.",
    "以这幅名画的构图、色彩关系、光线组织与情绪记忆为切入点，重新创作而不复制原作。", "Use the painting's composition, color relationships, light structure, and emotional memory as a starting point for an original reinterpretation rather than a copy.", `
蒙娜丽莎|Mona Lisa
星月夜|The Starry Night
最后的晚餐|The Last Supper
呐喊|The Scream
戴珍珠耳环的少女|Girl with a Pearl Earring
创造亚当|The Creation of Adam
吻|The Kiss
格尔尼卡|Guernica
维纳斯的诞生|The Birth of Venus
记忆的永恒|The Persistence of Memory
夜巡|The Night Watch
自由引导人民|Liberty Leading the People
美国哥特式|American Gothic
大碗岛的星期日下午|A Sunday Afternoon on the Island of La Grande Jatte
宫娥|Las Meninas
睡莲|Water Lilies
日出·印象|Impression, Sunrise
亚维农少女|Les Demoiselles d'Avignon
雅典学院|The School of Athens
阿尔诺芬尼夫妇像|The Arnolfini Portrait
秋千|The Swing
拾穗者|The Gleaners
拿破仑一世加冕大典|The Coronation of Napoleon
1808年5月3日|The Third of May 1808
霍拉斯兄弟之誓|Oath of the Horatii
萨图尔努斯吞食其子|Saturn Devouring His Son
沉睡的吉普赛人|The Sleeping Gypsy
夜游者|Nighthawks
惠斯勒的母亲|Whistler's Mother
撑阳伞的女人|Woman with a Parasol
煎饼磨坊的舞会|Dance at Le Moulin de la Galette
草地上的午餐|The Luncheon on the Grass
奥林匹亚|Olympia
大宫女|Grande Odalisque
马拉之死|The Death of Marat
泉|The Source
向日葵|Sunflowers
鸢尾花|Irises
红磨坊的舞会|At the Moulin Rouge
两位弗里达|The Two Fridas
三位音乐家|Three Musicians
百老汇爵士乐|Broadway Boogie Woogie
构图八号|Composition VIII
黑色正方形|Black Square
雾海上的旅人|Wanderer above the Sea of Fog
奥菲莉娅|Ophelia
雨、蒸汽和速度|Rain, Steam and Speed
富岳三十六景·神奈川冲浪里|The Great Wave off Kanagawa
清明上河图|Along the River During the Qingming Festival
千里江山图|A Thousand Li of Rivers and Mountains`
  ),
  novels: category(
    "小说", "Novels", "综合全球阅读量、改编影响与文学史地位的小说。", "Novels ranked by global readership, adaptation impact, and literary significance.",
    "以这部小说的核心冲突、时代氛围、象征意象与人物关系为灵感，构建原创叙事场景。", "Use the novel's central conflict, period atmosphere, symbolic imagery, and character relationships as inspiration for an original narrative scene.", `
哈利·波特与魔法石|Harry Potter and the Philosopher's Stone
魔戒|The Lord of the Rings
小王子|The Little Prince
堂吉诃德|Don Quixote
双城记|A Tale of Two Cities
百年孤独|One Hundred Years of Solitude
1984|Nineteen Eighty-Four
傲慢与偏见|Pride and Prejudice
了不起的盖茨比|The Great Gatsby
杀死一只知更鸟|To Kill a Mockingbird
简·爱|Jane Eyre
呼啸山庄|Wuthering Heights
悲惨世界|Les Misérables
战争与和平|War and Peace
罪与罚|Crime and Punishment
安娜·卡列尼娜|Anna Karenina
追忆似水年华|In Search of Lost Time
尤利西斯|Ulysses
麦田里的守望者|The Catcher in the Rye
动物农场|Animal Farm
美丽新世界|Brave New World
沙丘|Dune
银河系漫游指南|The Hitchhiker's Guide to the Galaxy
基地|Foundation
三体|The Three-Body Problem
挪威的森林|Norwegian Wood
海边的卡夫卡|Kafka on the Shore
雪国|Snow Country
源氏物语|The Tale of Genji
红楼梦|Dream of the Red Chamber
西游记|Journey to the West
水浒传|Water Margin
三国演义|Romance of the Three Kingdoms
活着|To Live
围城|Fortress Besieged
白鲸|Moby-Dick
老人与海|The Old Man and the Sea
太阳照常升起|The Sun Also Rises
愤怒的葡萄|The Grapes of Wrath
洛丽塔|Lolita
局外人|The Stranger
鼠疫|The Plague
变形记|The Metamorphosis
审判|The Trial
不能承受的生命之轻|The Unbearable Lightness of Being
我的名字叫红|My Name Is Red
风之影|The Shadow of the Wind
使女的故事|The Handmaid's Tale
饥饿游戏|The Hunger Games
达·芬奇密码|The Da Vinci Code`
  ),
  ai_art_styles: category(
    "AI 作图艺术风格", "AI Art Styles", "高频、可辨识且适合直接组合进提示词的视觉风格。", "Popular, recognizable visual styles ready to combine in image prompts.",
    "采用这一视觉风格的材质、色彩、边缘、细节密度与光照规则，同时保持主体原创。", "Apply this visual style's material, color, edge, detail-density, and lighting rules while keeping the subject original.", `
电影感摄影|Cinematic Photography
吉卜力式温暖动画|Warm Hand-Painted Anime
赛博朋克霓虹|Cyberpunk Neon
水彩插画|Watercolor Illustration
油画厚涂|Impasto Oil Painting
日系动漫|Japanese Anime
三维卡通渲染|3D Cartoon Render
超现实主义|Surrealism
极简主义|Minimalism
新艺术运动|Art Nouveau
装饰艺术|Art Deco
蒸汽朋克|Steampunk
复古未来主义|Retro-Futurism
像素艺术|Pixel Art
低多边形|Low Poly
等距插画|Isometric Illustration
黏土定格|Claymation
纸艺剪贴|Papercut Collage
丝网印刷|Screen Print
木刻版画|Woodcut Print
浮世绘|Ukiyo-e
中国工笔画|Chinese Gongbi Painting
水墨写意|Chinese Ink Wash
敦煌壁画|Dunhuang Mural
波斯细密画|Persian Miniature
拜占庭马赛克|Byzantine Mosaic
哥特式浪漫|Gothic Romanticism
黑暗奇幻|Dark Fantasy
高端时尚编辑|High-Fashion Editorial
复古胶片|Vintage Film
宝丽来快照|Polaroid Snapshot
蓝晒法|Cyanotype
红外摄影|Infrared Photography
移轴摄影|Tilt-Shift Photography
微缩景观|Miniature Diorama
生物朋克|Biopunk
太阳朋克|Solarpunk
怪核|Weirdcore
梦核|Dreamcore
迷幻艺术|Psychedelic Art
孟菲斯设计|Memphis Design
包豪斯|Bauhaus
粗野主义平面设计|Brutalist Graphic Design
瑞士国际主义|Swiss International Style
编辑式拼贴|Editorial Collage
玻璃与铬未来感|Glass and Chrome Futurism
陶瓷釉面雕塑|Glazed Ceramic Sculpture
刺绣纤维艺术|Embroidered Fiber Art
全息虹彩|Holographic Iridescence
科学博物绘图|Scientific Natural History Illustration`
  ),
  compositions: category(
    "构图和场景", "Compositions & Scenes", "可直接作为画面骨架的经典构图、机位与场景模板。", "Classic compositions, camera positions, and scene templates usable as image frameworks.",
    "使用这一构图或场景骨架，明确主体位置、视线引导、前中后景与光线方向。", "Use this composition or scene framework with explicit subject placement, eye-line guidance, depth layers, and light direction.", `
三分法构图|Rule of Thirds
黄金分割构图|Golden Ratio Composition
中心对称构图|Centered Symmetry
动态对角线|Dynamic Diagonal
引导线构图|Leading Lines
框中框|Frame within a Frame
三角形构图|Triangular Composition
S形曲线构图|S-Curve Composition
放射式构图|Radial Composition
重复图案构图|Pattern Repetition
负空间构图|Negative Space
满幅构图|Fill-the-Frame Composition
前景遮挡|Foreground Occlusion
层叠景深|Layered Depth
深焦构图|Deep Focus Composition
浅景深特写|Shallow Depth-of-Field Close-Up
鸟瞰全景|Bird's-Eye Panorama
虫视仰拍|Worm's-Eye View
荷兰式倾斜镜头|Dutch Angle
过肩镜头|Over-the-Shoulder Shot
双人对峙|Two-Person Standoff
孤独人物远景|Lone Figure in Wide Shot
人群中的主体|Subject within a Crowd
门廊中的剪影|Silhouette in a Doorway
窗边侧影|Profile by a Window
镜面倒影|Mirror Reflection
水面倒影|Water Reflection
长廊消失点|Corridor Vanishing Point
楼梯螺旋|Spiral Staircase
屋顶边缘|Rooftop Edge
雨夜街角|Rainy Night Corner
清晨厨房|Early-Morning Kitchen
深夜便利店|Late-Night Convenience Store
空旷车站|Empty Train Station
拥挤地铁|Crowded Subway
荒废剧院|Abandoned Theater
博物馆展厅|Museum Gallery
温室植物园|Botanical Greenhouse
雾中森林小径|Foggy Forest Path
沙漠公路|Desert Highway
雪原木屋|Cabin in a Snowfield
悬崖观景台|Clifftop Overlook
海边篝火|Seaside Bonfire
山谷中的村庄|Village in a Valley
未来城市峡谷|Futuristic Urban Canyon
古代市集|Ancient Marketplace
太空舱舷窗|Spacecraft Porthole
水下遗迹|Underwater Ruins
巨物前的小人物|Tiny Figure before a Colossus
暴风眼中的宁静|Calm within the Storm Eye`
  ),
  iconic_scenes: category(
    "经典画面", "Iconic Visual Moments", "来自电影史、摄影史与公共视觉记忆的高辨识度画面母题。", "Highly recognizable visual motifs from film, photography, and shared visual memory.",
    "借用这一经典画面的空间关系与情绪张力，替换人物、时代与环境，创作新的视觉叙事。", "Borrow the iconic moment's spatial relationship and emotional tension, then replace the people, era, and environment to create a new visual narrative.", `
月下自行车剪影|Bicycle Silhouette across the Moon
船头张开双臂|Arms Outstretched at a Ship's Bow
雨中路灯独舞|Dancing beneath a Streetlamp in Rain
恐龙首次现身|First Reveal of a Dinosaur
子弹时间后仰|Bullet-Time Backbend
沙漠中的双日落|Twin Sunset over a Desert
越过直升机的冲浪者|Surfer beneath Helicopters
向日葵花田相拥|Embrace in a Sunflower Field
台阶上的胜利者|Victor atop Monumental Steps
雾中机场告别|Airport Farewell in Fog
霓虹雨夜独白|Neon Rain Monologue
海滩上的自由女神残骸|Ruined Statue on a Beach
走廊中的双胞胎|Twins in a Hotel Corridor
浴室帘后的剪影|Silhouette behind a Shower Curtain
餐桌上的最后聚会|Final Gathering around a Table
西部片正午对决|High-Noon Western Duel
列车驶入雪夜|Train Arriving in a Snowy Night
火车顶上的追逐|Chase atop a Moving Train
摩天楼边缘午餐|Lunch on a Skyscraper Beam
时代广场胜利之吻|Victory Kiss in Times Square
水手凝望地平线|Sailor Watching the Horizon
月球上的第一步|First Step on the Moon
升旗的剪影群像|Group Raising a Flag
孩子放飞红色气球|Child Releasing a Red Balloon
空中飘落的红伞|Single Red Umbrella Falling
林间漂浮的光点|Floating Lights in a Forest
湖面升起的雾中城堡|Castle Rising above a Misty Lake
巨兽穿越城市天际线|Colossal Creature Crossing a Skyline
飞船掠过巨型行星|Spacecraft before a Giant Planet
宇航员漂浮在虚空|Astronaut Drifting in the Void
机器人触碰花朵|Robot Touching a Flower
孩子与巨兽对视|Child Facing a Gentle Giant
侠客立于竹林|Lone Swordsman in a Bamboo Forest
武士立于芦苇风中|Samurai in Windblown Reeds
红衣人穿过灰色人群|Red Figure Crossing a Gray Crowd
小丑站在燃烧城市前|Jester before a Burning City
侦探站在百叶窗光影中|Detective in Venetian-Blind Light
歌手站在唯一聚光灯下|Singer under a Single Spotlight
情侣隔着玻璃相望|Lovers Separated by Glass
陌生人在站台错过|Strangers Missing Each Other on a Platform
老人独坐海边长椅|Elderly Figure on a Seaside Bench
女孩回头看向烟火|Girl Turning toward Fireworks
雨伞海中的一把黄伞|One Yellow Umbrella in a Sea of Black
白马穿过晨雾|White Horse Crossing Morning Mist
鲸鱼跃过小船|Whale Leaping over a Small Boat
瀑布后的隐秘入口|Hidden Entrance behind a Waterfall
城市停电后的星空|Stars above a Blacked-Out City
沙尘暴吞没公路|Dust Storm Swallowing a Highway
樱花雨中的重逢|Reunion beneath Falling Cherry Blossoms
黎明前点亮的第一扇窗|First Lit Window before Dawn`
  ),
  women: category(
    "女性", "Influential Women", "兼顾当代关注与历史影响的全球女性人物。", "Women ranked by a blend of current attention and historical influence.",
    "以这位女性的公众形象、时代角色、成就符号与文化语境为主体，创作尊重且原创的人像叙事。", "Center the portrait on this woman's public image, historical role, symbols of achievement, and cultural context in a respectful original narrative.", `
泰勒·斯威夫特|Taylor Swift
碧昂丝|Beyoncé
蕾哈娜|Rihanna
安吉丽娜·朱莉|Angelina Jolie
奥普拉·温弗瑞|Oprah Winfrey
米歇尔·奥巴马|Michelle Obama
戴安娜王妃|Diana, Princess of Wales
玛丽莲·梦露|Marilyn Monroe
奥黛丽·赫本|Audrey Hepburn
可可·香奈儿|Coco Chanel
玛丽·居里|Marie Curie
弗里达·卡罗|Frida Kahlo
简·奥斯汀|Jane Austen
弗吉尼亚·伍尔夫|Virginia Woolf
阿加莎·克里斯蒂|Agatha Christie
罗莎·帕克斯|Rosa Parks
马拉拉·优素福扎伊|Malala Yousafzai
格蕾塔·通贝里|Greta Thunberg
露丝·巴德·金斯伯格|Ruth Bader Ginsburg
安妮·弗兰克|Anne Frank
海伦·凯勒|Helen Keller
圣女贞德|Joan of Arc
克娄巴特拉七世|Cleopatra
伊丽莎白一世|Elizabeth I
维多利亚女王|Queen Victoria
伊丽莎白二世|Elizabeth II
武则天|Wu Zetian
慈禧太后|Empress Dowager Cixi
花木兰|Hua Mulan
林徽因|Lin Huiyin
宋庆龄|Soong Ching-ling
屠呦呦|Tu Youyou
谷爱凌|Eileen Gu
郑钦文|Zheng Qinwen
大坂直美|Naomi Osaka
塞雷娜·威廉姆斯|Serena Williams
西蒙·拜尔斯|Simone Biles
玛格丽特·汉密尔顿|Margaret Hamilton
格蕾丝·霍珀|Grace Hopper
艾达·洛夫莱斯|Ada Lovelace
珍·古道尔|Jane Goodall
雷切尔·卡森|Rachel Carson
阿梅莉亚·埃尔哈特|Amelia Earhart
瓦伦蒂娜·捷列什科娃|Valentina Tereshkova
萨莉·莱德|Sally Ride
草间弥生|Yayoi Kusama
扎哈·哈迪德|Zaha Hadid
玛丽娜·阿布拉莫维奇|Marina Abramović
玛格丽特·阿特伍德|Margaret Atwood
J·K·罗琳|J. K. Rowling`
  ),
  famous_people: category(
    "名人", "Famous People", "横跨历史、科技、体育、政治与流行文化的高知名度人物。", "Highly recognized figures across history, science, sport, politics, and popular culture.",
    "围绕这位人物的时代身份、标志性姿态、成就意象与公众记忆，创作原创纪实或象征性肖像。", "Build an original documentary or symbolic portrait around the figure's era, recognizable posture, achievement symbols, and public memory.", `
阿尔伯特·爱因斯坦|Albert Einstein
埃隆·马斯克|Elon Musk
史蒂夫·乔布斯|Steve Jobs
比尔·盖茨|Bill Gates
马克·扎克伯格|Mark Zuckerberg
杰夫·贝索斯|Jeff Bezos
沃伦·巴菲特|Warren Buffett
马云|Jack Ma
任正非|Ren Zhengfei
孔子|Confucius
苏格拉底|Socrates
柏拉图|Plato
亚里士多德|Aristotle
威廉·莎士比亚|William Shakespeare
查尔斯·达尔文|Charles Darwin
艾萨克·牛顿|Isaac Newton
尼古拉·特斯拉|Nikola Tesla
斯蒂芬·霍金|Stephen Hawking
艾伦·图灵|Alan Turing
列奥纳多·达·芬奇|Leonardo da Vinci
拿破仑·波拿巴|Napoleon Bonaparte
尤利乌斯·恺撒|Julius Caesar
亚历山大大帝|Alexander the Great
成吉思汗|Genghis Khan
孙子|Sun Tzu
甘地|Mahatma Gandhi
纳尔逊·曼德拉|Nelson Mandela
马丁·路德·金|Martin Luther King Jr.
亚伯拉罕·林肯|Abraham Lincoln
温斯顿·丘吉尔|Winston Churchill
李小龙|Bruce Lee
成龙|Jackie Chan
迈克尔·乔丹|Michael Jordan
勒布朗·詹姆斯|LeBron James
科比·布莱恩特|Kobe Bryant
克里斯蒂亚诺·罗纳尔多|Cristiano Ronaldo
莱昂内尔·梅西|Lionel Messi
罗杰·费德勒|Roger Federer
尤塞恩·博尔特|Usain Bolt
穆罕默德·阿里|Muhammad Ali
贝利|Pelé
大卫·贝克汉姆|David Beckham
戈登·拉姆齐|Gordon Ramsay
大卫·爱登堡|David Attenborough
坂本龙一|Ryuichi Sakamoto
宫崎骏|Hayao Miyazaki
斯坦·李|Stan Lee
卡尔·萨根|Carl Sagan
尼尔·阿姆斯特朗|Neil Armstrong
尤里·加加林|Yuri Gagarin`
  ),
  singers: category(
    "歌手", "Singers", "结合全球流媒体、榜单成绩、现场影响与长期认知度的歌手。", "Singers ranked by global streaming, chart performance, live impact, and lasting recognition.",
    "提炼这位歌手的舞台人格、时代服装、灯光氛围与音乐情绪，形成原创演出或肖像画面。", "Extract the singer's stage persona, era-specific wardrobe, lighting atmosphere, and musical mood into an original performance or portrait image.", `
泰勒·斯威夫特|Taylor Swift
迈克尔·杰克逊|Michael Jackson
碧昂丝|Beyoncé
披头士乐队|The Beatles
猫王|Elvis Presley
蕾哈娜|Rihanna
阿黛尔|Adele
Lady Gaga|Lady Gaga
布鲁诺·马尔斯|Bruno Mars
威肯|The Weeknd
德雷克|Drake
贾斯汀·比伯|Justin Bieber
艾德·希兰|Ed Sheeran
比莉·艾利什|Billie Eilish
爱莉安娜·格兰德|Ariana Grande
杜阿·利帕|Dua Lipa
坏痞兔|Bad Bunny
布兰妮·斯皮尔斯|Britney Spears
麦当娜|Madonna
惠特妮·休斯顿|Whitney Houston
玛丽亚·凯莉|Mariah Carey
席琳·迪翁|Celine Dion
王子|Prince
大卫·鲍伊|David Bowie
弗雷迪·默丘里|Freddie Mercury
鲍勃·迪伦|Bob Dylan
鲍勃·马利|Bob Marley
艾米·怀恩豪斯|Amy Winehouse
酷玩乐队|Coldplay
防弹少年团|BTS
BLACKPINK|BLACKPINK
周杰伦|Jay Chou
邓丽君|Teresa Teng
张国荣|Leslie Cheung
梅艳芳|Anita Mui
王菲|Faye Wong
陈奕迅|Eason Chan
刘德华|Andy Lau
张学友|Jacky Cheung
林俊杰|JJ Lin
蔡依林|Jolin Tsai
宇多田光|Hikaru Utada
滨崎步|Ayumi Hamasaki
藤井风|Fujii Kaze
米津玄师|Kenshi Yonezu
Ado|Ado
初音未来|Hatsune Miku
拉娜·德雷|Lana Del Rey
查莉·XCX|Charli XCX
萨布丽娜·卡彭特|Sabrina Carpenter`
  ),
  screen_stars: category(
    "明星", "Screen Stars", "以全球票房、奖项、社交关注与银幕辨识度综合排序的影视明星。", "Screen stars ranked by global box office, awards, social attention, and visual recognition.",
    "围绕这位明星的银幕气质、时代造型、表演能量与光影特征，创作原创角色化肖像。", "Build an original character-driven portrait around the star's screen presence, era styling, performance energy, and lighting signature.", `
汤姆·克鲁斯|Tom Cruise
莱昂纳多·迪卡普里奥|Leonardo DiCaprio
布拉德·皮特|Brad Pitt
安吉丽娜·朱莉|Angelina Jolie
斯嘉丽·约翰逊|Scarlett Johansson
小罗伯特·唐尼|Robert Downey Jr.
基努·里维斯|Keanu Reeves
巨石强森|Dwayne Johnson
詹妮弗·劳伦斯|Jennifer Lawrence
艾玛·斯通|Emma Stone
玛格特·罗比|Margot Robbie
赞达亚|Zendaya
蒂莫西·柴勒梅德|Timothée Chalamet
西德妮·斯威尼|Sydney Sweeney
佩德罗·帕斯卡|Pedro Pascal
基里安·墨菲|Cillian Murphy
杰昆·菲尼克斯|Joaquin Phoenix
克里斯蒂安·贝尔|Christian Bale
丹泽尔·华盛顿|Denzel Washington
摩根·弗里曼|Morgan Freeman
梅丽尔·斯特里普|Meryl Streep
凯特·布兰切特|Cate Blanchett
娜塔莉·波特曼|Natalie Portman
妮可·基德曼|Nicole Kidman
桑德拉·布洛克|Sandra Bullock
朱莉娅·罗伯茨|Julia Roberts
哈里森·福特|Harrison Ford
阿诺德·施瓦辛格|Arnold Schwarzenegger
西尔维斯特·史泰龙|Sylvester Stallone
成龙|Jackie Chan
周润发|Chow Yun-fat
梁朝伟|Tony Leung Chiu-wai
刘德华|Andy Lau
周星驰|Stephen Chow
章子怡|Zhang Ziyi
巩俐|Gong Li
杨紫琼|Michelle Yeoh
张曼玉|Maggie Cheung
胡歌|Hu Ge
易烊千玺|Jackson Yee
木村拓哉|Takuya Kimura
菅田将晖|Masaki Suda
新垣结衣|Yui Aragaki
石原里美|Satomi Ishihara
宋康昊|Song Kang-ho
李政宰|Lee Jung-jae
全智贤|Jun Ji-hyun
孔刘|Gong Yoo
玛丽莲·梦露|Marilyn Monroe
奥黛丽·赫本|Audrey Hepburn`
  ),
  anime_characters: category(
    "动漫角色", "Anime Characters", "按全球认知、系列热度、二创密度与角色生命力综合排序的动漫角色。", "Anime characters ranked by global recognition, franchise attention, fan creation, and staying power.",
    "保留这一角色最易识别的轮廓、服装色块、性格姿态与世界观线索，构建新的动作或情绪场景。", "Preserve the character's recognizable silhouette, costume color blocks, personality posture, and world cues in a new action or emotional scene.", `
孙悟空|Goku
皮卡丘|Pikachu
哆啦A梦|Doraemon
蒙奇·D·路飞|Monkey D. Luffy
漩涡鸣人|Naruto Uzumaki
灶门炭治郎|Tanjiro Kamado
五条悟|Satoru Gojo
兵长利威尔|Levi Ackerman
阿尼亚·福杰|Anya Forger
江户川柯南|Conan Edogawa
野原新之助|Shinnosuke Nohara
月野兔|Usagi Tsukino
绫波丽|Rei Ayanami
明日香|Asuka Langley Soryu
碇真嗣|Shinji Ikari
宫水三叶|Mitsuha Miyamizu
荻野千寻|Chihiro Ogino
龙猫|Totoro
哈尔|Howl
娜乌西卡|Nausicaä
爱德华·艾尔利克|Edward Elric
夜神月|Light Yagami
L|L Lawliet
空条承太郎|Jotaro Kujo
迪奥·布兰度|Dio Brando
黑崎一护|Ichigo Kurosaki
朽木露琪亚|Rukia Kuchiki
桔梗|Kikyo
犬夜叉|Inuyasha
浦饭幽助|Yusuke Urameshi
绯村剑心|Kenshin Himura
樱木花道|Hanamichi Sakuragi
流川枫|Kaede Rukawa
大空翼|Tsubasa Ozora
阿童木|Astro Boy
铁臂阿童木妹妹乌兰|Uran
凉宫春日|Haruhi Suzumiya
泉此方|Konata Izumi
初音未来|Hatsune Miku
埼玉|Saitama
杰诺斯|Genos
艾伦·耶格尔|Eren Yeager
三笠·阿克曼|Mikasa Ackerman
电次|Denji
帕瓦|Power
芙莉莲|Frieren
猫猫|Maomao
影山茂夫|Shigeo Kageyama
蕾姆|Rem
鲁路修|Lelouch Lamperouge`
  ),
  game_characters: category(
    "游戏角色", "Game Characters", "按系列销量、玩家认知、电竞与跨媒体影响综合排序的游戏角色。", "Game characters ranked by franchise sales, player recognition, esports, and cross-media impact.",
    "抓住这一角色的剪影、装备、动作语言与所属世界材质，设计新的镜头和环境叙事。", "Capture the character's silhouette, gear, motion language, and world materials in a newly designed shot and environmental narrative.", `
马力欧|Mario
林克|Link
索尼克|Sonic the Hedgehog
劳拉·克劳馥|Lara Croft
皮卡丘|Pikachu
克雷多斯|Kratos
士官长|Master Chief
史蒂夫|Steve
吃豆人|Pac-Man
洛克人|Mega Man
萨姆斯·阿兰|Samus Aran
塞尔达公主|Princess Zelda
卡比|Kirby
大金刚|Donkey Kong
路易吉|Luigi
春丽|Chun-Li
隆|Ryu
不知火舞|Mai Shiranui
三岛一八|Kazuya Mishima
雷电|Raiden
蝎子|Scorpion
47号特工|Agent 47
刺客艾吉奥|Ezio Auditore
波斯王子|Prince of Persia
杰洛特|Geralt of Rivia
Ciri|Ciri
亚瑟·摩根|Arthur Morgan
约翰·马斯顿|John Marston
乔尔·米勒|Joel Miller
艾莉·威廉姆斯|Ellie Williams
内森·德雷克|Nathan Drake
克劳德·斯特莱夫|Cloud Strife
萨菲罗斯|Sephiroth
蒂法·洛克哈特|Tifa Lockhart
2B|2B
但丁|Dante
里昂·S·肯尼迪|Leon S. Kennedy
吉尔·瓦伦丁|Jill Valentine
阿尔伯特·威斯克|Albert Wesker
毁灭战士|Doom Slayer
GLaDOS|GLaDOS
猎空|Tracer
D.Va|D.Va
金克丝|Jinx
阿狸|Ahri
亚索|Yasuo
旅行者|Traveler
雷电将军|Raiden Shogun
空洞骑士|The Knight
艾尔登之王褪色者|The Tarnished`
  ),
  animals: category(
    "动物", "Animals", "兼顾公众喜爱、视觉辨识、象征性与 AI 作图表现力的动物。", "Animals ranked by public affection, visual recognition, symbolism, and image-generation potential.",
    "以这一动物的真实解剖、皮毛或鳞片质感、典型行为与栖息环境为主体，避免拟人化失真。", "Center the animal's accurate anatomy, fur or scale texture, typical behavior, and habitat while avoiding accidental anthropomorphic distortion.", `
猫|Cat
狗|Dog
大熊猫|Giant Panda
老虎|Tiger
狮子|Lion
狼|Wolf
狐狸|Red Fox
兔子|Rabbit
马|Horse
大象|Elephant
长颈鹿|Giraffe
斑马|Zebra
猎豹|Cheetah
雪豹|Snow Leopard
北极熊|Polar Bear
棕熊|Brown Bear
考拉|Koala
袋鼠|Kangaroo
树懒|Sloth
水豚|Capybara
浣熊|Raccoon
刺猬|Hedgehog
松鼠|Squirrel
海豚|Dolphin
蓝鲸|Blue Whale
虎鲸|Orca
座头鲸|Humpback Whale
鲨鱼|Shark
海龟|Sea Turtle
章鱼|Octopus
水母|Jellyfish
企鹅|Penguin
猫头鹰|Owl
白头海雕|Bald Eagle
孔雀|Peacock
火烈鸟|Flamingo
天鹅|Swan
蜂鸟|Hummingbird
渡鸦|Raven
鹤|Crane
鹦鹉|Parrot
变色龙|Chameleon
鬣蜥|Iguana
眼镜蛇|Cobra
鳄鱼|Crocodile
青蛙|Frog
蝴蝶|Butterfly
蜜蜂|Honey Bee
螳螂|Praying Mantis
蜻蜓|Dragonfly`
  ),
  plants: category(
    "植物", "Plants", "兼顾文化认知、形态美、象征意义与画面适配性的植物。", "Plants ranked by cultural recognition, visual form, symbolism, and image versatility.",
    "呈现这一植物可辨识的叶形、花序、枝干结构、季节状态与生境光线。", "Render the plant's recognizable leaf shape, inflorescence, branching structure, seasonal state, and habitat lighting.", `
樱花|Cherry Blossom
玫瑰|Rose
向日葵|Sunflower
莲花|Lotus
牡丹|Peony
郁金香|Tulip
薰衣草|Lavender
兰花|Orchid
绣球花|Hydrangea
雏菊|Daisy
蒲公英|Dandelion
罂粟花|Poppy
鸢尾花|Iris
百合|Lily
梅花|Plum Blossom
紫藤|Wisteria
枫树|Maple Tree
银杏|Ginkgo
白桦|Birch
橡树|Oak
红杉|Redwood
松树|Pine Tree
雪松|Cedar
柳树|Willow
竹子|Bamboo
猴面包树|Baobab
棕榈树|Palm Tree
椰子树|Coconut Palm
橄榄树|Olive Tree
葡萄藤|Grapevine
常春藤|Ivy
蕨类|Fern
苔藓|Moss
龟背竹|Monstera
琴叶榕|Fiddle-Leaf Fig
仙人掌|Cactus
多肉植物|Succulent
龙舌兰|Agave
芦荟|Aloe Vera
捕蝇草|Venus Flytrap
猪笼草|Pitcher Plant
含羞草|Sensitive Plant
巨型睡莲|Giant Water Lily
薰衣草田|Lavender Field
油菜花|Rapeseed Flower
麦穗|Wheat
水稻|Rice Plant
棉花|Cotton Plant
可可树|Cacao Tree
咖啡树|Coffee Plant`
  ),
  landscapes: category(
    "风景场面", "Landscape Scenes", "高频、强氛围且适合生成大场景的自然与人文风景母题。", "Popular, atmospheric natural and cultural landscape motifs suited to wide scenes.",
    "构建这一风景的空间层次、天气、时间、地貌尺度和可进入的叙事细节。", "Build the landscape through spatial layers, weather, time of day, terrain scale, and narrative details that invite entry.", `
雪山日出|Sunrise over Snow Mountains
海岸悬崖|Coastal Cliffs
热带海滩|Tropical Beach
挪威峡湾|Norwegian Fjord
高山湖泊|Alpine Lake
镜面盐湖|Mirror Salt Flat
沙漠沙丘|Desert Dunes
峡谷河流|River Canyon
火山岛|Volcanic Island
冰川裂谷|Glacial Crevasse
极地冰原|Polar Ice Field
秋日森林|Autumn Forest
雾中松林|Misty Pine Forest
竹林小径|Bamboo Grove Path
樱花河岸|Cherry-Blossom Riverbank
薰衣草田|Lavender Field
向日葵田|Sunflower Field
梯田|Rice Terraces
茶园山坡|Tea Plantation Hills
葡萄园|Vineyard Landscape
托斯卡纳丘陵|Tuscan Hills
普罗旺斯乡村|Provence Countryside
荷兰风车田野|Dutch Windmill Fields
英格兰乡间|English Countryside
新西兰牧场|New Zealand Pasture
非洲稀树草原|African Savanna
亚马逊雨林|Amazon Rainforest
红树林湿地|Mangrove Wetland
珊瑚礁海域|Coral Reef Seascape
水下蓝洞|Underwater Blue Hole
银河下的荒野|Wilderness under the Milky Way
极光雪原|Aurora over a Snowfield
月光海面|Moonlit Ocean
暴雨前的草原|Prairie before a Storm
雨后山谷|Valley after Rain
云海山峰|Peaks above a Sea of Clouds
瀑布峡谷|Waterfall Gorge
洞穴天窗|Cave Skylight
天然石拱|Natural Stone Arch
红岩荒漠|Red-Rock Desert
黑沙海滩|Black-Sand Beach
粉色盐湖|Pink Salt Lake
萤火虫森林|Firefly Forest
星空露营地|Starlit Campsite
冬日木屋|Winter Cabin
海边灯塔|Coastal Lighthouse
山顶寺庙|Mountaintop Temple
古城屋顶|Old-City Rooftops
乡村火车穿过原野|Rural Train across Open Fields
未来生态山谷|Futuristic Ecological Valley`
  ),
  cities: category(
    "城市", "Cities", "结合全球旅游关注、文化影响、视觉辨识与当代热度的城市。", "Cities ranked by global travel attention, cultural influence, visual identity, and current relevance.",
    "以这座城市的天际线、街道尺度、交通、气候、地方材质与日常生活为主体。", "Center the image on the city's skyline, street scale, transport, climate, local materials, and everyday life.", `
东京|Tokyo
纽约|New York City
巴黎|Paris
伦敦|London
上海|Shanghai
香港|Hong Kong
北京|Beijing
首尔|Seoul
新加坡|Singapore
迪拜|Dubai
洛杉矶|Los Angeles
罗马|Rome
巴塞罗那|Barcelona
京都|Kyoto
大阪|Osaka
曼谷|Bangkok
伊斯坦布尔|Istanbul
悉尼|Sydney
墨尔本|Melbourne
旧金山|San Francisco
芝加哥|Chicago
迈阿密|Miami
拉斯维加斯|Las Vegas
墨西哥城|Mexico City
里约热内卢|Rio de Janeiro
布宜诺斯艾利斯|Buenos Aires
温哥华|Vancouver
多伦多|Toronto
蒙特利尔|Montreal
阿姆斯特丹|Amsterdam
柏林|Berlin
维也纳|Vienna
布拉格|Prague
布达佩斯|Budapest
威尼斯|Venice
佛罗伦萨|Florence
里斯本|Lisbon
马德里|Madrid
哥本哈根|Copenhagen
斯德哥尔摩|Stockholm
奥斯陆|Oslo
赫尔辛基|Helsinki
开普敦|Cape Town
马拉喀什|Marrakesh
开罗|Cairo
孟买|Mumbai
德里|Delhi
吉隆坡|Kuala Lumpur
台北|Taipei
成都|Chengdu`
  ),
  landmarks: category(
    "地标", "Landmarks", "按全球辨识度、游客关注、文化象征与画面表现力综合排序的地标。", "Landmarks ranked by global recognition, visitor interest, cultural symbolism, and visual potential.",
    "准确呈现这一地标的结构比例、材料、周边城市或地貌关系，并选择具有叙事性的时间与天气。", "Accurately render the landmark's proportions, materials, and relationship to its city or terrain, with a narrative time of day and weather.", `
埃菲尔铁塔|Eiffel Tower
自由女神像|Statue of Liberty
中国长城|Great Wall of China
泰姬陵|Taj Mahal
罗马斗兽场|Colosseum
吉萨金字塔|Great Pyramid of Giza
悉尼歌剧院|Sydney Opera House
大本钟|Big Ben
金门大桥|Golden Gate Bridge
圣家堂|Sagrada Família
比萨斜塔|Leaning Tower of Pisa
帝国大厦|Empire State Building
哈利法塔|Burj Khalifa
东京晴空塔|Tokyo Skytree
富士山|Mount Fuji
吴哥窟|Angkor Wat
佩特拉古城|Petra
马丘比丘|Machu Picchu
里约基督像|Christ the Redeemer
巨石阵|Stonehenge
复活节岛摩艾石像|Moai of Easter Island
雅典卫城|Acropolis of Athens
帕特农神庙|Parthenon
圣彼得大教堂|St. Peter's Basilica
巴黎圣母院|Notre-Dame de Paris
卢浮宫金字塔|Louvre Pyramid
凯旋门|Arc de Triomphe
勃兰登堡门|Brandenburg Gate
新天鹅堡|Neuschwanstein Castle
布拉格城堡|Prague Castle
克里姆林宫|Moscow Kremlin
蓝色清真寺|Blue Mosque
圣索菲亚大教堂|Hagia Sophia
谢赫扎耶德大清真寺|Sheikh Zayed Grand Mosque
麦加天房|Kaaba
布达拉宫|Potala Palace
故宫|Forbidden City
天坛|Temple of Heaven
兵马俑|Terracotta Army
乐山大佛|Leshan Giant Buddha
东方明珠塔|Oriental Pearl Tower
台北101|Taipei 101
滨海湾金沙|Marina Bay Sands
双子塔|Petronas Twin Towers
印度门|Gateway of India
好莱坞标志|Hollywood Sign
尼亚加拉瀑布|Niagara Falls
科罗拉多大峡谷|Grand Canyon
乌鲁鲁|Uluru
珠穆朗玛峰|Mount Everest`
  ),
  natural_phenomena: category(
    "自然现象", "Natural Phenomena", "按公众关注、视觉震撼、稀有性与科普价值综合排序的自然现象。", "Natural phenomena ranked by public interest, visual drama, rarity, and educational value.",
    "在尊重物理尺度与形成条件的前提下，表现这一现象的光、颜色、运动、天气与观察者尺度。", "Render the phenomenon's light, color, motion, weather, and observer scale while respecting its physical scale and formation conditions.", `
极光|Aurora
日全食|Total Solar Eclipse
超级月亮|Supermoon
流星雨|Meteor Shower
银河|Milky Way
彩虹|Rainbow
闪电|Lightning
龙卷风|Tornado
飓风|Hurricane
火山喷发|Volcanic Eruption
海啸|Tsunami
沙尘暴|Dust Storm
暴风雪|Blizzard
冰雹|Hailstorm
云海|Sea of Clouds
乳状云|Mammatus Clouds
荚状云|Lenticular Clouds
超级单体雷暴|Supercell Thunderstorm
火积云|Pyrocumulus Cloud
夜光云|Noctilucent Clouds
月虹|Moonbow
雾虹|Fogbow
日晕|Solar Halo
幻日|Sundog
绿闪|Green Flash
海市蜃楼|Mirage
火彩虹|Circumhorizontal Arc
彩云|Cloud Iridescence
极地平流层云|Polar Stratospheric Clouds
球状闪电|Ball Lightning
圣艾尔摩之火|St. Elmo's Fire
生物发光海浪|Bioluminescent Waves
蓝眼泪|Sea Sparkle
赤潮|Red Tide
冰泡湖|Frozen Methane Bubbles
冰针|Ice Needles
霜花|Frost Flowers
雪卷|Snow Rollers
冰火山|Cryovolcano
间歇泉喷发|Geyser Eruption
泥火山|Mud Volcano
大潮|Spring Tide
潮汐涌浪|Tidal Bore
巨浪|Rogue Wave
冰川崩解|Glacier Calving
雪崩|Avalanche
山火火旋风|Fire Whirl
地震光|Earthquake Lights
沙漠开花|Desert Bloom
萤火虫同步闪光|Synchronous Fireflies`
  )
};
