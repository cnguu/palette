# @cnguu/palette

> 多设计规范调色板

## 特性

- **多设计规范支持** - 目前提供 Ant Design 设计规范，后续将持续扩展
- **多格式导出** - 支持导出源文件和 JS/TS 配置文件、Less/CSS/Sass/Stylus 变量
- **TypeScript 原生支持** - 完整的类型定义
- **Tree-shaking 友好** - 支持 ESM 和 CJS 双格式

## 安装

```bash
pnpm add @cnguu/palette
# or
npm add @cnguu/palette
# or
yarn add @cnguu/palette
```

## 使用

```ts
import { ANT_RED, ANT_RED_0, ANT_RED_PALETTE, ANT_VOLCANO, ANT_VOLCANO_5 } from '@cnguu/palette'

// 调色板（red-0 ~ red-9，共 10 个色阶，由浅到深）
console.log(ANT_RED_PALETTE)
// [
//   '#fff1f0', '#ffccc7', '#ffa39e', '#ff7875', '#ff4d4f',
//   '#f5222d', '#cf1322', '#a8071a', '#820014', '#5c0011',
// ]

// 主色
console.log(ANT_RED) // '#f5222d'
console.log(ANT_VOLCANO) // '#fa541c'
console.log(ANT_VOLCANO_5) // '#fa541c'

// 单独色阶（支持 tree-shaking，按需引入更小体积）
console.log(ANT_RED_0) // '#fff1f0'
```

### 导出预处理器变量

构建产物 `dist/` 下按设计规范生成 Less / Sass / Stylus 变量文件，通过子路径 `@cnguu/palette/{less|sass|stylus}/{design}` 引入。

**Less**

```less
@import (reference) '@cnguu/palette/less/ant';

.btn-primary {
  background-color: @ant-blue-5;
  &:hover {
    background-color: @ant-blue-4;
  }
}
```

**Sass**

```scss
@import '@cnguu/palette/sass/ant';

.btn-primary {
  background-color: $ant-blue-5;
  &:hover {
    background-color: $ant-blue-4;
  }
}
```

**Stylus**

```styl
@import '@cnguu/palette/stylus/ant'

.btn-primary
  background-color ant-blue-5
  &:hover
    background-color ant-blue-4
```

完整的色阶导出：

| 色板 | 单独色阶 | 主色 | 数组 |
| --- | --- | --- | --- |
| Red | `ANT_RED_0` ~ `ANT_RED_9` | `ANT_RED` | `ANT_RED_PALETTE` |
| Volcano | `ANT_VOLCANO_0` ~ `ANT_VOLCANO_9` | `ANT_VOLCANO` | `ANT_VOLCANO_PALETTE` |
| Orange | `ANT_ORANGE_0` ~ `ANT_ORANGE_9` | `ANT_ORANGE` | `ANT_ORANGE_PALETTE` |
| Gold | `ANT_GOLD_0` ~ `ANT_GOLD_9` | `ANT_GOLD` | `ANT_GOLD_PALETTE` |
| Yellow | `ANT_YELLOW_0` ~ `ANT_YELLOW_9` | `ANT_YELLOW` | `ANT_YELLOW_PALETTE` |
| Lime | `ANT_LIME_0` ~ `ANT_LIME_9` | `ANT_LIME` | `ANT_LIME_PALETTE` |
| Green | `ANT_GREEN_0` ~ `ANT_GREEN_9` | `ANT_GREEN` | `ANT_GREEN_PALETTE` |
| Cyan | `ANT_CYAN_0` ~ `ANT_CYAN_9` | `ANT_CYAN` | `ANT_CYAN_PALETTE` |
| Blue | `ANT_BLUE_0` ~ `ANT_BLUE_9` | `ANT_BLUE` | `ANT_BLUE_PALETTE` |
| Geekblue | `ANT_GEEKBLUE_0` ~ `ANT_GEEKBLUE_9` | `ANT_GEEKBLUE` | `ANT_GEEKBLUE_PALETTE` |
| Purple | `ANT_PURPLE_0` ~ `ANT_PURPLE_9` | `ANT_PURPLE` | `ANT_PURPLE_PALETTE` |
| Magenta | `ANT_MAGENTA_0` ~ `ANT_MAGENTA_9` | `ANT_MAGENTA` | `ANT_MAGENTA_PALETTE` |
| Gray | `ANT_GRAY_0` ~ `ANT_GRAY_9` | `ANT_GRAY` | `ANT_GRAY_PALETTE` |

## 开发

```bash
# 安装依赖
pnpm install

# 构建
pnpm build

# 开发模式（watch）
pnpm dev

# 运行 playground
pnpm play

# 运行测试
pnpm test

# 代码检查
pnpm lint

# 类型检查
pnpm typecheck

# 发布版本
pnpm release
```

## 环境要求

- Node.js >= 24.0.0
- pnpm >= 10.0.0

## License

[Apache-2.0](./LICENSE)
