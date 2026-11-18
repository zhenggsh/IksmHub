---
marp: true
theme: default
paginate: true
html: true
size: 16:9
iksm-source: iksm/06-math-Project/math_intro.md
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
<div class="num">06</div>
<div class="brand"><span class="dot"></span>IKSM · 知识转化</div>
<div class="ver">v1.0.0</div>

<h1>知识通</h1>
<div class="en">MATH</div>
<div class="line"></div>
<div class="sub">面向高中数学的知识点学习系统</div>
<div class="meta"><span>iksm / 06-math-Project</span><span>依据 zhenggsh/math · mydoc/math_intro.md</span><span>Marp → HTML Slide</span></div>

---

<div class="title"><span class="no">00</span>这是什么</div>
<div class="gist">知识通（仓库名 <em>math</em>）给高中数学用。教师用文件维护教材大纲和讲解，学生按大纲学习并留下掌握反馈，系统据此做针对性推荐和学习分析。</div>

<div class="content">
<div class="grid">
  <div class="card">
    <h4>教师维护文件</h4>
    <p>教材大纲和讲解放在文件里。</p>
    <p>框架是 xlsx 或 csv，详情是 Markdown。</p>
  </div>
  <div class="card g">
    <h4>学生按大纲学</h4>
    <p>学习时留下掌握反馈。</p>
    <p>记录只追加，供后面的分析使用。</p>
  </div>
  <div class="card p">
    <h4>推荐与分析</h4>
    <p>系统按反馈做针对性推荐。</p>
    <p>也做学习分析。本文讲到本地怎么跑起来。</p>
  </div>
</div>
</div>

<div class="note"><b>只讲 mydoc/math_intro.md。</b>胶片版本是 v1.0.0。上游 commit ca118bf，提交说明 intro3，2026-11-17 21:07 Asia/Shanghai。</div>

---

<div class="title"><span class="no">00</span>内容地图</div>
<div class="gist">顺序跟上游：设计背景、设计理念、主要模块、系统架构、运行方式。十一段 mermaid 在知识源里保留源码，胶片上是按原文渲出的图。</div>

<div class="content">
<div class="vlist">
  <div class="grid" style="height:auto;">
    <div class="card"><h4>01 设计背景</h4><p>知识要有稳定载体，过程要记下来，路径可以选择，教与学分开。题库组卷和自动阅卷不在职责内。</p></div>
    <div class="card g"><h4>02 设计理念</h4><p>文件是知识源，数据库是索引和用户数据。前后端分离。目录用 Excel，知识用 Markdown。</p></div>
    <div class="card p"><h4>03 主要模块</h4><p>认证、教材、学习、智能学习、分析、学习助手。六张界面图按上游引用放进来。</p></div>
  </div>
  <div class="grid" style="height:auto;">
    <div class="card"><h4>04 系统架构</h4><p>前端 5173，后端 3000。一次学习反馈的时序、入库、目录、技术栈和数据结构。</p></div>
    <div class="card o"><h4>05 运行方式</h4><p>Node、pnpm、PostgreSQL。环境变量、启动命令、常用指令，以及本地使用顺序。</p></div>
    <div class="card r"><h4>不写成已交付</h4><p>题库组卷、自动阅卷保持为非职责。§5.2 的演示账号只按原文出现，不扩成账号体系。</p></div>
  </div>
</div>
</div>

<div class="note"><b>溯源：</b>iksm/06-math-Project/math_intro.md ← zhenggsh/math mydoc/math_intro.md（commit ca118bfc4e9a895f9b76869173fb7beee81f8978）。</div>

---

<div class="title"><span class="no">01</span>讲解散落，大纲对不齐</div>
<div class="gist">高中数学知识点多、层级深。课堂讲解和课后复习散落在课件、笔记和题解里，学生很难按同一套大纲持续学，教师也难看清学了多久、掌握到哪一级。</div>

