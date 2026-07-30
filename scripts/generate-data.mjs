import { mkdir, writeFile } from "node:fs/promises";
import { catalog } from "../src/catalog.mjs";

const snapshotDate = "2026-07-31";
const sources = [
  { name: "IMDb Top 250", url: "https://www.imdb.com/chart/top/", scope: "电影" },
  { name: "Steam Charts", url: "https://store.steampowered.com/stats/", scope: "游戏" },
  { name: "Best-selling manga", url: "https://en.wikipedia.org/wiki/List_of_best-selling_manga", scope: "日本漫画" },
  { name: "Billboard Greatest Pop Stars", url: "https://www.billboard.com/lists/best-pop-stars-21st-century/", scope: "歌手" },
  { name: "Wikimedia Pageviews", url: "https://pageviews.wmcloud.org/", scope: "跨类别公众可见度" }
];

const categories = Object.entries(catalog).map(([key, category]) => {
  const seeds = category.items.map(({ name, englishName }, index) => ({
    id: `${key}-${String(index + 1).padStart(2, "0")}`,
    category: key,
    categoryName: category.name,
    categoryEnglishName: category.englishName,
    name,
    englishName,
    style: `${category.promptZh}主题：${name}（${englishName}）。`,
    englishStyle: `${category.promptEn} Subject: ${englishName}.`,
    priority: index + 1
  }));

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
