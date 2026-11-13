---
marp: true
theme: default
paginate: true
html: true
size: 16:9
iksm-source: iksm/04-DMP-Project/DMP_intro.md
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
<div class="num">04</div>
<div class="brand"><span class="dot"></span>IKSM · 知识转化</div>
<div class="ver">v1.0.0</div>

<h1>DMP</h1>
<div class="en">DIVE&nbsp;&nbsp;MODEL&nbsp;&nbsp;PLATFORM</div>
<div class="line"></div>
<div class="sub">本机运行、单用户的大模型调用实验室</div>
<div class="meta"><span>iksm / 04-DMP-Project</span><span>依据 zhenggsh/DMP · mydoc/DMP_intro.md</span><span>Marp → HTML Slide</span></div>

---

<div class="title"><span class="no">00</span>这是什么</div>
<div class="gist">DMP 在<em>本机</em>、给<em class="g">单用户</em>用。网页上组织项目与实验，用 Python 工作流编排 LLM 与数据工具，并把每一次调用的原始请求、响应、耗时、Token 用量和校验结论存档。</div>

<div class="content">
<div class="grid">
  <div class="card">
    <h4>只听本机</h4>
    <p>访问地址 <b>http://127.0.0.1:8765</b>。</p>
    <p>启动命令是 <b>python run.py</b>，依赖见 requirements.txt。</p>
  </div>
  <div class="card g">
    <h4>Demo 可离线</h4>
    <p>内置 Demo 模型可以离线体验。</p>
    <p>这条路径不请求真实大模型。</p>
  </div>
  <div class="card o">
    <h4>个人本地原型</h4>
    <p>界面标注 <b>v0.1</b>。</p>
    <p>版本定位是个人本地原型。多租户生产系统不在这个定位里。</p>
  </div>
  <div class="card p">
    <h4>本文讲到哪</h4>
    <p>系统是什么、为何这样设计、由哪些部分组成。</p>
    <p>更细的实现在文档中心 dmp-doc/。</p>
  </div>
</div>
</div>

<div class="note"><b>只讲 mydoc/DMP_intro.md。</b>胶片版本是 v1.0.0；界面上的 v0.1 是上游写的产品标注。</div>

---

<div class="title"><span class="no">00</span>内容地图</div>
<div class="gist">顺序跟上游：<em>为什么做成可观测的本地实验室</em>，<em class="r">哪些明确不做</em>，然后是理念、九个模块、运行时结构、数据，以及怎么在本机跑起来。</div>

<div class="content">
<div class="vlist">
  <div class="grid" style="height:auto;">
    <div class="card"><h4>01 背景与非目标</h4><p>四个难点，四个固化对象。非目标单独标成未实现、未交付。</p></div>
    <div class="card g"><h4>02 理念与权威源</h4><p>可观测、纯 HTTP、可编程。SQLite 是权威，文件是快照。</p></div>
    <div class="card p"><h4>03 九个模块</h4><p>工作台、历史、模型、工具、技能、文档与报告、引擎、Workspace、本机防护。四张原图各占一页。</p></div>
  </div>
  <div class="grid" style="height:auto;">
    <div class="card"><h4>04 架构与技术栈</h4><p>§4.1 的文本结构图按原文保留。入口、目录、依赖跟上游。</p></div>
    <div class="card o"><h4>05 数据结构</h4><p>runs 是不可变快照，calls 是最小观测单元。八种 mode 是模板名。</p></div>
    <div class="card r"><h4>06 怎么跑</h4><p>本机三条命令，后台 ws.py。相关文档只列上游那张表。</p></div>
  </div>
</div>
</div>

<div class="note"><b>溯源：</b>iksm/04-DMP-Project/DMP_intro.md ← zhenggsh/DMP mydoc/DMP_intro.md（commit 4f4bdca，intro，2026-11-12）。</div>

---

<div class="title"><span class="no">01</span>难点不在发一次请求</div>
<div class="gist">上游把大模型应用的难点收成四件：调用形态多、过程看不见、工具和密钥散、网页和后台各跑各的。</div>

