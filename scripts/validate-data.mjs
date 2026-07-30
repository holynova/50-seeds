import { readFile } from "node:fs/promises";

const payload = JSON.parse(await readFile(new URL("../data/seeds.json", import.meta.url), "utf8"));
const requiredFields = ["name", "englishName", "style", "englishStyle", "priority"];
const errors = [];

if (payload.meta.categoryCount !== 48) errors.push(`Expected 48 categories, got ${payload.meta.categoryCount}`);
if (payload.meta.seedCount !== 2400) errors.push(`Expected 2400 seeds, got ${payload.meta.seedCount}`);

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

const [html, app, css, readme] = await Promise.all([
  readFile(new URL("../index.html", import.meta.url), "utf8"),
  readFile(new URL("../app.js", import.meta.url), "utf8"),
  readFile(new URL("../styles.css", import.meta.url), "utf8"),
  readFile(new URL("../README.md", import.meta.url), "utf8")
]);

for (const marker of ["data/seeds.json", "github.com/holynova/50-seeds", "id=\"search-input\"", "id=\"category-list\""]) {
  if (!html.includes(marker)) errors.push(`index.html: missing ${marker}`);
}
if (!app.includes("fetch(\"./data/seeds.json\")")) errors.push("app.js: data fetch path is missing");
if (!css.includes("@media (max-width: 820px)")) errors.push("styles.css: responsive breakpoint is missing");
if ([...readme].length > 200) errors.push(`README.md: expected at most 200 characters, got ${[...readme].length}`);

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${payload.meta.seedCount} seeds, ${payload.meta.categoryCount} categories, required fields, priorities, uniqueness, and site wiring.`);
