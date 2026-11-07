---
marp: true
theme: default
paginate: true
html: true
size: 16:9
iksm-source: iksm/02-PIS-Project/PIS_intro.md
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
</style>

<!-- _class: cover -->
<!-- _paginate: false -->

<div class="grid-bg"></div>
<div class="orb orb1"></div>
<div class="orb orb2"></div>
<div class="orb orb3"></div>
<div class="num">02</div>
<div class="brand"><span class="dot"></span>IKSM · 知识转化</div>
<div class="ver">v1.0.0</div>

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
    <h4>先经验，后功能</h4>
    <p>上游把计划管理经验放在产品功能之前。</p>
    <p>本讲按这个顺序：方法 → 已实现能力 → 还没接上的缺口。</p>
  </div>
</div>
</div>

<div class="note"><b>边界：</b>只讲 mydoc/PIS_intro.md 写到的内容。上游不再声称的能力，本讲不再出现。</div>

---

<div class="title"><span class="no">00</span>内容地图</div>
<div class="gist">五段讲完：<em>为什么要做</em>，<em class="g">计划怎么管</em>，<em>产品现在能做什么</em>，<em class="p">代码怎么串起来</em>，以及<em class="o">已经露出但还没接上的缺口</em>。</div>

<div class="content">
<div class="vlist">
  <div class="grid" style="height:auto;">
    <div class="card"><h4>01 设计背景</h4><p>计划制定与追踪。Project 与 Excel 都不合适，改用 Web。</p></div>
    <div class="card g"><h4>02 计划管理经验</h4><p>WBS、起点终点与依赖、追踪、赶工六条。放在功能之前。</p></div>
    <div class="card"><h4>03 主要功能</h4><p>五条能力、项目列表、工作区、FS 依赖、自研甘特。</p></div>
  </div>
  <div class="grid" style="height:auto;">
    <div class="card p"><h4>04 架构实现</h4><p>Action → 事务 → 纯函数。SQLite 落库，校验零 IO。</p></div>
    <div class="card o"><h4>05 下一步</h4><p>身份、审计、乐观锁、zod、测试，以及设计里尚未编码的能力。</p></div>
    <div class="card r"><h4>未实现保持未实现</h4><p>顶栏三个入口、登录、基线、V5/V6、SS/FF/SF、PNG/Excel，都还没接上。</p></div>
  </div>
</div>
</div>

<div class="note"><b>溯源：</b>iksm/02-PIS-Project/PIS_intro.md ← zhenggsh/PIS mydoc/PIS_intro.md。截图留在上游仓库，本讲不转载。</div>

---

<div class="title"><span class="no">01</span>设计背景</div>
<div class="gist">原始需求只有一句：<em>实现项目计划的制定和追踪</em>。工具选错，依赖和协作都做不起来。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="card r">
      <h4>Project</h4>
      <p>太繁重，不适合小团队把一份计划跑起来。</p>
    </div>
    <div class="card o">
      <h4>Excel</h4>
      <p>无法处理依赖。前后任务一变，表就跟不上。</p>
    </div>
    <div class="card">
      <h4>两者共同的缺口</h4>
      <p>都不能通过 Web 做团队协作。</p>
    </div>
  </div>
  <div class="col-r">
    <div class="card g" style="height:100%;">
      <h4>因此</h4>
      <p>为了制定某个项目的计划，直接使用 Trae 开发 Web 版。</p>
      <p>它是项目计划的制定与追踪工具，用来实践最有用的项目管理经验。</p>
      <p>后面的功能都从这句需求长出来，不另加上游没写的场景。</p>
    </div>
  </div>
</div>
</div>

<div class="note"><b>位置：</b>设计背景只说明动机。拆任务、盯终点、赶工，放到下一节的计划管理经验。</div>

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
  <div class="col-l vlist">
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
  <div class="card g">
    <h4>起点</h4>
    <p>一般用「开工会」。</p>
    <p>它也是整张依赖网的总起点。</p>
  </div>
  <div class="card o">
    <h4>终点</h4>
    <p>任务的完成时间。</p>
    <p>安排好 WBS 和依赖后，务必紧盯它。</p>
  </div>
  <div class="card">
    <h4>逻辑依赖</h4>
    <p>事先事后。</p>
    <p>例如先设计，再研发。</p>
  </div>
  <div class="card p">
    <h4>资源依赖</h4>
    <p>同一份资源排不开。</p>
    <p>例如同一个负责人。</p>
  </div>