<div class="content">
<div class="grid">
  <div class="card">
    <h4>知识有稳定载体</h4>
    <p>每本教材是一对同名文件。</p>
    <p>框架（xlsx 或 csv）写三级提纲，详情（md）写定义、公式、定理和关系图。</p>
    <p>两边用编号对齐，例如 <b>1.1.1</b>。</p>
  </div>
  <div class="card g">
    <h4>学习过程可记录</h4>
    <p>浏览知识点时记下开始时间、学习时长、备注和掌握程度（A–E）。</p>
    <p>记录只追加。</p>
  </div>
  <div class="card p">
    <h4>路径可选择</h4>
    <p>可以按大纲自由点选。</p>
    <p>也可以按薄弱点、重要性或随机抽取来学。</p>
  </div>
  <div class="card o">
    <h4>教与学分工</h4>
    <p>学生：学习和看自己的分析。</p>
    <p>教师：管教材和知识点，看班级学习情况。</p>
    <p>管理员：管账号与系统配置。</p>
  </div>
</div>
</div>

<div class="note"><b>重要性三档写在背景里：</b>A 必须掌握，B 重要，C 补充。掌握程度 A–E 是另一套，后面单独对照，不要混。</div>

---

<div class="title"><span class="no">01</span>本期范围</div>
<div class="gist">本期做知识浏览、学习反馈和分析。<em class="r">题库组卷、自动阅卷不在系统职责内</em>，这里保持为未实现、非职责，不写成已交付能力。</div>

<div class="content">
<div class="grid">
  <div class="card g">
    <h4>本期要做</h4>
    <p>知识浏览。</p>
    <p>学习反馈。</p>
    <p>学习分析。</p>
  </div>
  <div class="card r">
    <h4>不在职责内</h4>
    <p>题库组卷。</p>
    <p>自动阅卷。</p>
    <p>上游写的是职责边界，不是待交付清单。</p>
  </div>
  <div class="card">
    <h4>实现路径上的一句</h4>
    <p>上游写：此项目也是实践 SDD 编程的一个尝试。</p>
    <p>采用 gstack + superpower + openspec，并使用 Claude Code CLI + Kimi 模型。</p>
  </div>
</div>
</div>

<div class="note"><b>SDD 这句按原文收录。</b>不把工具名扩写成一套研发流程，也不由此推出题库或阅卷能力。</div>

---

<div class="title"><span class="no">02</span>三条设计理念</div>
<div class="gist">文件放正文，数据库放索引和用户数据。浏览器只走 REST。目录和知识分成两级：Excel 放目录，Markdown 放知识。</div>

<div class="content">
<div class="grid">
  <div class="card">
    <h4>2.1 文件是知识源</h4>
    <p>教材正文在仓库根目录的 <b>iksm/</b>，用编辑器或表格维护。</p>
    <p>PostgreSQL 保存教材元数据、解析后的知识点，以及用户、学习记录和 AI 会话。</p>
  </div>
  <div class="card g">
    <h4>2.2 前后端分离</h4>
    <p>前端管界面、路由和本地交互状态。</p>
    <p>后端管鉴权、文件读写、解析、推荐和分析。按领域拆成 NestJS 模块。</p>
  </div>
  <div class="card p">
    <h4>2.3 两级存储</h4>
    <p>用提示词取得相应知识。</p>
    <p>Excel 存放目录，Markdown 存放知识。两边用知识点编号关联。</p>
  </div>
</div>
</div>

<div class="note"><b>刷新或同步时</b>按文件变更把框架重新解析进数据库，并与 Markdown 详情保持编号一致。</div>

---

<!-- _class: shot -->

<div class="title"><span class="no">02</span>文件、索引、界面</div>
<div class="gist">节点和箭头按上游 §2.1 的 flowchart。学习反馈回数据库，教师编辑后回写文件。</div>

<div class="content">
  <img src="assets/files-index.png" alt="iksm 文件经教材解析进入 PostgreSQL，再供学习与分析界面使用；学习反馈回写数据库，教师编辑回写文件" />
</div>

---

<div class="title"><span class="no">02</span>前后端各自做什么</div>
<div class="gist">浏览器只通过 REST 访问后端。每个 NestJS 模块自带控制器、服务和数据传输对象。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="card">
      <h4>前端</h4>
      <p>界面、路由、本地交互状态。</p>
    </div>
    <div class="card g">
      <h4>后端</h4>
      <p>鉴权、文件读写、解析、推荐、分析。</p>
    </div>
  </div>
  <div class="col-r card">
    <h4>六个业务模块</h4>
    <ul class="tight">
      <li><b>auth</b> 认证</li>
      <li><b>textbook</b> 教材与知识点</li>
      <li><b>learning</b> 学习记录</li>
      <li><b>smart-learning</b> 推荐</li>
      <li><b>analytics</b> 分析</li>
      <li><b>study-agent</b> 学习智能体</li>
    </ul>
  </div>
