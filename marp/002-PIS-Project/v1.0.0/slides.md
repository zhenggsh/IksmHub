---
marp: true
theme: default
paginate: true
html: true
size: 16:9
iksm-source: iksm/02-PIS-Project/PIC_intro.md
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
<div class="sub">目标为中心 · 小团队的计划制定与追踪</div>
<div class="meta"><span>iksm / 02-PIS-Project</span><span>依据 PIS · mydoc/PIC_intro.md</span><span>Marp → HTML Slide</span></div>

---

<div class="title"><span class="no">00</span>这是什么</div>
<div class="gist">PIS 是面向小团队的<em>项目计划制定与追踪</em> Web 应用：Next.js 全栈单体，用 WBS、FS 依赖和工作日历<em class="g">推算</em>起止，并在每次变更后判断<em class="o">是否冲击初验点</em>。</div>

<div class="content">
<div class="grid">
  <div class="card">
    <h4>站点文案</h4>
    <p>标题：PIS · Project InSight</p>
    <p>副标题：目标为中心</p>
  </div>
  <div class="card p">
    <h4>两层材料</h4>
    <p><b style="color:#d8b6ff">设计：</b>docs/project-system-design.md</p>
    <p>v1.1 · 2026-11-03 · 待评审</p>
    <p><b style="color:#d8b6ff">实现：</b>src/ 与 prisma/schema.prisma</p>
  </div>
  <div class="card g">
    <h4>以代码为准</h4>
    <p>下文只讲已经落地的行为。</p>
    <p>设计里还没编码的能力，单独标成缺口。</p>
  </div>
</div>
</div>

<div class="note"><b>仓库现状：</b>根目录 README 仍是 create-next-app 模板，不描述上述业务。产品说明以页面文案和设计文档为准。</div>

---

<div class="title"><span class="no">00</span>内容地图</div>
<div class="gist">四段把 PIC 介绍讲完：<em>为什么这样设计</em>，<em class="g">现在能做什么</em>，<em class="p">代码怎么串起来</em>，以及<em class="o">已经露出但还没接上的缺口</em>。</div>

<div class="content">
<div class="grid">
  <div class="card">
    <h4>01 设计背景</h4>
    <p>原始需求拆成五条能力。</p>
    <p>v1.1 补字段和三级校验。</p>
    <p>复杂度在排期与甘特。</p>
  </div>
  <div class="card g">
    <h4>02 主要功能</h4>
    <p>两条路由、三个页签。</p>
    <p>WBS、FS 依赖、V1–V4。</p>
    <p>自研甘特；顶栏还没接上。</p>
  </div>
  <div class="card p">
    <h4>03 架构实现</h4>
    <p>Action → 事务 → 纯函数。</p>
    <p>SQLite 落库，校验零 IO。</p>
    <p>表已建，登录仍是空位。</p>
  </div>
  <div class="card o">
    <h4>04 下一步</h4>
    <p>身份、审计、乐观锁。</p>
    <p>zod、测试、本地预览。</p>
    <p>设计里尚未编码的能力。</p>
  </div>
</div>
</div>

<div class="note"><b>阅读约定：</b>绿 / 黄 / 红在产品里表示初验冲击；本讲里同色只用于区分卡片，不额外赋予规则。</div>

---

<div class="title"><span class="no">01</span>设计背景 · 五条能力</div>
<div class="gist">原始需求是「实现项目计划的制定和追踪」。设计文档把它拆成五条<em>可实现</em>的能力——日期由引擎推算，<em class="o">不是手填</em>。</div>