<div class="content">
<div class="grid">
  <div class="card">
    <h4>调用形态多样</h4>
    <p>单次问答、多步审查、并行对比、工具循环（ReAct）、条件重试、计划—执行、检索增强。</p>
    <p>需要可改、可复用的流程骨架。</p>
  </div>
  <div class="card o">
    <h4>过程不可见</h4>
    <p>SDK 和 Agent 框架会把协议、重试、工具参数包起来。</p>
    <p>排障时看不到发给模型的原始 JSON，也难对比同一输入、不同参数或模式。</p>
  </div>
  <div class="card r">
    <h4>工具与密钥散落</h4>
    <p>SQL、图、向量、REST、文件、技能提示词若各自配置，实验不可复现。</p>
    <p>历史记录还容易泄露密钥。</p>
  </div>
  <div class="card p">
    <h4>网页与后台脱节</h4>
    <p>既要在浏览器里点选运行，也要把一次实验拷出去给外部 Agent CLI 或独立 Python。</p>
    <p>两边应共用同一套限额与留痕。</p>
  </div>
</div>
</div>

<div class="note"><b>因此做成可观测的本地实验室。</b>上游写明它要做的是这个，通用 Agent 框架是它离开的方向。</div>

---

<div class="title"><span class="no">01</span>四个固化对象</div>
<div class="gist">实验把定义冻住，运行把一次执行冻住，调用是最小记账单位，Workspace 让前台实验可以脱离网页再跑。</div>

<div class="content">
<div class="grid">
  <div class="card">
    <h4>实验 Experiment</h4>
    <p>固化提示词、模型、工作流代码与工具授权。</p>
  </div>
  <div class="card g">
    <h4>运行 Run</h4>
    <p>不可变快照。一次运行对应一份 spec。</p>
    <p>事后改实验，不影响历史。</p>
  </div>
  <div class="card p">
    <h4>调用 Call</h4>
    <p>最小观测单元。</p>
    <p>模型、工具、嵌入、文件、记忆都走同一套记账。</p>
  </div>
  <div class="card o">
    <h4>Workspace 单向导出</h4>
    <p>前台实验可以脱离网页独立运行，再按需回导主库。</p>
  </div>
</div>
</div>

<div class="note"><b>下一页是明确非目标。</b>上游要求勿当作缺陷。这些项保持未实现、未交付。</div>

---

<div class="title"><span class="no">01</span>明确非目标</div>
<div class="gist">下面这些上游写成<em class="r">非目标</em>。本套知识与胶片都按未实现、未交付来讲。契约里留了名字，也不等于功能已经可用。</div>

<div class="content">
<div class="grid wrap">
  <div class="card slim r"><h4>原生 Anthropic / Gemini 协议</h4><p>未实现，未交付</p></div>
  <div class="card slim r"><h4>Responses API</h4><p>未实现，未交付</p></div>
  <div class="card slim r"><h4>Token 流式展示</h4><p>未实现，未交付。协议侧按非流式约束。</p></div>
  <div class="card slim r"><h4>语音输入</h4><p>未实现，未交付</p></div>
  <div class="card slim r"><h4>自动语义评分</h4><p>未实现，未交付</p></div>
  <div class="card slim r"><h4>MCP / CLI 工具类型</h4><p>创建返回 422。契约预留，未实现。</p></div>
  <div class="card slim r"><h4>用户认证</h4><p>未实现，未交付</p></div>
  <div class="card slim r"><h4>生产部署</h4><p>未实现，未交付。定位仍是个人本地原型。</p></div>
</div>
</div>

<div class="note"><b>已实现的工具类型是另一份清单：</b>sqlite、graph、vector、rest、file、skill。local_guard 是本机防护，用户认证仍在这页的非目标里。</div>

---

<div class="title"><span class="no">02</span>四条设计理念</div>
<div class="gist">打开封装、剥掉类库、把调用模式写成可以随时改的代码，再把权威放在数据库里。</div>

<div class="content">
<div class="grid">
  <div class="card">
    <h4>2.1 可观测</h4>
    <p>每一次模型和工具的调用都留下请求、响应、输出、耗时与评价。</p>
  </div>
  <div class="card g">
    <h4>2.2 简单调用</h4>
    <p>用纯粹的 HTTP 请求调用大模型。</p>
    <p>上游写明不使用 LangChain、Google ADK 等类库。</p>
  </div>
  <div class="card p">
    <h4>2.3 模式可编程</h4>
    <p>调用方式写成可编程的模式。</p>
    <p>随时修改，随时实验。</p>
  </div>
  <div class="card o">
    <h4>2.4 库与文件分工</h4>
    <p>数据库为权威源。</p>
    <p>文件为快照。下一页是三层各自的角色。</p>
  </div>
