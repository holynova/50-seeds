import {
  buildAllCombinations,
  combinationCount,
  combinationLine,
  combinationsText,
  effectivePool,
  randomCombinations,
  seedLabel
} from "./src/combiner.mjs";

const ICONS = {
  all: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>`,
  creator: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><circle cx="11" cy="11" r="2"/></svg>`,
  visual: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  narrative: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18M17 3v18M3 12h18M3 7.5h4M3 16.5h4M17 7.5h4M17 16.5h4"/></svg>`,
  space: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"/></svg>`,
  mood: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`,
  other: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8"/></svg>`,
  pin: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V5a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/></svg>`,
  pinSolid: `<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V5a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/></svg>`,
  sun: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`,
  moon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`
};

const DIMENSIONS = [
  {
    key: "creator",
    label: "创作者",
    englishLabel: "Creators",
    icon: ICONS.creator,
    color: "var(--dim-creator)",
    ids: ["artists", "mangaka", "architects", "film_directors", "illustrators", "fashion_designers", "graphic_designers", "photographers"]
  },
  {
    key: "visual",
    label: "视觉语言",
    englishLabel: "Visual Language",
    icon: ICONS.visual,
    color: "var(--dim-visual)",
    ids: ["ai_art_styles", "painting_styles", "art_movements", "compositions", "lighting_setups", "color_palettes", "materials_textures", "photography_genres", "architectural_styles", "fashion_styles"]
  },
  {
    key: "narrative",
    label: "叙事母题",
    englishLabel: "Narrative & Mythos",
    icon: ICONS.narrative,
    color: "var(--dim-narrative)",
    ids: ["films", "games", "tv_series", "manga", "paintings", "novels", "iconic_scenes", "anime_characters", "game_characters", "mythology", "fantasy_creatures", "historical_civilizations", "sci_fi_concepts"]
  },
  {
    key: "space",
    label: "空间物件",
    englishLabel: "Space & Artifacts",
    icon: ICONS.space,
    color: "var(--dim-space)",
    ids: ["cities", "landmarks", "landscapes", "interior_spaces", "vehicles", "props_objects", "space_objects", "food_dishes", "musical_instruments", "animals", "plants"]
  },
  {
    key: "mood",
    label: "情绪自然",
    englishLabel: "Mood & Nature",
    icon: ICONS.mood,
    color: "var(--dim-mood)",
    ids: ["women", "famous_people", "singers", "screen_stars", "professions", "emotions_atmospheres", "weather_seasons", "natural_phenomena", "festivals"]
  }
];

function getCategoryDimension(categoryId) {
  for (const dim of DIMENSIONS) {
    if (dim.ids.includes(categoryId)) return dim;
  }
  return { key: "other", label: "其他", englishLabel: "Other", icon: ICONS.other, color: "var(--accent)", ids: [] };
}

const state = {
  data: null,
  category: "all",
  categoryFilter: "",
  dimension: "all",
  search: "",
  sort: "priority",
  language: "both",
  theme: document.documentElement.dataset.theme === "light" ? "light" : "dark",
  visible: 120,
  view: "combiner",
  staged: [],
  combo: {
    mode: "double",
    categoryA: "films",
    categoryB: "lighting_setups",
    focusedSource: "a",
    categoryFilter: "",
    dimension: "all",
    categorySearch: { a: "", b: "" },
    categorySort: { a: "default", b: "default" },
    openPicker: null,
    pinned: { a: [], b: [] },
    pinSearch: { a: "", b: "" },
    results: [],
    favorites: [],
    promptFormat: "plus"
  }
};

const pageSize = 120;
const elements = {
  categoryList: document.querySelector("#category-list"),
  categoryCounter: document.querySelector("#category-counter"),
  categoryFilter: document.querySelector("#category-filter"),
  categoryFilterClear: document.querySelector("#category-filter-clear"),
  categoryDimensionTabs: document.querySelector("#category-dimension-tabs"),
  search: document.querySelector("#search-input"),
  sort: document.querySelector("#sort-select"),
  activeCategory: document.querySelector("#active-category"),
  activeCategoryEn: document.querySelector("#active-category-en"),
  resultCount: document.querySelector("#result-count"),
  selectAllBtn: document.querySelector("#select-all-btn"),
  selectAllCount: document.querySelector("#select-all-count"),
  selectTop10Btn: document.querySelector("#select-top-10-btn"),
  clearStagedBtn: document.querySelector("#clear-staged-btn"),
  selectedCount: document.querySelector("#selected-count"),
  copySelectedLinesBtn: document.querySelector("#copy-selected-lines-btn"),
  copyAllLinesBtn: document.querySelector("#copy-all-lines-btn"),
  results: document.querySelector("#results"),
  status: document.querySelector("#status"),
  loadMore: document.querySelector("#load-more"),
  toast: document.querySelector("#toast"),
  backToTop: document.querySelector("#back-to-top"),
  sources: document.querySelector("#source-links"),
  comboCategoryList: document.querySelector("#combo-category-list"),
  comboCategoryCounter: document.querySelector("#combo-category-counter"),
  comboCategoryFilter: document.querySelector("#combo-category-filter"),
  comboCategoryFilterClear: document.querySelector("#combo-category-filter-clear"),
  comboDimensionTabs: document.querySelector("#combo-dimension-tabs"),
  categoryPickers: {
    a: {
      root: document.querySelector('[data-picker-slot="a"]'),
      trigger: document.querySelector("#combo-picker-trigger-a"),
      current: document.querySelector("#combo-picker-current-a"),
      menu: document.querySelector("#combo-picker-menu-a"),
      search: document.querySelector("#combo-picker-search-a"),
      options: document.querySelector("#combo-picker-options-a")
    },
    b: {
      root: document.querySelector('[data-picker-slot="b"]'),
      trigger: document.querySelector("#combo-picker-trigger-b"),
      current: document.querySelector("#combo-picker-current-b"),
      menu: document.querySelector("#combo-picker-menu-b"),
      search: document.querySelector("#combo-picker-search-b"),
      options: document.querySelector("#combo-picker-options-b")
    }
  },
  comboResults: document.querySelector("#combo-results"),
  favoriteList: document.querySelector("#favorite-list"),
  favoriteCount: document.querySelector("#favorite-count"),
  mathA: document.querySelector("#math-a"),
  mathB: document.querySelector("#math-b"),
  combinationTotal: document.querySelector("#combination-total"),
  batchCount: document.querySelector("#batch-count"),
  stagingBasket: document.querySelector("#staging-basket"),
  stagingCount: document.querySelector("#staging-count"),
  stagingChips: document.querySelector("#staging-chips"),
  copyStagedPrompt: document.querySelector("#copy-staged-prompt"),
  copyStagedLines: document.querySelector("#copy-staged-lines"),
  clearStaged: document.querySelector("#clear-staged")
};

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const normalize = (value) => String(value ?? "").normalize("NFKC").toLocaleLowerCase();

function allSeeds() {
  return state.data.categories.flatMap((category) => category.seeds);
}

function categoryById(id) {
  return state.data.categories.find((category) => category.id === id);
}

function filteredSeeds() {
  const query = normalize(state.search.trim());
  const seeds = allSeeds().filter((seed) => {
    if (state.category !== "all" && seed.category !== state.category) return false;
    if (!query) return true;
    return [
      seed.name,
      seed.englishName,
      seed.baseName,
      seed.englishBaseName,
      seed.context,
      seed.englishContext,
      seed.style,
      seed.englishStyle,
      seed.categoryName
    ].some((value) => normalize(value).includes(query));
  });

  return seeds.sort((a, b) => {
    if (state.sort === "name") return a.name.localeCompare(b.name, "zh-Hans-CN");
    if (state.sort === "englishName") return a.englishName.localeCompare(b.englishName, "en");
    return a.priority - b.priority || a.categoryName.localeCompare(b.categoryName, "zh-Hans-CN");
  });
}

function renderDimensionTabs() {
  if (!elements.categoryDimensionTabs) return;
  const totalCount = state.data ? state.data.meta.categoryCount : 51;
  const tabs = [
    { key: "all", label: "全部", count: totalCount, icon: ICONS.all },
    ...DIMENSIONS.map((d) => ({
      key: d.key,
      label: d.label,
      icon: d.icon,
      count: state.data ? state.data.categories.filter((cat) => d.ids.includes(cat.id)).length : d.ids.length,
      color: d.color
    }))
  ];
  elements.categoryDimensionTabs.innerHTML = tabs.map((tab) => `
    <button type="button" class="dimension-tab-btn${state.dimension === tab.key ? " is-active" : ""}" data-dimension-tab="${tab.key}" style="${tab.color ? `--tab-color: ${tab.color}` : ""}">
      <span class="tab-icon">${tab.icon}</span>
      <span class="tab-label">${tab.label}</span>
      <small>${tab.count}</small>
    </button>
  `).join("");
}

function renderComboDimensionTabs() {
  if (!elements.comboDimensionTabs) return;
  const totalCount = state.data ? state.data.meta.categoryCount : 51;
  const tabs = [
    { key: "all", label: "全部", count: totalCount, icon: ICONS.all },
    ...DIMENSIONS.map((d) => ({
      key: d.key,
      label: d.label,
      icon: d.icon,
      count: state.data ? state.data.categories.filter((cat) => d.ids.includes(cat.id)).length : d.ids.length,
      color: d.color
    }))
  ];
  elements.comboDimensionTabs.innerHTML = tabs.map((tab) => `
    <button type="button" class="dimension-tab-btn${state.combo.dimension === tab.key ? " is-active" : ""}" data-combo-dimension-tab="${tab.key}" style="${tab.color ? `--tab-color: ${tab.color}` : ""}">
      <span class="tab-icon">${tab.icon}</span>
      <span class="tab-label">${tab.label}</span>
      <small>${tab.count}</small>
    </button>
  `).join("");
}

function renderCategories({ preserveScroll = true } = {}) {
  renderDimensionTabs();
  const query = normalize(state.categoryFilter.trim());
  const activeDim = state.dimension;

  const filteredCategories = state.data.categories.filter((cat) => {
    if (!query) return true;
    return [cat.id, cat.name, cat.englishName].some((val) => normalize(val).includes(query));
  });

  if (elements.categoryFilterClear) {
    elements.categoryFilterClear.hidden = !query;
  }
  if (elements.categoryCounter) {
    elements.categoryCounter.textContent = query ? filteredCategories.length : state.data.meta.categoryCount;
  }

  let html = "";
  if (!query && activeDim === "all") {
    html += `
      <div class="category-master-item">
        <button type="button" class="category-button is-master${state.category === "all" ? " is-active" : ""}" data-category="all" aria-pressed="${state.category === "all"}">
          <span>
            <b><span class="master-badge" aria-hidden="true">${ICONS.all}</span>全部种子</b>
            <small lang="en">All ${state.data.meta.categoryCount} Categories</small>
          </span>
          <em>${state.data.meta.seedCount.toLocaleString("zh-CN")}</em>
        </button>
      </div>
    `;
  }

  const dimensionsToRender = activeDim === "all"
    ? DIMENSIONS
    : DIMENSIONS.filter((d) => d.key === activeDim);

  for (const dim of dimensionsToRender) {
    const catsInDim = filteredCategories.filter((cat) => dim.ids.includes(cat.id));
    if (!catsInDim.length) continue;

    html += `
      <section class="category-group-section" data-dimension="${dim.key}">
        <div class="category-group-header" style="--dim-color: ${dim.color}">
          <div class="group-header-left">
            <span class="group-icon">${dim.icon}</span>
            <strong class="group-name">${dim.label}</strong>
            <small class="group-en" lang="en">${dim.englishLabel}</small>
          </div>
          <span class="group-badge">${catsInDim.length}</span>
        </div>
        <div class="category-group-list">
          ${catsInDim.map((category) => {
            const isActive = state.category === category.id;
            return `
              <button type="button" class="category-button${isActive ? " is-active" : ""}" data-category="${escapeHtml(category.id)}" aria-pressed="${isActive}">
                <span>
                  <b><i class="dimension-dot" style="--dim-color: ${dim.color}" title="${dim.label}"></i>${escapeHtml(category.name)}</b>
                  <small lang="en">${escapeHtml(category.englishName)}</small>
                </span>
                <em>${category.count}</em>
              </button>
            `;
          }).join("")}
        </div>
      </section>
    `;
  }

  if (!html) {
    html = '<p class="empty-note">没有匹配的分类。</p>';
  }

  const prevScroll = preserveScroll ? elements.categoryList.scrollTop : 0;
  elements.categoryList.innerHTML = html;
  if (preserveScroll && prevScroll > 0) {
    elements.categoryList.scrollTop = prevScroll;
  }
}

function resultMarkup(seed) {
  const showZh = state.language !== "en";
  const showEn = state.language !== "zh";
  const visibleNameLength = state.language === "en" ? seed.englishName.length : seed.name.length;
  const hasLongName = visibleNameLength > (state.language === "en" ? 24 : 13);
  const isStaged = state.staged.some((item) => item.id === seed.id);
  const dim = getCategoryDimension(seed.category);

  return `
    <li class="seed-item" data-seed-id="${seed.id}">
      <div class="seed-tile language-${state.language}${hasLongName ? " has-long-name" : ""}${isStaged ? " is-staged" : ""}">
        <span class="seed-meta">
          <span class="rank" aria-label="分类内热度排名 ${seed.priority}">${String(seed.priority).padStart(2, "0")}</span>
          <span class="seed-category"><i class="dimension-dot" style="--dim-color: ${dim.color}"></i>${escapeHtml(state.language === "en" ? seed.categoryEnglishName : seed.categoryName)}</span>
        </span>
        <div class="seed-name" data-copy="${seed.id}" role="button" tabindex="0" title="点击复制完整提示词">
          ${showZh ? `<strong lang="zh-CN">${escapeHtml(seed.name)}</strong>` : ""}
          ${showEn ? `<span lang="en">${escapeHtml(seed.englishName)}</span>` : ""}
        </div>
        <div class="seed-actions-row">
          <button type="button" class="seed-copy-btn" data-copy="${seed.id}" title="复制提示词">
            <span>${state.language === "en" ? "COPY" : "复制"}</span>
          </button>
          <button type="button" class="seed-stage-btn${isStaged ? " is-staged" : ""}" data-stage="${seed.id}" title="${isStaged ? "移出暂存篮" : "加入暂存篮"}" aria-pressed="${isStaged}">
            <span>${isStaged ? "已暂存" : "+ 暂存"}</span>
          </button>
        </div>
      </div>
    </li>
  `;
}

function seedLine(seed, language = state.language) {
  if (language === "zh") return seed.name;
  if (language === "en") return seed.englishName;
  return `${seed.name} / ${seed.englishName}`;
}

function seedsLinesText(seeds, language = state.language) {
  return seeds.map((seed) => seedLine(seed, language)).join("\n");
}

function selectAllCurrent() {
  const currentSeeds = filteredSeeds();
  if (!currentSeeds.length) return;
  const currentIds = new Set(currentSeeds.map((s) => s.id));
  const allAlreadyStaged = currentSeeds.every((s) => state.staged.some((st) => st.id === s.id));

  if (allAlreadyStaged) {
    state.staged = state.staged.filter((s) => !currentIds.has(s.id));
    announceResult(`已取消选中当前 ${currentSeeds.length} 条种子`);
  } else {
    const stagedIds = new Set(state.staged.map((s) => s.id));
    const toAdd = currentSeeds.filter((s) => !stagedIds.has(s.id));
    state.staged = [...state.staged, ...toAdd];
    announceResult(`已全选当前 ${currentSeeds.length} 条种子`);
  }
  renderStagingBasket();
  renderResults({ announce: false });
}

function selectTopN(n = 10) {
  const currentSeeds = filteredSeeds();
  if (!currentSeeds.length) return;
  const topSeeds = currentSeeds.slice(0, n);
  const stagedIds = new Set(state.staged.map((s) => s.id));
  const toAdd = topSeeds.filter((s) => !stagedIds.has(s.id));
  state.staged = [...state.staged, ...toAdd];
  renderStagingBasket();
  renderResults({ announce: false });
  announceResult(`已选中前 ${Math.min(n, topSeeds.length)} 条种子`);
}

function clearStagedSeeds() {
  const count = state.staged.length;
  if (!count) {
    announceResult("暂无已选种子");
    return;
  }
  state.staged = [];
  renderStagingBasket();
  renderResults({ announce: false });
  announceResult("已清空已选种子");
}

function copySelectedLines() {
  if (!state.staged.length) {
    const seeds = filteredSeeds();
    if (!seeds.length) {
      announceResult("当前无匹配种子可复制");
      return;
    }
    const text = seedsLinesText(seeds, state.language);
    copyText(text, `暂无选中项，已复制当前 ${seeds.length} 条种子（一行一个）`);
    return;
  }
  const text = seedsLinesText(state.staged, state.language);
  copyText(text, `已复制 ${state.staged.length} 条已选种子（一行一个）`);
}

function copyAllLines() {
  const seeds = filteredSeeds();
  if (!seeds.length) {
    announceResult("当前无匹配种子可复制");
    return;
  }
  const text = seedsLinesText(seeds, state.language);
  copyText(text, `已复制全部 ${seeds.length} 条种子（一行一个）`);
}

function renderResults({ announce = true } = {}) {
  const results = filteredSeeds();
  const category = state.category === "all"
    ? { name: "全部种子", englishName: "All categories" }
    : categoryById(state.category);

  elements.activeCategory.textContent = state.language === "en" ? category.englishName : category.name;
  if (elements.activeCategoryEn) {
    elements.activeCategoryEn.textContent = state.language === "en" ? category.name : category.englishName;
  }
  elements.resultCount.textContent = results.length.toLocaleString("zh-CN");
  if (elements.selectAllCount) elements.selectAllCount.textContent = results.length.toLocaleString("zh-CN");
  if (elements.selectedCount) elements.selectedCount.textContent = state.staged.length.toLocaleString("zh-CN");

  if (elements.selectAllBtn) {
    const allAlreadyStaged = results.length > 0 && results.every((s) => state.staged.some((st) => st.id === s.id));
    elements.selectAllBtn.classList.toggle("is-active", allAlreadyStaged);
  }

  elements.results.innerHTML = results.slice(0, state.visible).map(resultMarkup).join("");
  elements.status.hidden = results.length > 0;
  elements.status.textContent = results.length ? "" : "没有匹配的种子，试试更短的关键词或切换分类。";
  elements.loadMore.hidden = state.visible >= results.length;
  if (!elements.loadMore.hidden) {
    elements.loadMore.innerHTML = `继续载入 <span>${Math.min(pageSize, results.length - state.visible)}</span> 条`;
  }
  if (announce) announceResult(`${results.length} 条结果`);
}

function announceResult(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  window.clearTimeout(announceResult.timeout);
  announceResult.timeout = window.setTimeout(() => elements.toast.classList.remove("is-visible"), 1800);
}

async function copyText(text, successMessage) {
  if (!text) {
    announceResult("没有可复制的内容");
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }
  announceResult(successMessage);
}

async function copySeed(id) {
  const seed = allSeeds().find((item) => item.id === id);
  if (!seed) return;
  const text = `${seed.name} (${seed.englishName})\n${seed.style}\n${seed.englishStyle}`;
  await copyText(text, `已复制：${seed.name}`);
}

function toggleStageSeed(id) {
  const seed = allSeeds().find((item) => item.id === id);
  if (!seed) return;
  const exists = state.staged.some((item) => item.id === id);
  state.staged = exists
    ? state.staged.filter((item) => item.id !== id)
    : [...state.staged, seed];
  renderStagingBasket();
  renderResults({ announce: false });
  announceResult(exists ? `已移出暂存篮：${seed.name}` : `已加入暂存篮：${seed.name}`);
}

function renderStagingBasket() {
  if (!elements.stagingBasket) return;
  const count = state.staged.length;
  elements.stagingBasket.hidden = count === 0;
  if (count === 0) return;
  elements.stagingCount.textContent = count;
  elements.stagingChips.innerHTML = state.staged.map((seed) => `
    <span class="staged-chip">
      <span>${escapeHtml(seedLabel(seed, state.language))}</span>
      <button type="button" data-unstage="${seed.id}" aria-label="移除 ${escapeHtml(seed.name)}">×</button>
    </span>
  `).join("");
}

function copyStagedPrompt() {
  if (!state.staged.length) return;
  let text = "";
  if (state.combo.promptFormat === "midjourney") {
    if (state.language === "en") {
      text = `${state.staged.map((s) => s.englishName).join(", ")}, cinematic lighting, masterpiece, photorealistic, 8k --v 6.0`;
    } else if (state.language === "zh") {
      text = `${state.staged.map((s) => s.name).join(", ")}, 电影级光影, 杰作, 高清画质 --v 6.0`;
    } else {
      text = `${state.staged.map((s) => `${s.name} (${s.englishName})`).join(", ")}, cinematic lighting, masterpiece, 8k --v 6.0`;
    }
  } else if (state.combo.promptFormat === "plus") {
    text = state.staged.map((s) => seedLabel(s, state.language)).join(" + ");
  } else {
    text = state.staged.map((s) => seedLabel(s, state.language)).join(", ");
  }
  copyText(text, `已合并复制 ${state.staged.length} 条暂存种子`);
}

function setView(view) {
  state.view = view;
  document.querySelectorAll("[data-view]").forEach((button) => {
    const active = button.dataset.view === view;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.querySelector("#combiner-view").hidden = view !== "combiner";
  document.querySelector("#combiner-view").classList.toggle("is-active", view === "combiner");
  document.querySelector("#library-view").hidden = view !== "library";
  document.querySelector("#library-view").classList.toggle("is-active", view === "library");
  document.querySelector(".skip-link").href = view === "combiner" ? "#combo-results" : "#results";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderTheme() {
  const isLight = state.theme === "light";
  const toggle = document.querySelector("#theme-toggle");
  document.documentElement.dataset.theme = isLight ? "light" : "dark";
  if (!toggle) return;
  toggle.setAttribute("aria-pressed", String(isLight));
  toggle.setAttribute("aria-label", isLight ? "切换到夜间模式" : "切换到日间模式");
  toggle.querySelector(".theme-toggle-icon").innerHTML = isLight ? ICONS.moon : ICONS.sun;
  toggle.querySelector(".theme-toggle-label").textContent = isLight ? "夜间模式" : "日间模式";
  document.querySelector("#theme-color")?.setAttribute("content", isLight ? "#f7f5f0" : "#211d19");
}

function setTheme(theme) {
  state.theme = theme === "light" ? "light" : "dark";
  try {
    localStorage.setItem("50-seeds-theme", state.theme);
  } catch {}
  renderTheme();
}

function comboCategoryId(slot) {
  return slot === "a" ? state.combo.categoryA : state.combo.categoryB;
}

function comboCategory(slot) {
  return categoryById(comboCategoryId(slot));
}

function comboPool(slot) {
  return effectivePool(comboCategory(slot).seeds, state.combo.pinned[slot]);
}

function renderComboCategoryList({ preserveScroll = true } = {}) {
  renderComboDimensionTabs();
  const query = normalize(state.combo.categoryFilter.trim());
  const activeDim = state.combo.dimension;

  const filtered = state.data.categories.filter((category) => {
    if (!query) return true;
    return [category.id, category.name, category.englishName].some((val) => normalize(val).includes(query));
  });

  if (elements.comboCategoryFilterClear) {
    elements.comboCategoryFilterClear.hidden = !query;
  }
  if (elements.comboCategoryCounter) {
    elements.comboCategoryCounter.textContent = query ? filtered.length : state.data.meta.categoryCount;
  }

  const dimensionsToRender = activeDim === "all"
    ? DIMENSIONS
    : DIMENSIONS.filter((d) => d.key === activeDim);

  let html = "";
  for (const dim of dimensionsToRender) {
    const catsInDim = filtered.filter((cat) => dim.ids.includes(cat.id));
    if (!catsInDim.length) continue;

    html += `
      <section class="category-group-section" data-dimension="${dim.key}">
        <div class="category-group-header" style="--dim-color: ${dim.color}">
          <div class="group-header-left">
            <span class="group-icon">${dim.icon}</span>
            <strong class="group-name">${dim.label}</strong>
            <small class="group-en" lang="en">${dim.englishLabel}</small>
          </div>
          <span class="group-badge">${catsInDim.length}</span>
        </div>
        <div class="category-group-list">
          ${catsInDim.map((category) => {
            const isA = state.combo.categoryA === category.id;
            const isB = state.combo.mode === "double" && state.combo.categoryB === category.id;
            return `
              <button type="button" class="category-button${isA || isB ? " is-active" : ""}" data-combo-category="${category.id}" aria-label="将 ${escapeHtml(category.name)} 设置为分类 ${state.combo.focusedSource.toLocaleUpperCase()}">
                <span>
                  <b><i class="dimension-dot" style="--dim-color: ${dim.color}" title="${dim.label}"></i>${escapeHtml(category.name)}</b>
                  <small lang="en">${escapeHtml(category.englishName)}</small>
                </span>
                <em>${isA ? "A" : isB ? "B" : category.count}</em>
              </button>
            `;
          }).join("")}
        </div>
      </section>
    `;
  }

  if (!html) {
    html = '<p class="empty-note">没有匹配的分类。</p>';
  }

  const prevScroll = preserveScroll ? elements.comboCategoryList.scrollTop : 0;
  elements.comboCategoryList.innerHTML = html;
  if (preserveScroll && prevScroll > 0) {
    elements.comboCategoryList.scrollTop = prevScroll;
  }
}

function sortedComboCategories(slot) {
  const query = normalize(state.combo.categorySearch[slot]).trim();
  const sort = state.combo.categorySort[slot];
  const categories = state.data.categories.filter((category) => [category.id, category.name, category.englishName]
    .some((value) => normalize(value).includes(query)));
  if (sort === "name") return categories.sort((a, b) => a.name.localeCompare(b.name, "zh-Hans-CN"));
  if (sort === "englishName") return categories.sort((a, b) => a.englishName.localeCompare(b.englishName, "en"));
  return categories;
}

function renderCategoryPicker(slot) {
  const picker = elements.categoryPickers[slot];
  const selectedId = comboCategoryId(slot);
  const selected = categoryById(selectedId);
  const isOpen = state.combo.openPicker === slot;
  picker.root.classList.toggle("is-open", isOpen);
  picker.trigger.setAttribute("aria-expanded", String(isOpen));
  picker.trigger.disabled = slot === "b" && state.combo.mode === "single";
  picker.current.innerHTML = `<strong>${escapeHtml(selected.name)}</strong><span>${escapeHtml(selected.englishName)} · ${selected.count}</span>`;
  picker.menu.hidden = !isOpen;
  picker.search.value = state.combo.categorySearch[slot];
  
  const sort = state.combo.categorySort[slot];
  const query = normalize(state.combo.categorySearch[slot]).trim();

  let optionsHtml = "";
  if (sort === "default" && !query) {
    for (const dim of DIMENSIONS) {
      const catsInDim = state.data.categories.filter((cat) => dim.ids.includes(cat.id));
      if (!catsInDim.length) continue;
      optionsHtml += `
        <div class="picker-group-section">
          <div class="picker-group-header" style="--dim-color: ${dim.color}">
            <span>${dim.icon} ${dim.label} <small lang="en">${dim.englishLabel}</small></span>
            <span class="picker-group-count">${catsInDim.length}</span>
          </div>
          <div class="picker-group-items">
            ${catsInDim.map((category) => {
              const isSelected = category.id === selectedId;
              const isOtherSide = state.combo.mode === "double" && ((slot === "a" && category.id === state.combo.categoryB) || (slot === "b" && category.id === state.combo.categoryA));
              return `
                <button type="button" class="picker-option${isSelected ? " is-selected" : ""}" data-picker-slot="${slot}" data-picker-category="${category.id}" role="option" aria-selected="${isSelected}">
                  <span>
                    <b><i class="dimension-dot" style="--dim-color: ${dim.color}"></i>${escapeHtml(category.name)}</b>
                    <small>${escapeHtml(category.englishName)} · ${category.id}</small>
                  </span>
                  <em>${isSelected ? "当前" : isOtherSide ? "另一侧" : `${category.count} 项`}</em>
                </button>
              `;
            }).join("")}
          </div>
        </div>
      `;
    }
  } else {
    optionsHtml = sortedComboCategories(slot).map((category) => {
      const isSelected = category.id === selectedId;
      const isOtherSide = state.combo.mode === "double" && ((slot === "a" && category.id === state.combo.categoryB) || (slot === "b" && category.id === state.combo.categoryA));
      const dim = getCategoryDimension(category.id);
      return `
        <button type="button" class="picker-option${isSelected ? " is-selected" : ""}" data-picker-slot="${slot}" data-picker-category="${category.id}" role="option" aria-selected="${isSelected}">
          <span>
            <b><i class="dimension-dot" style="--dim-color: ${dim.color}" title="${dim.label}"></i>${escapeHtml(category.name)}</b>
            <small>${escapeHtml(category.englishName)} · ${category.id}</small>
          </span>
          <em>${isSelected ? "当前" : isOtherSide ? "另一侧" : `${category.count} 项`}</em>
        </button>
      `;
    }).join("") || '<p class="empty-note">没有匹配的分类。</p>';
  }

  picker.options.innerHTML = optionsHtml;
  picker.root.querySelectorAll("[data-picker-sort]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.pickerSort === state.combo.categorySort[slot]);
  });
}

function renderCategoryPickers() {
  renderCategoryPicker("a");
  renderCategoryPicker("b");
}

function closeCategoryPickers() {
  state.combo.openPicker = null;
  renderCategoryPickers();
}

function toggleCategoryPicker(slot) {
  state.combo.openPicker = state.combo.openPicker === slot ? null : slot;
  renderCategoryPickers();
  if (state.combo.openPicker === slot) elements.categoryPickers[slot].search.focus();
}

function setFocusedSource(slot) {
  state.combo.focusedSource = slot;
  renderSourceFocus();
  renderComboCategoryList();
}

function renderSourceFocus() {
  document.querySelectorAll(".combo-source").forEach((source) => {
    const focused = source.dataset.source === state.combo.focusedSource;
    source.classList.toggle("is-focused", focused);
    const button = source.querySelector("[data-focus-source]");
    button.textContent = focused ? "正在编辑" : "编辑这一侧";
  });
}

function renderPinOptions(slot) {
  const category = comboCategory(slot);
  const query = normalize(state.combo.pinSearch[slot]);
  const pinned = new Set(state.combo.pinned[slot]);
  const seeds = category.seeds.filter((seed) => [seed.name, seed.englishName, seed.baseName, seed.englishBaseName]
    .some((value) => normalize(value).includes(query)));
  document.querySelector(`#pin-options-${slot}`).innerHTML = seeds.map((seed) => `
    <button type="button" class="pin-option${pinned.has(seed.id) ? " is-pinned" : ""}" data-pin-slot="${slot}" data-pin-id="${seed.id}" aria-pressed="${pinned.has(seed.id)}">
      <span><b>${escapeHtml(seed.name)}</b><small>${escapeHtml(seed.englishName)}</small></span>
      <em>${pinned.has(seed.id) ? "已固定" : "固定"}</em>
    </button>
  `).join("") || "<p class=\"empty-note\">没有匹配的种子。</p>";
}

function renderPinned(slot) {
  const category = comboCategory(slot);
  const pinned = new Set(state.combo.pinned[slot]);
  const seeds = category.seeds.filter((seed) => pinned.has(seed.id));
  document.querySelector(`#pin-count-${slot}`).textContent = seeds.length;
  document.querySelector(`#pool-summary-${slot}`).textContent = seeds.length
    ? `仅使用已固定的 ${seeds.length} 项`
    : `使用整类 ${category.count} 项`;
  document.querySelector(`#pin-chips-${slot}`).innerHTML = seeds.map((seed) => `
    <button type="button" data-remove-pin="${seed.id}" data-remove-slot="${slot}" title="取消固定">
      ${escapeHtml(seedLabel(seed, state.language))}<span>取消</span>
    </button>
  `).join("");
  renderPinOptions(slot);
}

