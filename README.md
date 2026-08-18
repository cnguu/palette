# @cnguu/palette

> 多设计规范调色板

统一管理 Ant Design、Arco Design、Element Plus 等设计规范的色阶常量与预处理器变量，支持 JS/TS、Less、Sass、Stylus 多格式导出。

## 特性

- **多设计规范** - 内置 Ant Design、Arco Design、Element Plus 三套色板，持续扩展
- **亮暗双模式** - Arco Design 与 Element Plus 额外提供暗色变体
- **多格式导出** - JS/TS 常量 + Less / Sass / Stylus 变量文件
- **TypeScript 原生支持** - 完整类型定义，`strict` 模式通过
- **Tree-shaking 友好** - ESM + CJS 双格式，`sideEffects: false`
- **不可变色板** - 所有 `*_PALETTE` 数组经 `Object.freeze` 冻结

## 设计规范

| 设计规范 | 常量前缀 | 样式前缀 | 色阶范围 | 主色索引 | 暗色变体 |
| --- | --- | --- | --- | --- | --- |
| Ant Design | `ANT` | `ant-` | `0` – `9`（10 级） | `5` | - |
| Arco Design | `ARCO` | `arco-` | `1` – `10`（10 级） | `5` | `ARCO_DARK_*` |
| Element Plus | `EL` | `el-` | `0` – `10`（11 级） | `9` | `EL_DARK_*` |

### 命名约定

- 主色：`{PREFIX}_{COLOR}`
- 单级色阶：`{PREFIX}_{COLOR}_{N}`
- 色阶数组：`{PREFIX}_{COLOR}_PALETTE`
- 暗色变体：`{PREFIX}_DARK_{COLOR}` / `{PREFIX}_DARK_{COLOR}_{N}` / `{PREFIX}_DARK_{COLOR}_PALETTE`

### 色板清单

**Ant Design**（13 种）：Blue、Cyan、Geekblue、Gold、Gray、Green、Lime、Magenta、Orange、Purple、Red、Volcano、Yellow

**Arco Design**（15 种）：Arcoblue、Blue、Cyan、Gold、Gray、Green、Lime、Magenta、Orange、Orangered、Pinkpurple、Purple、Red、Yellow，暗色变体同名

**Element Plus**（7 种语义色）：Primary、Success、Warning、Info、Danger、Error、Dark，暗色变体除 Dark 外同名

## 导出格式

### JS/TS 常量

通过主入口 `@cnguu/palette` 导出，按设计规范 + 色板拆分，支持按需引入。

### 预处理器变量

构建产物 `dist/` 下按设计规范生成扁平结构的变量文件，文件名为 `{design}.{ext}`：

| 格式 | 扩展名 | 文件 |
| --- | --- | --- |
| Less | `.less` | `dist/ant.less`、`dist/arco.less`、`dist/el.less` |
| Sass | `.scss` | `dist/ant.scss`、`dist/arco.scss`、`dist/el.scss` |
| Stylus | `.styl` | `dist/ant.styl`、`dist/arco.styl`、`dist/el.styl` |

通过包内 `dist/` 路径引入，如 `@cnguu/palette/dist/ant.less`。

变量命名规则：`{stylePrefix}{color}`（主色）与 `{stylePrefix}{color}-{n}`（单级色阶）。

## 开发

```bash
pnpm install      # 安装依赖
pnpm build        # 构建核心库
pnpm dev          # watch 模式
pnpm play         # 启动 playground 文档站点
pnpm test         # 运行单元测试
pnpm lint         # 代码检查
pnpm typecheck    # 类型检查
pnpm release      # 交互式版本发布
```

## 环境要求

- Node.js >= 24.0.0
- pnpm >= 10.0.0

## License

[Apache-2.0](./LICENSE)
