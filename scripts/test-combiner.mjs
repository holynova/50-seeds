import assert from "node:assert/strict";
import {
  buildAllCombinations,
  combinationCount,
  combinationsText,
  effectivePool,
  randomCombinations
} from "../src/combiner.mjs";

const a = [
  { id: "a1", name: "甲", englishName: "Alpha" },
  { id: "a2", name: "乙", englishName: "Beta" },
  { id: "a3", name: "丙", englishName: "Gamma" }
];
const b = [
  { id: "b1", name: "一", englishName: "One" },
  { id: "b2", name: "二", englishName: "Two" }
];

const pinnedA = effectivePool(a, ["a1", "a3"]);
assert.deepEqual(pinnedA.map((seed) => seed.id), ["a1", "a3"]);
assert.equal(combinationCount(pinnedA, b), 4);
assert.equal(buildAllCombinations(pinnedA, b).length, 4);
assert.equal(randomCombinations(pinnedA, b, 5, () => 0.5).length, 4);
assert.equal(combinationsText(buildAllCombinations([a[0]], b), "en"), "Alpha + One\nAlpha + Two");

console.log("Validated fixed pools, combination totals, random samples, and line-by-line copy output.");
