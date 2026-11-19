---
marp: true
theme: default
paginate: true
html: true
size: 16:9
iksm-source: iksm/02-PIS-Project/PIS_intro.md
version: v1.2.0
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

/* ============ 左右结构 6 : 3.5 ============ */
.cols { display: flex; gap: 26px; height: 100%; }
.col-l { flex: 6; min-width: 0; }
.col-r { flex: 3.5; min-width: 0; }

/* ============ 等分列表结构 ============ */
.grid { display: flex; gap: 16px; height: 100%; }
.grid > * { flex: 1 1 0; min-width: 0; }
.grid.wrap { flex-wrap: wrap; }
.grid.wrap > * { flex: 1 1 30%; }
.vlist { display: flex; flex-direction: column; gap: 14px; height: 100%; }

/* ============ Q&A 点击揭示 ============ */
details.qa {
  background: rgba(255,255,255,.045); border: 1px solid rgba(255,255,255,.12);
  border-radius: 12px; overflow: hidden; margin: 0;
}
details.qa summary {
  cursor: pointer; list-style: none; position: relative;
  padding: 11px 46px 11px 16px; font-size: 15px; font-weight: 600; color: #dfe6ff;
  transition: color .2s;
}
details.qa summary::-webkit-details-marker { display: none; }
details.qa summary::after {
  content: "+"; position: absolute; right: 14px; top: 50%; transform: translateY(-50%);
  width: 22px; height: 22px; line-height: 20px; text-align: center;
  border-radius: 50%; border: 1px solid rgba(0,229,255,.5); color: #00e5ff;
  font-size: 16px; font-weight: 700; transition: transform .3s, background .3s;
}
details.qa summary:hover { color: #00e5ff; }
details.qa[open] summary { color: #00e5ff; }
details.qa[open] summary::after { transform: translateY(-50%) rotate(45deg); background: rgba(0,229,255,.15); }
details.qa .ans { padding: 2px 16px 12px; font-size: 14px; color: #8fd9ff; line-height: 1.55; animation: fadeUp .3s ease; }
details.qa .ans b { color: #69f0ae; }

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
</style>

<!-- _class: cover -->
<!-- _paginate: false -->

<div class="grid-bg"></div>
<div class="orb orb1"></div>
<div class="orb orb2"></div>
<div class="orb orb3"></div>
<div class="num">02</div>
<div class="brand"><span class="dot"></span>IKSM · 知识转化</div>
<div class="ver">v1.2.0</div>

<h1>PIS</h1>
<div class="en">PROJECT&nbsp;&nbsp;INSIGHT</div>
<div class="line"></div>
<div class="sub">简单、高效、可扩展 · 计划制定与追踪</div>
<div class="meta"><span>iksm / 02-PIS-Project</span><span>依据 PIS · mydoc/PIS_intro.md</span><span>Marp → HTML Slide</span></div>

---

<div class="title"><span class="no">00</span>这是什么</div>
<div class="gist">PIS 是面向小团队的<em>项目计划制定与追踪</em> Web 应用。它基于实用的项目管理经验，把计划做成<em class="g">简单、高效、可扩展</em>的协作工具。</div>

<div class="content">
<div class="grid">
  <div class="card r">
    <h4>现成工具对不上</h4>
    <p>Project 太繁重。</p>
    <p>Excel 处理不了依赖。</p>
    <p>两者都不能用 Web 做团队协作。</p>
  </div>
  <div class="card">
    <h4>所以自己做</h4>
    <p>为了制定某个项目的计划，直接用 Trae 做一版 Web 工具。</p>
    <p>目的是实践最有用的项目管理经验。</p>
  </div>
  <div class="card g">
    <h4>这次多了三块</h4>
    <p>任务表写出四条快捷操作。</p>
    <p>架构后面增加系统运维：启停、配置、SQLite。</p>
    <p>下一步从三条变成四条。第 4 条仍是未实现。</p>
  </div>
</div>
</div>

<div class="note"><b>边界：</b>只讲 mydoc/PIS_intro.md 写到的内容。团队看板，以及下一步第 4 条，本讲标成未实现。</div>

---

<div class="title"><span class="no">00</span>内容地图</div>
<div class="gist">顺序跟上游：<em>为什么做</em>，<em class="g">计划怎么管</em>，<em>现在的功能与配图</em>，<em class="p">四层架构、运维和数据关系</em>，以及<em class="o">还没做的四件事</em>。</div>

<div class="content">
<div class="vlist">
  <div class="grid" style="height:auto;">
    <div class="card"><h4>01 设计背景</h4><p>Project 与 Excel 都不合适，改用 Web。</p></div>
    <div class="card g"><h4>02 计划管理经验</h4><p>WBS、起点终点与依赖、追踪、赶工六条。</p></div>
    <div class="card"><h4>03 主要功能</h4><p>项目列表、任务表、四条快捷操作、甘特图。</p></div>
  </div>
  <div class="grid" style="height:auto;">
    <div class="card p"><h4>04 架构、运维、数据</h4><p>四层流程图、目录、技术栈、启停与 SQLite、ER 关系图。</p></div>
    <div class="card o"><h4>05 下一步</h4><p>团队、文档、审计，加上小功能优化。都还没做。</p></div>
    <div class="card r"><h4>未实现</h4><p>登录、成员看板、zod 入口、基线与扫描报告、任务分配表、第 4 条优化。</p></div>
  </div>
</div>
</div>

<div class="note"><b>溯源：</b>iksm/02-PIS-Project/PIS_intro.md ← zhenggsh/PIS mydoc/PIS_intro.md。配图来自上游 mydoc/files/。</div>

---

<div class="title"><span class="no">01</span>设计背景</div>
<div class="gist">原始需求只有一句：<em>实现项目计划的制定和追踪</em>。工具选错，依赖和协作都做不起来。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="card r"><h4>Project</h4><p>太繁重，不适合小团队把一份计划跑起来。</p></div>
    <div class="card o"><h4>Excel</h4><p>无法处理依赖。前后任务一变，表就跟不上。</p></div>
    <div class="card"><h4>两者共同的缺口</h4><p>都不能通过 Web 做团队协作。</p></div>
  </div>
  <div class="col-r">
    <div class="card g" style="height:100%;">
      <h4>因此</h4>
      <p>为了制定某个项目的计划，直接使用 Trae 开发 Web 版。</p>
      <p>它是项目计划的制定与追踪工具，用来实践最有用的项目管理经验。</p>
    </div>
  </div>
</div>
</div>

<div class="note"><b>位置：</b>设计背景只说明动机。拆任务、盯终点、赶工，放到下一节。</div>

---

<div class="title"><span class="no">02</span>计划经验 · 先回答四件事</div>
<div class="gist">计划管理的范畴很大。这里只展开<em>最基本、最实用</em>的方法，而且放在产品功能<em class="g">之前</em>。</div>

<div class="content">
<div class="vlist">
  <div class="card" style="padding:14px 16px;"><h4 style="margin:0 0 4px;">① 怎么拆</h4><p style="margin:0;">如何把总体目标拆成多个小目标，并确保拆解合理？</p></div>
  <div class="card g" style="padding:14px 16px;"><h4 style="margin:0 0 4px;">② 怎么排得可执行</h4><p style="margin:0;">如何让拆解后的任务可执行，并让依赖关系合适？</p></div>
  <div class="card" style="padding:14px 16px;"><h4 style="margin:0 0 4px;">③ 怎么追</h4><p style="margin:0;">执行中如何追踪、调整，并识别计划风险？</p></div>
  <div class="card o" style="padding:14px 16px;"><h4 style="margin:0 0 4px;">④ 延期怎么办</h4><p style="margin:0;">目标可能延期时，应该如何处理？</p></div>
</div>
</div>

<div class="note"><b>对应输出：</b>WBS 与顺序 → 静态计划 → 不断调整的计划 → 赶工强化后的计划。</div>

---

<div class="title"><span class="no">02</span>计划经验 · WBS 分解</div>
<div class="gist">总目标拆成 N 个小目标。每一级都要<em>可测量</em>，同一级必须是<em class="g">并列的兄弟</em>，并且问一句：小目标加起来，大目标完整了没有？</div>

<div class="content">
<div class="cols">
  <div class="col-l">
    <div class="card">
      <h4>四条拆法</h4>
      <ul class="tight">
        <li>大目标和小目标都要有明确完成标准</li>
        <li>同级必须并列。避免「男人、女人、老人」这种不并列</li>
        <li>完成 N 个小目标，要能覆盖大目标；小目标再往下拆</li>
        <li><b>渐进明细：</b>两周内拆到两三天；两周后可以先粗后细</li>
      </ul>
    </div>
  </div>
  <div class="col-r">
    <div class="card g" style="height:100%;">
      <h4>输出物</h4>
      <p>工作分解 WBS，以及基本的顺序。</p>
      <p>到这里，工作范围和事项拆解就识别出来了。</p>
    </div>
  </div>
</div>
</div>

<div class="note"><b>下一张才排依赖：</b>WBS 解决「做什么」，起点、终点和依赖解决「按什么顺序做」。</div>

---

<div class="title"><span class="no">02</span>计划经验 · 起点、终点、依赖</div>
<div class="gist">开工会是依赖的<em>总起点</em>。WBS 和依赖排完后，紧盯<em class="o">终点</em>。依赖只有两类：逻辑，和资源。</div>

<div class="content">
<div class="grid">
  <div class="card g"><h4>起点</h4><p>一般用「开工会」。</p><p>它也是整张依赖网的总起点。</p></div>
  <div class="card o"><h4>终点</h4><p>任务的完成时间。</p><p>安排好 WBS 和依赖后，务必紧盯它。</p></div>
  <div class="card"><h4>逻辑依赖</h4><p>先做什么，后做什么。</p><p>例如先设计，再研发。</p></div>
  <div class="card p"><h4>资源依赖</h4><p>同一份资源排不开。</p><p>例如同一个负责人。</p></div>
</div>
</div>

<div class="note"><b>输出物：计划的静态版。</b>任务分解、起点、终点和依赖都设好之后，就可以开始追踪。</div>

---

<div class="title"><span class="no">02</span>计划经验 · 计划就是用来更新的</div>
<div class="gist">两种更新都必须做：<em>变化</em>带来的，和<em class="g">渐进明细</em>带来的。最终目标不能随便改；过去时间点上的任务，逻辑不成立。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="card"><h4>变化带来的更新</h4><p>人员、需求、条件、资源变了，要及时刷新，并看对目标的影响。</p></div>
    <div class="card g"><h4>渐进明细带来的更新</h4><p>两周后原先看不清、时间范围大。随着时间推移，拆到更细、更准的时间点。</p></div>
    <div class="card o"><h4>通报节奏</h4><p>一周至少调整两次。目标、进展和执行风险至少周报；关键期日报。</p></div>
  </div>
  <div class="col-r">
    <div class="card" style="height:100%;">
      <h4>变更原则</h4>
      <ul class="tight">
        <li>更新，就是为了保住终点</li>
        <li>最终目标不能改；要改必须向上沟通并获批准</li>
        <li>不能最后一天才发现完不成，必须提前识别</li>
        <li>不能存在过去时间点的任务</li>
        <li>只能调<b>时长和依赖</b>，不能手改开始和终止时间</li>
        <li>一旦影响总进度或关键里程碑，就要采取措施</li>
      </ul>
    </div>
  </div>
</div>
</div>

<div class="note"><b>输出物：不断调整的计划。</b>手改起止日期不在允许的调整手段里。</div>

---

<div class="title"><span class="no">02</span>计划经验 · 赶工六条</div>
<div class="gist">变更之后目标可能延期。时间不能变、质量不能变时，下面六条是上游给出的<em class="o">赶工措施</em>。</div>

<div class="content">
<div class="grid wrap">
  <div class="card"><h4>1 · 延迟工时</h4><p>把每天和周末的时间也用上。</p></div>
  <div class="card g"><h4>2 · 任务并行</h4><p>多项任务同时进行，切开关键路径任务。</p></div>
  <div class="card o"><h4>3 · 减范围</h4><p>时间不变，质量不变，能变的只有范围。</p></div>
  <div class="card"><h4>4 · 资源设备</h4><p>用好资源和设备。</p></div>
  <div class="card p"><h4>5 · 专家</h4><p>用专家力量。</p></div>
  <div class="card r"><h4>6 · 好方法</h4><p>提高质量，减少返工。</p></div>
</div>
</div>

<div class="note"><b>输出物：赶工强化后的计划。</b>这是经验，不是产品里的一个按钮。</div>

---

<!-- _class: shot -->

<div class="title"><span class="no">03</span>项目列表</div>
<div class="gist">列表可新建、删除项目。新建时填写<em>名称、可选代号、描述、开工会、初验点</em>。</div>

<div class="content">
  <img class="ui" src="assets/project-info.png" alt="项目列表：查看已有项目，并可新建、删除" />
</div>

---

<div class="title"><span class="no">03</span>任务分解</div>
<div class="gist">任务只有三种：<em>汇总 / 工作项 / 里程碑</em>。结构一变，WBS 按显示顺序重算；缩进时把依赖<em class="g">转接</em>到新子任务。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="grid" style="height:auto;">
      <div class="card"><h4>SUMMARY</h4><p>汇总。新增时自动带一个空的子任务。</p></div>
      <div class="card g"><h4>TASK</h4><p>工作项。行内改时长、资源、进度。</p></div>
      <div class="card p"><h4>MILESTONE</h4><p>里程碑。甘特上用菱形。</p></div>
    </div>
    <div class="card">
      <h4>任务表能做的</h4>
      <p>行内改名称、时长、资源（自由文本）、前级依赖、进度。可上移、下移、缩进、升级，或在下方插入同级。</p>
    </div>
  </div>
  <div class="col-r vlist">
    <div class="card o">
      <h4>缩进时转接依赖</h4>
      <p>上一兄弟若还不是汇总，先提升为 SUMMARY，再把原来挂在它身上的依赖边转到新子任务。</p>
    </div>
    <div class="card">
      <h4>依赖要连成一条路</h4>
      <p>按逻辑依赖和资源依赖设置前后关系，使任务形成从开头到终点的完整路径。</p>
    </div>
  </div>
</div>
</div>

<div class="note"><b>下一页是任务表原图。</b>资源仍是自由文本。成员分配不在当前功能里。</div>

---

<!-- _class: shot -->

<div class="title"><span class="no">03</span>WBS 任务表</div>
<div class="gist">项目工作区里的任务表，支持<em>行内编辑</em>。名称、时长、资源、前级依赖和进度都在这张表上改。</div>

<div class="content">
  <img class="ui" src="assets/wps.png" alt="项目工作区：WBS 任务表与行内编辑" />
</div>

---

<div class="title"><span class="no">03</span>快捷操作</div>
<div class="gist">改任务时就在格子里完成四件事：<em>点名称改名</em>，<em class="g">回车加同级或子任务</em>，<em>Tab 缩进</em>，以及点前级依赖<em class="o">接上一条</em>。</div>

<div class="content">
<div class="grid">
  <div class="card">
    <h4>点名称</h4>
    <p>点击任务名称，可修改任务名称。</p>
  </div>
  <div class="card g">
    <h4>回车加任务</h4>
    <p>修改任务时，回车增加下一条同级任务。</p>
    <p>Ctrl+回车增加下一条子任务。</p>
  </div>
  <div class="card">
    <h4>Tab / Shift+Tag</h4>
    <p>Tab 把任务缩进一级。</p>
    <p>Shift+Tag 把任务升级一级。原文写作 Shift+Tag。</p>
  </div>
  <div class="card o">
    <h4>前级依赖按钮</h4>
    <p>点击前级依赖的按钮，可「依赖上一条」，或「与上一条同依赖」。</p>
  </div>
</div>
</div>

<div class="note"><b>这四条写在主要功能里。</b>下一步「小功能优化」还有用词相近的条目，那些仍是未实现，不并到这一页。</div>

---

<div class="title"><span class="no">03</span>跟踪、调整，以及甘特图</div>
<div class="gist">调整走<em>时长和依赖</em>，不直接改起止。改完自动重算相关任务，并尽量保证<em class="o">关键任务不被延迟</em>。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="card">
      <h4>颜色先报风险</h4>
      <p>已延期、即将延期、有进展、已完成，用不同颜色标识。延期要提前看见。</p>
    </div>
    <div class="card g">
      <h4>粗计划要变细</h4>
      <p>随着时间推移，把以前的粗粒度计划拆成更细的任务。</p>
    </div>
    <div class="card o">
      <h4>改完就重算</h4>
      <p>不直接改开始和结束时间。每次调整后，重算相关依赖任务的起止。</p>
    </div>
  </div>
  <div class="col-r">
    <div class="card" style="height:100%;">
      <h4>甘特图上有什么</h4>
      <ul class="tight">
        <li>左 WBS，右按日时间轴</li>
        <li>周末与节假日用底色区分</li>
        <li>条形 = 任务；关键路径、已完成不同色，条内按进度填充</li>
        <li>菱形 = 里程碑</li>
        <li>SVG 折线 = 依赖</li>
        <li>虚线标出开工会、初验点、今日</li>
      </ul>
    </div>
  </div>
</div>
</div>

<div class="note"><b>下一页是甘特原图。</b>自研渲染，不是外挂控件。</div>

---

<!-- _class: shot -->

<div class="title"><span class="no">03</span>甘特图</div>
<div class="gist">左侧是 <em>WBS</em>，右侧是按日时间轴和<em class="g">依赖箭头</em>。条形、菱形、虚线分别对应任务、里程碑和开工会 / 初验点 / 今日。</div>

<div class="content">
  <img class="ui" src="assets/gatt.png" alt="甘特图：左侧 WBS 列，右侧按日时间轴与依赖箭头" />
</div>

---

<div class="title"><span class="no">03</span>团队管理 · 目标形态，尚未做成</div>
<div class="gist">主要功能里写了成员和看板。§4.5 说 v1 <em class="r">未启用登录</em>，成员只是预留；下一步第 1 条仍是<em class="o">增加团队管理</em>。所以记为未实现。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="card r">
      <h4>成员管理 · 未实现</h4>
      <p>项目下的成员和组织：添加、删除、修改成员信息。</p>
    </div>
    <div class="card o">
      <h4>看板布局 · 未实现</h4>
      <p>按团队或成员做工作台。</p>
      <p>左侧 30%：已完成任务。</p>
      <p>右侧 70%：待办任务。</p>
    </div>
  </div>
  <div class="col-r">
    <div class="card" style="height:100%;">
      <h4>为什么还不算已有</h4>
      <ul class="tight">
        <li>数据模型里 User、ProjectMember 只是预留</li>
        <li>v1 未启用登录</li>
        <li>下一步明确还要「增加团队管理」</li>
        <li>下一页只说明待办区打算怎么分，不是现成界面</li>
      </ul>
    </div>
  </div>
</div>
</div>

<div class="note"><b>不要把它当成已经能用的页面。</b>下面的四象限是上游写出的目标分法。</div>

---

<div class="title"><span class="no">03</span>成员看板 · 待办四象限（未实现）</div>
<div class="gist">待办区按四象限放（上游原文写作「四现象法」）。左上必须做完，右上不能拖成紧急，左下是被驱动的，右下只是关注。</div>

<div class="content">
<div class="vlist">
  <div class="grid">
    <div class="card r">
      <h4>第一象限 · 左上</h4>
      <p>重要且紧急。已经延期，以及 1 天内即将延期。这里必须完成。</p>
    </div>
    <div class="card o">
      <h4>第二象限 · 右上</h4>
      <p>重要不紧急。未到延期的设计、预演。可以从容做完，不能拖成左上。</p>
    </div>
  </div>
  <div class="grid">
    <div class="card">
      <h4>第三象限 · 左下</h4>
      <p>紧急不重要。作为第 2 责任人、即将延期的工作。被驱动着完成。</p>
    </div>
    <div class="card p">
      <h4>第四象限 · 右下</h4>
      <p>不重要不紧急。其他工作，关注即可。</p>
    </div>
  </div>
</div>
</div>

<div class="note"><b>未实现。</b>左侧 30% 的「已完成任务」不进这四个象限。</div>

---

<!-- _class: shot -->

<div class="title"><span class="no">04</span>系统架构</div>
<div class="gist">四层与三条连线和上游 flowchart 相同：<em>界面 → 服务端</em>，再分到<em class="p">领域规则</em>和<em class="g">SQLite</em>。胶片改成从左到右，避免竖图缩得看不清。</div>

<div class="content">
  <img src="assets/arch.png" alt="系统架构：浏览器界面、服务端、领域规则、SQLite" />
</div>

---

<div class="title"><span class="no">04</span>四层各自做什么，读写怎么走</div>
<div class="gist">界面只展示和收集输入。<em>服务端是唯一读写入口</em>。排期和校验是<em class="p">纯函数</em>，可以单独测试。日期以当次重算结果为准。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="card"><h4>浏览器界面</h4><p>项目列表，以及工作区里的任务表、甘特图、设置、对话框。不直接访问数据库。</p></div>
    <div class="card p"><h4>服务端</h4><p>检查入参，串联「校验 → 重算 → 回写 → 记录变更」。</p></div>
    <div class="card g"><h4>领域规则 / 数据</h4><p>排期引擎、计划校验。SQLite 单文件，存项目、任务、依赖、节假日和变更记录。</p></div>
  </div>
  <div class="col-r vlist">
    <div class="card">
      <h4>读 · 打开项目</h4>
      <p>取数 → 用规则再算一遍排期 → 组装视图。页面上的日期是当次算出的。</p>
    </div>
    <div class="card o">
      <h4>写 · 改计划</h4>
      <p>先检查入参，再校验并重算。通过后才落库、记一条变更、通知界面刷新。</p>
    </div>
    <div class="card r">
      <h4>校验不通过</h4>
      <p>阻止写入并回滚，把原因返回界面。若只是「建议遵循」，要用户确认后再交一次。</p>
    </div>
  </div>
</div>
</div>

<div class="note"><b>目录和分层对齐：</b>app 页面、components 界面、server 读写、lib 规则、prisma 数据模型。</div>

---

<div class="title"><span class="no">04</span>目录与技术栈</div>
<div class="gist">一门语言贯穿前后端。<em class="p">计划规则写成纯函数</em>，用 Vitest 锁住。zod 已在依赖里，<em class="o">还没接到入口</em>。</div>

<div class="content">
<div class="cols">
  <div class="col-l">
    <div class="card" style="height:100%;">
      <h4>目录</h4>
      <ul class="tight">
        <li><b>src/app</b> 路由和页面装配，不含业务规则</li>
        <li><b>src/components</b> 列表、工作区、通用小件</li>
        <li><b>src/server</b> 唯一读写入口</li>
        <li><b>src/lib</b> 排期与校验，测试用同一份</li>
        <li><b>prisma</b> 一个 schema。SQLite 单文件，同步建表</li>
        <li><b>docs / mydoc / public</b> 设计文档、本说明与配图、静态资源</li>
      </ul>
    </div>
  </div>
  <div class="col-r vlist">
    <div class="card"><h4>框架</h4><p>Next.js 前后端一体。React + TypeScript 描述 WBS 和依赖。Tailwind 统一任务表、甘特和对话框。</p></div>
    <div class="card g"><h4>数据与测试</h4><p>Prisma + SQLite，适合小团队自托管。Vitest 覆盖排期与校验。</p></div>
    <div class="card o"><h4>zod · 尚未接到入口</h4><p>打算一处定义、前后端复用。当前校验仍写在各个操作入口里。</p></div>
  </div>
</div>
</div>

<div class="note"><b>不另报版本号。</b>上游只说明每项技术做什么，没有写具体版本。</div>

---

<div class="title"><span class="no">04</span>系统运维 · 启停与配置</div>
<div class="gist">面向小团队自托管，<em>没有独立数据库进程</em>。启停、改配置和备份都在本机目录里。生产固定为<em class="o">构建一次，再长期 npm start</em>。</div>

<div class="content">
<div class="cols">
  <div class="col-l">
    <div class="card" style="height:100%;">
      <h4>启停</h4>
      <ul class="tight">
        <li><b>npm install</b> 首次或依赖变更后先装</li>
        <li><b>npm run dev</b> 开发模式，默认 http://localhost:3000，改代码热更新</li>
        <li><b>npm run build</b> 生成 .next 产物</li>
        <li><b>npm start</b> 用上一次构建对外服务，等价 next start</li>
        <li><b>Ctrl+C</b> 停服。没有单独的 stop 脚本，进程退出即停</li>
        <li>不要用 dev 对外服务</li>
      </ul>
    </div>
  </div>
  <div class="col-r">
    <div class="card p" style="height:100%;">
      <h4>主要配置文件</h4>
      <ul class="tight">
        <li><b>.env</b> 核心项 DATABASE_URL，默认 file:./dev.db</li>
        <li><b>prisma7.config.ts</b> 指向 schema，并读环境变量里的数据源</li>
        <li><b>prisma/schema.prisma</b> 全部数据模型；改完要同步到库</li>
        <li><b>next.config.ts</b> 把 better-sqlite3 等原生模块标成服务端外置包</li>
        <li><b>package.json</b> 启停、测试和数据库脚本</li>
        <li><b>vitest.config.mts</b> 排期与校验的单元测试</li>
      </ul>
    </div>
  </div>
</div>
</div>

<div class="note"><b>这是 §4.4。</b>原来的数据架构顺延为 §4.5，对象和关系没有改。</div>

---

<div class="title"><span class="no">04</span>系统运维 · SQLite</div>
<div class="gist">数据在单文件 SQLite 里，路径由 <em>DATABASE_URL</em> 指定，默认项目根目录 <em class="g">dev.db</em>。不用安装或启动数据库服务。界面不直连库。</div>

<div class="content">
<div class="vlist">
  <div class="grid" style="height:auto;">
    <div class="card"><h4>npm run db:push</h4><p>把 prisma/schema.prisma 推到当前库。开发期改模型用。</p></div>
    <div class="card g"><h4>npm run db:studio</h4><p>打开 Prisma Studio，浏览表，也可以手工改数据。</p></div>
    <div class="card"><h4>src/lib/db.ts</h4><p>服务端用 Prisma Client 加 better-sqlite3 适配器读写。</p></div>
  </div>
  <div class="card o">
    <h4>备份、换机，以及改完模型之后</h4>
    <p>复制 dev.db，若存在 -wal / -shm 一并复制。停写或停服后拷贝更稳妥。换机时把文件放到新路径，并改 DATABASE_URL。</p>
    <p>改完 schema 要先 db:push，再重启或刷新正在跑的服务。换到别的库类型时，要同时改 schema 的 provider、DATABASE_URL 和驱动适配。v1 默认仍是 SQLite 自托管。</p>
  </div>
</div>
</div>

<div class="note"><b>没有单独的数据库进程。</b>换库类型只是上游写明的调整条件，不是 v1 已经提供的另一种库。</div>

---

<!-- _class: shot -->

<div class="title"><span class="no">04</span>数据架构</div>
<div class="gist">围绕 <em>项目 → 任务树 → 依赖</em>。上游现为 §4.5。图按知识源里的 mermaid 渲染，节点和连线与原文一致。</div>

<div class="content">
  <img src="assets/data-model.png" alt="数据架构：Project、Task、Dependency、Holiday、ProjectMember、User、AuditLog" />
</div>

---

<div class="title"><span class="no">04</span>对象里有什么，什么还没落地</div>
<div class="gist">任务起止、是否关键、总余量由<em class="g">排期引擎写入</em>。依赖 v1 <em>只用 FS</em>。登录、基线、扫描报告、任务分配表是<em class="r">未实现</em>。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="card">
      <h4>已经建模的</h4>
      <ul class="tight">
        <li><b>Project</b> 名称代号、状态、开工会、初验点、工作日历、叶子工期上限</li>
        <li><b>Task</b> 汇总 / 工作项 / 里程碑；父子组成 WBS</li>
        <li><b>Dependency</b> 前置、后续、FS、滞后天数；同一组唯一</li>
        <li><b>Holiday</b> 按日期跳过非工作日</li>
        <li><b>AuditLog</b> 每次写操作留一条快照</li>
      </ul>
    </div>
  </div>
  <div class="col-r vlist">
    <div class="card r">
      <h4>预留，未启用</h4>
      <p>User、ProjectMember 记录谁以什么角色参与。v1 未启用登录。</p>
    </div>
    <div class="card o">
      <h4>设计有，v1 没落地</h4>
      <p>基线快照、计划质量扫描报告、任务分配表。</p>
    </div>
    <div class="card">
      <h4>删除会带走什么</h4>
      <p>删项目会级联删除任务、依赖、节假日和变更记录。任务树以开工会为根。</p>
    </div>
  </div>
</div>
</div>

<div class="note"><b>人工填报的字段：</b>资源、进度、进展描述。计划起止不是手填进这些派生字段的。</div>

---

<div class="title"><span class="no">05</span>下一步 · 前三件</div>
<div class="gist">前三条都还没做。团队管理写在功能章里，<em class="r">落地状态仍看第 1 条</em>。第 4 条「小功能优化」在后面单独讲，同样未实现。</div>

<div class="content">
<div class="vlist">
  <div class="card r">
    <h4>1 · 增加团队管理（未实现）</h4>
    <p>管理团队、用户和看板。对应前面的成员管理、组织，以及 30/70 的四象限工作台。</p>
  </div>
  <div class="card o">
    <h4>2 · 增加项目文档管理（未实现）</h4>
    <p>项目各阶段关联的文档，加上版本控制和评审过程。</p>
  </div>
  <div class="card">
    <h4>3 · 项目审计管理（未实现）</h4>
    <p>项目进展核算、资源成本核算等。</p>
  </div>
</div>
</div>

<div class="note"><b>三条都还没做。</b>下一页是第 4 条。用词靠近快捷操作的条目，仍留在未实现里。</div>

---

<div class="title"><span class="no">05</span>小功能优化（未实现）</div>
<div class="gist">下一步第 4 条整段都还没做。里面的 tab、shift+tab、Ctrl+回车和前级依赖按钮，<em class="r">不并进</em>前面已经写出的快捷操作。</div>

<div class="content">
<div class="cols">
  <div class="col-l">
    <div class="card" style="height:100%;">
      <h4>骨架和按键 · 未实现</h4>
      <ul class="tight">
        <li>最初除开工会和初验外，中间增加需求调研、功能设计、产品研发，这个5个节点依次依赖</li>
        <li>任务输入框里，tab 键缩进一级，shift+tab 键升级一级</li>
        <li>任务输入框里，Ctrl+回车增加下一级</li>
        <li>计划任务高亮时，橘黄色框取消边框颜色，只保留填充色</li>
      </ul>
    </div>
  </div>
  <div class="col-r">
    <div class="card o" style="height:100%;">
      <h4>依赖和删除 · 未实现</h4>
      <ul class="tight">
        <li>前级依赖一栏增加两个按钮：依赖于上一行，与上行依赖相同</li>
        <li>依赖弹出框里选择时先不刷新任务，点关闭按钮再一并刷新</li>
        <li>删除任务的提示对话框放在屏幕中央，不要再上方</li>
        <li>项目初验任务的前置依赖可修改</li>
      </ul>
    </div>
  </div>
</div>
</div>

<div class="note"><b>用词按下一步原文。</b>这里是 shift+tab，不是快捷操作那一页的 Shift+Tag。两条都保留，不互相改写。</div>

---

<div class="title"><span class="no">05</span>两种表模式（未实现）</div>
<div class="gist">第 4 条还要在任务表里增加<em class="o">排计划</em>和<em class="r">追任务</em>两种模式。这是下一步，不是现在这张表已经有的列。</div>

<div class="content">
<div class="vlist">
  <div class="card">
    <h4>排计划 · 未实现</h4>
    <div class="chips">
      <span class="chip">序号</span>
      <span class="chip">任务描述</span>
      <span class="chip">是否里程碑</span>
      <span class="chip">进度</span>
      <span class="chip o">起始事件</span>
      <span class="chip">终止时间</span>
      <span class="chip">时长</span>
      <span class="chip">资源</span>
      <span class="chip">前级依赖</span>
      <span class="chip">状态</span>
      <span class="chip">操作</span>
    </div>
  </div>
  <div class="card g">
    <h4>追任务 · 未实现</h4>
    <div class="chips">
      <span class="chip g">序号</span>
      <span class="chip g">任务描述</span>
      <span class="chip g">进展描述</span>
      <span class="chip g">进度</span>
      <span class="chip g">资源</span>
      <span class="chip g">起始时间</span>
      <span class="chip g">终止时间</span>
      <span class="chip g">时长</span>
      <span class="chip g">状态</span>
    </div>
  </div>
  <div class="card o">
    <h4>追任务里的进展描述</h4>
    <p>可以通过点击的方式，在输入框中直接编辑进展。排计划那一列上游写作「起始事件」，追任务写作「起始时间」，两处都按原文保留。</p>
  </div>
</div>
</div>

<div class="note"><b>未实现。</b>现在的任务表仍是行内改名称、时长、资源、前级依赖和进度，没有这两种模式。</div>

---

<div class="title"><span class="no">06</span>收束</div>
<div class="gist">先把计划方法说清楚，再落到产品：<em>开工会</em>是起点，调整只动时长和依赖，快捷操作在格子里改，甘特图把结果画出来。</div>

<div class="content">
<div class="grid">
  <div class="card g">
    <h4>已经写进产品的</h4>
    <p>项目列表，WBS 与行内编辑，四条快捷操作，从开头走到终点的依赖，颜色标识延期，自研甘特。配图各占一页。</p>
  </div>
  <div class="card">
    <h4>架构四层，外加运维</h4>
    <p>界面、服务端、纯函数规则、SQLite。打开项目会重算；写入失败会回滚。启停、配置和库维护写在 §4.4。</p>
  </div>
  <div class="card r">
    <h4>未实现</h4>
    <p>团队与看板、登录、zod 入口、基线、扫描报告、任务分配、项目文档、项目审计，以及小功能优化整段。</p>
  </div>
</div>
</div>

<div class="note"><b>溯源：</b>iksm/02-PIS-Project/PIS_intro.md ← zhenggsh/PIS mydoc/PIS_intro.md @ 6db94fc。本版为 v1.2.0。两段 mermaid 留在知识源，胶片用同一张渲染图。</div>