function renderCombinationMath() {
  const poolA = comboPool("a");
  const poolB = state.combo.mode === "double" ? comboPool("b") : null;
  const total = combinationCount(poolA, poolB);
  elements.mathA.textContent = poolA.length;
  elements.mathB.textContent = poolB ? poolB.length : "1";
  elements.combinationTotal.textContent = total.toLocaleString("zh-CN");
  document.querySelector(".combination-math").classList.toggle("is-single", state.combo.mode === "single");
  document.querySelector('[data-source="b"]').classList.toggle("is-disabled", state.combo.mode === "single");
  renderCategoryPickers();
  document.querySelector("#toggle-pins-b").disabled = state.combo.mode === "single";
}

function isFavorite(id) {
  return state.combo.favorites.some((item) => item.id === id);
}

function renderComboResults() {
  elements.comboResults.innerHTML = state.combo.results.map((combination, index) => {
    const seedA = combination.seeds[0];
    const seedB = combination.seeds[1];
    const isPinnedA = seedA && state.combo.pinned.a.includes(seedA.id);
    const isPinnedB = seedB && state.combo.pinned.b.includes(seedB.id);

    const termMarkupA = seedA ? `
      <div class="combo-term">
        <div class="combo-term-main">
          ${state.language !== "en" ? `<strong lang="zh-CN">${escapeHtml(seedA.name)}</strong>` : ""}
          ${state.language !== "zh" ? `<span lang="en">${escapeHtml(seedA.englishName)}</span>` : ""}
        </div>
        <div class="combo-term-meta">
          <small>${escapeHtml(state.language === "en" ? seedA.categoryEnglishName : seedA.categoryName)}</small>
          <button type="button" class="direct-pin-btn${isPinnedA ? " is-pinned" : ""}" data-direct-pin-slot="a" data-direct-pin-id="${seedA.id}" title="${isPinnedA ? "取消固定该词条" : "固定该词条继续摇号"}" aria-pressed="${isPinnedA}">
            <span class="pin-icon" aria-hidden="true">${isPinnedA ? ICONS.pinSolid : ICONS.pin}</span>
            <span class="pin-text">${isPinnedA ? "已固定" : "固定"}</span>
          </button>
        </div>
      </div>
    ` : "";

    const termMarkupB = seedB ? `
      <div class="combo-term">
        <div class="combo-term-main">
          ${state.language !== "en" ? `<strong lang="zh-CN">${escapeHtml(seedB.name)}</strong>` : ""}
          ${state.language !== "zh" ? `<span lang="en">${escapeHtml(seedB.englishName)}</span>` : ""}
        </div>
        <div class="combo-term-meta">
          <small>${escapeHtml(state.language === "en" ? seedB.categoryEnglishName : seedB.categoryName)}</small>
          <button type="button" class="direct-pin-btn${isPinnedB ? " is-pinned" : ""}" data-direct-pin-slot="b" data-direct-pin-id="${seedB.id}" title="${isPinnedB ? "取消固定该词条" : "固定该词条继续摇号"}" aria-pressed="${isPinnedB}">
            <span class="pin-icon" aria-hidden="true">${isPinnedB ? ICONS.pinSolid : ICONS.pin}</span>
            <span class="pin-text">${isPinnedB ? "已固定" : "固定"}</span>
          </button>
        </div>
      </div>
    ` : "";

    const equationMarkup = seedB ? `${termMarkupA}<span class="combo-plus">+</span>${termMarkupB}` : termMarkupA;

    return `
      <li class="combo-row" data-combination-id="${combination.id}" style="animation-delay: ${index * 35}ms">
        <span class="combo-rank" title="第 ${index + 1} 组 (快捷键 ${index + 1})">${String(index + 1).padStart(2, "0")}</span>
        <div class="combo-equation language-${state.language}">
          ${equationMarkup}
        </div>
        <div class="combo-row-actions">
          <button type="button" data-favorite-combination="${combination.id}" aria-pressed="${isFavorite(combination.id)}">${isFavorite(combination.id) ? "已收藏" : "收藏"}</button>
          <button type="button" data-copy-combination="${combination.id}">复制组合</button>
        </div>
      </li>
    `;
  }).join("") || '<li class="empty-note">当前范围没有可用组合。</li>';
}