</div>
</div>

<div class="note"><b>输出物：计划的静态版。</b>任务分解、起点、终点和依赖都设好之后，就可以开始追踪。</div>

---

<div class="title"><span class="no">02</span>计划经验 · 计划就是用来更新的</div>
<div class="gist">两种更新都必须做：<em>变化</em>带来的，和<em class="g">渐进明细</em>带来的。最终目标不能随便改；过去时间点上的任务，逻辑不成立。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="card">
      <h4>变化带来的更新</h4>
      <p>人员、需求、条件、资源变了，要及时刷新，并看对目标的影响。</p>
    </div>
    <div class="card g">
      <h4>渐进明细带来的更新</h4>
      <p>两周后原先看不清、时间范围大。随着时间推移，拆到更细、更准的时间点。</p>
    </div>
    <div class="card o">
      <h4>通报节奏</h4>
      <p>一周至少调整两次。目标、进展和执行风险至少周报；关键期日报。</p>
    </div>
  </div>
  <div class="col-r">
    <div class="card" style="height:100%;">
      <h4>变更原则</h4>
      <ul class="tight">
        <li>更新，就是为了保住终点</li>
        <li>最终目标不能改；要改必须向上沟通并获批准</li>
        <li>不能最后一天才发现完不成，必须提前识别</li>
        <li>不能存在过去时间点的任务。「上个月该完成、现在还没做完」不成立</li>
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

<div class="note"><b>输出物：赶工强化后的计划。</b>这是经验，不是产品里已经做成的一个「赶工按钮」。</div>

---

<div class="title"><span class="no">03</span>主要功能 · 五条能力</div>
<div class="gist">设计文档把原始需求拆成五条<em>可实现</em>的能力。起止由排期引擎推算，<em class="o">不是手填</em>；改工期或依赖后要重算，并指出是否影响初验。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="card"><h4>① 多层级工作分解</h4><p>增删改、缩进与排序、WBS 编码、父节点日期汇总。</p></div>
    <div class="card g"><h4>② 开工会即起点</h4><p>项目开工会作为无前置任务的默认起点。</p></div>
    <div class="card"><h4>③ 排期引擎推算起止</h4><p>用工作日工期、资源与前置依赖安排工作。起止不是手填。</p></div>
  </div>
  <div class="col-r vlist">
    <div class="card p"><h4>④ 初验点与甘特图</h4><p>设立项目初验点，并把计划画成甘特图。</p></div>
    <div class="card o"><h4>⑤ 变更后重算</h4><p>调整工期或依赖后自动重算，并指出是否影响初验。</p></div>
    <div class="card"><h4>和上一节的对应</h4><p>开工会、依赖、紧盯终点、只调时长和依赖，在产品里落成这五条。</p></div>
  </div>
</div>
</div>

<div class="note"><b>五条都来自设计文档。</b>经验里的赶工六条不是这里的一条产品能力。</div>

---

<div class="title"><span class="no">03</span>主要功能 · 列表与工作区</div>
<div class="gist">列表负责<em>看项目、建项目、删项目</em>。工作区负责分解、调整、追踪，并把同一份计划画成甘特图。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="card">
      <h4>项目列表</h4>
      <p>查看已有项目，并可新建、删除。</p>
      <p>新建时填写：名称、可选代号、描述、开工会、初验点。</p>
    </div>
    <div class="card o">
      <h4>创建时会拦住的日期</h4>
      <p>Action 入参检查包含：空名称、日期格式、初验不早于开工会、枚举取值。</p>
    </div>
  </div>
  <div class="col-r vlist">
    <div class="card g">
      <h4>项目工作区</h4>
      <p>任务分解。</p>
      <p>计划调整与追踪。</p>
      <p>项目甘特图。</p>
    </div>
    <div class="card p">
      <h4>界面图在上游</h4>
      <p>列表、任务表、甘特各有一张截图，留在 PIS 仓库的 files/，这里不转载。</p>
    </div>
  </div>
</div>
</div>

<div class="note"><b>工作区组成：</b>架构图里写的是甘特图、任务表、设置、对话框。本讲不另造路由或页签名称。</div>

---

