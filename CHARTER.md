# IksmHub 项目宪章（CHARTER.md）

## 一、项目使命

IksmHub 是一个**知识转化流水线项目**：将 `iksm/` 中以 Markdown 形式沉淀的结构性知识，通过 Marp 转化为可演示的 Slide，并导出为 HTML 等格式对外发布。核心链路为：

```
iksm（知识源） → marp（Slide 描述） → output（导出产物）
```

## 二、目录体系与治理规则

### 2.1 三大根目录

| 目录 | 角色 | 组织方式 |
| --- | --- | --- |
| `iksm/` | 知识源头，唯一事实来源（Single Source of Truth） | **多级、可读的目录结构**，按主题编号命名（如 `01-工作方法/`），内部可继续分子目录 |
| `marp/` | Slide 的描述层（Marp 格式的 .md） | **按 ID 编号分目录**，每个 ID 目录下用 `vx.x.x` 版本号子目录管理多个版本 |
| `output/` | 导出的 Slide 产物（HTML 等格式） | **按 ID 编号分目录**（与 marp 的 ID 对应），每个 ID 目录下同样用 `vx.x.x` 版本号子目录管理 |

### 2.2 溯源与版本关联（强制约束）

1. **marp → iksm 可追溯**：每一份 marp slide 文件必须注明其知识来源（iksm 中的具体文件或目录路径，建议写入 Marp front-matter 的 `iksm-source` 字段或文件头部注释），保证任意 slide 都能追溯到它依据的知识原文。
2. **output → marp 精确关联**：output 中任意一个版本子目录（`output/<id>/vx.x.x/`）必须唯一对应 marp 中的同名版本子目录（`marp/<id>/vx.x.x/`），**版本号一致、ID 一致**。output 不允许出现没有对应 marp 版本的"游离产物"，也不允许覆盖 marp 历史版本对应的旧产物。
3. **版本号规范**：一律采用 [语义化版本](https://semver.org/lang/zh-CN/) `vx.x.x`：
   - 主版本（v**X**.0.0）：知识框架或 slide 结构发生重大调整；
   - 次版本（vX.**Y**.0）：新增章节、知识内容扩充；
   - 修订号（vX.Y.**Z**）：文案修正、样式微调、重新导出。
4. **ID 编号规范**：marp 与 output 使用同一套 ID（如 `001`、`002` 顺序编号或简短主题缩写），同一知识主题在 marp/output 中 ID 终身不变。

### 2.3 内容与产物纪律

- `iksm/` 只放知识内容本身（Markdown 等），不混放 slide 或导出产物；
- `marp/` 只放 Marp 格式的 slide 源文件（`.md`）及其局部资源（图片、主题 CSS），不放导出产物；
- `output/` 只放由 marp 文件导出的产物（HTML / PDF / PPTX 等），**禁止手工直接修改 output 中的产物**；产物有问题必须回到 marp 源文件修改后重新导出。

## 三、Git 与协作约定

1. 仓库已配置远程 `origin`（https://github.com/zhenggsh/IksmHub.git），日常开发以分支 + 提交 + 推送的方式工作。
2. 提交信息要求：
   - 按目录区分提交范围，建议前缀：`iksm:`、`marp:`、`output:`、`docs:`、`chore:`；
   - 涉及版本升级的提交，信息中必须写明版本号，例如 `marp(001): release v1.2.0`。
3. 每次 marp 版本发布（产出新的 `vx.x.x` 目录）应伴随一次独立提交；导出 output 后再追加一次导出提交，保证 marp 与 output 的关联在提交历史中同样可查证。
4. `output/` 体积可能较大，若后续引入大体积产物，应评估是否用 `.gitignore` / Git LFS 管理，届时另行约定。

## 四、变更本宪章

本宪章是项目目录结构、版本管理与溯源规则的**最高约定**。任何对目录结构、命名规范、版本关联规则的修改，必须先修改本文件并获得项目所有者确认，再落地执行。