<div class="content">
<div class="vlist">
  <div class="card" style="padding:12px 16px;"><h4 style="margin:0 0 4px;">① 多层级工作分解</h4><p style="margin:0;">增删改、缩进与排序、WBS 编码、父节点日期汇总。</p></div>
  <div class="card g" style="padding:12px 16px;"><h4 style="margin:0 0 4px;">② 开工会即起点</h4><p style="margin:0;">项目开工会作为无前置任务的默认起点。</p></div>
  <div class="card" style="padding:12px 16px;"><h4 style="margin:0 0 4px;">③ 排期引擎推算起止</h4><p style="margin:0;">用工作日工期、资源与前置依赖安排工作，起止时间由排期引擎推算。</p></div>
  <div class="card p" style="padding:12px 16px;"><h4 style="margin:0 0 4px;">④ 初验点与甘特图</h4><p style="margin:0;">设立项目初验点，并把计划画成甘特图。</p></div>
  <div class="card o" style="padding:12px 16px;"><h4 style="margin:0 0 4px;">⑤ 变更后重算并指出冲击</h4><p style="margin:0;">调整工期或依赖后自动重算，并指出是否影响初验。</p></div>
</div>
</div>

<div class="note"><b>后面所有功能都围着这五条：</b>锚点、依赖、日历、甘特、冲击报告，缺一不可。</div>

---

<div class="title"><span class="no">01</span>设计背景 · 字段、校验与选型</div>
<div class="gist">v1.1 把任务收成<em>十个用户字段</em>，校验分成必须 / 建议 / 扫描三档。复杂度在<em class="p">排期和甘特</em>，所以做成无 IO 的纯函数。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="card">
      <h4>十个用户字段</h4>
      <div class="chips">
        <span class="chip">序号</span><span class="chip">进度</span><span class="chip">项目描述</span>
        <span class="chip">起止时间</span><span class="chip">时长</span><span class="chip">资源</span>
        <span class="chip">前级依赖</span><span class="chip">是否里程碑</span><span class="chip">进展描述</span>
      </div>
    </div>
    <div class="card p">
      <h4>三级校验</h4>
      <p><b style="color:#ff9db1">必须遵循：</b>V1 缺前级依赖，V2 循环依赖。</p>
      <p><b style="color:#ffd07a">建议遵循：</b>V3 叶子工期粒度，V4 过程任务不得直接改起止日期。</p>
      <p><b style="color:#d8b6ff">自动扫描：</b>V5 / V6，可选外部模型。</p>
    </div>
  </div>
  <div class="col-r vlist">
    <div class="card g">
      <h4>技术选型</h4>
      <ul class="tight">
        <li>TypeScript 全栈单体</li>
        <li>Next.js App Router + Prisma</li>
        <li>排期、校验：无 IO 纯函数</li>
        <li>本地 SQLite；枚举和日期用字符串</li>
        <li>生产设计为 PostgreSQL，<b>代码尚未切换</b></li>
      </ul>
    </div>
  </div>
</div>
</div>

<div class="note"><b>选型理由写在设计文档第 2 章：</b>不追求高并发。字符串落库是为了避开 SQLite 无原生 enum，以及时区换算歧义。V5 / V6 尚未编码。</div>

---

<div class="title"><span class="no">02</span>主要功能 · 路由与项目</div>
<div class="gist">能打开的只有<em>两条路由</em>。创建项目时立刻种下两个<em class="g">零工期锚点</em>并跑一次排期；初验早于开工会会被拒绝。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="card">
      <h4>两条路由 · 三个页签</h4>
      <p><b style="color:#7fe9ff">/ </b>项目列表：新建、删除。</p>
      <p><b style="color:#7fe9ff">/projects/[projectId]</b> 工作区：甘特图、任务表、项目设置。</p>
    </div>
    <div class="card o">
      <h4>新建时要填</h4>
      <p>名称、可选代号（缺省 <b style="color:#ffd07a">PIS-</b> 前缀）、描述、开工会、初验点、工作周掩码、叶子工期上限（默认 3 个工作日）。</p>
    </div>
  </div>
  <div class="col-r vlist">
    <div class="card g">
      <h4>两个不能删的锚点</h4>
      <p>项目开工会 · isKickoff · WBS 1</p>
      <p>项目初验点 · isPreAccept · WBS 2</p>
      <p>日期只在项目设置里改。</p>
    </div>
    <div class="card p">
      <h4>项目状态</h4>
      <div class="chips">
        <span class="chip">规划中</span><span class="chip g">执行中</span>
        <span class="chip o">暂停</span><span class="chip p">已关闭</span>
      </div>
    </div>
  </div>
</div>
</div>

