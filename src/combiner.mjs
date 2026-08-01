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

export function combinationLine(combination, language = "both") {
  return combination.seeds.map((seed) => seedLabel(seed, language)).join(" + ");
}

export function combinationsText(combinations, language = "both") {
  return combinations.map((combination) => combinationLine(combination, language)).join("\n");
}