</div>
</div>

<div class="note"><b>模块名按上游架构和目录。</b>下一页是提示词对两份文件的产出要求，全文留在知识条目里。</div>

---

<div class="title"><span class="no">02</span>目录文件和详情文件</div>
<div class="gist">§2.3 的提示词示例，任务是整理「高中数学必修一」。产出两份文件，用知识点编号对齐。下面只列提示词里写明的要求。</div>

<div class="content">
<div class="cols">
  <div class="col-l card">
    <h4>框架 · math01.xlsx</h4>
    <ul class="tight">
      <li>输出到 <b>~/iksm/math01.xlsx</b>，同一张表，表头前无空行</li>
      <li>三级树。一级、二级也各占一行，单元格不合并</li>
      <li>字段：一级、二级、三级、定义、特性、重要性 A/B/C、编号</li>
      <li>编号遵守 <b>a / a.b / a.b.c</b></li>
      <li>文字里的逗号用中文全角，避免和 csv 逗号冲突</li>
    </ul>
  </div>
  <div class="col-r card p">
    <h4>详情 · math01.md</h4>
    <ul class="tight">
      <li>Markdown。公式用 LaTeX，关系图用 mermaid</li>
      <li>一级 <b>##</b>，二级 <b>###</b>，三级 <b>####</b></li>
      <li>含编号、定义、重要性、特性、运算方式、定理、公式、二级结论</li>
      <li>编号与 xlsx 一一对应</li>
    </ul>
  </div>
</div>
</div>

<div class="note"><b>这是生成知识文件的提示词。</b>不是题库组卷。提示词全文、转义和角色说明都在 iksm 原文的代码块里。</div>

---

<!-- _class: shot -->

<div class="title"><span class="no">03</span>模块怎么连</div>
<div class="gist">浏览器里的页面连到六个后端模块。首页在图中，上游没有再画到后端的箭头。</div>

<div class="content">
  <img src="assets/modules.png" alt="浏览器中的首页、登录、教材、学习、智能学习、分析、AI 学习助手，连到 auth、textbook、learning、smart-learning、analytics、study-agent" />
</div>

---

<div class="title"><span class="no">03</span>六个模块</div>
<div class="gist">谁在用、做什么、从哪进。入口按上游模块表，不把表外的页面补成能力。</div>

<div class="content">
<div class="vlist">
  <div class="card slim"><h4>认证 · 全部角色</h4><p>注册、登录、JWT、角色守卫。入口 /login、/register。</p></div>
  <div class="card slim g"><h4>教材管理 · 教师、管理员</h4><p>上传、同步、删除教材；编辑框架和 Markdown；校验框架、数据库与详情是否一致；按提纲扩充知识点。入口 /teacher/textbooks、/teacher/textbooks/:id。</p></div>
  <div class="card slim"><h4>知识点学习 · 学生、教师</h4><p>树图或思维导图浏览，预览公式和 Mermaid，记录学习反馈。入口 /learning/:textbookId。</p></div>
  <div class="card slim p"><h4>智能学习 · 学生、教师</h4><p>薄弱点、按重要性、随机三种推荐，界面与普通学习同构。入口 /smart-learning。</p></div>
  <div class="card slim o"><h4>学习分析 · 学生看自己，教师看班级</h4><p>次数、时长、掌握分布、趋势、薄弱点和导出。入口 /analytics/student、/analytics/teacher。</p></div>
  <div class="card slim"><h4>AI 学习助手 · 已登录用户</h4><p>针对当前知识点对话、追问建议、回答反馈；调用可配置的大模型。入口是学习页右下角侧栏。</p></div>
</div>
</div>

---

<div class="title"><span class="no">03</span>三种角色</div>
<div class="gist">能力按上游那张表叠加上去：教师包含学生能做的，管理员再包含教师能做的。</div>