</div>
</div>

<div class="note"><b>运行时没有 LLM SDK。</b>第三方依赖只有 requirements.txt 里的五条，写在技术栈那一页。</div>

---

<div class="title"><span class="no">02</span>数据库为权威，文件为快照</div>
<div class="gist"><em>data/dmp.sqlite3</em> 是唯一权威。项目目录里的 JSON 不能反向导回。Workspace 是保存实验时的单向导出。</div>

<div class="content">
<div class="grid">
  <div class="card">
    <h4>data/dmp.sqlite3</h4>
    <p>唯一权威。</p>
    <p>项目、实验、模型、运行、调用、工具版本、报告索引都在这里。</p>
  </div>
  <div class="card o">
    <h4>projects/&lt;项目ID&gt;/</h4>
    <p>实验 JSON 快照。</p>
    <p>不支持从文件反向导入。</p>
  </div>
  <div class="card p">
    <h4>workspaces/&lt;实验ID&gt;/</h4>
    <p>保存实验时单向导出。</p>
    <p>目录内手工改动不回读。</p>
    <p>带生成头注的文件，下次保存会覆盖。</p>
  </div>
</div>
</div>

<div class="note"><b>回导是另一条显式路径。</b>standalone 运行结束后，workspace_cli 按 run id 幂等回导主库。手工改导出目录本身不会被读回去。</div>

---

<div class="title"><span class="no">03</span>九个模块</div>
<div class="gist">按用户可见能力与后端职责对照。前四块各有一张上游原图，后面五块上游没有单独配图。</div>

<div class="content">
<div class="grid wrap">
  <div class="card slim"><h4>3.1 实验工作台</h4><p>提示词、参数、八种 Pattern、授权工具、运行统计。Ctrl+S 写库并导出。</p></div>
  <div class="card slim"><h4>3.2 调用历史</h4><p>按实验或全局看 runs / calls、原始报文和评价。</p></div>
  <div class="card slim g"><h4>3.3 模型配置</h4><p>登记 OpenAI 兼容服务。内置 demo 不可改。</p></div>
  <div class="card slim"><h4>3.4 工具中心</h4><p>六种已实现类型。MCP/CLI 创建返回 422。</p></div>
  <div class="card slim p"><h4>3.5 技能中心</h4><p>类型为 skill 的工具实例，核心是 SKILL.md。</p></div>
  <div class="card slim"><h4>3.6 文档与报告</h4><p>只读 dmp-doc/。报告来自已结束运行，不再调模型。</p></div>
  <div class="card slim o"><h4>3.7 引擎与 Worker</h4><p>Context 在 engine.py。worker 是子进程入口。</p></div>
  <div class="card slim"><h4>3.8 Workspace CLI</h4><p>exporter、ws.py、tool_cli、workspace_cli。</p></div>
  <div class="card slim r"><h4>3.9 存储与防护</h4><p>SQLite WAL，加上只允许本机的 local_guard。</p></div>
</div>
</div>

<div class="note"><b>对应文件写在各页脚注。</b>这里先把边界排开，避免把非目标写进模块能力。</div>

---

<div class="title"><span class="no">03</span>实验工作台</div>
<div class="gist">编辑提示词、系统提示、温度 / max_tokens / 超时、校验规则和八种 LLM Pattern 的工作流代码。勾选授权工具后运行，并查看本次运行统计。</div>

<div class="content">
<div class="cols">
  <div class="col-l">
    <div class="grid wrap" style="height:100%;">
      <div class="card slim"><h4>写什么</h4><p>提示词、系统提示、工作流代码、校验规则、授权工具。</p></div>
      <div class="card slim g"><h4>参数</h4><p>温度、max_tokens、超时。default_spec 的例子在数据结构页。</p></div>
      <div class="card slim p"><h4>八种 Pattern</h4><p>single、sequence、parallel、tools、branch、loop、plan、rag。它们是模板名。</p></div>
      <div class="card slim o"><h4>保存</h4><p>Ctrl+S 写库，并触发 Workspace 导出。</p></div>
    </div>
  </div>
  <div class="col-r">
    <div class="card" style="height:100%;">
      <h4>代码落点</h4>
      <ul class="tight">
        <li><b>static/app.js</b></li>
        <li><b>dmp/app.py</b> 实验路由</li>
        <li><b>dmp/templates.py</b></li>
      </ul>
      <p>下一页是上游原图 workspace.png。</p>
    </div>
  </div>