<div class="note"><b>锚点是零工期里程碑。</b>创建成功后立刻排期，后面的任务都从这条链上长出来。</div>

---

<div class="title"><span class="no">02</span>主要功能 · 工作分解</div>
<div class="gist">任务只有三种：<em>汇总 / 工作项 / 里程碑</em>。结构一变，WBS 按显示顺序重算；缩进时把依赖<em class="g">转接</em>到新子任务，避免后继突然失去前级。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="grid" style="height:auto;">
      <div class="card"><h4>SUMMARY</h4><p>汇总。起止取子节点包络。</p></div>
      <div class="card g"><h4>TASK</h4><p>工作项。叶子受工期上限约束。</p></div>
      <div class="card p"><h4>MILESTONE</h4><p>里程碑。零工期。</p></div>
    </div>
    <div class="card">
      <h4>任务表能做的</h4>
      <p>行内改名称、时长、资源（自由文本）、前级依赖、进度。可上移、下移、缩进、升级，或在下方插入同级。</p>
    </div>
    <div class="card o">
      <h4>插入同级的默认前级</h4>
      <p>未手选时，继承显示顺序里最近一个能进依赖图的任务。开工会之外的初验点不作为自动前级。</p>
    </div>
  </div>
  <div class="col-r vlist">
    <div class="card">
      <h4>对话框另有</h4>
      <p>描述、进展描述。</p>
      <p>约束：ASAP，或「不早于」（MSO）。</p>
    </div>
    <div class="card r">
      <h4>已开工改起始日</h4>
      <p>不直接写 plannedStart，转成 MSO，并触发 V4 确认。</p>
    </div>
    <div class="card g">
      <h4>进度到 100</h4>
      <p>状态记为已完成，实际开始/结束取服务器当天。</p>
    </div>
  </div>
</div>
</div>

<div class="note"><b>缩进细节：</b>上一兄弟若还不是汇总，先把它提升为 SUMMARY，再把原来挂在它身上的依赖边转到新子任务。</div>

---

<div class="title"><span class="no">02</span>主要功能 · 依赖与四级校验</div>
<div class="gist">领域常量预留了 FS / SS / FF / SF，<em>写入路径只创建 FS</em>，滞后 <em class="o">lagDays 可为负</em>。保存前在同一事务里跑 validatePlan——<em class="g">点击看当前行为</em>。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <details class="qa"><summary><b style="color:#ff9db1">V1 · 阻断</b>　缺前级依赖</summary><div class="ans">除开工会、初验点锚点和汇总节点外，必须有前级。<b>拒绝保存。</b></div></details>
    <details class="qa"><summary><b style="color:#ff9db1">V2 · 阻断</b>　循环依赖</summary><div class="ans">拒绝保存，并<b>返回环路任务</b>。依赖包含自身的汇总也判为环。</div></details>
    <details class="qa"><summary><b style="color:#ffd07a">V3 · 建议</b>　叶子工期过长</summary><div class="ans">叶子工作项超过项目 <b>maxLeafDays</b>。确认后可保存；一周内（≤5 天）与更长工期的文案不同。</div></details>
    <details class="qa"><summary><b style="color:#ffd07a">V4 · 建议</b>　直接改计划起止</summary><div class="ans">已开工或已有实际开始日的任务，补丁里直接出现计划起止日期。确认后<b>以 MSO 落地</b>。每次强制改日期都要确认。</div></details>
  </div>
  <div class="col-r vlist">
    <div class="card">
      <h4>依赖展开</h4>
      <p>汇总不能当后续任务。</p>
      <p>把汇总当前级：展开成依赖其下全部叶子，取最晚结束。</p>
    </div>
    <div class="card p">
      <h4>确认只打断新问题</h4>
      <p>只有本次新引入的建议项需要确认。变更前已经存在的建议项不会反复打断。</p>
      <p>确认过的规则编号写入 AuditLog.payload。</p>
    </div>
  </div>
</div>
</div>

<div class="note"><b>V5 / V6 与 aiScanEnabled：</b>只留了字段和类型位，没有扫描实现，界面也不会发起外部模型调用。</div>

