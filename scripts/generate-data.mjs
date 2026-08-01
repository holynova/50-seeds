import { mkdir, writeFile } from "node:fs/promises";
import { catalog } from "../src/catalog.mjs";
import { extraCatalog } from "../src/catalog-extra.mjs";

const snapshotDate = "2026-07-31";
const gameCharacterContexts = {
  "Mario": ["《超级马力欧》系列", "Super Mario franchise"],
  "Link": ["《塞尔达传说》系列", "The Legend of Zelda franchise"],
  "Sonic the Hedgehog": ["《刺猬索尼克》系列", "Sonic the Hedgehog franchise"],
  "Lara Croft": ["《古墓丽影》系列", "Tomb Raider franchise"],
  "Pikachu": ["《宝可梦》系列", "Pokémon franchise"],
  "Kratos": ["《战神》系列", "God of War franchise"],
  "Master Chief": ["《光环》系列", "Halo franchise"],
  "Steve": ["《我的世界》", "Minecraft"],
  "Pac-Man": ["《吃豆人》", "Pac-Man"],
  "Mega Man": ["《洛克人》系列", "Mega Man franchise"],
  "Samus Aran": ["《银河战士》系列", "Metroid franchise"],
  "Princess Zelda": ["《塞尔达传说》系列", "The Legend of Zelda franchise"],
  "Kirby": ["《星之卡比》系列", "Kirby franchise"],
  "Donkey Kong": ["《大金刚》系列", "Donkey Kong franchise"],
  "Luigi": ["《超级马力欧》系列", "Super Mario franchise"],
  "Chun-Li": ["《街头霸王》系列", "Street Fighter franchise"],
  "Ryu": ["《街头霸王》系列", "Street Fighter franchise"],
  "Mai Shiranui": ["《饿狼传说／拳皇》系列", "Fatal Fury / The King of Fighters"],
  "Kazuya Mishima": ["《铁拳》系列", "Tekken franchise"],
  "Raiden": ["《真人快打》系列", "Mortal Kombat franchise"],
  "Scorpion": ["《真人快打》系列", "Mortal Kombat franchise"],
  "Agent 47": ["《杀手》系列", "Hitman franchise"],
  "Ezio Auditore": ["《刺客信条》系列", "Assassin's Creed franchise"],
  "Prince of Persia": ["《波斯王子》系列", "Prince of Persia franchise"],
  "Geralt of Rivia": ["《巫师》系列", "The Witcher franchise"],
  "Ciri": ["《巫师》系列", "The Witcher franchise"],
  "Arthur Morgan": ["《荒野大镖客：救赎2》", "Red Dead Redemption 2"],
  "John Marston": ["《荒野大镖客：救赎》系列", "Red Dead Redemption franchise"],
  "Joel Miller": ["《最后生还者》系列", "The Last of Us franchise"],
  "Ellie Williams": ["《最后生还者》系列", "The Last of Us franchise"],
  "Nathan Drake": ["《神秘海域》系列", "Uncharted franchise"],
  "Cloud Strife": ["《最终幻想VII》", "Final Fantasy VII"],
  "Sephiroth": ["《最终幻想VII》", "Final Fantasy VII"],
  "Tifa Lockhart": ["《最终幻想VII》", "Final Fantasy VII"],
  "2B": ["《尼尔：机械纪元》", "NieR:Automata"],
  "Dante": ["《鬼泣》系列", "Devil May Cry franchise"],
  "Leon S. Kennedy": ["《生化危机》系列", "Resident Evil franchise"],
  "Jill Valentine": ["《生化危机》系列", "Resident Evil franchise"],
  "Albert Wesker": ["《生化危机》系列", "Resident Evil franchise"],
  "Doom Slayer": ["《毁灭战士》系列", "DOOM franchise"],
  "GLaDOS": ["《传送门》系列", "Portal franchise"],
  "Tracer": ["《守望先锋》", "Overwatch"],
  "D.Va": ["《守望先锋》", "Overwatch"],
  "Jinx": ["《英雄联盟》", "League of Legends"],
  "Ahri": ["《英雄联盟》", "League of Legends"],
  "Yasuo": ["《英雄联盟》", "League of Legends"],
  "Traveler": ["《原神》", "Genshin Impact"],
  "Raiden Shogun": ["《原神》", "Genshin Impact"],
  "The Knight": ["《空洞骑士》", "Hollow Knight"],
  "The Tarnished": ["《艾尔登法环》", "Elden Ring"]
};
const sources = [
  { name: "IMDb Top 250", url: "https://www.imdb.com/chart/top/", scope: "电影" },
  { name: "Steam Charts", url: "https://store.steampowered.com/stats/", scope: "游戏" },
  { name: "Best-selling manga", url: "https://en.wikipedia.org/wiki/List_of_best-selling_manga", scope: "日本漫画" },
  { name: "Billboard Greatest Pop Stars", url: "https://www.billboard.com/lists/best-pop-stars-21st-century/", scope: "歌手" },
  { name: "MoMA Art Terms", url: "https://www.moma.org/collection/terms/", scope: "艺术流派、媒介与摄影" },
  { name: "NASA Solar System Exploration", url: "https://science.nasa.gov/solar-system/", scope: "宇宙天体" },
  { name: "Wikimedia Pageviews", url: "https://pageviews.wmcloud.org/", scope: "跨类别公众可见度" }
];

const categories = Object.entries({ ...catalog, ...extraCatalog }).map(([key, category]) => {
  const seeds = category.items.map(({ name, englishName }, index) => {
    const context = key === "game_characters" ? gameCharacterContexts[englishName] : null;
    const displayName = context ? `${name}（${context[0]}）` : name;
    const englishDisplayName = context ? `${englishName} (${context[1]})` : englishName;
    return {
      id: `${key}-${String(index + 1).padStart(2, "0")}`,
      category: key,
      categoryName: category.name,
      categoryEnglishName: category.englishName,
      name: displayName,
      englishName: englishDisplayName,
      ...(context ? { baseName: name, englishBaseName: englishName, context: context[0], englishContext: context[1] } : {}),
      style: `${category.promptZh}主题：${displayName}（${englishDisplayName}）。`,
      englishStyle: `${category.promptEn} Subject: ${englishDisplayName}.`,
      priority: index + 1
    };
  });

  return {
    id: key,
    name: category.name,
    englishName: category.englishName,
    description: category.description,
    englishDescription: category.englishDescription,
    count: seeds.length,
    seeds
  };
});

const payload = {
  meta: {
    title: "50 Seeds",
    description: "AI 作图热门视觉种子库，每类 50 条。",
    snapshotDate,
    ranking: "priority 在每个分类内从 1 到 50，1 为综合热度最高。排名综合当前关注度、主流榜单、长期文化影响力与 AI 作图适用性，并非实时官方统计。",
    englishRanking: "Priority runs from 1 to 50 within each category, with 1 as the strongest composite popularity rank. It blends current attention, major charts, long-term cultural impact, and usefulness for AI image prompts; it is not an official real-time metric.",
    categoryCount: categories.length,
    seedCount: categories.reduce((sum, category) => sum + category.count, 0),
    sources
  },
  categories
};

await mkdir(new URL("../data/", import.meta.url), { recursive: true });
await writeFile(new URL("../data/seeds.json", import.meta.url), `${JSON.stringify(payload, null, 2)}\n`);
console.log(`Generated ${payload.meta.seedCount} seeds across ${payload.meta.categoryCount} categories.`);