<div class="title"><span class="no">03</span>主要功能 · 工作分解</div>
<div class="gist">任务只有三种：<em>汇总 / 工作项 / 里程碑</em>。结构一变，WBS 按显示顺序重算；缩进时把依赖<em class="g">转接</em>到新子任务。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="grid" style="height:auto;">
      <div class="card"><h4>SUMMARY</h4><p>汇总。父节点日期要汇总。</p></div>
      <div class="card g"><h4>TASK</h4><p>工作项。行内改时长与进度。</p></div>
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
      <p>上一兄弟若还不是汇总，先提升为 SUMMARY，再把原来挂在它身上的依赖边转到新子任务，避免后继突然失去前级。</p>
    </div>
    <div class="card">
      <h4>插入同级的默认前级</h4>
      <p>未手选时，继承显示顺序里最近一个能进依赖图的任务。开工会除外的初验点不作为自动前级。</p>
    </div>
  </div>
</div>
</div>

<div class="note"><b>资源仍是自由文本。</b>换成成员分配是下一步，当前未实现。</div>

---

<div class="title"><span class="no">03</span>主要功能 · 依赖、甘特，以及没接上的界面</div>
<div class="gist">依赖<em>只创建 FS</em>，不能成环，并且必须有从起点到终点的路径。甘特是自研时间轴；顶栏三个入口<em class="r">还没有链接</em>。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="card">
      <h4>依赖三条</h4>
      <p>类型只创建 FS。不能成环。必须有从起点走到终点的路径。</p>
    </div>
    <div class="card g">
      <h4>甘特上有什么</h4>
      <ul class="tight">
        <li>左 WBS，右按日时间轴；周末与节假日用底色区分</li>
        <li>条形 = 任务（关键路径、已完成不同色，条内按进度填充）</li>
        <li>菱形 = 里程碑；SVG 折线 = 依赖</li>
        <li>虚线标出开工会、初验点、今日</li>
      </ul>
    </div>
  </div>
  <div class="col-r">
    <div class="card r" style="height:100%;">
      <h4>尚未做成（未实现）</h4>
      <p>「资源」「审计」「用户」没有链接。</p>
      <p>用户区写死 zhenggsh /「SSO 已登录」。</p>
      <p>退出、个人设置没有处理函数。</p>
      <p>没有登录页、成员邀请或角色鉴权。</p>
      <p>甘特当前是只读时间轴加点击编辑。拖拽改依赖、虚拟化、本地预览都还没有。</p>
    </div>
  </div>
</div>
</div>

<div class="note"><b>编辑都走服务端：</b>浏览器不跑排期引擎。打开工作区时 loadWorkspace 会再算一次，图上的日期以当次计算结果为准。</div>

---

<div class="title"><span class="no">04</span>架构 · 从浏览器到 SQLite</div>
<div class="gist">写操作进 Server Action，事务里<em>变更 → 校验 → 重算 → 回写 → 审计</em>。排期和 V1–V4 是<em class="p">零 IO 纯函数</em>，视图层再算一遍但不落库。</div>