<div class="content">
<div class="grid">
  <div class="card">
    <h4>学生 STUDENT</h4>
    <p>学习、提交反馈、查看个人分析、使用学习助手。</p>
  </div>
  <div class="card g">
    <h4>教师 TEACHER</h4>
    <p>在学生能力之上管理教材和知识点，查看班级分析。</p>
  </div>
  <div class="card p">
    <h4>管理员 ADMIN</h4>
    <p>在教师能力之上管理账号与系统配置。</p>
  </div>
</div>
</div>

<div class="note"><b>统一响应</b>形如 <b>{ success, data }</b>。除登录、注册外，请求携带 Authorization: Bearer &lt;token&gt;。</div>

---

<!-- _class: shot -->

<div class="title"><span class="no">03</span>页面与接口</div>
<div class="gist">左边是前端路由，右边是后端控制器。连线按上游 flowchart，/auth 在图中没有入边。</div>

<div class="content">
  <img src="assets/page-routes.png" alt="前端路由 /teacher/textbooks、/learning/:textbookId、/smart-learning、/analytics/student、/analytics/teacher 连到 /textbooks、/learning-records、/smart-learning、/analytics、/study-agent；/auth 无入边" />
</div>

---

<!-- _class: shot -->

<div class="title"><span class="no">03</span>教材管理</div>
<div class="gist">用提示词生成的 Excel 与知识内容可以上传。大纲进数据库，知识点正文仍在 md 里。</div>

<div class="content">
  <img class="ui" src="assets/books.png" alt="教材管理：教材列表，以及同步与上传" />
</div>

---

<!-- _class: shot -->

<div class="title"><span class="no">03</span>教材详情</div>
<div class="gist">直接浏览知识目录和知识点，可以修改，并与数据库同步。</div>

<div class="content">
  <img class="ui" src="assets/book_details.png" alt="教材详情：知识目录与 Markdown 对照，可编辑并与数据库同步" />
</div>

---

<!-- _class: shot -->

<div class="title"><span class="no">03</span>知识点架构学习</div>
<div class="gist">树状浏览知识点。学习页同时预览公式和 Mermaid，并记录学习反馈。</div>

<div class="content">
  <img class="ui" src="assets/study_treeview.png" alt="知识点学习：左侧树状大纲，右侧定义与公式，底部学习反馈" />
</div>

---

<!-- _class: shot -->

<div class="title"><span class="no">03</span>知识点树图</div>
<div class="gist">同一学习页可以用知识图谱的方式浏览。上游这张图的文件名是 study_mindmap.png。</div>

<div class="content">
  <img class="ui" src="assets/study_mindmap.png" alt="知识点学习：思维导图浏览知识点，右侧仍是详情与学习反馈" />
</div>

---

<!-- _class: shot -->

<div class="title"><span class="no">03</span>AI 学习助手</div>
<div class="gist">学习页侧栏根据当前学习内容追问。助手调用可配置的大模型，并带追问建议和回答反馈。</div>

<div class="content">
  <img class="ui" src="assets/ai_assistant2.png" alt="学习页侧栏中的 AI 学习助手，针对当前知识点追问" />
</div>

---

<!-- _class: shot -->

<div class="title"><span class="no">03</span>智能学习</div>
<div class="gist">按知识点重要性和学习过程反馈做针对性学习。三种推荐：薄弱点、重要性、随机。</div>

<div class="content">
  <img class="ui" src="assets/ai_study.png" alt="智能学习：薄弱点、重要性、随机三种推荐，右侧是当前知识点与学习反馈" />
</div>

---

<div class="title"><span class="no">03</span>界面图对应哪一节</div>
<div class="gist">六张图都是上游正文引用的。files/ 里多一张未引用的 ai_assistant.png，知识目录有副本，这套胶片不单独开页。</div>

<div class="content">
<div class="grid wrap">
  <div class="card slim"><h4>books.png</h4><p>§3.1 教材管理。上传、同步、删除在模块表里。</p></div>
  <div class="card slim g"><h4>book_details.png</h4><p>§3.1 教材详情。上游写成 books_details.png，实际文件没有那个 s。</p></div>
  <div class="card slim"><h4>study_treeview.png</h4><p>§3.2 树状浏览。</p></div>
  <div class="card slim p"><h4>study_mindmap.png</h4><p>§3.2 知识点树图。</p></div>
  <div class="card slim o"><h4>ai_assistant2.png</h4><p>§3.2 侧栏学习助手。</p></div>
  <div class="card slim"><h4>ai_study.png</h4><p>§3.3 智能学习的三种方式。</p></div>