function saveFavorites() {
  localStorage.setItem("50-seeds-favorites", JSON.stringify(state.combo.favorites));
}

function renderFavorites() {
  elements.favoriteCount.textContent = state.combo.favorites.length;
  elements.favoriteList.innerHTML = state.combo.favorites.length
    ? state.combo.favorites.map((combination) => `
      <div class="favorite-chip">
        <span>${escapeHtml(combinationLine(combination, state.language, state.combo.promptFormat))}</span>
        <button type="button" data-remove-favorite="${combination.id}">移除</button>
      </div>
    `).join("")
    : "<p>还没有收藏组合。</p>";
}

function shuffleResults({ announce = true } = {}) {
  const poolA = comboPool("a");
  const poolB = state.combo.mode === "double" ? comboPool("b") : null;
  state.combo.results = randomCombinations(poolA, poolB, 5);
  renderComboResults();
  if (announce) announceResult(`已生成 ${state.combo.results.length} 组组合`);
}

function togglePin(slot, id) {
  const pins = state.combo.pinned[slot];
  state.combo.pinned[slot] = pins.includes(id) ? pins.filter((item) => item !== id) : [...pins, id];
  renderPinned(slot);
  renderCombinationMath();
  shuffleResults({ announce: false });
}

function toggleDirectPin(slot, id) {
  const seed = allSeeds().find((s) => s.id === id);
  const pins = state.combo.pinned[slot];
  const isPinned = pins.includes(id);
  state.combo.pinned[slot] = isPinned ? pins.filter((item) => item !== id) : [...pins, id];
  renderPinned(slot);
  renderCombinationMath();
  renderComboResults();
  announceResult(isPinned ? `已取消固定「${seed ? seed.name : id}」` : `已固定「${seed ? seed.name : id}」继续摇号`);
}

