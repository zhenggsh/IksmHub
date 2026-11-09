(() => {
  const RAW_BASE = "https://raw.githubusercontent.com/zhenggsh/IksmHub/master/";
  const BLOB_BASE = "https://github.com/zhenggsh/IksmHub/blob/master/";
  const PREVIEW_PREFIX = "https://htmlpreview.github.io/?";
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const boot = document.querySelector("#boot");
  const bootText = document.querySelector("#boot-text");
  const stats = document.querySelector("#stats");
  const panels = {
    themes: document.querySelector("#panel-themes"),
    decks: document.querySelector("#panel-decks"),
  };
  const tabs = {
    themes: document.querySelector("#tab-themes"),
    decks: document.querySelector("#tab-decks"),
  };
  const queryInput = document.querySelector("#query");
  const viewer = document.querySelector("#viewer");
  const frame = document.querySelector("#stage-frame");
  const sourceEl = document.querySelector("#stage-source");
  const loadingEl = document.querySelector("#stage-loading");
  const errorEl = document.querySelector("#stage-error");
  const hintEl = document.querySelector("#viewer-hint");
  const modeSwitch = document.querySelector("#mode-switch");

  const state = {
    catalog: null,
    category: "themes",
    query: "",
    view: null,
    applying: false,
  };

  startStarfield();
  bootApp();

  tabs.themes.addEventListener("click", () => navigate("themes"));
  tabs.decks.addEventListener("click", () => navigate("decks"));
  queryInput.addEventListener("input", () => {
    state.query = queryInput.value.trim().toLowerCase();
    renderLists();
  });
  document.querySelector("#viewer-close").addEventListener("click", () => viewer.close());
  document.querySelector("#mode-source").addEventListener("click", () => setMode("source"));
  document.querySelector("#mode-render").addEventListener("click", () => setMode("render"));
  document.querySelector("#copy-src").addEventListener("click", copySource);
  viewer.addEventListener("click", (event) => {
    if (event.target === viewer) viewer.close();
  });
  viewer.addEventListener("close", () => {
    frame.src = "about:blank";
    frame.removeAttribute("srcdoc");
    if (state.applying) return;
    const hash = location.hash;
    if (hash.startsWith("#md=") || hash.startsWith("#html=")) {
      history.pushState(null, "", state.category === "decks" ? "#decks" : "#themes");
    }
  });
  window.addEventListener("popstate", applyHash);
  window.addEventListener("hashchange", applyHash);

  async function bootApp() {
    const started = performance.now();
    try {
      const response = await fetch("hub/catalog.json", { cache: "no-cache" });
      if (!response.ok) throw new Error("清单请求失败（" + response.status + "）");
      state.catalog = await response.json();
      renderStats();
      const wait = reduced ? 0 : Math.max(0, 680 - (performance.now() - started));
      window.setTimeout(() => {
        boot.classList.add("is-done");
        boot.setAttribute("aria-busy", "false");
        applyHash();
      }, wait);
    } catch (error) {
      const local = location.protocol === "file:";
      bootText.textContent = local
        ? "当前是本地文件打开，浏览器会拦截读取相邻文件。请在仓库根目录执行 python3 -m http.server，然后打开提示的本地地址。"
        : "目录清单没有载入。" + (error && error.message ? error.message : "");
    }
  }

  function renderStats() {
    const themes = state.catalog.themes.length;
    const decks = state.catalog.decks.length;
    const versions = state.catalog.decks.reduce((sum, deck) => sum + deck.versions.length, 0);
    const docs = state.catalog.themes.reduce((sum, theme) => sum + theme.documents.length, 0);
    const items = [
      ["知识主题", themes],
      ["胶片 ID", decks],
      ["对齐版本", versions],
      ["知识条目", docs],
    ];
    stats.replaceChildren();
    for (const [label, value] of items) {
      const wrap = document.createElement("div");
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      dt.textContent = label;
      dd.textContent = String(value);
      wrap.append(dt, dd);
      stats.append(wrap);
    }
  }

  function renderLists() {
    renderThemes();
    renderDecks();
  }

  function renderThemes() {
    const cards = [];
    state.catalog.themes.forEach((theme, index) => {
      const blob = [theme.name, theme.path, ...theme.documents.map((doc) => doc.title + " " + doc.path)].join(" ").toLowerCase();
      if (state.query && !blob.includes(state.query)) return;
      const card = el("article", { class: "card", style: "--d:" + index });
      card.append(
        el("div", { class: "card-mark" }, theme.id),
        el("p", { class: "badge" }, "IKSM · 知识主题"),
        el("h2", {}, theme.name),
        el("p", { class: "path" }, theme.path)
      );
      theme.documents.forEach((doc) => {
        const block = el("div", { class: "doc" });
        const actions = el("div", { class: "actions" });
        actions.append(
          button("看 MD", "btn", () => openPath("md", doc.path)),
          doc.html
            ? button("看 HTML", "btn btn-solid", () => openPath("html", doc.html))
            : button("看 HTML", "btn btn-solid", null)
        );
        if (!doc.html) actions.lastChild.disabled = true;
        block.append(
          el("h3", {}, doc.title),
          el("p", { class: "path" }, doc.path),
          el("p", { class: "muted" }, doc.deckId ? "对应导出 " + doc.deckId + " · " + doc.version : "尚无对应导出"),
          actions
        );
        card.append(block);
      });
      card.append(fileDisclosure("目录中的文件", theme.files));
      cards.push(card);
    });
    fillPanel(panels.themes, cards, "没有匹配的知识主题。");
  }

  function renderDecks() {
    const cards = [];
    state.catalog.decks.forEach((deck) => {
      deck.versions.forEach((version) => {
        const blob = [deck.id, deck.name, version.version, version.marp, version.output, version.iksmSource].join(" ").toLowerCase();
        if (state.query && !blob.includes(state.query)) return;
        const aligned = Boolean(version.marp && version.output);
        const card = el("article", { class: "card" });
        const lanes = el("div", { class: "lanes" });
        lanes.append(
          lane("MARP", version.marp),
          lane("HTML", version.output),
          lane("溯源", version.iksmSource)
        );
        const actions = el("div", { class: "actions" });
        actions.append(
          button("看 MD", "btn", () => openPath("md", version.marp)),
          version.output
            ? button("看 HTML", "btn btn-solid", () => openPath("html", version.output))
            : button("看 HTML", "btn btn-solid", null),
          button("看知识原文", "btn", () => openPath("md", version.iksmSource))
        );
        if (!version.output) actions.children[1].disabled = true;
        const head = el("div", { class: "doc", style: "border-top:0;padding-top:0" });
        const status = el("p", { class: aligned ? "align" : "muted" });
        if (aligned) status.append(el("i"), document.createTextNode("同 ID · 同版本 " + version.version));
        else status.textContent = "marp 与 output 未同时存在";
        head.append(
          el("h3", {}, version.version + (version.slideCount ? " · " + version.slideCount + " 页" : "")),
          status
        );
        card.append(
          el("div", { class: "card-mark" }, deck.id),
          el("p", { class: "badge" }, "MARP ↔ OUTPUT"),
          el("h2", {}, deck.name),
          el("p", { class: "path" }, deck.marpPath + "  ↔  " + deck.outputPath),
          head,
          lanes,
          actions,
          fileDisclosure("本版本资源", [...(version.marpAssets || []), ...(version.outputAssets || [])])
        );
        cards.push(card);
      });
    });
    fillPanel(panels.decks, cards, "没有匹配的胶片或导出。");
  }

  function fillPanel(panel, cards, emptyText) {
    panel.classList.remove("panel-in");
    panel.replaceChildren();
    if (!cards.length) {
      panel.append(el("p", { class: "empty" }, emptyText));
      return;
    }
    const grid = el("div", { class: "grid" });
    cards.forEach((card, index) => {
      card.style.animationDelay = (index * 0.08) + "s";
      grid.append(card);
    });
    panel.append(grid);
    void panel.offsetWidth;
    panel.classList.add("panel-in");
  }

  function showCategory(category) {
    state.category = category === "decks" ? "decks" : "themes";
    for (const key of Object.keys(panels)) {
      const on = key === state.category;
      panels[key].hidden = !on;
      tabs[key].setAttribute("aria-selected", on ? "true" : "false");
    }
    if (state.catalog) renderLists();
  }

  function navigate(hash) {
    if (location.hash === "#" + hash) {
      applyHash();
      return;
    }
    history.pushState(null, "", "#" + hash);
    applyHash();
  }

  function applyHash() {
    if (!state.catalog) return;
    state.applying = true;
    const raw = decodeURIComponent(location.hash.replace(/^#/, ""));
    try {
      if (raw.startsWith("md=") || raw.startsWith("html=")) {
        const kind = raw.startsWith("md=") ? "md" : "html";
        const path = raw.slice(kind.length + 1);
        openPath(kind, path, { fromHash: true });
        return;
      }
      if (viewer.open) viewer.close();
      showCategory(raw === "decks" ? "decks" : "themes");
    } finally {
      state.applying = false;
    }
  }

  function openPath(kind, path, options = {}) {
    if (!safePath(path)) {
      presentError("路径不在 iksm、marp、output 之内。");
      return;
    }
    const info = describe(path);
    const same = state.view && state.view.kind === kind && state.view.path === path && viewer.open;
    state.view = {
      kind,
      path,
      title: info.title,
      kicker: info.kicker,
      mode: kind === "html" ? "render" : (same ? state.view.mode : "source"),
      text: same ? state.view.text : "",
    };
    if (!options.fromHash) {
      const next = "#" + kind + "=" + encodeURIComponent(path);
      if (location.hash !== next) history.pushState(null, "", next);
    }
    paintViewer();
    if (!viewer.open) viewer.showModal();
    if (kind === "html") loadHtml();
    else loadMarkdown();
  }

  function paintViewer() {
    const view = state.view;
    document.querySelector("#viewer-kicker").textContent = view.kicker;
    document.querySelector("#viewer-title").textContent = view.title;
    document.querySelector("#viewer-path").textContent = view.path;
    const md = view.kind === "md";
    modeSwitch.hidden = !md;
    document.querySelector("#copy-src").hidden = !md;
    document.querySelector("#mode-source").setAttribute("aria-pressed", view.mode === "source" ? "true" : "false");
    document.querySelector("#mode-render").setAttribute("aria-pressed", view.mode === "render" ? "true" : "false");
    document.querySelector("#link-blank").href = encodeURI(view.path);
    document.querySelector("#link-preview").href = PREVIEW_PREFIX + rawUrl(view.path);
    document.querySelector("#link-github").href = blobUrl(view.path);
    frame.title = view.kind === "html" ? view.title + " 的 HTML 渲染" : view.title + " 的 Markdown";
    hintEl.hidden = !(md && view.mode === "render");
    hintEl.textContent = "这一页用 marked 渲染 Markdown 文本。图片按该文件所在目录解析。胶片排版请用「看 HTML」，那里是导出的页面，不是源码。";
  }

  async function loadMarkdown() {
    showLoading(true);
    hideError();
    frame.hidden = true;
    sourceEl.hidden = state.view.mode !== "source";
    try {
      if (!state.view.text) state.view.text = await fetchText(state.view.path);
      document.querySelector("#viewer-meta").textContent = state.view.text.length + " 字符 · " + state.view.text.split(/\n/).length + " 行";
      if (state.view.mode === "source") paintSource(state.view.text);
      else paintMarkdown(state.view.text, state.view.path);
      showLoading(false);
    } catch (error) {
      showLoading(false);
      presentError(readError(error, state.view.path));
    }
  }

  function loadHtml() {
    hideError();
    sourceEl.hidden = true;
    frame.hidden = false;
    showLoading(true);
    document.querySelector("#viewer-meta").textContent = "导出页面 · 相对路径";
    frame.removeAttribute("sandbox");
    frame.removeAttribute("srcdoc");
    frame.onload = () => showLoading(false);
    frame.onerror = () => {
      showLoading(false);
      presentError(readError(new Error("iframe"), state.view.path));
    };
    frame.src = encodeURI(state.view.path);
  }

  function setMode(mode) {
    if (!state.view || state.view.kind !== "md" || state.view.mode === mode) return;
    state.view.mode = mode;
    paintViewer();
    if (!state.view.text) {
      loadMarkdown();
      return;
    }
    hideError();
    showLoading(false);
    if (mode === "source") {
      frame.hidden = true;
      sourceEl.hidden = false;
      paintSource(state.view.text);
    } else {
      sourceEl.hidden = true;
      paintMarkdown(state.view.text, state.view.path);
    }
  }

  function paintSource(text) {
    const lines = text.replace(/\n$/, "").split("\n");
    sourceEl.replaceChildren();
    const code = document.createElement("code");
    lines.forEach((line, index) => {
      const row = document.createElement("div");
      const num = document.createElement("span");
      const body = document.createElement("span");
      num.className = "ln";
      num.textContent = String(index + 1);
      body.className = "lc";
      body.textContent = line.length ? line : " ";
      row.append(num, body);
      code.append(row);
    });
    sourceEl.append(code);
    sourceEl.hidden = false;
    frame.hidden = true;
  }

  function paintMarkdown(text, path) {
    if (!window.marked || typeof window.marked.parse !== "function") {
      presentError("Markdown 渲染组件没有载入。源码视图仍可使用。");
      return;
    }
    const body = prepareMarkdown(text);
    const html = window.marked.parse(body, {
      gfm: true,
      breaks: false,
      renderer: markdownRenderer(path),
    });
    const base = new URL("./", location.href).href;
    const doc = "<!DOCTYPE html><html lang=\"zh-CN\"><head><meta charset=\"utf-8\"><base href=\"" +
      escapeAttr(base) + "\"><style>" + previewCss() + "</style></head><body>" +
      html + "</body></html>";
    frame.hidden = false;
    frame.setAttribute("sandbox", "allow-popups allow-popups-to-escape-sandbox");
    frame.srcdoc = doc;
    sourceEl.hidden = true;
  }

  function markdownRenderer(path) {
    const renderer = new window.marked.Renderer();
    renderer.image = function (token) {
      const href = token.href || "";
      const text = token.text || "";
      const title = token.title ? " title=\"" + escapeAttr(token.title) + "\"" : "";
      return "<img src=\"" + escapeAttr(resolveAgainst(path, href)) + "\" alt=\"" + escapeAttr(text) + "\"" + title + ">";
    };
    renderer.link = function (token) {
      const href = token.href || "";
      const resolved = /^(https?:|mailto:|#)/i.test(href) ? href : resolveAgainst(path, href);
      const text = this.parser.parseInline(token.tokens);
      return "<a href=\"" + escapeAttr(resolved) + "\" target=\"_blank\" rel=\"noopener\">" + text + "</a>";
    };
    return renderer;
  }

  function prepareMarkdown(text) {
    let body = text.replace(/^\uFEFF/, "");
    if (body.startsWith("---\n") || body.startsWith("---\r\n")) {
      body = body.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "");
    }
    body = body.replace(/<style[\s\S]*?<\/style>/gi, "");
    return body;
  }

  async function copySource() {
    if (!state.view || !state.view.text) return;
    const button = document.querySelector("#copy-src");
    try {
      await navigator.clipboard.writeText(state.view.text);
      button.textContent = "已复制";
    } catch (error) {
      button.textContent = "复制失败";
    }
    window.setTimeout(() => { button.textContent = "复制源码"; }, 1400);
  }

  function describe(path) {
    for (const theme of state.catalog.themes) {
      for (const doc of theme.documents) {
        if (doc.path === path) return { title: doc.title, kicker: "知识主题 · " + theme.id + " " + theme.name };
        if (doc.html === path) return { title: doc.title, kicker: "导出 HTML · " + (doc.deckId || "") + " " + (doc.version || "") };
      }
    }
    for (const deck of state.catalog.decks) {
      for (const version of deck.versions) {
        if (version.marp === path) return { title: deck.name + " " + version.version, kicker: "胶片源码 · " + deck.id };
        if (version.output === path) return { title: deck.name + " " + version.version, kicker: "导出 HTML · " + deck.id };
        if (version.iksmSource === path) return { title: deck.name + " 知识原文", kicker: "iksm-source · " + deck.id };
      }
    }
    return { title: path.split("/").pop(), kicker: "文件" };
  }

  function fileDisclosure(label, files) {
    if (!files || !files.length) return document.createTextNode("");
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    summary.textContent = label + "（" + files.length + "）";
    const list = document.createElement("ul");
    list.className = "filelist";
    files.forEach((file) => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = encodeURI(file);
      link.target = "_blank";
      link.rel = "noopener";
      link.textContent = file;
      item.append(link);
      list.append(item);
    });
    details.append(summary, list);
    return details;
  }

  function lane(name, path) {
    const row = el("div", { class: "lane" });
    row.append(el("b", {}, name), el("span", {}, path || "（缺失）"));
    return row;
  }

  function button(label, className, onClick) {
    const node = document.createElement("button");
    node.type = "button";
    node.className = className;
    node.textContent = label;
    if (onClick) node.addEventListener("click", onClick);
    else node.disabled = true;
    return node;
  }

  function el(tag, props) {
    const node = document.createElement(tag);
    Object.entries(props || {}).forEach(([key, value]) => {
      if (value == null) return;
      if (key === "class") node.className = value;
      else node.setAttribute(key, value);
    });
    for (let i = 2; i < arguments.length; i += 1) {
      const kid = arguments[i];
      if (kid == null || kid === false) continue;
      node.append(kid.nodeType ? kid : document.createTextNode(String(kid)));
    }
    return node;
  }

  function showLoading(on) { loadingEl.hidden = !on; }
  function hideError() { errorEl.hidden = true; errorEl.replaceChildren(); }
  function presentError(message) {
    loadingEl.hidden = true;
    sourceEl.hidden = true;
    frame.hidden = true;
    errorEl.hidden = false;
    errorEl.textContent = message;
  }

  function readError(error, path) {
    if (location.protocol === "file:") {
      return "浏览器拦截了本地文件读取。请在仓库根目录运行 python3 -m http.server 后再打开。也可以使用 htmlpreview 兜底链接。";
    }
    return "没能打开 " + path + "。若页面是从 GitHub 原始文件直接打开的，请改用本地静态服务、GitHub Pages，或点击 htmlpreview 兜底。";
  }

  async function fetchText(path) {
    const response = await fetch(encodeURI(path));
    if (!response.ok) throw new Error(String(response.status));
    return response.text();
  }

  function safePath(path) {
    return typeof path === "string" &&
      path.length > 0 &&
      !path.includes("..") &&
      !path.startsWith("/") &&
      !/^[a-z]+:/i.test(path) &&
      /^(iksm|marp|output)\//.test(path);
  }

  function encodePath(path) {
    return path.split("/").map(encodeURIComponent).join("/");
  }
  function rawUrl(path) { return RAW_BASE + encodePath(path); }
  function blobUrl(path) { return BLOB_BASE + encodePath(path); }

  function directoryOf(path) {
    const index = path.lastIndexOf("/");
    return index === -1 ? "" : path.slice(0, index + 1);
  }

  function resolveAgainst(fromFile, href) {
    if (!href || /^(https?:|data:|mailto:|#)/i.test(href)) return href;
    const base = directoryOf(fromFile);
    const parts = (base + href).split("/");
    const stack = [];
    parts.forEach((part) => {
      if (part === "..") stack.pop();
      else if (part !== "." && part !== "") stack.push(part);
    });
    return stack.join("/");
  }

  function escapeAttr(value) {
    return String(value).replace(/[&<>"]/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
    }[char]));
  }

  function previewCss() {
    return [
      "body{margin:0;padding:32px 36px 64px;background:#071426;color:#e7f3ff;font:16px/1.75 'Noto Sans SC','PingFang SC','Microsoft YaHei',sans-serif}",
      "img{max-width:100%;height:auto;border-radius:12px}",
      "a{color:#8fd8ff} code,pre{font-family:ui-monospace,monospace}",
      "pre{padding:12px 14px;overflow:auto;background:#0c1c33;border-radius:12px}",
      "blockquote{margin:0;padding-left:12px;border-left:3px solid #3d8bff;color:#b7cbe6}",
      "table{border-collapse:collapse} td,th{border:1px solid rgba(150,190,230,.3);padding:6px 8px}",
    ].join("");
  }

  function startStarfield() {
    const canvas = document.querySelector("#starfield");
    const context = canvas.getContext("2d");
    let stars = [];
    let width = 0;
    let height = 0;
    let frameId = 0;
    const pointer = { x: 0, y: 0 };

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const count = Math.min(80, Math.floor((width * height) / 18000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: 0.4 + Math.random() * 1.4,
        r: Math.random() * 1.6 + 0.3,
      }));
      draw();
    }

    function draw() {
      context.clearRect(0, 0, width, height);
      const ox = (pointer.x - width / 2) * 0.015;
      const oy = (pointer.y - height / 2) * 0.015;
      for (let i = 0; i < stars.length; i += 1) {
        const star = stars[i];
        if (!reduced) {
          star.x += star.z * 0.18;
          star.y -= star.z * 0.05;
          if (star.x > width + 8) star.x = -8;
          if (star.y < -8) star.y = height + 8;
        }
        const x = star.x + ox * star.z;
        const y = star.y + oy * star.z;
        context.beginPath();
        context.fillStyle = "rgba(190, 230, 255," + (0.35 + star.z / 3) + ")";
        context.arc(x, y, star.r, 0, Math.PI * 2);
        context.fill();
        for (let j = i + 1; j < stars.length; j += 1) {
          const other = stars[j];
          const dx = x - (other.x + ox * other.z);
          const dy = y - (other.y + oy * other.z);
          const dist = dx * dx + dy * dy;
          if (dist < 12000) {
            context.strokeStyle = "rgba(110, 180, 255," + (1 - dist / 12000) * 0.28 + ")";
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(other.x + ox * other.z, other.y + oy * other.z);
            context.stroke();
          }
        }
      }
    }

    function tick() {
      draw();
      frameId = window.requestAnimationFrame(tick);
    }

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) window.cancelAnimationFrame(frameId);
      else if (!reduced) tick();
    });
    resize();
    if (!reduced) tick();
  }
})();
