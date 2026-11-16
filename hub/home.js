/* Bookshelf homepage.
   Real titles and counts come from hub/catalog.json. Theme 01 documents
   fill shelf D; every other theme is an application project on shelf E.
   Known covers: 04 DMP, 03 AOS, 05 OAP, 02 PIS. Shelves A–C are reserved
   slots in the HTML, not catalog entries. No catalog.json field was added:
   the shelf each theme belongs to is fixed by this page's information architecture. */
(() => {
  const PROJECT_ORDER = ["04", "03", "05", "02"];
  const FACES = {
    "02": { code: "PIS", en: "Project InSight", glyph: "insight" },
    "03": { code: "AOS", en: "Agent OS", glyph: "radar" },
    "04": { code: "DMP", en: "Dive Model Platform", glyph: "cube" },
    "05": { code: "OAP", en: "Ontology AI Platform", glyph: "nodes" },
  };

  const queryInput = document.querySelector("#q");
  const searchStatus = document.querySelector("#search-status");
  const booksE = document.querySelector("#books-E");
  const booksD = document.querySelector("#books-D");
  if (!queryInput || !booksE || !booksD) return;

  queryInput.addEventListener("input", () => filterBooks(queryInput.value));
  queryInput.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && queryInput.value) {
      queryInput.value = "";
      filterBooks("");
    }
  });

  async function loadCatalog() {
    try {
      const response = await fetch("hub/catalog.json", { cache: "no-cache" });
      if (!response.ok) throw new Error("清单请求失败（" + response.status + "）");
      const catalog = await response.json();
      if (!catalog || !Array.isArray(catalog.themes)) throw new Error("清单格式无法识别");
      mountBooks(booksE, projectThemes(catalog).map(projectSpec));
      mountBooks(booksD, methodSpecs(catalog));
      renderMetrics(catalog);
      filterBooks(queryInput.value);
    } catch (error) {
      const local = location.protocol === "file:";
      const message = local
        ? "当前是本地文件打开，浏览器会拦截读取目录。请在仓库根目录执行 python3 -m http.server，再用提示的地址访问。"
        : "目录清单没有载入，已有项目和方法无法显示。";
      showMountError(booksE, message);
      showMountError(booksD, message);
    }
  }

  function projectThemes(catalog) {
    return catalog.themes.filter((theme) => theme && theme.id && theme.id !== "01").slice().sort((a, b) => {
      const ra = PROJECT_ORDER.indexOf(a.id);
      const rb = PROJECT_ORDER.indexOf(b.id);
      const oa = ra === -1 ? 99 : ra;
      const ob = rb === -1 ? 99 : rb;
      if (oa !== ob) return oa - ob;
      return String(a.id).localeCompare(String(b.id));
    });
  }

  function projectSpec(theme) {
    const face = FACES[theme.id] || {
      code: fallbackCode(theme),
      en: theme.name || theme.id,
      glyph: "cube",
    };
    const docs = asList(theme.documents);
    const bits = ["应用项目", "E", theme.id, theme.name, theme.path, face.code, face.en];
    docs.forEach((doc) => {
      if (!doc) return;
      bits.push(doc.title, doc.path, doc.version, doc.deckId);
    });
    return {
      real: true,
      href: "catalog.html#theme=" + encodeURIComponent(theme.id),
      search: bits.join(" "),
      label: face.code + "，" + face.en + "，打开目录中的主题 " + theme.id + " " + (theme.name || ""),
      title: face.code,
      en: face.en,
      glyph: face.glyph,
    };
  }

  function methodSpecs(catalog) {
    const theme = catalog.themes.find((item) => item && item.id === "01");
    if (!theme) return [];
    return asList(theme.documents).filter((doc) => doc && (doc.title || doc.path)).map((doc, index) => {
      const version = doc.version ? " · " + doc.version : "";
      return {
        real: true,
        href: "catalog.html#theme=" + encodeURIComponent(theme.id),
        search: ["工作方法", "D", theme.id, theme.name, doc.title, doc.path, doc.version, doc.deckId].join(" "),
        label: (doc.title || "未命名文档") + "，打开目录中的主题 " + theme.id + " " + (theme.name || ""),
        idx: String(index + 1),
        title: doc.title || "未命名文档",
        en: (theme.name || "工作方法") + version,
        glyph: "method",
      };
    });
  }

  function mountBooks(container, specs) {
    const fragment = document.createDocumentFragment();
    if (!specs.length) {
      const note = document.createElement("p");
      note.className = "book-empty";
      note.textContent = "目录里这一层还没有可展示的条目。";
      fragment.append(note);
    } else {
      specs.forEach((spec) => fragment.append(renderBook(spec)));
    }
    fragment.append(filterNote());
    container.replaceChildren(fragment);
  }

  function showMountError(container, message) {
    const note = document.createElement("p");
    note.className = "book-empty";
    note.textContent = message;
    const fragment = document.createDocumentFragment();
    fragment.append(note, filterNote());
    container.replaceChildren(fragment);
  }

  function filterNote() {
    const empty = document.createElement("p");
    empty.className = "filter-empty";
    empty.hidden = true;
    empty.textContent = "这一层没有匹配的书目";
    return empty;
  }

  function renderBook(spec) {
    const link = document.createElement("a");
    link.className = "book is-real";
    link.href = spec.href;
    link.dataset.search = spec.search;
    link.setAttribute("aria-label", spec.label);
    const box = document.createElement("span");
    box.className = "book-3d";
    box.append(layer("pages"), layer("spine"), cover(spec));
    link.append(box);
    return link;
  }

  function cover(spec) {
    const node = document.createElement("span");
    node.className = "cover";
    const flag = document.createElement("span");
    flag.className = "flag flag-live";
    flag.textContent = "在册";
    node.append(flag);
    if (spec.idx) {
      const idx = document.createElement("span");
      idx.className = "idx";
      idx.textContent = spec.idx;
      node.append(idx);
    }
    const title = document.createElement("span");
    title.className = spec.idx ? "ttl" : "ttl ttl-code";
    title.textContent = spec.title;
    const glyph = document.createElement("span");
    glyph.className = "glyph";
    glyph.dataset.glyph = spec.glyph;
    glyph.innerHTML = ICONS[spec.glyph] || ICONS.cube;
    const en = document.createElement("span");
    en.className = "en";
    en.textContent = spec.en || "";
    node.append(title, glyph, en);
    return node;
  }

  function layer(className) {
    const node = document.createElement("span");
    node.className = className;
    node.setAttribute("aria-hidden", "true");
    return node;
  }

  function renderMetrics(catalog) {
    const themes = asList(catalog.themes);
    const decks = asList(catalog.decks);
    const docs = themes.reduce((sum, theme) => sum + asList(theme && theme.documents).length, 0);
    const versions = decks.reduce((sum, deck) => sum + asList(deck && deck.versions).length, 0);
    const slides = decks.reduce((sum, deck) => {
      return sum + asList(deck && deck.versions).reduce((inner, version) => {
        return inner + (Number(version && version.slideCount) || 0);
      }, 0);
    }, 0);
    setStat("themes", themes.length);
    setStat("docs", docs);
    setStat("decks", decks.length);
    setStat("versions", versions);
    setStat("slides", slides);
  }

  function setStat(name, value) {
    const node = document.querySelector('[data-stat="' + name + '"]');
    if (node) node.textContent = String(value);
  }

  function filterBooks(raw) {
    const needle = String(raw || "").trim().toLowerCase();
    let shown = 0;
    let total = 0;
    document.querySelectorAll(".shelf").forEach((shelf) => {
      const books = shelf.querySelectorAll(".book");
      let shelfShown = 0;
      books.forEach((book) => {
        total += 1;
        const hay = (book.getAttribute("data-search") || book.textContent || "").toLowerCase();
        const hit = !needle || hay.includes(needle);
        book.hidden = !hit;
        if (hit) {
          shown += 1;
          shelfShown += 1;
        }
      });
      const empty = shelf.querySelector(".filter-empty");
      if (empty) empty.hidden = !needle || shelfShown !== 0;
    });
    if (!searchStatus) return;
    if (!needle) searchStatus.textContent = "";
    else if (!total) searchStatus.textContent = "";
    else if (shown) searchStatus.textContent = "书架上有 " + shown + " 本匹配";
    else searchStatus.textContent = "书架上没有匹配的书目";
  }

  function decorateGlyphs(root) {
    root.querySelectorAll("[data-glyph]").forEach((node) => {
      if (node.childElementCount) return;
      node.innerHTML = ICONS[node.dataset.glyph] || "";
    });
  }

  function asList(value) {
    return Array.isArray(value) ? value : [];
  }

  function fallbackCode(theme) {
    const name = String(theme.name || theme.id || "项目");
    const token = name.split(/\s+/)[0];
    if (token && token.length <= 10) return token;
    return String(theme.id || "项目");
  }

  function icon(body) {
    return '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + body + "</svg>";
  }

  const ICONS = {
    brain: icon('<path d="M16 22c-4-1-8-5-6-10 5-1 9 2 11 6"/><path d="M32 22c4-1 8-5 6-10-5-1-9 2-11 6"/><path d="M24 18v14"/><path d="M15 28c-3 2-6 5-4 9 5 2 9-1 11-4"/><path d="M33 28c3 2 6 5 4 9-5 2-9-1-11-4"/><path d="M20 40h8"/>'),
    home: icon('<path d="M8 22 L24 8 L40 22"/><path d="M14 20v18h20V20"/>'),
    graph: icon('<circle cx="12" cy="16" r="4"/><circle cx="34" cy="12" r="4"/><circle cx="30" cy="34" r="4"/><path d="M16 16l14-3M15 19l12 12M34 16l-2 14"/>'),
    route: icon('<circle cx="12" cy="12" r="3"/><circle cx="36" cy="36" r="3"/><path d="M15 14c10 0 8 20 18 20"/>'),
    layers: icon('<path d="M24 8l16 8-16 8L8 16l16-8z"/><path d="M8 24l16 8 16-8"/><path d="M8 32l16 8 16-8"/>'),
    bookmark: icon('<path d="M14 8h20v32l-10-6-10 6V8z"/>'),
    tag: icon('<path d="M10 24 L24 10h14v14L24 38 10 24z"/><circle cx="31" cy="17" r="2" fill="currentColor" stroke="none"/>'),
    gear: icon('<circle cx="24" cy="24" r="6"/><path d="M24 8v4M24 36v4M8 24h4M36 24h4M12 12l3 3M33 33l3 3M36 12l-3 3M15 33l-3 3"/>'),
    globe: icon('<circle cx="24" cy="24" r="14"/><path d="M10 24h28"/><path d="M24 10c4 4 6 9 6 14s-2 10-6 14c-4-4-6-9-6-14s2-10 6-14z"/>'),
    rocket: icon('<path d="M24 6c8 7 10 16 10 22 0 3-2 7-6 8l-4-6-4 6c-4-1-6-5-6-8 0-6 2-15 10-22z"/><path d="M18 30c-6 2-10 2-14 0 2-5 6-8 10-7"/><path d="M30 30c6 2 10 2 14 0-2-5-6-8-10-7"/><circle cx="24" cy="20" r="3"/>'),
    target: icon('<circle cx="24" cy="24" r="14"/><circle cx="24" cy="24" r="8"/><circle cx="24" cy="24" r="2" fill="currentColor" stroke="none"/>'),
    city: icon('<path d="M8 40V22h8v18M18 40V12h10v28M30 40V20h8v20"/><path d="M6 40h36"/>'),
    sigma: icon('<path d="M34 12H16l11 12L16 36h18"/>'),
    code: icon('<path d="M18 16l-8 8 8 8M30 16l8 8-8 8M27 12l-6 24"/>'),
    cube: icon('<path d="M24 6l16 9v18L24 42 8 33V15L24 6z"/><path d="M24 24l16-9M24 24L8 15M24 24v18"/>'),
    radar: icon('<circle cx="24" cy="24" r="4"/><circle cx="24" cy="24" r="11"/><circle cx="24" cy="24" r="18"/><path d="M24 24l12-8"/>'),
    nodes: icon('<circle cx="24" cy="10" r="4"/><circle cx="10" cy="34" r="4"/><circle cx="38" cy="34" r="4"/><path d="M24 14L13 30M24 14l11 16M14 34h20"/>'),
    insight: icon('<path d="M6 24s7-12 18-12 18 12 18 12-7 12-18 12S6 24 6 24z"/><circle cx="24" cy="24" r="5"/>'),
    method: icon('<path d="M24 8a9 9 0 0 0-5 16c1 1.4 1.5 2.6 1.5 4h7c0-1.4.5-2.6 1.5-4A9 9 0 0 0 24 8z"/><path d="M20 32h8M21 36h6"/>'),
    wifi: icon('<path d="M8 20c8-8 24-8 32 0"/><path d="M14 26c5-5 15-5 20 0"/><path d="M20 32c2.5-2 6-2 8 0"/><circle cx="24" cy="38" r="2" fill="currentColor" stroke="none"/>'),
    people: icon('<circle cx="17" cy="16" r="4"/><circle cx="31" cy="17" r="3.5"/><path d="M7 36c1.4-7 5-9 10-9s8.4 2 10 9"/><path d="M24 34c1-4 3.5-6 7-6 4 0 7 2 8.5 8"/>'),
    triangle: icon('<path d="M24 8L42 40H6L24 8z"/>'),
    integral: icon('<path d="M28 10c-8 0-10 4-10 8 0 8 12 8 12 16 0 4-2 6-8 6"/>'),
    venn: icon('<circle cx="19" cy="24" r="11"/><circle cx="29" cy="24" r="11"/>'),
    matrix: icon('<path d="M10 14h28M10 24h28M10 34h28M18 10v28M30 10v28"/>'),
    curve: icon('<path d="M6 36c6-2 8-16 18-18 10 2 12 16 18 18"/><path d="M8 40h32"/>'),
    braces: icon('<path d="M20 10c-6 0-7 5-7 8s3 4-1 6 1 4 1 6 1 8 7 8"/><path d="M28 10c6 0 7 5 7 8s-3 4 1 6-1 4-1 6-1 8-7 8"/>'),
    bot: icon('<rect x="12" y="16" width="24" height="18" rx="3"/><path d="M24 16V9"/><circle cx="24" cy="8" r="2"/><circle cx="19" cy="24" r="1.6" fill="currentColor" stroke="none"/><circle cx="29" cy="24" r="1.6" fill="currentColor" stroke="none"/><path d="M18 34v4M30 34v4"/>'),
  };

  decorateGlyphs(document);
  loadCatalog();
})();