function setComboCategory(slot, categoryId) {
  if (slot === "a") state.combo.categoryA = categoryId;
  else state.combo.categoryB = categoryId;
  state.combo.pinned[slot] = [];
  state.combo.pinSearch[slot] = "";
  state.combo.categorySearch[slot] = "";
  state.combo.categorySort[slot] = "default";
  document.querySelector(`#pin-search-${slot}`).value = "";
  closeCategoryPickers();

  // In-place button updates: rock solid, 0 scroll jump
  elements.comboCategoryList.querySelectorAll("[data-combo-category]").forEach((btn) => {
    const catId = btn.dataset.comboCategory;
    const isA = state.combo.categoryA === catId;
    const isB = state.combo.mode === "double" && state.combo.categoryB === catId;
    btn.classList.toggle("is-active", isA || isB);
    const em = btn.querySelector("em");
    if (em) {
      em.textContent = isA ? "A" : isB ? "B" : (categoryById(catId)?.count || "50");
    }
  });

  renderPinned(slot);
  renderCombinationMath();
  shuffleResults({ announce: false });
}

function setComboMode(mode) {
  state.combo.mode = mode;
  if (mode === "single" && state.combo.openPicker === "b") state.combo.openPicker = null;
  document.querySelectorAll("[data-combo-mode]").forEach((button) => {
    const active = button.dataset.comboMode === mode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderComboCategoryList();
  renderCombinationMath();
  shuffleResults();
}

function setPromptFormat(format) {
  state.combo.promptFormat = format;
  document.querySelectorAll("[data-prompt-format]").forEach((button) => {
    const active = button.dataset.promptFormat === format;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderFavorites();
  const formatNames = { plus: "A + B 连接", comma: "AI 逗号分割", midjourney: "Midjourney 预设" };
  announceResult(`已切换导出格式：${formatNames[format] || format}`);
}

function toggleFavorite(id) {
  const current = state.combo.results.find((item) => item.id === id);
  const exists = isFavorite(id);
  state.combo.favorites = exists
    ? state.combo.favorites.filter((item) => item.id !== id)
    : [...state.combo.favorites, current];
  saveFavorites();
  renderComboResults();
  renderFavorites();
  announceResult(exists ? "已取消收藏" : "已加入收藏");
}

function downloadJson(filename, combinations) {
  if (!combinations.length) {
    announceResult("没有可下载的组合");
    return;
  }
  const payload = combinations.map((combination, index) => ({
    index: index + 1,
    combination: combinationLine(combination, state.language, state.combo.promptFormat),
    seeds: combination.seeds.map((seed) => ({
      id: seed.id,
      name: seed.name,
      englishName: seed.englishName,
      category: seed.category,
      categoryName: seed.categoryName,
      categoryEnglishName: seed.categoryEnglishName,
      style: seed.style,
      englishStyle: seed.englishStyle,
      priority: seed.priority
    }))
  }));
  const blob = new Blob([`${JSON.stringify(payload, null, 2)}\n`], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.hidden = true;
  document.body.append(link);
  link.click();
  window.setTimeout(() => {
    URL.revokeObjectURL(link.href);
    link.remove();
  }, 1000);
  announceResult(`已下载 ${combinations.length} 组组合`);
}

function batchCombinations() {
  const poolA = comboPool("a");
  const poolB = state.combo.mode === "double" ? comboPool("b") : null;
  const value = elements.batchCount.value;
  if (value === "all") return buildAllCombinations(poolA, poolB);
  return randomCombinations(poolA, poolB, Number(value));
}

function loadFavorites() {
  try {
    const stored = JSON.parse(localStorage.getItem("50-seeds-favorites") || "[]");
    if (Array.isArray(stored)) state.combo.favorites = stored.filter((item) => item?.id && Array.isArray(item.seeds));
  } catch {
    state.combo.favorites = [];
  }
}

function renderLanguage() {
  document.documentElement.dataset.language = state.language;
  document.querySelectorAll("[data-language]").forEach((button) => {
    const active = button.dataset.language === state.language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderResults({ announce: false });
  renderPinned("a");
  renderPinned("b");
  renderComboResults();
  renderFavorites();
  renderStagingBasket();
}

function bindLibraryEvents() {
  elements.categoryDimensionTabs?.addEventListener("click", (event) => {
    const tabBtn = event.target.closest("[data-dimension-tab]");
    if (!tabBtn) return;
    state.dimension = tabBtn.dataset.dimensionTab;
    renderCategories();
  });

  elements.categoryFilter?.addEventListener("input", (event) => {
    state.categoryFilter = event.target.value;
    renderCategories();
  });

  elements.categoryFilterClear?.addEventListener("click", () => {
    state.categoryFilter = "";
    if (elements.categoryFilter) elements.categoryFilter.value = "";
    renderCategories();
    elements.categoryFilter?.focus();
  });

  elements.categoryList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    const newCategory = button.dataset.category;
    if (state.category === newCategory) return;
    state.category = newCategory;
    state.visible = pageSize;

    // In-place button updates: completely avoids sidebar jumping or scroll shifting
    elements.categoryList.querySelectorAll(".category-button").forEach((btn) => {
      const isActive = btn.dataset.category === newCategory;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });

    renderResults();

    // Only scroll to results on mobile devices where results panel is stacked below category list
    if (window.innerWidth <= 820) {
      document.querySelector(".results-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  elements.search.addEventListener("input", () => {
    state.search = elements.search.value;
    state.visible = pageSize;
    renderResults({ announce: false });
  });

  elements.sort.addEventListener("change", () => {
    state.sort = elements.sort.value;
    renderResults();
  });

  document.querySelector(".language-toggle").addEventListener("click", (event) => {
    const button = event.target.closest("[data-language]");
    if (!button) return;
    state.language = button.dataset.language;
    renderLanguage();
  });

  elements.results.addEventListener("click", (event) => {
    const stageBtn = event.target.closest("[data-stage]");
    if (stageBtn) {
      event.stopPropagation();
      toggleStageSeed(stageBtn.dataset.stage);
      return;
    }
    const copyTarget = event.target.closest("[data-copy]");
    if (copyTarget) {
      if (event.shiftKey) {
        toggleStageSeed(copyTarget.dataset.copy);
      } else {
        copySeed(copyTarget.dataset.copy);
      }
    }
  });

  elements.loadMore.addEventListener("click", () => {
    state.visible += pageSize;
    renderResults({ announce: false });
  });

  elements.selectAllBtn?.addEventListener("click", selectAllCurrent);
  elements.selectTop10Btn?.addEventListener("click", () => selectTopN(10));
  elements.clearStagedBtn?.addEventListener("click", clearStagedSeeds);
  elements.copySelectedLinesBtn?.addEventListener("click", copySelectedLines);
  elements.copyAllLinesBtn?.addEventListener("click", copyAllLines);

  elements.copyStagedPrompt?.addEventListener("click", copyStagedPrompt);
  elements.copyStagedLines?.addEventListener("click", copySelectedLines);
  elements.clearStaged?.addEventListener("click", () => {
    state.staged = [];
    renderStagingBasket();
    renderResults({ announce: false });
    announceResult("已清空暂存篮");
  });
  elements.stagingChips?.addEventListener("click", (event) => {
    const unstageBtn = event.target.closest("[data-unstage]");
    if (unstageBtn) {
      toggleStageSeed(unstageBtn.dataset.unstage);
    }
  });
}

function bindComboEvents() {
  elements.comboDimensionTabs?.addEventListener("click", (event) => {
    const tabBtn = event.target.closest("[data-combo-dimension-tab]");
    if (!tabBtn) return;
    state.combo.dimension = tabBtn.dataset.comboDimensionTab;
    renderComboCategoryList();
  });

  elements.comboCategoryFilter?.addEventListener("input", (event) => {
    state.combo.categoryFilter = event.target.value;
    renderComboCategoryList();
  });

  elements.comboCategoryFilterClear?.addEventListener("click", () => {
    state.combo.categoryFilter = "";
    if (elements.comboCategoryFilter) elements.comboCategoryFilter.value = "";
    renderComboCategoryList();
    elements.comboCategoryFilter?.focus();
  });

  document.querySelectorAll("[data-view]").forEach((button) => button.addEventListener("click", () => setView(button.dataset.view)));
  document.querySelectorAll("[data-focus-source]").forEach((button) => button.addEventListener("click", () => {
    setFocusedSource(button.dataset.focusSource);
  }));
  elements.comboCategoryList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-combo-category]");
    if (button) setComboCategory(state.combo.focusedSource, button.dataset.comboCategory);
  });

  for (const slot of ["a", "b"]) {
    const picker = elements.categoryPickers[slot];
    picker.trigger.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleCategoryPicker(slot);
    });
    picker.search.addEventListener("input", (event) => {
      state.combo.categorySearch[slot] = event.target.value;
      renderCategoryPicker(slot);
    });
    picker.menu.addEventListener("click", (event) => {
      const sortButton = event.target.closest("[data-picker-sort]");
      if (sortButton) {
        state.combo.categorySort[slot] = sortButton.dataset.pickerSort;
        renderCategoryPicker(slot);
        return;
      }
      const categoryButton = event.target.closest("[data-picker-category]");
      if (categoryButton) setComboCategory(slot, categoryButton.dataset.pickerCategory);
    });
  }
  document.addEventListener("click", (event) => {
    if (state.combo.openPicker && !event.target.closest(".category-picker")) closeCategoryPickers();
  });

  for (const slot of ["a", "b"]) {
    const toggle = document.querySelector(`#toggle-pins-${slot}`);
    const panel = document.querySelector(`#pin-panel-${slot}`);
    toggle.addEventListener("click", () => {
      panel.hidden = !panel.hidden;
      toggle.setAttribute("aria-expanded", String(!panel.hidden));
      if (!panel.hidden) document.querySelector(`#pin-search-${slot}`).focus();
    });
    document.querySelector(`#pin-search-${slot}`).addEventListener("input", (event) => {
      state.combo.pinSearch[slot] = event.target.value;
      renderPinOptions(slot);
    });
    document.querySelector(`#pin-options-${slot}`).addEventListener("click", (event) => {
      const button = event.target.closest("[data-pin-id]");
      if (button) togglePin(slot, button.dataset.pinId);
    });
    document.querySelector(`#pin-chips-${slot}`).addEventListener("click", (event) => {
      const button = event.target.closest("[data-remove-pin]");
      if (button) togglePin(slot, button.dataset.removePin);
    });
  }

  document.querySelectorAll("[data-combo-mode]").forEach((button) => button.addEventListener("click", () => setComboMode(button.dataset.comboMode)));
  document.querySelectorAll("[data-prompt-format]").forEach((button) => button.addEventListener("click", () => setPromptFormat(button.dataset.promptFormat)));

  document.querySelector("#shuffle-button").addEventListener("click", () => shuffleResults());
  elements.comboResults.addEventListener("click", (event) => {
    const directPin = event.target.closest("[data-direct-pin-id]");
    if (directPin) {
      toggleDirectPin(directPin.dataset.directPinSlot, directPin.dataset.directPinId);
      return;
    }
    const favorite = event.target.closest("[data-favorite-combination]");
    if (favorite) toggleFavorite(favorite.dataset.favoriteCombination);
    const copy = event.target.closest("[data-copy-combination]");
    if (copy) {
      const combination = state.combo.results.find((item) => item.id === copy.dataset.copyCombination);
      copyText(combinationLine(combination, state.language, state.combo.promptFormat), "已复制 1 组组合");
    }
  });
  elements.favoriteList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove-favorite]");
    if (!button) return;
    state.combo.favorites = state.combo.favorites.filter((item) => item.id !== button.dataset.removeFavorite);
    saveFavorites();
    renderFavorites();
    renderComboResults();
  });
  document.querySelector("#copy-results").addEventListener("click", () => copyText(combinationsText(state.combo.results, state.language, state.combo.promptFormat), `已复制 ${state.combo.results.length} 组，每行一组`));
  document.querySelector("#download-results").addEventListener("click", () => downloadJson("50-seeds-random-combinations.json", state.combo.results));
  document.querySelector("#copy-favorites").addEventListener("click", () => copyText(combinationsText(state.combo.favorites, state.language, state.combo.promptFormat), `已复制 ${state.combo.favorites.length} 组收藏`));
  document.querySelector("#export-favorites").addEventListener("click", () => downloadJson("50-seeds-favorites.json", state.combo.favorites));
  document.querySelector("#clear-favorites").addEventListener("click", () => {
    state.combo.favorites = [];
    saveFavorites();
    renderFavorites();
    renderComboResults();
    announceResult("收藏已清空");
  });
  document.querySelector("#batch-copy").addEventListener("click", () => {
    const combinations = batchCombinations();
    copyText(combinationsText(combinations, state.language, state.combo.promptFormat), `已生成并复制 ${combinations.length} 组`);
  });
  document.querySelector("#batch-download").addEventListener("click", () => downloadJson("50-seeds-batch-combinations.json", batchCombinations()));
}

