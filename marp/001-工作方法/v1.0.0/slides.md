---
marp: true
theme: default
paginate: true
html: true
size: 16:9
iksm-source: iksm/01-工作方法/workmethod/工作方法论.md
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

img.diagram { max-width: 100%; max-height: 100%; border-radius: 12px; border: 1px solid rgba(255,255,255,.12); box-shadow: 0 8px 30px rgba(0,0,0,.4); }

/* ============ 封面 ============ */
section.cover {
  background: linear-gradient(120deg, #070b18, #101a3d, #1a0f38, #070b18);
  background-size: 300% 300%; animation: bgmove 10s ease infinite;
}
.cover .orb { position: absolute; border-radius: 50%; filter: blur(70px); opacity: .5; }
.cover .orb1 { width: 340px; height: 340px; background: #00b8d4; top: -80px; right: 60px; animation: glow 5s ease infinite; }
.cover .orb2 { width: 280px; height: 280px; background: #7c4dff; bottom: -60px; left: 80px; animation: glow 6s ease infinite; }
.cover .brand { position: absolute; top: 46px; left: 64px; font-size: 15px; letter-spacing: 4px; color: #7fe9ff; font-weight: 600; }
.cover h1 {
  position: absolute; top: 250px; left: 0; right: 0; text-align: center;
  font-size: 74px; font-weight: 900; letter-spacing: 10px; color: #fff; margin: 0;
  text-shadow: 0 0 40px rgba(0,229,255,.45);
}
.cover .sub { position: absolute; top: 370px; left: 0; right: 0; text-align: center; font-size: 21px; color: #9fb0d8; letter-spacing: 3px; }
.cover .meta { position: absolute; bottom: 60px; left: 0; right: 0; text-align: center; font-size: 14px; color: #5f6b8f; letter-spacing: 2px; }
.cover .line { position: absolute; top: 350px; left: 50%; transform: translateX(-50%); width: 120px; height: 3px; border-radius: 2px; background: linear-gradient(90deg, #00e5ff, #7c4dff); }

/* ============ 四象限 ============ */
.quad { display: grid; grid-template-columns: 26px 1fr 1fr; grid-template-rows: 24px 1fr 1fr; gap: 8px; height: 100%; }
.quad .axis { display: flex; align-items: center; justify-content: center; font-size: 13px; color: #8b96b8; font-weight: 700; }
.quad .cell { border-radius: 12px; padding: 14px 16px; border: 1px solid; }
.quad .cell h4 { margin: 0 0 6px; font-size: 18px; }
.quad .cell p { margin: 0; font-size: 13px; line-height: 1.5; }
.q1 { background: rgba(255,84,112,.1); border-color: rgba(255,84,112,.45); }
.q1 h4 { color: #ff5470; } .q2 { background: rgba(105,240,174,.1); border-color: rgba(105,240,174,.5); }
.q2 h4 { color: #69f0ae; } .q3 { background: rgba(255,176,32,.1); border-color: rgba(255,176,32,.45); }
.q3 h4 { color: #ffb020; } .q4 { background: rgba(140,150,180,.1); border-color: rgba(140,150,180,.35); }
.q4 h4 { color: #9aa5c4; }
</style>

<!-- _class: cover -->
<!-- _paginate: false -->

<div class="orb orb1"></div>
<div class="orb orb2"></div>
<div class="brand">IKSM · 知识转化</div>

<h1>工作方法论</h1>
<div class="line"></div>
<div class="sub">把经验变成方法 · 把方法变成习惯</div>
<div class="meta">为知笔记分享 · 2026/10 更新 · IksmHub marp v1.0.0</div>

---

<div class="title"><span class="no">00</span>课程地图</div>
<div class="gist">十四个部分串成一条主线：<em>先有问题、再有方法</em>——从<em class="g">价值观</em>打底，到<em>沟通 / 时间 / 任务</em>三大实战方法，再到<em class="p">跳出圈圈</em>与<em class="o">能量管理</em>收尾。</div>

<div class="content">
<div class="grid wrap">
  <div class="card"><h4>01 课程互动</h4><p>一线真实困惑，每个问题对应一套方法</p></div>
  <div class="card p"><h4>02 价值观</h4><p>决定做与不做的最底层逻辑</p></div>
  <div class="card"><h4>03 方法库</h4><p>象限 / 描述 / 计划 / 风险等 8 件武器</p></div>
  <div class="card p"><h4>04 沟通能力</h4><p>沟通能力 &gt; 业务能力</p></div>
  <div class="card o"><h4>05~07 描述与表达</h4><p>问题描述法 · 需求描述法 · 三兄弟法</p></div>
  <div class="card g"><h4>08 时间管理</h4><p>第二象限工作法</p></div>
  <div class="card"><h4>09 任务管理</h4><p>接收 · 分解 · 追踪 · 赶工</p></div>
  <div class="card p"><h4>10 跳出圈圈</h4><p>退出舒适地带，抢做超值任务</p></div>
  <div class="card r"><h4>11~14 风险·能量·书单·后记</h4><p>SWOT · 正负磁场 · 斯多葛控制二分法</p></div>
</div>
</div>

<div class="note"><b>学习方法：</b>没有正确答案，要找到适合自己的方法；深入思考了，才能更好地听明白。</div>

---

<div class="title"><span class="no">01</span>课程互动 · 从困惑到方法</div>
<div class="gist">这些"天天遇到"的问题，答案都藏在后面的章节里——<em>先自己想一想</em>，再<em class="g">点击看对应的方法</em>。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <details class="qa"><summary>时间该怎么管理？要先做哪些事？</summary><div class="ans"><b>第 2 象限工作法</b>——把 80% 的时间投给「重要不紧急」的事。</div></details>
    <details class="qa"><summary>天天这么忙，没空做、未来没头怎么办？</summary><div class="ans"><b>要事第一，跳出圈圈</b>——先识别重要的事并落地，避免下一步更忙。</div></details>
    <details class="qa"><summary>"给他说了啊，他应该明白了"，等着行吗？</summary><div class="ans">不行——<b>沟通需要反馈</b>，不回复≠同意。</div></details>
    <details class="qa"><summary>领导最近没找我、没挑战，怎么主动找他？</summary><div class="ans"><b>主动沟通，创造机会沟通</b>——例会、周报、总结会都是机会。</div></details>
    <details class="qa"><summary>"系统又卡了，家人们谁懂啊"——问题在哪？</summary><div class="ans">现象不明确——要用<b>问题描述法</b>把现象 1、2、3 列清楚。</div></details>
  </div>
  <div class="col-r vlist">
    <details class="qa"><summary>他会拍 MP，我要向他学习吗？学什么？</summary><div class="ans">学——<b>学会汇报</b>，研发出活 + 会汇报才是完整闭环。</div></details>
    <details class="qa"><summary>沟通来沟通去，又带回客户新需求？</summary><div class="ans"><b>重要沟通做好沟通预案</b>——先想清楚目的和观点再上阵。</div></details>
    <details class="qa"><summary>客户要加两个按钮做汇总——怎么体会？</summary><div class="ans">这是<b>业务需求</b>，要转换成系统的<b>功能需求</b>（需求描述法）。</div></details>
    <details class="qa"><summary>领导上次说的需求又变了，快做完了怎么办？</summary><div class="ans"><b>学会反馈任务，要评审</b>——确认控制点：2% / 50% / 90%。</div></details>
    <details class="qa"><summary>追那个美女/帅哥，怎么定策略？</summary><div class="ans"><b>SWOT 分析法</b>——分析优劣势，再定 SO/WO/ST/WT 策略。</div></details>
  </div>
</div>
</div>

<div class="note"><b>互动反馈：</b>写正能量/负能量词的练习 → 让自己成为正能量的磁场源，远离一切负能量。</div>

---

<div class="title"><span class="no">02</span>价值观 · 最底层的逻辑</div>
<div class="gist">价值观就是碰到事情时，决定"<em>做与不做、怎么做</em>"的最底层逻辑——它看不见，却决定了<em class="r">每一次选择</em>。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="card">
      <h4>什么是价值观</h4>
      <p>不是口号，是遇事时的第一反应：这个忙帮不帮？这个活接不接？这句话说不说？</p>
    </div>
    <div class="card g">
      <h4>国家价值观（示范）</h4>
      <div class="chips">
        <span class="chip r">富强</span><span class="chip r">民主</span><span class="chip r">文明</span><span class="chip r">和谐</span>
        <span class="chip o">自由</span><span class="chip o">平等</span><span class="chip o">公正</span><span class="chip o">法治</span>
        <span class="chip g">爱国</span><span class="chip g">敬业</span><span class="chip g">诚信</span><span class="chip g">友善</span>
      </div>
      <p style="margin-top:8px">国家目标 · 社会取向 · 公民准则，三个层面层层落地。</p>
    </div>
  </div>
  <div class="col-r vlist">
    <div class="card p">
      <h4>各公司的价值观</h4>
      <ul class="tight">
        <li><b>LC：</b>创新、诚信、协作、担当、稳健、高效</li>
        <li><b>HW：</b>对打 Z 有利，对客户有利</li>
        <li><b>字节范 / 阿里味：</b>各自成体系</li>
        <li><b>某 XXX：</b>对领导负责（反面教材）</li>
      </ul>
    </div>
    <details class="qa"><summary>价值观到底"有啥用"？</summary><div class="ans">价值观啥用啊——它是<strong>选择的操作系统</strong>：同一道题，价值观不同，解法完全不同。</div></details>
  </div>
</div>
</div>

<div class="note"><b>态度：</b>不想给别人输出价值观——人教人，教不会；事教人，一次就够。</div>

---

<div class="title"><span class="no">02</span>价值观 · 方向性建议</div>
<div class="gist">不灌输、只建议——三条方向都指向同一件事：<em class="o">把个人成长放进时代的大盘子里</em>。</div>

<div class="content">
<div class="grid">
  <div class="card r">
    <h4>爱国</h4>
    <p>不是抽象口号，是看清自己站在哪块土壤上。</p>
  </div>
  <div class="card o">
    <h4>抓住国家崛起的机会</h4>
    <p>时代红利是最强杠杆，顺势而为比单打独斗重要。</p>
  </div>
  <div class="card g">
    <h4>努力了的都是自己的</h4>
    <p>平台会换、项目会停，长在自己身上的能力谁也拿不走。</p>
  </div>
</div>
</div>

<div class="note"><b>记住：</b>人教人，教不会；事教人，一次就够——方向给到，路自己走。</div>

---

<div class="title"><span class="no">03</span>方法库 · 八件武器</div>
<div class="gist">遇到事先想"<em>有没有现成方法</em>"——这 8 件武器覆盖<em>时间 / 描述 / 计划 / 风险</em>四大战场，后面的章节逐一展开。</div>

<div class="content">
<div class="vlist">
  <div class="grid">
    <div class="card g"><h4>① 象限工作法</h4><p>重要 × 紧急，先做第 II 象限</p></div>
    <div class="card"><h4>② 问题描述法</h4><p>现象 / 影响 / 分析三段式</p></div>
    <div class="card"><h4>③ 需求描述法</h4><p>背景 / 场景 / 功能三段式</p></div>
    <div class="card p"><h4>④ 计划制定法</h4><p>WBS 分解 + 依赖编排</p></div>
  </div>
  <div class="grid">
    <div class="card o"><h4>⑤ 故障跟踪法</h4><p>日报推进，目标 + WBS 落地</p></div>
    <div class="card r"><h4>⑥ 风险分析法</h4><p>SWOT 定策略</p></div>
    <div class="card"><h4>⑦ 控制二分法</h4><p>能控制的做好，不能控制的不抱怨</p></div>
    <div class="card p"><h4>⑧ 三兄弟方法</h4><p>总分结构：标题 + 123</p></div>
  </div>
</div>
</div>

<div class="note"><b>使用原则：</b>方法不是背下来，而是在"遇到问题的那一秒"想起来用。</div>


---

<div class="title"><span class="no">04</span>沟通能力 · 沟通模型</div>
<div class="gist"><em class="r">沟通能力 &gt; 业务能力</em>——出活是本分，让别人<em>看见</em>你的活、<em>听懂</em>你的话，才是闭环。</div>

<div class="content">
<div class="cols">
  <div class="col-l" style="display:flex;align-items:center;justify-content:center;">
    <img class="diagram" src="assets/沟通模型.png" />
  </div>
  <div class="col-r vlist">
    <div class="card">
      <h4>用好制度给的机会</h4>
      <p>例会 · 周报 · 总结会 · 座谈会 · 党会 · 领导找你时的每一次沟通</p>
    </div>
    <div class="card g">
      <h4>主动创造机会</h4>
      <p><b style="color:#69f0ae">主动汇报：</b>各部门领导都可以直接去找，不官僚</p>
      <p><b style="color:#69f0ae">主动总结：</b>转正 / 年终 / 大项目 / 知识总结</p>
    </div>
  </div>
</div>
</div>

<div class="note"><b>历史镜鉴：</b>秦昭襄王在位 56 年，老妈管了 41 年——不主动创造沟通机会，就只能等机会来找你。</div>

---

<div class="title"><span class="no">04</span>沟通能力 · 误区与沟通预案</div>
<div class="gist">两个致命误区，人人都踩过；五个预案问题，<em>重要沟通前</em>必问——<em class="o">点击反例看正确姿势</em>。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="card r">
      <h4>两大误区</h4>
      <p>❶ 认为别人已经听明白了</p>
      <p>❷ 默认不回复就是同意了</p>
    </div>
    <details class="qa"><summary>为什么"说了≠听明白了"？</summary><div class="ans">沟通是<strong>编码→传输→解码</strong>，任何一环都会失真——所以要<b>任务反讲</b>、要确认反馈。</div></details>
    <details class="qa"><summary>对方没回复，我该怎么办？</summary><div class="ans">追问确认，而不是默默等待——<b>沟通需要闭环</b>，没有反馈的沟通等于没发生。</div></details>
  </div>
  <div class="col-r">
    <div class="card p" style="height:100%;">
      <h4>沟通预案五问</h4>
      <ul class="tight">
        <li><b>目的：</b>本次沟通要达到什么？</li>
        <li><b>机会：</b>与谁、什么时间谈？</li>
        <li><b>观点：</b>要表达几个观点才够？</li>
        <li><b>反馈：</b>对方可能怎么反馈？我期望什么反馈？</li>
        <li><b>遗留：</b>哪些可能谈不拢，可遗留处理？</li>
      </ul>
    </div>
  </div>
</div>
</div>

<div class="note"><b>适用场景：</b>找领导汇报、客户沟通、跨部门协调——只要"重要"，就先做预案。</div>

---

<div class="title"><span class="no">05</span>问题描述法 · Question 还是 Problem？</div>
<div class="gist">Question 要<em>回答</em>，Problem 要<em class="g">解决</em>——问题描述不清楚，别人帮不上忙，甚至会被<em class="r">瞎指挥</em>。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="grid">
      <div class="card p"><h4>Question</h4><p>与 Answer 成对<br>要加问号，要被回答</p></div>
      <div class="card r"><h4>Problem / Issue</h4><p>与 Solution 成对<br>要解决，要寻求方案</p></div>
    </div>
    <div class="card g">
      <h4>为什么描述如此重要</h4>
      <p>描述不清楚 → 别人帮不上忙，甚至被瞎指挥；描述清楚 → 很多情况下，自己就能解决。</p>
    </div>
  </div>
  <div class="col-r vlist">
    <details class="qa"><summary>反例 1："系统卡住了，怎么处理啊？"</summary><div class="ans">现象不明确——怎么卡了？卡住是什么意思？<b>不同的人有不同的理解</b>。</div></details>
    <details class="qa"><summary>反例 2："WEB 容器没分开，HA 用不了了"</summary><div class="ans">HA 用不了的现象是什么？"WEB 容器"是<b>个人分析还是客户建议</b>？是不是权威方案？</div></details>
  </div>
</div>
</div>

<div class="note"><b>心法：</b>自己是对问题的第一发现人和描述人——<b style="color:#9fb4ff">描述上你是权威的，分析上可能有局限</b>，两者分开说。</div>

---

<div class="title"><span class="no">05</span>问题描述法 · 三段式模板</div>
<div class="gist">现象、影响、分析<em>各就各位</em>，不要绕着讲——模板要点<em class="g">点击展开</em>。</div>

<div class="content">
<div class="grid">
  <div class="card">
    <h4>【问题现象】</h4>
    <details class="qa"><summary>点击展开要点</summary><div class="ans">现象是被你<b>感知</b>到的：屏幕截屏、日志内容、操作过程；要 1、2、3 列全；必要时补充物理与环境部署情况。</div></details>
  </div>
  <div class="card o">
    <h4>【问题影响】</h4>
    <details class="qa"><summary>点击展开要点</summary><div class="ans">对别人产生了什么影响——如<b>某某业务不能工作了</b>。影响决定了问题的优先级。</div></details>
  </div>
  <div class="card g">
    <h4>【我的分析】</h4>
    <details class="qa"><summary>点击展开要点</summary><div class="ans">先把现象和影响<b>独立说清楚</b>，再展开可能的分析；用自己的能力做某些层次、某些路径上的分析。</div></details>
  </div>
</div>
</div>

<div class="note"><b>顺序不能乱：</b>现象 → 影响 → 分析。混在一起讲，听的人就会怀疑你的现象是不是真的。</div>

---

<div class="title"><span class="no">06</span>需求描述法 · 从业务到功能</div>
<div class="gist">客户说的是<em class="o">业务需求</em>，我们要把它翻译成系统能实现的<em class="g">功能需求</em>——<em>背景、场景、功能</em>三步走。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="grid">
      <div class="card o"><h4>业务需求</h4><p>客户提出的，是"想要什么结果"</p></div>
      <div class="card g"><h4>功能需求</h4><p>我们转换的，是"系统怎么实现"</p></div>
    </div>
    <details class="qa"><summary>反例："在这里加个按钮，点击计算 XXX 汇总"</summary><div class="ans">客户直接给出了<b>功能方案</b>——先问业务动机，再判断这个按钮是不是最优解。</div></details>
    <details class="qa"><summary>反例："要一个项目管理功能 / 需要 BI、BigData"</summary><div class="ans">一句话需求——<b>背景场景全缺失</b>，无法评估、无法排期。</div></details>
  </div>
  <div class="col-r vlist">
    <div class="card"><h4>【需求背景】</h4><p>客户为什么提？动机和出发点？想解决什么业务问题？</p></div>
    <div class="card"><h4>【需求场景】</h4><p>谁，在什么时候，通过什么操作，达到什么目的？</p></div>
    <div class="card"><h4>【功能要求】</h4><p>前两步说清后，再谈功能、性能、操作方式的要求。</p></div>
  </div>
</div>
</div>

<div class="note"><b>铁律：</b>前两步没说清，绝不展开第三步——否则就是把客户的方案当成了客户的需求。</div>

---

<div class="title"><span class="no">07</span>三兄弟法（总分法）</div>
<div class="gist">标题 + 123，不仅是<em>沟通规范</em>，更是<em class="p">分析能力和设计能力</em>——发邮件、写文档、口头汇报，都要遵守。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="grid">
      <div class="card"><h4>❶ 表达什么</h4><p>标题命名好了吗？一句话说清主题</p></div>
      <div class="card p"><h4>❷ 是否兄弟</h4><p>1、2、3 是并列关系吗？厚此薄彼了吗？</p></div>
      <div class="card g"><h4>❸ 是否分解</h4><p>1、2、3 合起来覆盖了标题吗？</p></div>
    </div>
    <div class="card o">
      <h4>标准句式</h4>
      <p>标题 XXX，详情如下：1 … 2 … 3 …</p>
    </div>
  </div>
  <div class="col-r vlist">
    <details class="qa"><summary>反例：设计时厚此薄彼</summary><div class="ans">某功能三种情况：利旧 / 升级 / 新建——前两个流程几乎一致，第三个完全不同。<b>客户需求永远不会错，错的是我们的设计。</b></div></details>
    <details class="qa"><summary>"男人、女人、老人"错在哪？</summary><div class="ans">不是兄弟——有交叉、不并列。分解维度要<b>统一且互斥</b>。</div></details>
  </div>
</div>
</div>

<div class="note"><b>应用场景：</b>描述一个问题、分析一个问题、审视一个设计是否合理。</div>

---

<div class="title"><span class="no">08</span>时间管理 · 第二象限工作法</div>
<div class="gist">把 <em class="g">80% 的时间</em>投给「重要不紧急」——井井有条的秘诀不是忙，而是<em>在事情变紧急之前</em>就把它做掉。</div>

<div class="content">
<div class="cols">
  <div class="col-l">
    <div class="quad">
      <div></div><div class="axis">紧急</div><div class="axis">不紧急</div>
      <div class="axis">重要</div>
      <div class="cell q1"><h4>Ⅰ 重要且紧急</h4><p>救火队员必须做：公司发的邮件、不得不做——立马就做</p></div>
      <div class="cell q2"><h4>Ⅱ 重要不紧急 ★</h4><p>每天 80% 时间投这里；有充足时间深思熟虑，保证质量效率</p></div>
      <div class="axis">不重要</div>
      <div class="cell q3"><h4>Ⅲ 紧急不重要</h4><p>对别人重要：支撑到位即可，短平快，别多占自己时间</p></div>
      <div class="cell q4"><h4>Ⅳ 不紧急不重要</h4><p>不做计划考虑</p></div>
    </div>
  </div>
  <div class="col-r vlist">
    <div class="card g"><h4>关键动作</h4><p>尽快识别重要事情并落地，避免下一步更忙。</p></div>
    <div class="card r"><h4>危险信号</h4><p>把 Ⅱ 拖成 Ⅰ ——重要的事情紧急做，质量存疑。</p></div>
    <details class="qa"><summary>"因为我很忙"的两种用法？</summary><div class="ans">❌ 因为忙，所以那些事情顾不过来；✅ 因为忙，所以<b>更要尽快识别重要的事并落地</b>。</div></details>
  </div>
</div>
</div>

<div class="note"><b>来源呼应：</b>课程互动第一问"时间该怎么管理"，答案就是这一页。</div>


---

<div class="title"><span class="no">09</span>任务管理 · 接收任务三问</div>
<div class="gist">接活之前先问三句话——<em>防返工、防受伤</em>，答案<em class="g">点击揭示</em>。</div>

<div class="content">
<div class="grid">
  <div class="card">
    <h4>任务清楚吗？</h4>
    <details class="qa"><summary>点击看自检标准</summary><div class="ans">能用<b>三句话</b>讲清楚吗？能说明白场景吗——<b>谁，什么时间，用什么功能，达成什么目的</b>。</div></details>
  </div>
  <div class="card o">
    <h4>控制点做好了吗？</h4>
    <details class="qa"><summary>点击看控制点</summary><div class="ans"><b>2% / 50% / 90%</b> 三个点要反讲确认——避免快做完了才发现理解错了。</div></details>
  </div>
  <div class="card r">
    <h4>谁授权？谁评审？</h4>
    <details class="qa"><summary>点击看原因</summary><div class="ans">避免做<b>拍脑袋的研发</b>——返工后自己很受伤。</div></details>
  </div>
</div>
</div>

<div class="note"><b>呼应：</b>领导需求中途变更的那个互动问题，根源就是少了 2% / 50% / 90% 的反讲确认。</div>

---

<div class="title"><span class="no">09</span>任务管理 · 分解与追踪</div>
<div class="gist">计划总目标 → N 个<em>可测量</em>的小目标 → 小小目标；计划<em class="o">就是用来更新的</em>，更新计划就是保终点。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="card p">
      <h4>WBS 分解三原则</h4>
      <ul class="tight">
        <li>大小目标都必须<b>可测量</b>、有明确完成标准</li>
        <li>小目标之间是<b>并列兄弟</b>关系（不能是男人/女人/老人）</li>
        <li>问自己：完成 N 个小目标 = 完成大目标吗？</li>
      </ul>
    </div>
    <div class="card">
      <h4>依赖与工具</h4>
      <ul class="tight">
        <li><b>逻辑依赖：</b>先设计再研发；<b>资源依赖：</b>同一负责人</li>
        <li><b>MS Project：</b>只有 1 个手动起点（开工会）、全部自动任务、只调时长和依赖，不调起止时间</li>
      </ul>
    </div>
  </div>
  <div class="col-r vlist">
    <div class="card g">
      <h4>追踪四原则</h4>
      <ul class="tight">
        <li>计划就是用来更新的</li>
        <li><b>不能存在过去时间点的任务</b></li>
        <li>只调时长和依赖，不手工调起止</li>
        <li>影响里程碑 → 立即采取措施</li>
      </ul>
    </div>
    <div class="card o">
      <h4>粒度建议</h4>
      <p>两周内 → 分解到<b>两三天粒度</b>；两周后 → 粗粒度，渐进明细。</p>
    </div>
  </div>
</div>
</div>

<div class="note"><b>起点与终点：</b>开工会是总起点；安排好 WBS 和依赖后，<b style="color:#9fb4ff">紧盯终点</b>。</div>

---

<div class="title"><span class="no">09</span>任务管理 · 赶工万能 6 条</div>
<div class="gist">进度告急时的<em class="r">六张牌</em>——可以单出，也可以组合出，核心都是<em>保住关键里程碑</em>。</div>

<div class="content">
<div class="vlist">
  <div class="grid">
    <div class="card r"><h4>① 赶工</h4><p>增加投入，压缩关键路径时长</p></div>
    <div class="card o"><h4>② 并行</h4><p>串行改并行，能同时干的同时干</p></div>
    <div class="card p"><h4>③ 减范围</h4><p>与干系人确认，砍掉非关键内容</p></div>
  </div>
  <div class="grid">
    <div class="card"><h4>④ 好资源</h4><p>加人、加设备，好钢用在刀刃上</p></div>
    <div class="card g"><h4>⑤ 好方法</h4><p>换更高效的工具、流程和打法</p></div>
    <div class="card o"><h4>⑥ 提高质量</h4><p>减少返工，一次做对就是最快的路</p></div>
  </div>
</div>
</div>

<div class="note"><b>任务暂停纪律：</b>可以停，但必须先把"盒子"打开——按问题描述法说清楚、排序后，才能停；不能让盲盒留在工作台上。</div>

---

<div class="title"><span class="no">10</span>跳出圈圈</div>
<div class="gist">圈子无好坏，但<em class="p">厚度</em>有差异——要么不断增加圈子的厚度，要么<em>跳出更高的圈子</em>。</div>

<div class="content">
<div class="cols">
  <div class="col-l">
    <div class="card" style="height:100%;">
      <h4>圈子模型</h4>
      <div class="vlist" style="height:auto;margin-top:6px;">
        <div class="chip r" style="text-align:center;">放羊娃：放羊 → 赚钱 → 找媳妇 → 生娃 → 放羊</div>
        <div class="chip o" style="text-align:center;">农民的圈子</div>
        <div class="chip g" style="text-align:center;">码农的圈子</div>
        <div class="chip p" style="text-align:center;">管理者的圈子</div>
      </div>
      <p style="margin-top:12px">圈子无好坏，各有价值——不要妄自菲薄，圈内过程同样精彩（工匠的故事）。</p>
    </div>
  </div>
  <div class="col-r vlist">
    <div class="card">
      <h4>办法一 · 退出舒适地带</h4>
      <p>进入学习地带：主动挑战难度、摆脱路径依赖、不断充电。</p>
    </div>
    <div class="card g">
      <h4>办法二 · 抢做超值任务</h4>
      <p>看领导、"样板"同事在做什么，做好接收超值任务的准备，站上新平台。</p>
    </div>
    <details class="qa"><summary>"给多少钱干多少事"对吗？</summary><div class="ans">→ <b>永远要超值做事</b>。技能很快贬值，主动挑战能力之外的工作，是不断升值、增收的底层逻辑。</div></details>
  </div>
</div>
</div>

<div class="note"><b>呼应：</b>"没空做、未来没头"的互动问题——答案就是跳出圈圈。</div>

---

<div class="title"><span class="no">11</span>风险 / 机会管理 · SWOT 分析</div>
<div class="gist">先看清自己<em>（S/W）</em>和大盘<em>（O/T）</em>，再谈策略——分析图与<em class="o">策略图</em>配合使用。</div>

<div class="content">
<div class="cols">
  <div class="col-l" style="display:flex;align-items:center;justify-content:center;">
    <img class="diagram" src="assets/swot分析.png" />
  </div>
  <div class="col-r vlist">
    <div class="card g"><h4>S · 优势 Strength</h4><p>内部能力：我强在哪？</p></div>
    <div class="card r"><h4>W · 劣势 Weakness</h4><p>内部能力：我缺什么？</p></div>
    <div class="card"><h4>O · 机会 Opportunity</h4><p>外部因素：风往哪吹？</p></div>
    <div class="card o"><h4>T · 威胁 Threat</h4><p>外部因素：雷在哪埋着？</p></div>
  </div>
</div>
</div>

<div class="note"><b>扩展：</b>"五看三定"——看行业、看市场、看客户、看竞争、看自己，再定战略（见下页策略思路）。</div>

---

<div class="title"><span class="no">11</span>风险 / 机会管理 · SWOT 定策略</div>
<div class="gist">SO 大干快上、WO 补短板抢机会、ST 以优避险、WT 做好预案——<em class="g">点击卡片看行动要点</em>。</div>

<div class="content">
<div class="cols">
  <div class="col-l" style="display:flex;align-items:center;justify-content:center;">
    <img class="diagram" src="assets/swot策略.png" />
  </div>
  <div class="col-r vlist">
    <details class="qa"><summary><b style="color:#69f0ae">SO</b>｜有优势 + 有机会</summary><div class="ans"><b>大干快上</b>——把优势全部押到机会上。</div></details>
    <details class="qa"><summary><b style="color:#00e5ff">WO</b>｜有机会 + 有劣势</summary><div class="ans"><b>尽快补足劣势，抢抓机会</b>——窗口期不等人。</div></details>
    <details class="qa"><summary><b style="color:#ffb020">ST</b>｜有优势 + 有风险</summary><div class="ans"><b>利用优势避免风险发生</b>——把优势变成护城河。</div></details>
    <details class="qa"><summary><b style="color:#ff5470">WT</b>｜有劣势 + 有风险</summary><div class="ans"><b>做好预案，最小化风险影响</b>——先活下来，再等转机。</div></details>
  </div>
</div>
</div>

<div class="note"><b>呼应：</b>"追美女/帅哥定策略"的互动问题——SWOT 就是答案；策略图见 assets/五看三定.png。</div>

---

<div class="title"><span class="no">12</span>能量 · 磁场与控制二分法</div>
<div class="gist">正能量有<em class="g">磁场</em>，负能量的磁场<em class="r">更大</em>——斯多葛告诉我们：管好<em>能控制的</em>，放下不能控制的。</div>

<div class="content">
<div class="grid">
  <div class="card g">
    <h4>正能量 · 有磁场</h4>
    <ul class="tight">
      <li>解决事情的</li>
      <li>鼓舞自己的</li>
      <li>鼓励别人的</li>
    </ul>
    <p style="margin-top:8px">→ 让自己成为正能量的磁场源</p>
  </div>
  <div class="card r">
    <h4>负能量 · 远离</h4>
    <p>对事情的解决<strong>没有建设性作用</strong>。</p>
    <p>负能量磁场更大——远离社会上负能量的人和事。</p>
  </div>
  <div class="card p">
    <h4>斯多葛控制二分法</h4>
    <p><b style="color:#69f0ae">能控制的</b> → 做的做好</p>
    <p><b style="color:#ff9db1">不能控制的</b> → 做最坏的打算，不抱怨，不影响心情</p>
  </div>
</div>
</div>

<div class="note"><b>呼应：</b>写正能量/负能量词的互动练习 → 认清哪些词在给自己充电、哪些在耗电。</div>

---

<div class="title"><span class="no">13</span>推荐书籍与资源</div>
<div class="gist">三扇门——<em>领导课</em>立心法、<em>不抱怨</em>修心态、<em>产品老曾</em>给榜样，把本课的方法<em class="o">接上电源</em>。</div>

<div class="content">
<div class="grid">
  <div class="card">
    <h4>《周一清晨的领导课》</h4>
    <ul class="tight">
      <li>要事第一</li>
      <li>开车的角色转变</li>
      <li>离开舒适地带，到达学习地带</li>
    </ul>
  </div>
  <div class="card g">
    <h4>《不抱怨的人生》</h4>
    <ul class="tight">
      <li>抱怨一次，就把手环换到另一只手上</li>
      <li>用物理动作打断抱怨回路</li>
    </ul>
  </div>
  <div class="card p">
    <h4>B 站 · 产品老曾</h4>
    <ul class="tight">
      <li>逻辑清晰，表达清晰</li>
      <li>有高度，正能量</li>
      <li>有方法，能实践</li>
    </ul>
  </div>
</div>
</div>

<div class="note"><b>提醒：</b>辨别榜样形象——有些形象不好，会影响大家对"努力奋斗"的榜样的认知。</div>

---

<div class="title"><span class="no">14</span>后记 · 别把方法论带回家</div>
<div class="gist">工作方法论<em class="o">目标导向</em>，家庭方法论<em class="g">不生气导向</em>——同一个你，两套操作系统，<em>切换要果断</em>。</div>

<div class="content">
<div class="cols">
  <div class="col-l vlist">
    <div class="card">
      <h4>工作方法论</h4>
      <p>没有对错，<b style="color:#ffb020">目标导向</b>。</p>
    </div>
    <div class="card g">
      <h4>家庭方法论</h4>
      <p>也没有对错，<b style="color:#69f0ae">不生气导向</b>。</p>
    </div>
  </div>
  <div class="col-r vlist">
    <details class="qa"><summary>和父母相处要注意什么？</summary><div class="ans">不要觉得自己懂得多就给父母改习惯——<b>用自己的能力帮父母就好</b>。</div></details>
    <details class="qa"><summary>和对象、和孩子相处呢？</summary><div class="ans">和对象：没有谁对谁错；和孩子：<b>言传身教比说教强</b>。</div></details>
  </div>
</div>
</div>

<div class="note"><b>结语：</b>方法已在手，路在脚下——把经验变成方法，把方法变成习惯。谢谢！</div>