</div>
</div>

<div class="note"><b>文件名笔误只改知识副本和胶片链接。</b>业务仓 zhenggsh/math 不改。校验接口、按提纲扩充知识点写在模块表里，不另造按钮说明。</div>

---

<div class="title"><span class="no">04</span>两套进程，两类存储</div>
<div class="gist">前端开发服务器默认 <em>5173</em>，后端默认 <em>3000</em>，Swagger 在 <em>/api</em>。存储是 PostgreSQL 和 iksm 目录。</div>

<div class="content">
<div class="grid">
  <div class="card">
    <h4>前端 web</h4>
    <p>React Router、页面与布局、TanStack Query、Axios 的 JWT 拦截器。</p>
  </div>
  <div class="card g">
    <h4>后端 server</h4>
    <p>JWT 与角色守卫、Controller、Service。Service 再接到 Prisma、教材文件服务、Kimi 客户端。</p>
  </div>
  <div class="card p">
    <h4>落到哪里</h4>
    <p>Prisma 到 PostgreSQL。</p>
    <p>教材文件服务到 iksm（xlsx、csv、md）。</p>
    <p>Kimi 客户端到大模型接口。</p>
  </div>
</div>
</div>

<div class="note"><b>下一页是同一张架构图。</b>用户是学生、教师或管理员，浏览器只通过 REST 进入守卫。</div>

---

<!-- _class: shot -->

<div class="title"><span class="no">04</span>总体架构</div>
<div class="gist">节点、分组和连线按上游 §4.1 的 flowchart TB。前端内部和后端内部的箭头也保留。</div>

<div class="content">
  <img src="assets/architecture.png" alt="学生、教师或管理员使用 5173 前端；REST 进入 3000 后端；Prisma 连 PostgreSQL，教材文件服务连 iksm，Kimi 客户端连大模型接口" />
</div>

---

<!-- _class: shot -->

<div class="title"><span class="no">04</span>打开知识点并保存反馈</div>
<div class="gist">一次典型过程：先取知识树，再读同名 md，学生填时长和掌握程度后追加一条学习记录。</div>

<div class="content">
  <img src="assets/learn-sequence.png" alt="学生打开学习页，前端 GET 知识点与 Markdown，渲染后 POST /learning-records，后端把记录追加进 PostgreSQL" />
</div>

---

<!-- _class: shot -->

<div class="title"><span class="no">04</span>教材怎样进数据库</div>
<div class="gist">放入或上传同名框架与 md，忽略无关文件，同步后继承空单元格、补编号，再写入并按编号关联标题。</div>

<div class="content">
  <img src="assets/ingest.png" alt="教材入库：放入或上传，忽略以点、下划线、tmp 开头及非 xlsx、csv、md 的文件，同步后解析、继承、写入 Textbook 与 KnowledgePoint，并用编号关联 md 标题" />
</div>

---

<!-- _class: shot -->

<div class="title"><span class="no">04</span>目录结构</div>
<div class="gist">仓库根下 web、server、iksm、openspec、doc、mydoc。后端六个模块与前面的职责表同名。</div>

<div class="content">
  <img src="assets/directory.png" alt="仓库根目录分出 web、server、iksm、openspec、doc、mydoc；web/src 有页面、组件、接口客户端、上下文和类型；server 有六个模块和 prisma" />
</div>

---

<!-- _class: tree -->

<div class="title"><span class="no">04</span>磁盘上的主要位置</div>
<div class="gist">与上游代码块一致。共享类型放在各自的 types 或 dto 中，界面组件不直接访问数据库或文件系统。</div>

<div class="content">
<pre>.
├── package.json                 # pnpm workspace 脚本
├── web/                         # React + Vite
│   └── src/
│       ├── App.tsx              # 路由
│       ├── pages/               # 登录、教材、学习、分析
│       ├── components/          # 知识树、预览、反馈、图表
│       └── services/            # 按领域拆分的 API 客户端
├── server/                      # NestJS
│   ├── prisma/schema.prisma     # 数据模型
│   └── src/
│       ├── main.ts              # 端口、CORS、Swagger
│       └── modules/             # 六个业务模块
├── iksm/                        # 教材框架与详情
├── openspec/                    # 提案、规格、归档
├── doc/prompt/                  # 项目目标与知识库规范
└── mydoc/                       # 系统介绍</pre>
</div>