</div>
</div>

<div class="note"><b>Pattern 名称来自 spec.mode。</b>plan、rag 在这里是已列出的模板，和「自动语义评分未交付」是两件事。</div>

---

<!-- _class: shot -->

<div class="title"><span class="no">03</span>实验工作台 · 原图</div>
<div class="gist">上游 <em>files/workspace.png</em>。保存会写库并导出 Workspace。运行统计、输入参数和本次结果在同一屏。</div>

<div class="content">
  <img class="ui" src="assets/workspace.png" alt="实验工作台：输入参数、模型与系统提示、本次运行统计和输出" />
</div>

---

<!-- _class: shot -->

<div class="title"><span class="no">03</span>调用历史 · 原图</div>
<div class="gist">按实验或全局浏览 <em>runs / calls</em>。可以看原始报文和评价（自动 verdict + 人工 pass/fail）。载入历史输入再跑，会生成<em class="o">新运行</em>，不改旧快照。</div>

<div class="content">
  <img class="ui" src="assets/invoke_history.png" alt="调用历史：按运行列出状态、调用数、耗时和通过评价" />
</div>

---

<!-- _class: shot -->

<div class="title"><span class="no">03</span>模型配置 · 原图</div>
<div class="gist">登记 OpenAI 兼容服务：名称、Model ID、Base URL、API Key。内置 <em>demo</em> 不可改。运行时把不含 key 的 <em class="g">model_snapshot</em> 写入 run spec，实际请求再从 models 表取 key。</div>

<div class="content">
  <img class="ui" src="assets/model.png" alt="模型配置：内置 Demo 与已登记的 OpenAI 兼容服务，密钥留在本机" />
</div>

---

<div class="title"><span class="no">03</span>工具中心</div>
<div class="gist">工具实例有版本。已实现的类型是六种。MCP/CLI 可以出现在契约里，创建时返回 <em class="r">422</em>，上游写明未实现。</div>

<div class="content">
<div class="cols">
  <div class="col-l">
    <div class="card" style="height:100%;">
      <h4>已实现</h4>
      <div class="chips">
        <span class="chip">sqlite</span>
        <span class="chip g">graph</span>
        <span class="chip p">vector</span>
        <span class="chip">rest</span>
        <span class="chip o">file</span>
        <span class="chip">skill</span>
      </div>
      <ul class="tight">
        <li>启用、停用</li>
        <li>默认参数</li>
        <li>手动试跑</li>
        <li>调用历史</li>
      </ul>
    </div>
  </div>
  <div class="col-r vlist">
    <div class="card slim r"><h4>MCP / CLI</h4><p>创建返回 422。契约预留，未实现，未交付。</p></div>
    <div class="card slim"><h4>代码</h4><p>dmp/tool_catalog.py、dmp/tool_adapters.py、static/tools.js。</p></div>
    <div class="card slim o"><h4>适配结果</h4><p>AdapterResult 含 value、request、response、usage、error。REGISTRY 与上面六种同名。</p></div>
  </div>
</div>
</div>

<div class="note"><b>下一页是上游原图 tool_center.png。</b>画面是工具中心的试跑，类型清单以这一页的六种为准。</div>

---

<!-- _class: shot -->

<div class="title"><span class="no">03</span>工具中心 · 原图</div>
<div class="gist">版本化实例，可以启用或停用，也可以手动试跑。试跑明文 arguments 记在 <em>tool_run_inputs</em>，主键是 run_id。</div>

<div class="content">
  <img class="ui" src="assets/tool_center.png" alt="工具中心：版本化工具实例与手动试跑" />
</div>

---

