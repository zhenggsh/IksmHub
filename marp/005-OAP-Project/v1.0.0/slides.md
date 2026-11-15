---
marp: true
theme: default
paginate: true
html: true
size: 16:9
iksm-source: iksm/05-OAP-Project/OAP_intro.md
version: v1.0.0
---

<style>
/* ============ 全局基础 ============ */
section {
  background: #0b1020;
  color: #e8ecf8;
  font-family: "Microsoft YaHei", "PingFang SC", "Segoe UI", sans-serif;
  font-size: 20px;
  text-align: left;
  padding: 0;
}
section::after { color: #5a6490; }

/* ============ 统一标题（左上角） ============ */
.title {
  position: absolute; top: 34px; left: 64px; right: 64px;
  font-size: 30px; font-weight: 800; letter-spacing: 1px; color: #ffffff;
  line-height: 1.2;
}
.title::before {
  content: ""; position: absolute; left: -22px; top: 6px; bottom: 4px; width: 6px;
  border-radius: 3px; background: linear-gradient(180deg, #00e5ff, #7c4dff);
  box-shadow: 0 0 12px rgba(0, 229, 255, .7);
}
.title .no { color: #00e5ff; margin-right: 10px; }

/* ============ 题眼（标题下 2~3 行概括） ============ */
.gist {
  position: absolute; top: 88px; left: 64px; right: 64px;
  font-size: 16px; line-height: 1.55; color: #8b96b8;
}
.gist em { font-style: normal; font-weight: 700; color: #00e5ff; }
.gist em.p { color: #c792ff; } .gist em.g { color: #69f0ae; }
.gist em.o { color: #ffb020; } .gist em.r { color: #ff5470; }

/* ============ 内容区 / 补充信息 ============ */
.content { margin: 156px 64px 78px; height: 486px; }
.note {
  position: absolute; bottom: 22px; left: 64px; right: 64px;
  font-size: 13px; color: #6b7594; line-height: 1.5;
  border-top: 1px solid rgba(255,255,255,.09); padding-top: 10px;
}
.note b { color: #9fb4ff; font-weight: 600; }

/* ============ 动画 ============ */
@keyframes fadeUp { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: none; } }
@keyframes bgmove { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
@keyframes glow { 0%,100% { box-shadow: 0 0 30px rgba(0,229,255,.25); } 50% { box-shadow: 0 0 60px rgba(124,77,255,.4); } }
.content > * { animation: fadeUp .55s ease both; }
.content > *:nth-child(2) { animation-delay: .1s; }
.content > *:nth-child(3) { animation-delay: .2s; }
.content > *:nth-child(4) { animation-delay: .3s; }
.content > *:nth-child(5) { animation-delay: .4s; }
.content > *:nth-child(6) { animation-delay: .5s; }

/* ============ 卡片 ============ */
.card {
  background: rgba(255,255,255,.045); border: 1px solid rgba(255,255,255,.1);
  border-radius: 14px; padding: 16px 18px;
  transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
}
.card:hover { transform: translateY(-4px); border-color: rgba(0,229,255,.45); box-shadow: 0 10px 32px rgba(0,229,255,.14); }
.card h4 { margin: 0 0 8px; font-size: 19px; font-weight: 700; color: #00e5ff; }
.card p { margin: 4px 0; font-size: 15px; line-height: 1.55; color: #c4cdea; }
.card.p h4 { color: #c792ff; } .card.g h4 { color: #69f0ae; }
.card.o h4 { color: #ffb020; } .card.r h4 { color: #ff5470; }
.card.slim { padding: 12px 14px; }
.card.slim h4 { margin: 0 0 4px; font-size: 16px; }
.card.slim p { margin: 0; font-size: 13px; line-height: 1.45; }

/* ============ 左右结构 6 : 3.5 ============ */
.cols { display: flex; gap: 26px; height: 100%; }
.col-l { flex: 6; min-width: 0; }
.col-r { flex: 3.5; min-width: 0; }

/* ============ 等分列表结构 ============ */
.grid { display: flex; gap: 16px; height: 100%; }
.grid > * { flex: 1 1 0; min-width: 0; }
.grid.wrap { flex-wrap: wrap; align-content: stretch; }
.grid.wrap > * { flex: 1 1 30%; }
.vlist { display: flex; flex-direction: column; gap: 14px; height: 100%; }

/* ============ 标签 / 步骤 ============ */
.chips { display: flex; flex-wrap: wrap; gap: 8px; }
.chip {
  padding: 5px 13px; border-radius: 999px; font-size: 14px; font-weight: 600;
  background: rgba(0,229,255,.1); border: 1px solid rgba(0,229,255,.35); color: #7fe9ff;
}
.chip.p { background: rgba(199,146,255,.1); border-color: rgba(199,146,255,.4); color: #d8b6ff; }
.chip.g { background: rgba(105,240,174,.1); border-color: rgba(105,240,174,.4); color: #9ff5c8; }
.chip.o { background: rgba(255,176,32,.1); border-color: rgba(255,176,32,.4); color: #ffd07a; }
.chip.r { background: rgba(255,84,112,.1); border-color: rgba(255,84,112,.4); color: #ff9db1; }

ul.tight { margin: 6px 0 0; padding-left: 20px; }
ul.tight li { font-size: 15px; line-height: 1.7; color: #c4cdea; }
ul.tight li b { color: #7fe9ff; }

/* ============ 封面 ============ */
section.cover {
  background: linear-gradient(120deg, #070b18, #101a3d, #1a0f38, #070b18);
  background-size: 300% 300%; animation: bgmove 10s ease infinite;
}
section.cover .grid-bg {
  position: absolute; inset: 0;
  background-image: linear-gradient(rgba(127,233,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(127,233,255,.05) 1px, transparent 1px);
  background-size: 52px 52px;
  -webkit-mask-image: radial-gradient(circle at 50% 42%, #000 25%, transparent 78%);
  mask-image: radial-gradient(circle at 50% 42%, #000 25%, transparent 78%);
}
section.cover .orb { position: absolute; border-radius: 50%; filter: blur(75px); opacity: .55; }
section.cover .orb1 { width: 400px; height: 400px; background: #00b8d4; top: -110px; right: 30px; animation: glow 5s ease infinite; }
section.cover .orb2 { width: 330px; height: 330px; background: #7c4dff; bottom: -90px; left: 50px; animation: glow 6s ease infinite; }
section.cover .orb3 { width: 210px; height: 210px; background: #ff4d8d; top: 42%; left: -70px; opacity: .3; animation: glow 7s ease infinite; }
section.cover .num { position: absolute; right: 24px; bottom: -78px; font-size: 340px; font-weight: 900; line-height: 1; color: rgba(255,255,255,.045); }
section.cover .brand { position: absolute; top: 44px; left: 64px; font-size: 16px; letter-spacing: 5px; color: #7fe9ff; font-weight: 700; display: flex; align-items: center; gap: 10px; }
section.cover .brand .dot { width: 10px; height: 10px; border-radius: 2px; background: linear-gradient(135deg, #00e5ff, #7c4dff); box-shadow: 0 0 12px rgba(0,229,255,.8); }
section.cover .ver { position: absolute; top: 38px; right: 64px; font-size: 13px; letter-spacing: 2px; color: #7fe9ff; border: 1px solid rgba(0,229,255,.4); border-radius: 999px; padding: 5px 16px; background: rgba(0,229,255,.08); }
section.cover h1 {
  position: absolute; top: 176px; left: 0; right: 0; text-align: center;
  font-size: 132px; font-weight: 900; letter-spacing: 32px; margin: 0; color: transparent;
  background: linear-gradient(92deg, #ffffff 18%, #7fe9ff 55%, #c792ff 92%);
  -webkit-background-clip: text; background-clip: text;
  filter: drop-shadow(0 0 30px rgba(0,229,255,.35));
}
section.cover .en { position: absolute; top: 360px; left: 0; right: 0; text-align: center; font-size: 15px; letter-spacing: 8px; color: #6b7ba6; font-weight: 600; }
section.cover .line { position: absolute; top: 408px; left: 50%; transform: translateX(-50%); width: 170px; height: 3px; border-radius: 2px; background: linear-gradient(90deg, transparent, #00e5ff, #7c4dff, transparent); box-shadow: 0 0 16px rgba(0,229,255,.65); }
section.cover .sub { position: absolute; top: 436px; left: 0; right: 0; text-align: center; font-size: 22px; color: #aebadd; letter-spacing: 4px; }
section.cover .meta { position: absolute; bottom: 42px; left: 64px; right: 64px; display: flex; justify-content: space-between; font-size: 13px; color: #64719b; letter-spacing: 2px; border-top: 1px solid rgba(255,255,255,.1); padding-top: 16px; }

/* ============ 架构条 ============ */
.stack { display: flex; flex-direction: column; gap: 8px; height: 100%; }
.stack .card { padding: 10px 14px; }
.stack .card h4 { margin: 0 0 2px; font-size: 16px; }
.stack .card p { margin: 0; font-size: 13px; line-height: 1.4; }

/* 配图 / 关系图重点页：图占内容区绝大部分 */
section.shot .gist { top: 74px; font-size: 15px; }
section.shot .content {
  margin: 108px 36px 22px;
  height: 582px;
  display: flex;
  align-items: center;
  justify-content: center;
}
section.shot .content img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
section.shot .content img.ui {
  border-radius: 10px;
  border: 1px solid rgba(127,233,255,.28);
  box-shadow: 0 18px 48px rgba(0,0,0,.45);
}

section.diagram .gist { top: 74px; font-size: 15px; }
section.diagram .content { margin: 118px 48px 36px; height: 560px; }
section.diagram pre,
section.tree pre {
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  font-family: "WenQuanYi Micro Hei Mono", "Sarasa Mono SC", Consolas, monospace;
  font-size: 15px;
  line-height: 1.38;
  color: #d7e2ff;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(127,233,255,.22);
  border-radius: 12px;
  padding: 14px 18px;
  white-space: pre;
}
section.tree .content { margin: 148px 48px 36px; height: 520px; }
section.tree pre { font-size: 13px; line-height: 1.32; height: 100%; }
pre.spec {
  margin: 0; height: 100%; box-sizing: border-box; overflow: hidden;
  font-family: "WenQuanYi Micro Hei Mono", Consolas, monospace;
  font-size: 13px; line-height: 1.32; color: #d7e2ff;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(127,233,255,.22);
  border-radius: 12px; padding: 12px 14px; white-space: pre;
}
</style>

<!-- _class: cover -->
<!-- _paginate: false -->

<div class="grid-bg"></div>
<div class="orb orb1"></div>
<div class="orb orb2"></div>
<div class="orb orb3"></div>
<div class="num">05</div>
<div class="brand"><span class="dot"></span>IKSM · 知识转化</div>
<div class="ver">v1.0.0</div>

<h1>OAP</h1>
<div class="en">ONTOLOGY&nbsp;&nbsp;AI&nbsp;&nbsp;PLATFORM</div>
<div class="line"></div>
<div class="sub">企业业务本体，一次建模，四类投射</div>
<div class="meta"><span>iksm / 05-OAP-Project</span><span>依据 zhenggsh/OAP · mydoc/OAP_intro.md</span><span>Marp → HTML Slide</span></div>

---

<div class="title"><span class="no">00</span>这是什么</div>
<div class="gist">OAP 把<em>企业业务本体</em>做成可视化工程平台。本体定义一次，再投射成<em class="g">文本 / 图库 / 推理 / Agent 对接</em>四类消费形态。</div>

<div class="content">
<div class="grid">
  <div class="card">
    <h4>可视化工程平台</h4>
    <p>上游开篇：企业业务本体 → 四类投射（文本 / 图库 / 推理 / Agent 对接）。</p>
  </div>
  <div class="card g">
    <h4>一份本体</h4>
    <p>OWL/Turtle 是单一事实源。文本语料、图库、推理引擎、Agent 工具都从同一份本体派生。</p>
  </div>
  <div class="card p">
    <h4>本文六块</h4>
    <p>设计背景、设计理念、主要模块、系统架构、本体论体系、本体与智能体的关系。</p>
  </div>
</div>
</div>

<div class="note"><b>只讲 mydoc/OAP_intro.md。</b>胶片版本是 v1.0.0。上游没有单列未实现清单，这里不另造未交付项。</div>

---

<div class="title"><span class="no">00</span>内容地图</div>
<div class="gist">顺序跟上游：先讲知识为什么散，再讲四条理念、模块、架构与数据，然后是本体文件和四类投射，最后是本体怎样约束智能体。</div>

<div class="content">
<div class="vlist">
  <div class="grid" style="height:auto;">
    <div class="card"><h4>01 设计背景</h4><p>口径、规则、概念、提示词各写一处。先建本体，再一键投射。</p></div>
    <div class="card g"><h4>02 设计理念</h4><p>本体即契约。一次建模，四类投射。业务底座解耦。规则可验证。</p></div>
    <div class="card p"><h4>03 主要模块</h4><p>前端、后端、推理微服务、本体资产。后端再分五个业务模块。</p></div>
  </div>
  <div class="grid" style="height:auto;">
    <div class="card"><h4>04 系统架构</h4><p>架构图、数据流、目录、技术栈、业务数据与平台元数据。</p></div>
    <div class="card o"><h4>05 本体论</h4><p>六个文件。文本、图库、推理、Agent 对接四类映射。</p></div>
    <div class="card r"><h4>06 与智能体</h4><p>知识源约束行为。认知、工具、表达，以及回写闭环。</p></div>
  </div>
</div>
</div>

<div class="note"><b>溯源：</b>iksm/05-OAP-Project/OAP_intro.md ← zhenggsh/OAP mydoc/OAP_intro.md（commit cbe405a9，intro min modify，2026-11-15 17:31 Asia/Shanghai）。</div>

---

<div class="title"><span class="no">01</span>定义散落在各处</div>
<div class="gist">数据智能化同时碰到 BI 语义层、知识图谱、规则引擎和 AI Agent。结构性问题是<em class="o">业务知识的定义不在一处</em>。</div>

<div class="content">
<div class="grid">
  <div class="card">
    <h4>口径不一致</h4>
    <p>指标口径在 Excel 里。</p>
    <p>同名指标会对不上，例如「销售额」含税还是未含税。</p>
  </div>
  <div class="card o">
    <h4>规则在代码里</h4>
    <p>业务人员无法审阅。</p>
    <p>改规则就要改代码。</p>
  </div>
  <div class="card r">
    <h4>模型无感知</h4>
    <p>领域概念在文档里，提示词在 prompt 里。</p>
    <p>大模型 / Agent 对企业业务无感知，回答靠幻觉，讲不出推理依据。</p>
  </div>
  <div class="card p">
    <h4>重复建设</h4>
    <p>图谱、推理、报表各自建模。</p>
    <p>重复，而且互相矛盾。</p>
  </div>
</div>
</div>

<div class="note"><b>每一处都各说各话。</b>这是设计背景，不是另外一张能力清单。</div>

---

<div class="title"><span class="no">01</span>先建本体，再四处消费</div>
<div class="gist">设计出发点：先建立一套机器可读的<em>企业业务本体</em>，作为单一事实源，再<em class="g">一键投射</em>到下游消费形态。</div>

<div class="content">
<div class="cols">
  <div class="col-l">
    <div class="card" style="height:100%;">
      <h4>Ontology → Project</h4>
      <p>本体定义一次，处处消费。</p>
      <p>文本语料、图库、推理引擎、Agent 工具，全部由同一份 OWL/Turtle 派生。</p>
      <p>口径一致是派生的结果，不是事后对齐。</p>
    </div>
  </div>
  <div class="col-r vlist">
    <div class="card slim g"><h4>单一事实源</h4><p>机器可读。下游不再各写一份定义。</p></div>
    <div class="card slim"><h4>投射</h4><p>Project 到所有下游消费形态。</p></div>
  </div>
</div>
</div>

<div class="note"><b>四类消费形态</b>在下一章展开：Markdown 文本、RDF 图库资产、推理产物、Agent 对接三件套。</div>

---

<div class="title"><span class="no">02</span>四条设计理念</div>
<div class="gist">上游当前是四条。第 3 条是<em>业务底座解耦</em>：营业系统、网管系统都可以作为底座，本体设计可以单独导出。</div>

<div class="content">
<div class="vlist">
  <div class="grid" style="height:auto;">
    <div class="card">
      <h4>1 · 本体即契约</h4>
      <p>本体不是文档，是平台全部能力的事实源。</p>
      <p>类、属性、规则、指标口径都写成 OWL/Turtle。人、解析器、推理机、大模型读同一份文件。</p>
    </div>
    <div class="card g">
      <h4>2 · 一次建模，四类投射</h4>
      <p>同一份本体生成四类产物。投射是纯函数：<b>generate(type, sources, ctx) → Artifact[]</b>。</p>
      <p>可重复、可刷新、可下载、可版本化。</p>
    </div>
  </div>
  <div class="grid" style="height:auto;">
    <div class="card o">
      <h4>3 · 业务底座解耦</h4>
      <p>可基于不同业务底座做本体设计，例如营业系统、网管系统。</p>
      <p>本体设计可作为独立的输出物品导出。</p>
    </div>
    <div class="card p">
      <h4>4 · 推理与规则显式化</h4>
      <p>黑金 / 金 / 银、可疑订单不写死在代码里。OWL 类框架 + SPARQL CONSTRUCT，推理后回写业务库。</p>
      <p>SHACL 做合规校验。规则可查询、可审计、可解释。</p>
    </div>
  </div>
</div>
</div>

<div class="note"><b>按上游现行原文。</b>不把介绍里没写的原则补进来。</div>

---

<div class="title"><span class="no">03</span>四大部分</div>
<div class="gist">OAP 由<em>前端、后端、推理微服务、本体资产</em>构成。后端内部再划成五个业务模块，下一页按位置对照。</div>

<div class="content">
<div class="grid">
  <div class="card">
    <h4>前端应用</h4>
    <p><b>frontend/</b></p>
    <p>总览、本体编辑器（Monaco）、数据浏览、四个投射向导、产物中心。</p>
  </div>
  <div class="card g">
    <h4>后端</h4>
    <p>NestJS。五个业务模块：本体、投射、图库代理、推理代理、数据模型。</p>
  </div>
  <div class="card p">
    <h4>推理微服务</h4>
    <p><b>reasoner/</b> ReasonerEngine。</p>
    <p>rdflib + owlrl 做 OWL-RL 前向闭包。SPARQL 判定客户分级与可疑订单。pyshacl 做合规校验。</p>
  </div>
  <div class="card o">
    <h4>本体资产</h4>
    <p><b>ontology-assets/</b></p>
    <p>core、rules、metrics、enterprise、sample-data、classification.rq。</p>
  </div>
</div>
</div>

<div class="note"><b>推理微服务和后端里的推理代理不是同一个目录。</b>代理在 backend/src/reasoner/，引擎在 reasoner/。</div>

---

<div class="title"><span class="no">03</span>后端五个业务模块</div>
<div class="gist">路径都在 <em>backend/src/</em>。职责按上游模块表，不把表外的接口补成已有能力。</div>

<div class="content">
<div class="vlist">
  <div class="card slim"><h4>本体管理 · OntologyModule</h4><p>ontology/。浏览、Turtle 在线编辑、n3 语法校验（错误定位到行）、版本历史、结构摘要（类 / 对象属性 / 数据属性 / 规则）。</p></div>
  <div class="card slim g"><h4>投射中心 · ProjectionsModule</h4><p>projections/。四类投射的同步生成流水线（generators/ 纯函数）、产物落库、刷新、删除、下载。</p></div>
  <div class="card slim"><h4>图库代理 · GraphDbModule</h4><p>graphdb/。GraphDB REST 代理：仓库创建 / 清空、Turtle 上传、SPARQL SELECT / UPDATE、预置查询。</p></div>
  <div class="card slim p"><h4>推理代理 · ReasonerModule</h4><p>reasoner/。Python 推理微服务的 HTTP 代理：健康检查、推理运行、SHACL 校验。</p></div>
  <div class="card slim o"><h4>数据模型 · DataModelModule</h4><p>datamodel/。客户 / 产品 / 订单 / 组织的 REST 分页查询；推理结果回写 tier / isSuspicious。</p></div>
</div>
</div>

<div class="note"><b>前端和 ReasonerEngine 在上一页。</b>这一页只列后端五个模块。</div>

---

<!-- _class: shot -->

<div class="title"><span class="no">04</span>系统架构</div>
<div class="gist">节点、分组和连线与上游 <em>flowchart TB</em> 相同。浏览器走 nginx 反代，后端连 PostgreSQL、GraphDB 和推理服务，两边都读 ontology-assets。</div>

<div class="content">
  <img src="assets/architecture.png" alt="系统架构：浏览器中的 React 前端，docker-compose 内的 NestJS 后端、PostgreSQL、GraphDB、推理微服务和 ontology-assets，以及下游消费方" />
</div>

---

<!-- _class: shot -->

<div class="title"><span class="no">04</span>平台数据流</div>
<div class="gist">同一份 OWL/Turtle 分出四条投射，再落到四类消费方。文件名与上游 <em>flowchart LR</em> 一致。</div>

<div class="content">
  <img src="assets/dataflow.png" alt="数据流：企业业务本体分别生成文本、图库、推理、Agent 对接四类产物，并对应 LLM/RAG、SPARQL、规则引擎和 AI Agent" />
</div>

---

<div class="title"><span class="no">04</span>从架构图上读到的端口</div>
<div class="gist">上一页的图画的是部署关系。端口、前缀和资产文件名按图中原文，方便和目录、技术栈对照。</div>

<div class="content">
<div class="grid wrap">
  <div class="card slim"><h4>前端 8080</h4><p>React 18 + Vite，nginx 托管。/api 反代到后端。</p></div>
  <div class="card slim g"><h4>后端 3000</h4><p>NestJS 10，前缀 /api。五个模块：Ontology、Projections、GraphDb、Reasoner、DataModel。</p></div>
  <div class="card slim"><h4>PostgreSQL 16</h4><p>业务数据 + 平台元数据。Prisma ORM。</p></div>
  <div class="card slim p"><h4>GraphDB 10.6</h4><p>RDF 图库，repository=oap，端口 7200。REST 代理。</p></div>
  <div class="card slim o"><h4>推理 8100</h4><p>FastAPI。rdflib + owlrl + pyshacl。HTTP 代理。</p></div>
  <div class="card slim"><h4>ontology-assets/</h4><p>core、rules、metrics、enterprise、sample-data、classification.rq。推理启动加载；后端卷挂载读取。</p></div>
</div>
</div>

<div class="note"><b>下游消费方</b>是 LLM / RAG / Agent / BI / 图查询。后端提供投射产物下载，GraphDB 提供 SPARQL 查询结果。</div>

---

<!-- _class: tree -->

<div class="title"><span class="no">04</span>目录结构</div>
<div class="gist">Monorepo。左边到后端，右边是推理服务、前端和 docs。文件名与上游代码块一致，注释较长的留在知识条目原文。</div>

<div class="content">
<div class="cols">
  <div class="col-l">
<pre>oap/
├── docker-compose.yml    # 五服务
├── .env.example
├── README.md
├── ontology-assets/
│   ├── core.ttl
│   ├── rules.ttl
│   ├── metrics.ttl
│   ├── enterprise.ttl
│   ├── sample-data.ttl
│   └── classification.rq
└── backend/
    ├── prisma/
    │   ├── schema.prisma
    │   └── seed.ts
    ├── src/
    │   ├── main.ts / app.module.ts
    │   ├── prisma/
    │   ├── ontology/
    │   ├── projections/
    │   ├── graphdb/
    │   ├── reasoner/
    │   └── datamodel/
    └── test/             # Jest + e2e</pre>
  </div>
  <div class="col-r">
<pre>reasoner/
├── app/
│   ├── main.py           # FastAPI
│   ├── engine.py         # ReasonerEngine
│   └── schemas.py
└── tests/test_engine.py  # pytest
frontend/
└── src/
    ├── api/
    ├── components/
    ├── pages/
    └── __tests__/        # Vitest
docs/</pre>
  </div>
</div>
</div>

---

<div class="title"><span class="no">04</span>技术栈</div>
<div class="gist">六行按上游分层表。图数据库写的是 Ontotext GraphDB 10.6 free edition，编排放在 docker-compose 里。</div>

<div class="content">
<div class="grid wrap">
  <div class="card slim"><h4>前端</h4><p>React 18、TypeScript、Vite、Vitest、React Router、TanStack Query、Tailwind CSS、Monaco Editor。</p></div>
  <div class="card slim g"><h4>后端</h4><p>NestJS 10、TypeScript、Jest、Prisma 5、n3（Turtle 解析）。</p></div>
  <div class="card slim"><h4>推理服务</h4><p>Python 3.11、FastAPI、rdflib、owlrl、pyshacl。</p></div>
  <div class="card slim p"><h4>关系数据库</h4><p>PostgreSQL 16，Prisma ORM。</p></div>
  <div class="card slim o"><h4>图数据库</h4><p>Ontotext GraphDB 10.6，free edition，docker-compose 内置。</p></div>
  <div class="card slim"><h4>编排部署</h4><p>docker-compose：postgres / graphdb / reasoner / backend / frontend，五个服务。</p></div>
</div>
</div>

<div class="note"><b>五服务</b>与目录里的 docker-compose.yml 注释一致。介绍没有再写启动步骤，这里不补命令。</div>

---

<!-- _class: shot -->

<div class="title"><span class="no">04</span>业务数据模型</div>
<div class="gist">与本体类一一对应。关系是 placesOrder、containsItem、itemProduct、worksIn。tier 和 isSuspicious 标的是<em class="o">推理回写</em>。</div>

<div class="content">
  <img src="assets/er-model.png" alt="业务数据 ER：Customer、Order、OrderItem、Product、Department、Employee 以及上游列出的字段" />
</div>

---

<div class="title"><span class="no">04</span>平台元数据与 RDF</div>
<div class="gist">PostgreSQL 承载业务数据和平台元数据，GraphDB 承载 RDF。四张元数据表的字段按上游。</div>

<div class="content">
<div class="vlist">
  <div class="card slim"><h4>OntologyFile</h4><p>name / content / version / updatedAt。本体文件当前版本全文与版本号。</p></div>
  <div class="card slim g"><h4>OntologyFileVersion</h4><p>fileId / version / content / savedAt。编辑历史，可回看任意历史版本。</p></div>
  <div class="card slim"><h4>Projection</h4><p>type / name / status / config。type ∈ text | graph | reasoner | agent。status ∈ pending | generated | applied | failed。config 存 JSON 生成参数。</p></div>
  <div class="card slim p"><h4>ProjectionArtifact</h4><p>projectionId / filename / content / mediaType。mediaType ∈ text/markdown | text/turtle | application/json | application/sparql-query。</p></div>
</div>
</div>

<div class="note"><b>GraphDB repository = oap。</b>加载 enterprise.ttl 与 sample-data.ttl，再用 classification.rq 的 CONSTRUCT 物化客户分层类、可疑订单类等。</div>

---

<div class="title"><span class="no">05</span>本体六个文件</div>
<div class="gist">OWL/Turtle，命名空间 <em>ent: http://example.com/enterprise#</em>。四个模块文件，加样例数据和 SPARQL 规则集。</div>

<div class="content">
<div class="grid wrap">
  <div class="card slim"><h4>core.ttl · 核心层</h4><p>客户 / 产品 / 订单 / 组织。含 owl:disjointWith、对象属性、数据属性、propertyChainAxiom（购买过，无需 ETL）。</p></div>
  <div class="card slim g"><h4>rules.ttl · 规则层</h4><p>黑金 / 金 / 银，互斥。合规框架：可疑订单、受限产品。数值条件由 SPARQL 承载，类 IRI 咬合。</p></div>
  <div class="card slim"><h4>metrics.ttl · 指标口径</h4><p>ent:Metric 与 ent:Dimension。口径 / 公式 / 粒度 / 数据来源。口径即数据。</p></div>
  <div class="card slim p"><h4>enterprise.ttl · 入口</h4><p>owl:imports 组合上面三个模块。推理服务与图库加载此文件即得全量本体。</p></div>
  <div class="card slim o"><h4>sample-data.ttl</h4><p>3 客户 / 3 产品 / 3 订单（含订单项）。与 PostgreSQL seed 对齐。</p></div>
  <div class="card slim r"><h4>classification.rq</h4><p>R-C1 黑金、R-C2 金卡、R-C3 银卡、R-K1 可疑订单、R-K2 受限产品销售。</p></div>
</div>
</div>

<div class="note"><b>阈值按上游：</b>R-C1 年消费 ≥50 万且投诉=0；R-C2 10 万~50 万；R-C3 1 万~10 万；R-K1 金额 ≥20 万且注册 &lt;30 天；R-K2 受限产品销售。</div>

---

<div class="title"><span class="no">05</span>文本投射与图库投射</div>
<div class="gist">type = text 给人和模型读。type = graph 把样例和 CONSTRUCT 送进 GraphDB，成功是 <em class="g">applied</em>，图库不可达则降为 <em class="o">generated</em>。</div>

<div class="content">
<div class="cols">
  <div class="col-l">
    <div class="card" style="height:100%;">
      <h4>文本 · glossary / rules / metrics</h4>
      <p>glossary.md：类表、属性表、规则表，含 rdfs:label / rdfs:comment。</p>
      <p>rules.md：OWL 约束与阈值写成 R-C1~R-C3、R-K1、R-K2。</p>
      <p>metrics-handbook.md：指标名 / 公式 / 粒度 / 数据源。</p>
      <p>注入系统提示词，或切块做 RAG 语料。</p>
    </div>
  </div>
  <div class="col-r">
    <div class="card g" style="height:100%;">
      <h4>图库 · 三份产物</h4>
      <p>sample-data.ttl、classification.rq，都从 ontology-assets 复制。</p>
      <p>graphdb-compose.yml：单服务 compose，供独立导出部署。</p>
      <p>自动应用：仓库 oap 存在 → 清空 → 上传 → 逐条 CONSTRUCT。</p>
      <p>预置查询 q1 客户分级、q2 可疑订单、q3 客户-产品购买链。</p>
    </div>
  </div>
</div>
</div>

<div class="note"><b>降级不是另做一套结果。</b>GraphDB 不可达时状态改为 generated，并附提示。</div>

---

<div class="title"><span class="no">05</span>推理投射与 Agent 三件套</div>
<div class="gist">type = reasoner 对接内置推理服务，报告<em class="r">禁止伪造</em>。type = agent 交付工具、提示词和五段式输出。</div>

<div class="content">
<div class="cols">
  <div class="col-l">
    <div class="card" style="height:100%;">
      <h4>推理 · closure-report.json</h4>
      <p>字段：assertedTriples、closureTriples、derivedClasses、suspiciousOrders、durationMs。</p>
      <p>数据来自推理服务真实响应：OWL-RL 前向闭包 + SPARQL 判定。</p>
      <p>reasoner-usage.md 是固定模板的 API 说明。</p>
      <p>POST /api/datamodel/sync-reasoner 回写 Customer.tier、Order.isSuspicious。</p>
      <p>pyshacl：OrderShape / RestrictedSaleShape / SuspiciousFlowShape。</p>
    </div>
  </div>
  <div class="col-r">
    <div class="card p" style="height:100%;">
      <h4>Agent · 三件套</h4>
      <p>tool-schemas.json：query_customers、classify_customers、validate_order。OpenAI function-calling，description 引用本体术语。</p>
      <p>system-prompt.md：术语表摘要 + 工具使用纪律。</p>
      <p>response-format.schema.json：结论 / 证据 / 推理链 / 置信度 / 建议。</p>
    </div>
  </div>
</div>
</div>

<div class="note"><b>口径跟着本体走。</b>工具定义、提示词措辞、输出格式都由同一份本体派生。</div>

---

<!-- _class: shot -->

<div class="title"><span class="no">06</span>本体怎样进到智能体</div>
<div class="gist">关系是<em>知识源 → 行为约束</em>。类、规则、指标分别进提示词、工具和输出格式；后端再把三件套投给 Agent，并接下调用。</div>

<div class="content">
  <img src="assets/agent-relation.png" alt="本体与智能体：类体系注入提示词，规则定义工具，指标约束输出；OAP 后端投射三件套并连接业务库与推理服务" />
</div>

---

<div class="title"><span class="no">06</span>认知、工具、表达、闭环</div>
<div class="gist">段首写「三类机制」，下面四条都保留：世界观、手脚、表达，以及改本体之后的全链路一致。</div>

<div class="content">
<div class="grid">
  <div class="card">
    <h4>1 · 业务世界观</h4>
    <p>术语表和规则手册进入系统提示词。</p>
    <p>用企业定义的概念、口径和阈值，而不是只靠预训练里的泛化知识。</p>
  </div>
  <div class="card g">
    <h4>2 · 约束手脚</h4>
    <p>工具的名称、参数、描述来自类与属性。</p>
    <p>能问什么、能改什么由本体划界。后端接真实 REST 与推理服务。</p>
  </div>
  <div class="card p">
    <h4>3 · 规范表达</h4>
    <p>输出固定五段：结论、证据、推理链、置信度、建议。</p>
    <p>证据和推理链要挂到本体概念与规则上。</p>
  </div>
  <div class="card o">
    <h4>4 · 双向闭环</h4>
    <p>工具调用可触发推理，并把分级 / 合规结果回写业务库。</p>
    <p>编辑器保存后版本 +1，投射刷新同步三件套。</p>
  </div>
</div>
</div>

<div class="note"><b>可解释、可追溯</b>指的是输出层那两条：证据和推理链。不是额外加的评测产品。</div>

---

<div class="title"><span class="no">06</span>收束</div>
<div class="gist">没有本体的智能体只有通用智能；有了本体，才有企业专属的业务判断力。OAP 把中间的翻译做成投射流水线。</div>

<div class="content">
<div class="grid">
  <div class="card g">
    <h4>介绍里有的</h4>
    <p>OWL/Turtle 单一事实源。四类投射：text、graph、reasoner、agent。推理回写 tier / isSuspicious。SHACL 三组 Shape。</p>
  </div>
  <div class="card">
    <h4>图是这四张</h4>
    <p>系统架构、平台数据流、业务数据 ER、本体与智能体。</p>
    <p>节点和连线按上游 mermaid，渲成图片放进胶片。正文没有引用截图。</p>
  </div>
  <div class="card o">
    <h4>边界就停在原文</h4>
    <p>规则阈值、产物文件名、端口和五服务编排都按介绍。介绍没写的启动步骤和未实现清单，不在这套胶片里补。</p>
  </div>
</div>
</div>

<div class="note"><b>溯源：</b>iksm/05-OAP-Project/OAP_intro.md ← zhenggsh/OAP mydoc/OAP_intro.md（cbe405a9dff4a10f7c26808ae2856c07a5e17ed2）。本版 v1.0.0。</div>