---

<!-- _class: shot -->

<div class="title"><span class="no">04</span>技术栈</div>
<div class="gist">表现层、应用层、数据层、工程四组。连线是表现层到应用层，再到数据层。工程组在上游图里单独列出。</div>

<div class="content">
  <img src="assets/stack.png" alt="表现层 React、Ant Design、Vite、KaTeX、Mermaid、ECharts；应用层 NestJS、JWT、Swagger、OpenAI 兼容客户端对接 Kimi；数据层 PostgreSQL、Prisma、xlsx 与 PapaParse；工程为 pnpm、TypeScript、Vitest、Jest、ESLint 与 OpenSpec" />
</div>

---

<div class="title"><span class="no">04</span>选型用来做什么</div>
<div class="gist">表按上游 §4.3。学习助手是可配置的 Kimi 接口，用来针对当前知识点答疑。</div>

<div class="content">
<div class="grid wrap">
  <div class="card slim"><h4>React 19 · TypeScript · Vite</h4><p>单页应用与开发服务器。</p></div>
  <div class="card slim g"><h4>Ant Design</h4><p>布局、表单、表格、反馈。主色 #1890FF。</p></div>
  <div class="card slim"><h4>Allotment</h4><p>学习页多栏可拖拽。</p></div>
  <div class="card slim p"><h4>TanStack Query</h4><p>教材、知识点和记录的请求缓存。</p></div>
  <div class="card slim o"><h4>KaTeX · Mermaid</h4><p>Markdown 里的公式和关系图。</p></div>
  <div class="card slim"><h4>ECharts</h4><p>掌握分布、趋势、热度。</p></div>
  <div class="card slim g"><h4>NestJS · class-validator</h4><p>模块、校验、依赖注入。</p></div>
  <div class="card slim"><h4>bcrypt · JWT</h4><p>密码哈希与接口鉴权。</p></div>
  <div class="card slim p"><h4>PostgreSQL · Prisma</h4><p>用户数据与知识点索引。</p></div>
</div>
</div>

<div class="note"><b>还有四行在下一页：</b>xlsx 与 PapaParse、Kimi、Vitest 与 Jest、pnpm workspace。前端默认请求 http://localhost:3000。</div>

---

<div class="title"><span class="no">04</span>文件、助手、测试、包管理</div>
<div class="gist">前端地址可用 <em>web/.env</em> 的 <em>VITE_API_BASE_URL</em> 覆盖。后端 CORS 允许 5173，也允许预览端口 4173。</div>

<div class="content">
<div class="grid">
  <div class="card">
    <h4>xlsx · PapaParse</h4>
    <p>解析 Excel 与 CSV 框架。</p>
  </div>
  <div class="card g">
    <h4>可配置的 Kimi 接口</h4>
    <p>学习助手用它针对当前知识点答疑。</p>
  </div>
  <div class="card p">
    <h4>Vitest · Jest</h4>
    <p>前后端单元测试。</p>
  </div>
  <div class="card o">
    <h4>pnpm workspace</h4>
    <p>根目录同时管理 web 与 server。</p>
  </div>
</div>
</div>

---

<!-- _class: shot -->

<div class="title"><span class="no">04</span>核心实体</div>
<div class="gist">六张表和上游 erDiagram 的字段、关系一致。表名用蛇形复数，文字说明在下一页。</div>

<div class="content">
  <img src="assets/er-model.png" alt="User、Textbook、KnowledgePoint、LearningRecord、StudySession、StudyMessage 的字段和关系：产生、发起、包含、被记录、作为上下文" />
</div>

---

<div class="title"><span class="no">04</span>表名和几条约束</div>
<div class="gist">同一教材内知识点编号唯一。同一用户对同一知识点只有一个学习助手会话，消息在会话内按时间排列。</div>