---

<div class="title"><span class="no">02</span>主要功能 · 排期与初验冲击</div>
<div class="gist"><em>computeSchedule</em> 按工作日正推，再逆推浮动。浮动 ≤ 0 标成关键路径。变更成功后，结果面板用<em class="g">绿 / 黄 / 红</em>说明初验有没有被撞上。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="card">
      <h4>正推规则</h4>
      <ul class="tight">
        <li>默认周一至周五，可改掩码，可加节假日</li>
        <li><b>FS：</b>前级结束后的下一个工作日，再加滞后</li>
        <li>里程碑零工期；MSO 落在非工作日则顺延</li>
        <li>汇总起止 = 子节点包络</li>
      </ul>
    </div>
    <div class="card o">
      <h4>初验点的两种算法</h4>
      <p>没配前级：锚定在目标初验日，<b style="color:#ffd07a">不计入预计完工</b>。</p>
      <p>配了前级：由前级驱动，目标日仍作逆推锚点。</p>
    </div>
  </div>
  <div class="col-r vlist">
    <div class="card g">
      <h4>项目头</h4>
      <p>开工会 · 初验点 · 预计完工</p>
      <p>余量（工作日）· 关键任务数</p>
    </div>
    <div class="card r">
      <h4>结果面板</h4>
      <p>初验是否受冲击</p>
      <p>余量变化</p>
      <p>新进入关键路径的任务</p>
      <p>最多五条起止时间变化</p>
    </div>
  </div>
</div>
</div>

<div class="note"><b>工期含首日：</b>1 天则起止为同一天。日历判断、顺延和加减都在 lib/scheduler/calendar.ts，用位掩码加节假日集合。</div>

---

<div class="title"><span class="no">02</span>主要功能 · 甘特图，以及还没接上的界面</div>
<div class="gist">甘特是<em>自研、只读时间轴</em>：能看关键路径和依赖，<em class="r">不能拖拽改期或连线</em>。顶栏三个入口目前没有链接。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="card">
      <h4>图上有什么</h4>
      <ul class="tight">
        <li>左 WBS，右按日时间轴；周末与节假日用底色区分</li>
        <li>条形 = 任务（关键路径、已完成不同色，条内按进度填充）</li>
        <li>菱形 = 里程碑；SVG 折线 = 依赖</li>
        <li>虚线标出开工会、初验点、今日</li>
        <li>点击条或标签打开任务编辑</li>
      </ul>
    </div>
    <div class="card g">
      <h4>任务表另有</h4>
      <p>列筛选、汇总折叠、变更后高亮受影响行。导出当前筛选结果为 UTF-8 CSV（带 BOM）。</p>
    </div>
  </div>
  <div class="col-r vlist">
    <div class="card o">
      <h4>明确没有的导出</h4>
      <p>没有 PNG、Excel，也没有 MS Project XML。</p>
    </div>
    <div class="card r">
      <h4>顶栏是静态的</h4>
      <p>「资源」「审计」「用户」没有链接。</p>
      <p>用户区写死 zhenggsh /「SSO 已登录」。</p>
      <p>退出、个人设置没有处理函数。</p>
      <p>没有登录页、成员邀请或角色鉴权。</p>
    </div>
  </div>
</div>
</div>

<div class="note"><b>编辑都走服务端：</b>浏览器不跑排期引擎。打开工作区时 loadWorkspace 会再算一次，图上的日期以当次计算结果为准。</div>

---

<div class="title"><span class="no">03</span>架构 · 从浏览器到 SQLite</div>
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
      <p>next.config.ts 把它标为服务端外部包。</p>
    </div>
  </div>
</div>
</div>

<div class="note"><b>页面：</b>dynamic = "force-dynamic"。写成功后 revalidatePath。客户端每次编辑都等服务端往返。</div>

---