<div class="title"><span class="no">03</span>技能、文档与报告</div>
<div class="gist">技能是一种工具实例。文档中心只读 Markdown。报告只根据<em class="g">已结束运行</em>的存档生成，不再另调大模型。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="card slim"><h4>技能中心</h4><p>类型为 skill。以 SKILL.md 为核心，zip 上传或粘贴新建。模型只看到 name/description，调用时才加载正文。</p></div>
    <div class="card slim r"><h4>密钥写在散文里认不出</h4><p>脱敏按字段名。上游写明：勿在技能正文中写密钥。</p></div>
    <div class="card slim g"><h4>文档中心</h4><p>只读 dmp-doc/ 下的 Markdown。禁止路径穿越。渲染禁用原始 HTML。</p></div>
  </div>
  <div class="col-r vlist">
    <div class="card slim p"><h4>实验报告</h4><p>索引表 experiment_reports。文件在 dmp-doc/reports/&lt;run_id&gt;/。字段含 run_id+revision、路径、content_sha256、source_digest。</p></div>
    <div class="card slim"><h4>代码</h4><p>dmp/documents.py、dmp/reports.py、static/documents.js、static/reports.js。</p></div>
  </div>
</div>
</div>

<div class="note"><b>报告口径的细文在 dmp-doc/03-Experiment-Reports.md。</b>本页只保留介绍里写过的边界。</div>

---

<div class="title"><span class="no">03</span>引擎、Worker 与 Workspace</div>
<div class="gist">网页、目录和 standalone 最后都进同一套 <em>Context</em>。导出目录可以脱离网页跑，再按 run id 幂等回导。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="card slim"><h4>dmp/engine.py</h4><p>Context：ctx.llm / completion / agent / tool / parallel / check / file / memory_*。另有 Demo 逻辑和会话镜像。</p></div>
    <div class="card slim g"><h4>dmp/worker.py</h4><p>子进程入口。网页路径是 python -m dmp.worker &lt;run_id&gt;。目录路径是 --workspace / --standalone。</p></div>
    <div class="card slim p"><h4>exporter 写出</h4><p>AGENTS.md、SOUL.md、IDENTITY.md、workspace.json、model.json、tools/、skills/、secrets，以及 vendored dmp/。</p></div>
  </div>
  <div class="col-r vlist">
    <div class="card slim"><h4>ws.py</h4><p>目录根单一入口：version / status / run / runs / logs / tool。</p></div>
    <div class="card slim o"><h4>tool_cli.py</h4><p>外部 Agent 按调用名桥接工具。</p></div>
    <div class="card slim"><h4>workspace_cli.py</h4><p>standalone 运行按 run id 幂等回导主库。</p></div>
  </div>
</div>
</div>

<div class="note"><b>模型 key 的文件形态：</b>workspaces/.../model.json 里用 { "$secret": "model.api_key" }。主库 models.api_key 按上游写明是明文存本机库。</div>

---

<div class="title"><span class="no">03</span>存储与本机防护</div>
<div class="gist"><em>local_guard</em> 限制这一个进程只被本机页面调用。用户认证列在非目标里，这一页不另写登录体系。</div>

<div class="content">
<div class="grid">
  <div class="card">
    <h4>dmp/store.py</h4>
    <p>路径常量、SQLite WAL、建表。</p>
    <p>实验和项目落盘也从这里走。</p>
  </div>
  <div class="card g">
    <h4>只许本机</h4>
    <p>127.0.0.1 / localhost。</p>
  </div>
  <div class="card o">
    <h4>跨站 Origin</h4>
    <p>跨站 Origin 拒绝。</p>
  </div>
  <div class="card p">
    <h4>X-DMP-Token</h4>
    <p>非 GET 必须带。</p>
    <p>令牌在启动时随机生成。</p>
  </div>
</div>
</div>

<div class="note"><b>中间件在 dmp/app.py。</b>生产部署仍是非目标：无 Docker、无反向代理假设，写在技术栈。</div>

---

<!-- _class: diagram -->

<div class="title"><span class="no">04</span>运行时结构</div>
<div class="gist">节点、箭头和落点与上游 §4.1 的文本结构图相同。该介绍没有 mermaid 代码块，这里按原文保留。</div>

<div class="content">
<pre>浏览器（static/ 原生 HTML/CSS/JS）
        │  HTTP + local_guard + X-DMP-Token
        ▼
