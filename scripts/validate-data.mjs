import { readFile } from "node:fs/promises";

const payload = JSON.parse(await readFile(new URL("../data/seeds.json", import.meta.url), "utf8"));
const requiredFields = ["name", "englishName", "style", "englishStyle", "priority"];
const errors = [];

if (payload.meta.categoryCount !== 50) errors.push(`Expected 50 categories, got ${payload.meta.categoryCount}`);
if (payload.meta.seedCount !== 2500) errors.push(`Expected 2500 seeds, got ${payload.meta.seedCount}`);

for (const category of payload.categories) {
  if (category.count !== 50 || category.seeds.length !== 50) {
    errors.push(`${category.id}: expected 50 seeds, got ${category.seeds.length}`);
  }

  const names = new Set();
  category.seeds.forEach((seed, index) => {
    for (const field of requiredFields) {
      if (seed[field] === undefined || seed[field] === "") errors.push(`${seed.id}: missing ${field}`);
    }
    if (seed.priority !== index + 1) errors.push(`${seed.id}: priority sequence is invalid`);
    const normalizedName = seed.englishName.toLocaleLowerCase("en");
    if (names.has(normalizedName)) errors.push(`${category.id}: duplicate ${seed.englishName}`);
    names.add(normalizedName);
  });
}

const steve = payload.categories
  .find((category) => category.id === "game_characters")
  ?.seeds.find((seed) => seed.englishBaseName === "Steve");
if (!steve || steve.name !== "史蒂夫（《我的世界》）" || steve.englishName !== "Steve (Minecraft)") {
  errors.push("game_characters: Steve is missing the Minecraft source context");
}

const [html, app, css, readme] = await Promise.all([
  readFile(new URL("../index.html", import.meta.url), "utf8"),
  readFile(new URL("../app.js", import.meta.url), "utf8"),
  readFile(new URL("../styles.css", import.meta.url), "utf8"),
  readFile(new URL("../README.md", import.meta.url), "utf8")
]);

for (const marker of [
  "data/seeds.json",
  "github.com/holynova/50-seeds",
  "id=\"search-input\"",
  "id=\"theme-toggle\"",
  "id=\"category-list\"",
  "id=\"combo-results\"",
  "id=\"combo-picker-trigger-a\"",
  "id=\"combo-picker-search-a\"",
  "data-picker-sort=\"englishName\"",
  "id=\"toggle-pins-a\"",
  "id=\"copy-results\"",
  "id=\"batch-copy\""
]) {
  if (!html.includes(marker)) errors.push(`index.html: missing ${marker}`);
}
if (!app.includes("fetch(\"./data/seeds.json\")")) errors.push("app.js: data fetch path is missing");
for (const marker of ["randomCombinations", "combinationsText", "50-seeds-favorites", "50-seeds-theme", "document.documentElement.dataset.language", "document.documentElement.dataset.theme = isLight ? \"light\" : \"dark\""]) {
  if (!app.includes(marker)) errors.push(`app.js: missing ${marker}`);
}
if (!css.includes("@media (max-width: 820px)")) errors.push("styles.css: responsive breakpoint is missing");
if (!css.includes(".seed-tile.language-en")) errors.push("styles.css: English-only tile layout is missing");
if ([...readme].length > 200) errors.push(`README.md: expected at most 200 characters, got ${[...readme].length}`);

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${payload.meta.seedCount} seeds, ${payload.meta.categoryCount} categories, required fields, priorities, uniqueness, and site wiring.`);