<div class="title"><span class="no">03</span>架构 · 一条事务写完</div>
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
        <li><b>calendar.ts</b> 工作日判断与加减</li>
        <li><b>topo.ts</b> Kahn 拓扑，返回环</li>
        <li><b>dependency-expand.ts</b> 汇总前级展开成叶子边</li>
        <li><b>impact.ts</b> 余量差、日期变化、新旧关键任务</li>
      </ul>
    </div>
    <div class="card o">
      <h4>权威在服务端</h4>
      <p>选前级时，前端会排除自身和后代，避免自环候选。环的最终判定仍在服务端。</p>
    </div>
  </div>
</div>
</div>

<div class="note"><b>单测已覆盖：</b>单链 FS、滞后、菱形会合、节假日、MSO 吸附、环、余量正/零/负、初验锚定与被前级驱动、汇总 roll-up、依赖汇总节点。V1–V4 的主要正反例也有。</div>

---

<div class="title"><span class="no">03</span>架构 · 表已经在，登录还没接</div>
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
      <h4>模型上的空位</h4>
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

<div class="title"><span class="no">04</span>下一步 · 先把已经写了一半的接上</div>
<div class="gist">这四件都是<em>代码里已经露出</em>的缺口：模型或日志在，产品和入口还不在。建议落在<em class="g">已有模型和写路径</em>上。</div>

<div class="content">
<div class="vlist">
  <div class="grid">
    <div class="card r">
      <h4>1 · 真实身份与权限</h4>
      <p>User、ProjectMember、Role（OWNER / PM / MEMBER / VIEWER）已建模，Action 未使用。任何人打开就能写。先接登录，再在 runChange 按角色拒绝越权，顶栏指向真实页面。</p>
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

<div class="note"><b>产品现象：</b>顶栏「资源 / 审计 / 用户」不可点击；退出和个人设置没有处理函数。确认后写入审计，用户目前看不见。</div>

---

<div class="title"><span class="no">04</span>下一步 · 校验、测试、预览，以及设计未编码项</div>
<div class="gist">后四件同样对照着现有缺口：<em>zod 未调用</em>、<em class="o">事务分支没有测试</em>、<em>甘特不能本地预览</em>，以及设计文档里<em class="r">还没写进代码</em>的能力。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="card">
      <h4>5 · 用上已安装的 zod</h4>
      <p>字段格式交给 zod，业务规则仍交给 validatePlan。把 CreateProjectInput、UpdateTaskInput 收成共享 schema。</p>
    </div>
    <div class="card o">
      <h4>6 · 扩大测试面</h4>
      <p>缺事务回滚、WBS 重编号、缩进时的依赖转接、自动前级、初验锚点不可删。集中在 server/plan.ts 与 server/actions/task.ts。</p>
    </div>
    <div class="card p">
      <h4>7 · 甘特本地预览</h4>
      <p>图不能拖拽改依赖，也没有虚拟化。提交前可用同一份 computeSchedule / validatePlan 做本地预览。虚拟化等任务量上来再做。</p>
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

<div class="note"><b>边界：</b>不要把设计文档中的认证、基线和外部模型当成已经可用。它们在 v1.1 设计里，不在当前代码路径里。</div>

---

<div class="title"><span class="no">05</span>收束</div>
<div class="gist">计划不手填。<em>开工会</em>是起点，<em class="o">初验点</em>是锚，引擎用工作日和 FS 把中间填上——改一处，就重算一次，并说出初验还剩多少余量。</div>

<div class="content">
<div class="grid">
  <div class="card g">
    <h4>已经能用</h4>
    <p>项目、WBS、FS 依赖、V1–V4、工作日历正逆推、关键路径、初验冲击、自研甘特、筛选结果 CSV。</p>
  </div>
  <div class="card o">
    <h4>写了但没露出来</h4>
    <p>审计 payload、Task.version、汇总 progressPct、User / ProjectMember / Role、zod 依赖。</p>
  </div>
  <div class="card r">
    <h4>设计有、代码无</h4>
    <p>登录与角色、基线、V5/V6、SS/FF/SF、成员分配、PNG/Excel、PostgreSQL。</p>
  </div>
</div>
</div>

<div class="note"><b>溯源：</b>iksm/02-PIS-Project/PIC_intro.md ← zhenggsh/PIS mydoc/PIC_intro.md。讲的是当前实现，不是路线图上的全部名词。</div>
