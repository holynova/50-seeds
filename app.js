const state = {
  data: null,
  category: "all",
  search: "",
  sort: "priority",
  language: "both",
  visible: 120
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
  sources: document.querySelector("#source-links")
};

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const normalize = (value) => String(value).normalize("NFKC").toLocaleLowerCase();

function allSeeds() {
  return state.data.categories.flatMap((category) => category.seeds);
}

function filteredSeeds() {
  const query = normalize(state.search.trim());
  const seeds = allSeeds().filter((seed) => {
    if (state.category !== "all" && seed.category !== state.category) return false;
    if (!query) return true;
    return [seed.name, seed.englishName, seed.style, seed.englishStyle, seed.categoryName]
      .some((value) => normalize(value).includes(query));
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
  const hasLongName = seed.name.length > 12 || seed.englishName.length > 28;
  return `
    <li class="seed-item" data-seed-id="${seed.id}">
      <button type="button" class="seed-tile${hasLongName ? " has-long-name" : ""}" data-copy="${seed.id}" aria-label="复制 ${escapeHtml(seed.name)} 的完整双语提示词">
        <span class="seed-meta">
          <span class="rank" aria-label="分类内热度排名 ${seed.priority}">${String(seed.priority).padStart(2, "0")}</span>
          <span class="seed-category">${escapeHtml(seed.categoryName)}</span>
        </span>
        <span class="seed-name">
          ${showZh ? `<strong lang="zh-CN">${escapeHtml(seed.name)}</strong>` : ""}
          ${showEn ? `<span lang="en">${escapeHtml(seed.englishName)}</span>` : ""}
        </span>
        <span class="copy-cue"><span>复制提示词</span><span aria-hidden="true">↗</span></span>
      </button>
    </li>
  `;
}

function renderResults({ announce = true } = {}) {
  const results = filteredSeeds();
  const category = state.category === "all"
    ? { name: "全部种子", englishName: "All categories" }
    : state.data.categories.find((item) => item.id === state.category);

  elements.activeCategory.textContent = category.name;
  elements.activeCategoryEn.textContent = category.englishName.toLocaleUpperCase("en");
  elements.resultCount.textContent = results.length.toLocaleString("zh-CN");
  elements.results.innerHTML = results.slice(0, state.visible).map(resultMarkup).join("");
  elements.status.hidden = results.length > 0;
  elements.status.textContent = results.length ? "" : "没有匹配的种子，试试更短的关键词或切换分类。";
  elements.loadMore.hidden = state.visible >= results.length;
  if (!elements.loadMore.hidden) {
    elements.loadMore.innerHTML = `继续载入 <span>${Math.min(pageSize, results.length - state.visible)}</span> 条 ↓`;
  }
  if (announce) announceResult(`${results.length} 条结果`);
}

function announceResult(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  window.clearTimeout(announceResult.timeout);
  announceResult.timeout = window.setTimeout(() => elements.toast.classList.remove("is-visible"), 1600);
}

async function copySeed(id) {
  const seed = allSeeds().find((item) => item.id === id);
  if (!seed) return;
  const text = `${seed.name} (${seed.englishName})\n${seed.style}\n${seed.englishStyle}`;
  try {
    await navigator.clipboard.writeText(text);
    announceResult(`已复制：${seed.name}`);
  } catch {
    announceResult("浏览器未允许复制，请手动选择文本");
  }
}

function bindEvents() {
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
    document.querySelectorAll("[data-language]").forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    renderResults({ announce: false });
  });

  elements.results.addEventListener("click", (event) => {
    const button = event.target.closest("[data-copy]");
    if (button) copySeed(button.dataset.copy);
  });

  elements.loadMore.addEventListener("click", () => {
    state.visible += pageSize;
    renderResults({ announce: false });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && !["INPUT", "SELECT", "TEXTAREA"].includes(document.activeElement.tagName)) {
      event.preventDefault();
      elements.search.focus();
    }
  });
}

async function initialize() {
  try {
    const response = await fetch("./data/seeds.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    state.data = await response.json();
    document.querySelector("#seed-stat").textContent = state.data.meta.seedCount.toLocaleString("zh-CN");
    document.querySelector("#category-stat").textContent = state.data.meta.categoryCount;
    elements.categoryCounter.textContent = state.data.meta.categoryCount;
    elements.sources.innerHTML = state.data.meta.sources.map((source) => `
      <a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">${escapeHtml(source.name)} ↗</a>
    `).join("");
    renderCategories();
    renderResults({ announce: false });
    bindEvents();
  } catch (error) {
    elements.status.hidden = false;
    elements.status.textContent = `无法载入数据：${error.message}。请通过本地服务器或 GitHub Pages 打开。`;
  }
}

initialize();
