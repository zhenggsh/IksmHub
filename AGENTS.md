# AGENTS.md — IksmHub 项目代理工作指南

> 本文件面向在此仓库中工作的 AI 代理（Agent）与协作者。最高约定见 [CHARTER.md](./CHARTER.md)，本文件是日常执行层面的操作手册。

## 一、项目概述

IksmHub 将 `iksm/` 中的 Markdown 知识转化为 Marp Slide，再导出为 HTML 产物。知识单向流动，禁止逆向污染：

```
iksm/（知识源）  →  marp/（Slide 描述）  →  output/（导出产物，只由导出产生）
```

## 二、目录结构约定

### 2.1 iksm/ — 知识源（多级、可读）

按主题用「编号-名称」组织，允许多级嵌套，人类可读为最高优先级：

```
iksm/
├── 01-工作方法/
│   └── workmethod/...
├── 02-架构式编程/
├── 03-自动化编程/
├── 04-智能体编程/
├── 05-终端类编程/
└── 06-无线脑模型/
```

- 目录/文件命名用「编号-中文名」或纯中文名，编号便于排序。
- 新增主题时顺延编号，**不重排已有编号**。

### 2.2 marp/ — Slide 描述（按 ID + 版本）

```
marp/
├── 001-<主题简称>/
│   ├── v1.0.0/
│   │   ├── slides.md          # Marp 源文件（可多个）
│   │   └── assets/            # 图片、主题 CSS 等局部资源
│   └── v1.1.0/
└── 002-<主题简称>/
    └── v1.0.0/
```

规则：

- 每个主题一个 **ID 目录**（三位数顺序编号 + 主题简称），终身不变。
- 每个 slide 版本一个 **`vx.x.x` 子目录**；修改 slide 时**新增版本目录，不原地覆盖旧版本**（修订号递增）。
- 每份 Marp 文件头部 front-matter 必须包含：
  - `iksm-source:` 指向本 slide 依据的 iksm 知识路径（文件或目录），保证 marp → iksm 可追溯。
  - 标准 Marp 指令（`marp: true`、`theme`、`paginate: true` 等）。
- 示例：

```markdown
---
marp: true
theme: default
paginate: true
iksm-source: iksm/01-工作方法/workmethod
version: v1.0.0
---
```

### 2.3 output/ — 导出产物（与 marp 严格对应）

```
output/
├── 001-<主题简称>/
│   ├── v1.0.0/
│   │   ├── slides.html        # 由 marp/001-xxx/v1.0.0 导出
│   │   └── assets/            # 导出时内联或复制所需的资源
│   └── v1.1.0/
└── 002-<主题简称>/
    └── v1.0.0/
```

规则：

- `output/<ID>/vx.x.x/` 必须**精确对应** `marp/<ID>/vx.x.x/`（同 ID、同版本号）。
- 导出命令（Marp CLI）：

```bash
marp marp/<ID>/vX.Y.Z/slides.md -o output/<ID>/vX.Y.Z/slides.html --html
```

- **禁止手工编辑 output/ 中的任何产物**。发现问题回到 marp 源文件修复，递增修订号后重新导出到新的版本目录。

## 三、标准工作流

### 3.1 新增一套 Slide

1. 确认知识已存在于 `iksm/`，否则先在 iksm 中沉淀知识并提交。
2. 在 `marp/` 取下一个空闲 ID，创建 `marp/<ID>-<主题简称>/v1.0.0/`。
3. 编写 Marp 文件，front-matter 写明 `iksm-source`。
4. 导出到 `output/<ID>/v1.0.0/`。
5. 分两次提交：`marp(<ID>): release v1.0.0` 与 `output(<ID>): export v1.0.0`。

### 3.2 修改已有 Slide

1. 打开对应 `marp/<ID>/vX.Y.Z/` 源文件。
2. 递增版本号（文案/样式修正用修订号；新增内容用次版本；重构结构用主版本），创建新 `vX.Y.Z'` 目录复制改进源文件。
3. 若知识本身有误，先改 `iksm/` 并提交，再更新 slide 的 `iksm-source` 指向。
4. 导出到新版本 output 目录，按提交信息规范提交并推送。

### 3.3 从产物定位问题

收到「某个 HTML 有问题」时：由 `output/<ID>/vx.x.x/` 反查 `marp/<ID>/vx.x.x/`（同路径），再由 slide front-matter 的 `iksm-source` 反查知识原文。三级定位缺一不可。

## 四、Git 操作约定

- 远程：`origin` = https://github.com/zhenggsh/IksmHub.git
- 提交信息前缀：`iksm:` / `marp(<ID>):` / `output(<ID>):` / `docs:` / `chore:`，并在信息中写明涉及的版本号。
- 推送前自查：`git status` 无意外文件；确认 marp/output 版本目录一一对应。
- 不提交 `.env`、临时文件、编辑器垃圾文件；不 `git push --force` 主分支。

## 五、禁止事项

1. 禁止手工修改 `output/` 产物；
2. 禁止原地覆盖已有 `vx.x.x` 版本目录中的内容（新建版本目录替代）;
3. 禁止重排 iksm 已有目录编号；
4. 禁止创建无 `iksm-source` 溯源信息的 marp slide；
5. 禁止让 output 出现无对应 marp 版本的游离目录。

## 六、与本指南冲突时

本指南与 [CHARTER.md](./CHARTER.md) 冲突时，以宪章为准；与用户当次明确指令冲突时，遵循用户指令并在回复中提示与约定的差异。