function setupBackToTop() {
  if (!elements.backToTop) return;
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const shouldShow = window.scrollY > 380;
        elements.backToTop.hidden = !shouldShow;
        elements.backToTop.classList.toggle("is-visible", shouldShow);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  elements.backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function bindGlobalEvents() {
  document.querySelector("#theme-toggle")?.addEventListener("click", () => {
    setTheme(state.theme === "dark" ? "light" : "dark");
  });
  setupBackToTop();
  document.addEventListener("keydown", (event) => {
    const targetTag = document.activeElement ? document.activeElement.tagName : "";
    const isTyping = ["INPUT", "SELECT", "TEXTAREA"].includes(targetTag) || document.activeElement?.isContentEditable;

    if (event.key === "Escape") {
      if (state.combo.openPicker) {
        closeCategoryPickers();
        return;
      }
      if (state.categoryFilter) {
        state.categoryFilter = "";
        if (elements.categoryFilter) elements.categoryFilter.value = "";
        renderCategories();
      }
      if (state.combo.categoryFilter) {
        state.combo.categoryFilter = "";
        if (elements.comboCategoryFilter) elements.comboCategoryFilter.value = "";
        renderComboCategoryList();
      }
      return;
    }

    if (isTyping) return;
    if (event.ctrlKey || event.metaKey || event.altKey) return;

    if (event.key === "/" && state.view === "library") {
      event.preventDefault();
      elements.search.focus();
      return;
    }

    if (event.key === "/" && state.view === "combiner") {
      event.preventDefault();
      elements.comboCategoryFilter.focus();
      return;
    }

    if (state.view === "combiner") {
      if (event.code === "Space" || event.key === " ") {
        event.preventDefault();
        shuffleResults();
        const shuffleBtn = document.querySelector("#shuffle-button");
        if (shuffleBtn) {
          shuffleBtn.classList.add("is-active-pulse");
          setTimeout(() => shuffleBtn.classList.remove("is-active-pulse"), 300);
        }
        return;
      }

      if (event.key >= "1" && event.key <= "5") {
        const idx = Number(event.key) - 1;
        if (state.combo.results[idx]) {
          event.preventDefault();
          const combo = state.combo.results[idx];
          const line = combinationLine(combo, state.language, state.combo.promptFormat);
          copyText(line, `已复制第 ${event.key} 组组合`);
          const row = elements.comboResults.children[idx];
          if (row) {
            row.classList.add("is-copied-pulse");
            setTimeout(() => row.classList.remove("is-copied-pulse"), 400);
          }
          return;
        }
      }

      if (event.key === "a" || event.key === "A") {
        event.preventDefault();
        setFocusedSource("a");
        announceResult("已聚焦通道 A");
        return;
      }

      if ((event.key === "b" || event.key === "B") && state.combo.mode === "double") {
        event.preventDefault();
        setFocusedSource("b");
        announceResult("已聚焦通道 B");
        return;
      }
    }
  });
}

async function initialize() {
  try {
    renderTheme();
    const response = await fetch("./data/seeds.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    state.data = await response.json();
    loadFavorites();
    const seedStat = document.querySelector("#seed-stat");
    if (seedStat) seedStat.textContent = state.data.meta.seedCount.toLocaleString("zh-CN");
    const catStat = document.querySelector("#category-stat");
    if (catStat) catStat.textContent = state.data.meta.categoryCount;
    elements.categoryCounter.textContent = state.data.meta.categoryCount;
    elements.comboCategoryCounter.textContent = state.data.meta.categoryCount;
    elements.sources.innerHTML = state.data.meta.sources.map((source) => `
      <a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">${escapeHtml(source.name)} ↗</a>
    `).join("");
    renderCategories();
    renderResults({ announce: false });
    renderCategoryPickers();
    renderComboCategoryList();
    renderSourceFocus();
    renderPinned("a");
    renderPinned("b");
    renderCombinationMath();
    shuffleResults({ announce: false });
    renderFavorites();
    bindLibraryEvents();
    bindComboEvents();
    bindGlobalEvents();
  } catch (error) {
    elements.status.hidden = false;
    elements.status.textContent = `无法载入数据：${error.message}。请通过本地服务器或 GitHub Pages 打开。`;
    elements.comboResults.innerHTML = `<li class="empty-note">无法载入种子库：${escapeHtml(error.message)}</li>`;
  }
}

initialize();