<div class="content">
<div class="cols">
  <div class="col-l card">
    <h4>蛇形复数</h4>
    <ul class="tight">
      <li><b>users</b></li>
      <li><b>textbooks</b></li>
      <li><b>knowledge_points</b></li>
      <li><b>learning_records</b></li>
      <li><b>study_sessions</b></li>
      <li><b>study_messages</b></li>
    </ul>
  </div>
  <div class="col-r vlist">
    <div class="card slim g"><h4>contentRef</h4><p>指向 Markdown 里对应标题。教师修改时，数据库、框架文件和 Markdown 一起更新，再用校验接口看三者是否仍一致。</p></div>
    <div class="card slim"><h4>studentInfo</h4><p>JSON。学号、班级等注册资料，不拆成独立表。</p></div>
  </div>
</div>
</div>

---

<!-- _class: shot -->

<div class="title"><span class="no">04</span>两套分级不要混</div>
<div class="gist">重要性 A/B/C 用来筛选推荐。掌握程度 C、D、E 视为薄弱。两套都用字母，含义不同。</div>

<div class="content">
  <img src="assets/two-levels.png" alt="重要性 A 必须掌握、B 重要、C 补充用于智能学习筛选；掌握程度 A 到 E，其中 C、D、E 视为薄弱，两者都指向推荐列表" />
</div>

---

<div class="title"><span class="no">04</span>框架列对到哪个字段</div>
<div class="gist">空的上级单元格可以向下继承。重要性缺省为 C。编号形如 1、1.1、1.1.1。</div>

<div class="content">
<div class="vlist">
  <div class="grid" style="height:auto;">
    <div class="card slim"><h4>一级知识点 · level1</h4><p>必填，可从上一行继承。</p></div>
    <div class="card slim"><h4>二级知识点 · level2</h4><p>可空，可继承。</p></div>
    <div class="card slim"><h4>三级知识点 · level3</h4><p>可空，可继承。</p></div>
  </div>
  <div class="grid" style="height:auto;">
    <div class="card slim g"><h4>定义 · definition</h4><p>简要定义。</p></div>
    <div class="card slim g"><h4>特性 / 运算方式 · characteristics</h4><p>特性或运算要点。</p></div>
    <div class="card slim p"><h4>知识点编号 · code</h4><p>1、1.1、1.1.1。</p></div>
  </div>
  <div class="card slim o"><h4>重要性级别 · importanceLevel</h4><p>A / B / C，缺省为 C。</p></div>
</div>
</div>

---

<div class="title"><span class="no">05</span>准备环境</div>
<div class="gist">命令都在仓库根目录执行。需要 Node.js 18+、pnpm 8+，以及本机可访问的 PostgreSQL 14+。</div>

<div class="content">
<div class="cols">
  <div class="col-l">
<pre class="spec">pnpm install
Copy-Item server\.env.example server\.env
Copy-Item web\.env.example web\.env

pnpm --filter server prisma migrate dev
pnpm --filter server prisma generate</pre>
  </div>
  <div class="col-r vlist">
    <div class="card slim"><h4>教材成对放入 iksm/</h4><p>同一主文件名，例如 math01.xlsx 与 math01.md。</p></div>
    <div class="card slim o"><h4>会被忽略</h4><p>以 . 、_ 、tmp 开头的文件。入库流程里还忽略非 xlsx、csv、md。</p></div>
    <div class="card slim g"><h4>web/.env</h4><p>VITE_API_BASE_URL 默认为 http://localhost:3000。</p></div>
  </div>
</div>
</div>

<div class="note"><b>上面是 PowerShell，按上游原文。</b>server/.env 的变量在下一页。</div>

---

<div class="title"><span class="no">05</span>server/.env</div>
<div class="gist">库名示例是 <em>mathtong</em>。不用学习助手时，Kimi 三项可以保留占位。生产环境必须更换 JWT_SECRET。</div>

<div class="content">
<div class="vlist">
  <div class="card slim"><h4>DATABASE_URL</h4><p>PostgreSQL 连接串，库名示例为 mathtong。</p></div>
  <div class="card slim"><h4>JWT_SECRET</h4><p>签发登录令牌的密钥，生产环境必须更换。</p></div>
  <div class="card slim g"><h4>JWT_EXPIRES_IN</h4><p>令牌有效期，默认 24h。</p></div>
  <div class="card slim"><h4>PORT</h4><p>后端端口，默认 3000。</p></div>
  <div class="card slim p"><h4>IKSM_DIR</h4><p>教材目录的绝对路径，指向本仓库的 iksm。</p></div>
  <div class="card slim o"><h4>KIMI_BASE_URL / KIMI_API_KEY / KIMI_MODEL</h4><p>学习助手所用的模型接口；不使用助手时可保留占位。</p></div>