dmp/app.py（FastAPI）
  · 项目 / 实验 / 模型 / 工具 / 技能 / 文档 / 报告
  · launch()：INSERT runs（脱敏 spec）→ 子进程
  · monitor：180 秒上限；取消则 kill 子进程
        │
        ▼
python -m dmp.worker &lt;run_id&gt;
  · 工具试跑：Context.tool(...)
  · 否则 exec(spec.code) → await main(ctx)
        │
        ▼
dmp/engine.py · Context
  · begin/end 留痕（calls 表）
  · 模型：httpx Chat Completions 或 Demo
  · 工具：tool_catalog 授权 + tool_adapters.REGISTRY
        │
        ├─ data/dmp.sqlite3     权威记录
        ├─ workspaces/&lt;实验ID&gt;/  单向导出（会话、记忆、文件区）
        └─ dmp-doc/reports/      报告 Markdown</pre>
</div>

---

<div class="title"><span class="no">04</span>同一套引擎</div>
<div class="gist">上游小标题写「两条入口」，表里有三行，三行都保留。工作流负责调用顺序和提示；进程生死、第 51 次调用和非流式协议由引擎与 <em>app.launch / monitor</em> 约束。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="card slim"><h4>网页运行</h4><p>主库已有 run 行。worker 只按 run_id 执行。</p></div>
    <div class="card slim g"><h4>ws.py run / --workspace</h4><p>从目录装配 spec，在主库建 run。实验须仍存在。</p></div>
    <div class="card slim p"><h4>--standalone</h4><p>数据落在目录 .dmp_data/，不读写主库。运行名带「· 独立运行」。</p></div>
  </div>
  <div class="col-r vlist">
    <div class="card slim o"><h4>执行上限</h4><p>同时最多 4 个运行。每次最多 50 次调用。整体约 180 秒。单请求超时 1–120 秒。</p></div>
    <div class="card slim r"><h4>非流式</h4><p>Token 流式展示是非目标。第 51 次调用由引擎拦住。</p></div>
  </div>
</div>
</div>

<div class="note"><b>launch() 先 INSERT 脱敏 spec，再拉起子进程。</b>monitor 到 180 秒上限；取消则 kill 子进程。</div>

---

<!-- _class: tree -->

<div class="title"><span class="no">04</span>目录与 Workspace 形态</div>
<div class="gist">左边是仓库顶层，右边是保存实验时生成的 <em>workspaces/&lt;实验ID&gt;/</em>。data/、projects/、workspaces/ 在上游标了 gitignore。</div>

<div class="content">
<div class="cols">
  <div class="col-l">
<pre>run.py                 # uvicorn：127.0.0.1:8765
requirements.txt       # 五条依赖
dmp/                   # 后端扁平模块
  app.py  engine.py  worker.py  store.py
  templates.py  tool_catalog.py  tool_adapters.py
  exporter.py  ws.py  tool_cli.py  workspace_cli.py
  reports.py  documents.py  data_tools.py
static/                # 无构建前端
dmp-doc/               # 文档 + reports/
tests/  openspec/  mydoc/
data/  projects/  workspaces/</pre>
  </div>
  <div class="col-r">
