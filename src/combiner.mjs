export function effectivePool(seeds, pinnedIds = []) {
  if (!pinnedIds.length) return seeds;
  const pinned = new Set(pinnedIds);
  return seeds.filter((seed) => pinned.has(seed.id));
}

export function combinationCount(poolA, poolB = null) {
  return poolB ? poolA.length * poolB.length : poolA.length;
}

export function buildAllCombinations(poolA, poolB = null) {
  if (!poolB) return poolA.map((seed) => ({ id: seed.id, seeds: [seed] }));
  return poolA.flatMap((seedA) => poolB.map((seedB) => ({
    id: `${seedA.id}__${seedB.id}`,
    seeds: [seedA, seedB]
  })));
}

export function randomCombinations(poolA, poolB, count = 5, random = Math.random) {
  const combinations = buildAllCombinations(poolA, poolB);
  for (let index = combinations.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [combinations[index], combinations[swapIndex]] = [combinations[swapIndex], combinations[index]];
  }
  return combinations.slice(0, Math.min(count, combinations.length));
}

export function seedLabel(seed, language = "both") {
  if (language === "zh") return seed.name;
  if (language === "en") return seed.englishName;
  return `${seed.name} / ${seed.englishName}`;
}

export function combinationLine(combination, language = "both", format = "plus") {
  const seeds = combination.seeds;
  if (format === "comma") {
    return seeds.map((seed) => seedLabel(seed, language)).join(", ");
  }
  if (format === "midjourney") {
    if (language === "en") {
      return `${seeds.map((s) => s.englishName).join(", ")}, cinematic lighting, photorealistic, 8k --v 6.0`;
    }
    if (language === "zh") {
      return `${seeds.map((s) => s.name).join(", ")}, 电影级光影, 杰作, 高清画质 --v 6.0`;
    }
    return `${seeds.map((s) => `${s.name} (${s.englishName})`).join(", ")}, cinematic lighting, masterpiece, 8k --v 6.0`;
  }
  return seeds.map((seed) => seedLabel(seed, language)).join(" + ");
}

export function combinationsText(combinations, language = "both", format = "plus") {
  return combinations.map((combination) => combinationLine(combination, language, format)).join("\n");
}