</div>
</div>

---

<div class="title"><span class="no">05</span>启动</div>
<div class="gist">开两个终端，分别启动后端和前端。括号里的账号按 §5.2 原文列出，这里不把它写成账号体系设计。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="card slim"><h4>pnpm dev:server</h4><p>一个终端启动后端。</p></div>
    <div class="card slim g"><h4>pnpm dev</h4><p>另一个终端启动前端。</p></div>
    <div class="card slim o"><h4>原文括号</h4><p>teacher@test.com/password123,qa-test@example.com/password123</p></div>
  </div>
  <div class="col-r card">
    <h4>三个地址</h4>
    <ul class="tight">
      <li><b>localhost:5173</b> 前端</li>
      <li><b>localhost:3000</b> 后端</li>
      <li><b>localhost:3000/api</b> Swagger</li>
    </ul>
    <p>打开前端后注册学生账号，或使用已有教师账号进入教材管理，执行同步，即可在学习页看到知识点。</p>
  </div>
</div>
</div>

<div class="note"><b>生产构建：</b>pnpm build，再 pnpm --filter server start:prod，以及 pnpm --filter web preview。预览端口 4173，CORS 已放行。</div>

---

<div class="title"><span class="no">05</span>常用指令</div>
<div class="gist">根目录同时管两端。只跑一端时加过滤器，例如 pnpm --filter web test --run，或指定 textbook.service.spec.ts。</div>

<div class="content">
<div class="cols">
  <div class="col-l card">
    <h4>根目录</h4>
    <ul class="tight">
      <li><b>pnpm dev</b> 启动前端开发服务器</li>
      <li><b>pnpm dev:server</b> 启动后端并监听文件变化</li>
      <li><b>pnpm build</b> 构建前端和后端</li>
      <li><b>pnpm typecheck</b> 两端 TypeScript 检查</li>
      <li><b>pnpm lint</b> 两端 ESLint</li>
      <li><b>pnpm format</b> 两端 Prettier 格式化</li>
      <li><b>pnpm test</b> 前端 Vitest 与后端 Jest</li>
    </ul>
  </div>
  <div class="col-r card g">
    <h4>数据库</h4>
    <ul class="tight">
      <li><b>prisma migrate dev</b> 开发环境执行迁移</li>
      <li><b>prisma generate</b> 重新生成 Prisma Client</li>
      <li><b>prisma studio</b> 打开数据库可视化界面</li>
    </ul>
    <p>三条都带 <b>pnpm --filter server</b>。</p>
  </div>
</div>
</div>

---

<!-- _class: shot -->

<div class="title"><span class="no">05</span>本地使用顺序</div>
<div class="gist">从安装和 .env 到迁移、启动、登录、同步教材、学习、保存反馈，再到分析页。</div>

<div class="content">
  <img src="assets/local-flow.png" alt="本地顺序：安装并配置 .env，迁移，启动 3000 与 5173，注册或登录，教师同步教材，学生学习，保存反馈，在分析页查看时长、分布和薄弱点" />
</div>

---

<div class="title"><span class="no">05</span>这套胶片停在哪</div>
<div class="gist">知识浏览、学习反馈、学习分析，以及围绕它们的教材、推荐和当前知识点答疑。题库组卷和自动阅卷仍然<em class="r">不在系统职责内</em>。</div>

<div class="content">
<div class="grid">
  <div class="card">
    <h4>知识源</h4>
    <p>iksm/06-math-Project/math_intro.md</p>
    <p>十一段 mermaid 源码留在原文，没有拆平。</p>
  </div>
  <div class="card g">
    <h4>上游</h4>
    <p>zhenggsh/math</p>
    <p>mydoc/math_intro.md</p>
    <p>master · ca118bf · intro3</p>
  </div>
  <div class="card o">
    <h4>配图</h4>
    <p>mydoc/files 整目录在知识条目的 files/。</p>
    <p>教材详情链接改为 book_details.png，对应目录里的真实文件名。</p>
  </div>
</div>
</div>

<div class="note"><b>胶片 v1.0.0。</b>§5.2 的两个演示账号只出现在启动页的原文括号里。</div>