<div class="content">
<div class="cols">
  <div class="col-l">
    <div class="stack">
      <div class="card"><h4>浏览器</h4><p>ProjectList / Workspace：甘特图、任务表、设置、对话框</p></div>
      <div class="card p"><h4>server/actions/*</h4><p>入参检查与 revalidatePath · "use server"</p></div>
      <div class="card"><h4>server/plan.ts</h4><p>事务：变更 → 校验 → 重算 → 回写派生字段 → 审计</p></div>
      <div class="card g"><h4>server/workspace.ts</h4><p>读库后再算一遍排期，组装视图（不落库）</p></div>
      <div class="card o"><h4>lib/scheduler · lib/validation</h4><p>日历、拓扑、正逆推、汇总展开、冲击报告；V1–V4</p></div>
      <div class="card r"><h4>SQLite</h4><p>Prisma 7 + better-sqlite3 · DATABASE_URL 缺省 file:./dev.db</p></div>
    </div>
  </div>
  <div class="col-r vlist">
    <div class="card">
      <h4>技术栈</h4>
      <p>Next.js 16.4.4 · React 19.3</p>
      <p>TypeScript · Tailwind CSS 4</p>
      <p>Prisma 7.10 · Vitest 4</p>
    </div>
    <div class="card p">
      <h4>zod 装了，还没被引用</h4>
      <p>src/ 下没有引用。空名称、日期格式、初验不早于开工会、枚举取值，写在各个 Action 里。</p>
    </div>
    <div class="card o">
      <h4>better-sqlite3</h4>
      <p>next.config.ts 把它标为服务端外部包。生产库仍是 SQLite。</p>
    </div>
  </div>
</div>
</div>

<div class="note"><b>页面：</b>dynamic = "force-dynamic"。写成功后 revalidatePath。客户端每次编辑都等服务端往返。</div>

---

<div class="title"><span class="no">04</span>架构 · 一条事务写完</div>
<div class="gist"><em>applyPlanChange</em> 在同一条事务里读旧计划、改数据、复算校验、重算并回写。阻断项或未确认的建议项抛 <em class="r">PlanValidationFailure</em>，整单回滚。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="card">
      <h4>事务六步</h4>
      <ul class="tight">
        <li>读变更前计划</li>
        <li>执行 mutate</li>
        <li>用同一份 validatePlan 复算</li>
        <li>阻断，或建议项未确认 → 回滚</li>
        <li>computeSchedule，回写派生字段</li>
        <li>插入 AuditLog</li>
      </ul>
    </div>
    <div class="card g">
      <h4>回写的派生字段</h4>
      <p>plannedStart · plannedEnd · isCritical · totalFloatDays · scheduleSource</p>
    </div>
  </div>
  <div class="col-r vlist">
    <div class="card p">
      <h4>引擎模块</h4>
      <ul class="tight">
        <li><b>calendar.ts</b> 工作日判断与加减；工期含首日</li>
        <li><b>topo.ts</b> Kahn 拓扑，返回环</li>
        <li><b>dependency-expand.ts</b> 依赖汇总节点展开成叶子边</li>
        <li><b>impact.ts</b> 余量差、日期变化、新旧关键任务</li>
      </ul>
    </div>
    <div class="card o">
      <h4>权威在服务端</h4>
      <p>选前级时，前端会排除自身和后代。环的最终判定仍在服务端。V5 / V6 扫描未实现。</p>
    </div>
  </div>
</div>
</div>

<div class="note"><b>单测已覆盖：</b>单链 FS、滞后、菱形会合、节假日、MSO 吸附、环、余量正/零/负、初验锚定与被前级驱动、汇总 roll-up、依赖汇总节点。V1–V4 的主要正反例也有。</div>

---

<div class="title"><span class="no">04</span>架构 · 表已经在，登录还没接</div>
<div class="gist">七张表都在 schema 里。注释写明 <em>v1 未启用登录</em>：用户和成员只是预留，业务代码<em class="r">不创建用户、不检查角色</em>。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="card">
      <h4>已建表</h4>
      <div class="chips">
        <span class="chip">User</span><span class="chip">ProjectMember</span><span class="chip">Project</span>
        <span class="chip">Holiday</span><span class="chip">Task</span><span class="chip">Dependency</span>
        <span class="chip p">AuditLog</span>
      </div>
    </div>
    <div class="card o">
      <h4>模型上的空位（未实现）</h4>
      <ul class="tight">
        <li>资源是 Task.assignee 字符串，没有 TaskAssignee</li>
        <li>没有基线表，没有扫描报告表</li>
        <li>Task.version 有字段，更新未按 version 条件写入</li>
        <li>AuditLog 无操作者外键，影响放在 payload JSON</li>
      </ul>
    </div>
  </div>
  <div class="col-r vlist">
    <div class="card p">
      <h4>库与脚本</h4>
      <p>Prisma Client 生成到 src/generated/prisma（已 gitignore）。</p>
      <p>没有 prisma/migrations。</p>
      <p>脚本是 db:push / db:studio。</p>
    </div>
    <div class="card">
      <h4>代码落点</h4>
      <p>页面 src/app</p>
      <p>工作区 src/components/workspace</p>
      <p>列表 src/components/project</p>
    </div>
    <div class="card r">
      <h4>测试边界</h4>
      <p>只有排期和校验两组 Vitest。没有 Server Action、WBS 重编号或界面测试。</p>
    </div>
  </div>
</div>
</div>

<div class="note"><b>提交记录：</b>近期是脚手架初始化，加上当前这一版计划功能（init），没有更细的功能分批记录。</div>

---

<div class="title"><span class="no">05</span>下一步 · 先把已经写了一半的接上</div>
<div class="gist">这四件都是<em>代码里已经露出</em>的缺口，当前都是<em class="r">未实现</em>。模型和日志在，产品和入口还不在。</div>

<div class="content">
<div class="vlist">
  <div class="grid">
    <div class="card r">
      <h4>1 · 真实身份与权限</h4>
      <p>User、ProjectMember、Role（OWNER / PM / MEMBER / VIEWER）已建模，Action 未使用。任何人打开就能写。先接登录，再在 runChange 按角色拒绝越权。</p>
    </div>
    <div class="card o">
      <h4>2 · 把审计展示出来</h4>
      <p>applyPlanChange 已记下 action、目标、确认过的规则编号和冲击摘要，但没有读取界面。审计页至少按项目、时间倒序展示这些 payload。</p>
    </div>
  </div>
  <div class="grid">
    <div class="card">
      <h4>3 · 补齐并发控制</h4>
      <p>Task.version 已在，更新没有 where: { id, version }，也没有冲突后的刷新提示。后写会覆盖先写。乐观锁可以直接落在 applyPlanChange。</p>
    </div>
    <div class="card g">
      <h4>4 · 汇总进度与引擎一致</h4>
      <p>computeSchedule 会按子节点工期加权算出汇总 progressPct，persistSchedule 不写该字段。要么回写派生进度，要么视图改用当次排期结果。</p>
    </div>
  </div>
</div>
</div>

<div class="note"><b>产品现象：</b>顶栏「资源 / 审计 / 用户」不可点击。确认后写入审计，用户目前看不见。</div>

---

<div class="title"><span class="no">05</span>下一步 · 校验、测试、预览，以及尚未编码</div>
<div class="gist">后四件同样是缺口：<em>zod 未调用</em>、<em class="o">事务分支没有测试</em>、<em>甘特不能本地预览</em>，以及设计文档里<em class="r">还没写进代码</em>的能力。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="card">
      <h4>5 · 用上已安装的 zod（未实现）</h4>
      <p>字段格式交给 zod，业务规则仍交给 validatePlan。把 CreateProjectInput、UpdateTaskInput 收成共享 schema。</p>
    </div>
    <div class="card o">
      <h4>6 · 扩大测试面（未实现）</h4>
      <p>缺事务回滚、WBS 重编号、缩进时的依赖转接、自动前级、初验锚点不可删。集中在 server/plan.ts 与 server/actions/task.ts。</p>
    </div>
    <div class="card p">
      <h4>7 · 甘特本地预览（未实现）</h4>
      <p>图是只读时间轴加点击编辑，不能拖拽改依赖，也没有虚拟化。提交前可用同一份 computeSchedule / validatePlan 做本地预览。</p>
    </div>
  </div>
  <div class="col-r">
    <div class="card r" style="height:100%;">
      <h4>8 · 尚未编码，且要改 README</h4>
      <ul class="tight">
        <li>基线快照与对比</li>
        <li>发布前的全图复检</li>
        <li>V5 / V6 扫描（aiScanEnabled 默认关闭）</li>
        <li>SS / FF / SF</li>
        <li>自由文本资源换成成员分配</li>
        <li>PNG / Excel 导出</li>
      </ul>
      <p>生产库仍是 SQLite，且没有 migration 目录。README 应写明 DATABASE_URL、npm run db:push，以及当前已实现范围。</p>
    </div>
  </div>
</div>
</div>

<div class="note"><b>边界：</b>不要把设计文档中的认证、基线和外部模型当成已经可用。</div>

---

<div class="title"><span class="no">06</span>收束</div>
<div class="gist">先把计划方法说清楚，再落到产品：<em>开工会</em>是起点，<em class="o">初验点</em>是要守住的终点，中间用 WBS 和 FS 排开——改时长或依赖，就重算一次。</div>

<div class="content">
<div class="grid">
  <div class="card g">
    <h4>经验</h4>
    <p>WBS 要可测量、同级并列、渐进明细。只调时长和依赖。延期用赶工六条。最终目标不能擅自改。</p>
  </div>
  <div class="card">
    <h4>已经能用</h4>
    <p>项目列表、多层 WBS、FS 依赖、工作日排期、初验冲击、自研甘特。起止由引擎推算。</p>
  </div>
  <div class="card r">
    <h4>未实现</h4>
    <p>登录与角色、审计页、乐观锁、汇总进度回写、zod、基线、V5/V6、SS/FF/SF、成员分配、PNG/Excel、本地预览。</p>
  </div>
</div>
</div>

<div class="note"><b>溯源：</b>iksm/02-PIS-Project/PIS_intro.md ← zhenggsh/PIS mydoc/PIS_intro.md。版本仍是 v1.0.0，按当次指令就地刷新，不另开版本目录。</div>