<pre>workspaces/&lt;实验ID&gt;/
  AGENTS.md  SOUL.md  IDENTITY.md
  workspace.json  model.json
  tools/*.json
  skills/&lt;调用名&gt;/
  ws.py  dmp/（vendored）
  secrets.local.json
  sessions/  memory/MEMORY.md  files/
  manifest.json
  requirements-workspace.txt
  .dmp_data/   # 仅 standalone 后出现</pre>
  </div>
</div>
</div>

---

<div class="title"><span class="no">04</span>技术栈</div>
<div class="gist">标准库优先，模块是单文件扁平的。运行时<em class="o">没有 LLM SDK</em>。第三方依赖只有 requirements.txt 的五条。</div>

<div class="content">
<div class="grid wrap">
  <div class="card slim"><h4>Python 3 · asyncio</h4><p>语言与并发。标准库优先。</p></div>
  <div class="card slim g"><h4>FastAPI + Uvicorn</h4><p>无 Docker、无反向代理假设。</p></div>
  <div class="card slim"><h4>原生 HTML/CSS/JS</h4><p>无 Node 构建、无前端框架。tools.js 等以 // UI bindings 分隔，便于 vm 测试。</p></div>
  <div class="card slim p"><h4>SQLite WAL</h4><p>dmp.sqlite3 主库。sandbox.sqlite3 演示 SQL、图、向量。</p></div>
  <div class="card slim o"><h4>httpx</h4><p>模型，以及 REST / Neo4j / Qdrant。</p></div>
  <div class="card slim"><h4>jsonschema · markdown-it-py</h4><p>工具参数与模型可见 schema。文档中心与报告的渲染。</p></div>
  <div class="card slim g"><h4>OpenSpec</h4><p>openspec/specs/ 与 openspec/changes/。</p></div>
  <div class="card slim"><h4>测试</h4><p>pytest + httpx TestClient。Node 内置 assert。DMP_DATA_DIR 隔离临时库。</p></div>
  <div class="card slim r"><h4>五条依赖</h4><p>fastapi、uvicorn、httpx、jsonschema、markdown-it-py。</p></div>
</div>
</div>

<div class="note"><b>data_tools.py</b>在目录里标为旧默认工具与演示 embedding。演示库表是 products、nodes/edges、documents。</div>

---

<div class="title"><span class="no">05</span>权威库里有哪些表</div>
<div class="gist">字段细节留在知识条目。这一页按上游 §4.4 点名，并标出和观测直接相关的那几列。</div>

<div class="content">
<div class="vlist">
  <div class="card slim"><h4>projects · experiments · models</h4><p>项目是文件夹。experiments.spec 是当前可编辑定义，权威在库里。models 含 base_url 与 api_key；demo 为内置；key 明文存本机库。</p></div>
  <div class="card slim g"><h4>runs</h4><p>一次运行的不可变快照。status：running / success / error / cancelled。spec 是启动瞬间的脱敏 spec。工具测试的 experiment_id 可为 NULL。</p></div>
  <div class="card slim p"><h4>calls</h4><p>最小观测单元。kind：model / tool / embedding / memory 等。request、response、output、usage（仅 model/embedding）、verdict、check_detail、manual_verdict、parent_call_id、tool_instance_id。</p></div>
  <div class="card slim o"><h4>工具与其余</h4><p>tool_instances（call_name 唯一）、tool_versions。settings、tool_run_inputs、experiment_reports。</p></div>
</div>
</div>

<div class="note"><b>人工评价优先于规则结论。</b>未评价不进入通过率分母。error 字段按上游写明已脱敏。</div>

---

<div class="title"><span class="no">05</span>实验 spec 与八种模式</div>
<div class="gist"><em>default_spec()</em> 的典型字段如下。运行时再附加 model_snapshot、tool_snapshots；Workspace 路径再附 workspace。mode 对应八种模板。</div>

<div class="content">
<div class="cols">
  <div class="col-l">
<pre class="spec">{
  "mode": "single",
  "model_id": "demo",
  "system": "……",
  "prompt": "……",
  "objective": "实验目的（可选，报告用）",
  "soul": "Workspace SOUL.md 人格",
  "temperature": 0.7,
  "max_tokens": 4096,
  "timeout": 60,
  "tool_ids": [],
  "validator": { "type": "contains", "expected": "Transformer" },
  "code": "async def main(ctx):\n    ...",
  "export_secrets": true
}</pre>
  </div>
  <div class="col-r vlist">
    <div class="card slim"><h4>八种 mode</h4><p>single / sequence / parallel / tools / branch / loop / plan / rag</p></div>
    <div class="card slim g"><h4>validator.type</h4><p>none | contains | exact | json</p></div>
    <div class="card slim o"><h4>快照</h4><p>model_snapshot 不含 key。tool_snapshots 一并写入。Workspace 再附目录、模型、工具、secrets。</p></div>
  </div>
</div>
</div>

<div class="note"><b>spec 存在 experiments.spec，也冻在 runs.spec。</b>当前可编辑的那份以库里的 experiments.spec 为准。</div>

---

<div class="title"><span class="no">05</span>文件里的结构化数据</div>
<div class="gist">库是权威之后，这些路径仍按上游列出。它们是快照、导出、会话镜像、记忆和报告正文。</div>

<div class="content">
<div class="cols">
  <div class="col-l">
    <div class="card" style="height:100%;">
      <ul class="tight">
        <li><b>projects/&lt;项目ID&gt;/&lt;实验ID&gt;.json</b> { name, spec }</li>
        <li><b>workspace.json</b> experiment_id、spec、tools 列表、limits</li>
        <li><b>model.json</b> 模型快照；key 用 $secret</li>
        <li><b>tools/&lt;call_name&gt;.json</b> 配置、defaults、model_schema</li>
        <li><b>sessions/&lt;run_id&gt;/messages.jsonl</b> agent 对话镜像</li>
        <li><b>memory/MEMORY.md</b> ctx.memory_read / write</li>
        <li><b>dmp-doc/reports/&lt;run_id&gt;/report-vN.md</b> 报告正文</li>
      </ul>
    </div>
  </div>
  <div class="col-r vlist">
    <div class="card slim"><h4>演示库 sandbox.sqlite3</h4><p>products 示例商品。nodes / edges 本地图。documents 本地向量演示文档。</p></div>
    <div class="card slim p"><h4>AdapterResult</h4><p>value / request / response / usage / error。</p></div>
    <div class="card slim g"><h4>REGISTRY</h4><p>sqlite、graph、vector、rest、skill、file。</p></div>
  </div>
</div>
</div>

<div class="note"><b>主库 key 与导出引用是两处写法。</b>models.api_key 明文存本机库；model.json 写成 { "$secret": "model.api_key" }。</div>

---

<div class="title"><span class="no">06</span>如何运行</div>
<div class="gist">命令按上游 PowerShell 摘要保留。首次启动建库，并创建示例项目与实验。建议先用 Demo 跑「基础问答」，再试并行模板与工具调用。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="card slim"><h4>本机</h4><p>python -m venv .venv</p><p>python -m pip install -r requirements.txt</p><p>python run.py</p><p>浏览器打开 http://127.0.0.1:8765</p></div>
    <div class="card slim g"><h4>后台</h4><p>先保存实验，生成目录。</p><p>python workspaces\&lt;实验ID&gt;\ws.py status</p><p>python workspaces\&lt;实验ID&gt;\ws.py run</p></div>
  </div>
  <div class="col-r">
    <div class="card" style="height:100%;">
      <h4>相关文档</h4>
      <ul class="tight">
        <li><b>00</b> 系统架构，Context 与 completion</li>
        <li><b>01</b> 工作流语法</li>
        <li><b>04</b> Workspace 与 ws.py</li>
        <li><b>05</b> 技能包约定</li>
        <li><b>03</b> 报告口径</li>
        <li><b>AGENTS.md</b> 面向编码代理的模块与安全约定</li>
      </ul>
    </div>
  </div>
</div>
</div>

<div class="note"><b>文档路径都在 dmp-doc/ 与仓库根的 AGENTS.md。</b>文件名按上游表保留，编号顺序也按那张表。</div>

---

<div class="title"><span class="no">06</span>收束</div>
<div class="gist">首版介绍里已经闭环的，是本机实验室这一条：定义实验、跑出不可变 Run、用 Call 记账、用 Workspace 带走。写进非目标的，仍然<em class="r">未实现、未交付</em>。</div>

<div class="content">
<div class="grid">
  <div class="card g">
    <h4>介绍里有的</h4>
    <p>单用户、本机、OpenAI 兼容调用、Demo 离线、六种工具、八种工作流模板、调用留痕、单向 Workspace。</p>
  </div>
  <div class="card">
    <h4>图就这四张</h4>
    <p>实验工作台、调用历史、模型配置、工具中心。二进制与 zhenggsh/DMP mydoc/files 相同。</p>
    <p>§4.1 的结构图按原文文本保留。</p>
  </div>
  <div class="card r">
    <h4>未实现、未交付</h4>
    <p>原生 Anthropic / Gemini 协议、Responses API、Token 流式展示、语音输入、自动语义评分、MCP/CLI 工具类型、用户认证、生产部署。</p>
  </div>
</div>
</div>

<div class="note"><b>溯源：</b>iksm/04-DMP-Project/DMP_intro.md ← zhenggsh/DMP mydoc/DMP_intro.md。本版 v1.0.0。</div>
