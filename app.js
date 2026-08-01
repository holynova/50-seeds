import {
  buildAllCombinations,
  combinationCount,
  combinationLine,
  combinationsText,
  effectivePool,
  randomCombinations,
  seedLabel
} from "./src/combiner.mjs";

const state = {
  data: null,
  category: "all",
  search: "",
  sort: "priority",
  language: "both",
  theme: document.documentElement.dataset.theme === "light" ? "light" : "dark",
  visible: 120,
  view: "combiner",
  combo: {
    mode: "double",
    categoryA: "films",
    categoryB: "lighting_setups",
    focusedSource: "a",
    categorySearch: { a: "", b: "" },
    categorySort: { a: "default", b: "default" },
    openPicker: null,
    pinned: { a: [], b: [] },
    pinSearch: { a: "", b: "" },
    results: [],
    favorites: []
  }
};

const pageSize = 120;
const elements = {
  categoryList: document.querySelector("#category-list"),
  categoryCounter: document.querySelector("#category-counter"),
  search: document.querySelector("#search-input"),
  sort: document.querySelector("#sort-select"),
  activeCategory: document.querySelector("#active-category"),
  activeCategoryEn: document.querySelector("#active-category-en"),
  resultCount: document.querySelector("#result-count"),
  results: document.querySelector("#results"),
  status: document.querySelector("#status"),
  loadMore: document.querySelector("#load-more"),
  toast: document.querySelector("#toast"),
  sources: document.querySelector("#source-links"),
  comboCategoryList: document.querySelector("#combo-category-list"),
  comboCategoryCounter: document.querySelector("#combo-category-counter"),
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
  batchCount: document.querySelector("#batch-count")
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

function renderCategories() {
  const buttons = [
    { id: "all", name: "全部种子", englishName: "All", count: state.data.meta.seedCount },
    ...state.data.categories
  ];
  elements.categoryList.innerHTML = buttons.map((category) => `
    <button type="button" class="category-button${state.category === category.id ? " is-active" : ""}" data-category="${escapeHtml(category.id)}" aria-pressed="${state.category === category.id}">
      <span><b>${escapeHtml(category.name)}</b><small lang="en">${escapeHtml(category.englishName)}</small></span>
      <em>${category.count}</em>
    </button>
  `).join("");
}

function resultMarkup(seed) {
  const showZh = state.language !== "en";
  const showEn = state.language !== "zh";
  const visibleNameLength = state.language === "en" ? seed.englishName.length : seed.name.length;
  const hasLongName = visibleNameLength > (state.language === "en" ? 24 : 13);
  return `
    <li class="seed-item" data-seed-id="${seed.id}">
      <button type="button" class="seed-tile language-${state.language}${hasLongName ? " has-long-name" : ""}" data-copy="${seed.id}" aria-label="复制 ${escapeHtml(seed.name)} 的完整提示词">
        <span class="seed-meta">
          <span class="rank" aria-label="分类内热度排名 ${seed.priority}">${String(seed.priority).padStart(2, "0")}</span>
          <span class="seed-category">${escapeHtml(state.language === "en" ? seed.categoryEnglishName : seed.categoryName)}</span>
        </span>
        <span class="seed-name">
          ${showZh ? `<strong lang="zh-CN">${escapeHtml(seed.name)}</strong>` : ""}
          ${showEn ? `<span lang="en">${escapeHtml(seed.englishName)}</span>` : ""}
        </span>
        <span class="copy-cue"><span>${state.language === "en" ? "COPY PROMPT" : "复制提示词"}</span><span aria-hidden="true">COPY</span></span>
      </button>
    </li>
  `;
}

function renderResults({ announce = true } = {}) {
  const results = filteredSeeds();
  const category = state.category === "all"
    ? { name: "全部种子", englishName: "All categories" }
    : categoryById(state.category);

  elements.activeCategory.textContent = state.language === "en" ? category.englishName : category.name;
  elements.activeCategoryEn.textContent = state.language === "zh" ? category.name : category.englishName.toLocaleUpperCase("en");
  elements.resultCount.textContent = results.length.toLocaleString("zh-CN");
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
  document.documentElement.toggleAttribute("data-theme", isLight);
  if (!toggle) return;
  toggle.setAttribute("aria-pressed", String(isLight));
  toggle.setAttribute("aria-label", isLight ? "切换到夜间模式" : "切换到日间模式");
  toggle.querySelector(".theme-toggle-icon").textContent = isLight ? "☾" : "☼";
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

function renderComboCategoryList() {
  elements.comboCategoryList.innerHTML = state.data.categories.map((category) => {
    const isA = state.combo.categoryA === category.id;
    const isB = state.combo.mode === "double" && state.combo.categoryB === category.id;
    return `
      <button type="button" class="category-button${isA || isB ? " is-active" : ""}" data-combo-category="${category.id}" aria-label="将 ${escapeHtml(category.name)} 设置为分类 ${state.combo.focusedSource.toLocaleUpperCase()}">
        <span><b>${escapeHtml(category.name)}</b><small lang="en">${escapeHtml(category.englishName)}</small></span>
        <em>${isA ? "A" : isB ? "B" : category.count}</em>
      </button>
    `;
  }).join("");
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
  picker.options.innerHTML = sortedComboCategories(slot).map((category) => {
    const isSelected = category.id === selectedId;
    const isOtherSide = state.combo.mode === "double" && ((slot === "a" && category.id === state.combo.categoryB) || (slot === "b" && category.id === state.combo.categoryA));
    return `
      <button type="button" class="picker-option${isSelected ? " is-selected" : ""}" data-picker-slot="${slot}" data-picker-category="${category.id}" role="option" aria-selected="${isSelected}">
        <span><b>${escapeHtml(category.name)}</b><small>${escapeHtml(category.englishName)} · ${category.id}</small></span>
        <em>${isSelected ? "当前" : isOtherSide ? "另一侧" : `${category.count} 项`}</em>
      </button>
    `;
  }).join("") || '<p class="empty-note">没有匹配的分类。</p>';
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

function combinationTermMarkup(seed) {
  const showZh = state.language !== "en";
  const showEn = state.language !== "zh";
  return `
    <span class="combo-term">
      ${showZh ? `<strong>${escapeHtml(seed.name)}</strong>` : ""}
      ${showEn ? `<span>${escapeHtml(seed.englishName)}</span>` : ""}
      <small>${escapeHtml(state.language === "en" ? seed.categoryEnglishName : seed.categoryName)}</small>
    </span>
  `;
}

function isFavorite(id) {
  return state.combo.favorites.some((item) => item.id === id);
}

function renderComboResults() {
  elements.comboResults.innerHTML = state.combo.results.map((combination, index) => `
    <li class="combo-row" data-combination-id="${combination.id}">
      <span class="combo-rank">${String(index + 1).padStart(2, "0")}</span>
      <div class="combo-equation language-${state.language}">
        ${combination.seeds.map(combinationTermMarkup).join('<span class="combo-plus">+</span>')}
      </div>
      <div class="combo-row-actions">
        <button type="button" data-favorite-combination="${combination.id}" aria-pressed="${isFavorite(combination.id)}">${isFavorite(combination.id) ? "已收藏" : "收藏"}</button>
        <button type="button" data-copy-combination="${combination.id}">复制组合</button>
      </div>
    </li>
  `).join("") || '<li class="empty-note">当前范围没有可用组合。</li>';
}

function saveFavorites() {
  localStorage.setItem("50-seeds-favorites", JSON.stringify(state.combo.favorites));
}

function renderFavorites() {
  elements.favoriteCount.textContent = state.combo.favorites.length;
  elements.favoriteList.innerHTML = state.combo.favorites.length
    ? state.combo.favorites.map((combination) => `
      <div class="favorite-chip">
        <span>${escapeHtml(combinationLine(combination, state.language))}</span>
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
  if (announce) announceResult(`已生成 ${state.combo.results.length} 组新灵感`);
}

function togglePin(slot, id) {
  const pins = state.combo.pinned[slot];
  state.combo.pinned[slot] = pins.includes(id) ? pins.filter((item) => item !== id) : [...pins, id];
  renderPinned(slot);
  renderCombinationMath();
  shuffleResults({ announce: false });
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
  renderComboCategoryList();
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
    combination: combinationLine(combination, state.language),
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
}

function bindLibraryEvents() {
  elements.categoryList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    state.category = button.dataset.category;
    state.visible = pageSize;
    renderCategories();
    renderResults();
    document.querySelector(".results-panel").scrollIntoView({ behavior: "smooth", block: "start" });
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
    const button = event.target.closest("[data-copy]");
    if (button) copySeed(button.dataset.copy);
  });

  elements.loadMore.addEventListener("click", () => {
    state.visible += pageSize;
    renderResults({ announce: false });
  });
}

function bindComboEvents() {
  document.querySelectorAll("[data-view]").forEach((button) => button.addEventListener("click", () => setView(button.dataset.view)));
  document.querySelectorAll("[data-focus-source]").forEach((button) => button.addEventListener("click", () => {
    state.combo.focusedSource = button.dataset.focusSource;
    renderSourceFocus();
    renderComboCategoryList();
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
  document.querySelector("#shuffle-button").addEventListener("click", () => shuffleResults());
  elements.comboResults.addEventListener("click", (event) => {
    const favorite = event.target.closest("[data-favorite-combination]");
    if (favorite) toggleFavorite(favorite.dataset.favoriteCombination);
    const copy = event.target.closest("[data-copy-combination]");
    if (copy) {
      const combination = state.combo.results.find((item) => item.id === copy.dataset.copyCombination);
      copyText(combinationLine(combination, state.language), "已复制 1 组组合");
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
  document.querySelector("#copy-results").addEventListener("click", () => copyText(combinationsText(state.combo.results, state.language), `已复制 ${state.combo.results.length} 组，每行一组`));
  document.querySelector("#download-results").addEventListener("click", () => downloadJson("50-seeds-random-combinations.json", state.combo.results));
  document.querySelector("#copy-favorites").addEventListener("click", () => copyText(combinationsText(state.combo.favorites, state.language), `已复制 ${state.combo.favorites.length} 组收藏`));
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
    copyText(combinationsText(combinations, state.language), `已生成并复制 ${combinations.length} 组`);
  });
  document.querySelector("#batch-download").addEventListener("click", () => downloadJson("50-seeds-batch-combinations.json", batchCombinations()));
}

function bindGlobalEvents() {
  document.querySelector("#theme-toggle")?.addEventListener("click", () => {
    setTheme(state.theme === "dark" ? "light" : "dark");
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && state.combo.openPicker) {
      closeCategoryPickers();
      return;
    }
    if (event.key === "/" && state.view === "library" && !["INPUT", "SELECT", "TEXTAREA"].includes(document.activeElement.tagName)) {
      event.preventDefault();
      elements.search.focus();
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
    document.querySelector("#seed-stat").textContent = state.data.meta.seedCount.toLocaleString("zh-CN");
    document.querySelector("#category-stat").textContent = state.data.meta.categoryCount;
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
