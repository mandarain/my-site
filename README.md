# my-site — 个人网站

一个带作品集和博客功能的 Next.js 个人网站模板，风格走创意/实验路线。
Markdown 内容源，部署到 Vercel。

## 快速开始

```bash
npm install     # 安装依赖
npm run dev     # 本地开发（http://localhost:3000）
npm run build   # 构建生产版本
```

## 技术栈

- **Next.js 14** (App Router) — 框架，服务端渲染/静态生成
- **Tailwind CSS** — 样式，实用类优先
- **Framer Motion** — 动画与过渡效果
- **gray-matter** — 解析 Markdown 文件的 YAML frontmatter
- **react-markdown + remark-gfm** — Markdown 渲染（表格、链接等）

## 文件结构

```
my-site/
├── app/                   # Next.js App Router 页面
│   ├── layout.tsx         # 全局布局（导航栏 + 页脚 + 深色模式脚本）
│   ├── globals.css        # 全局样式，CSS 变量定义亮/暗主题
│   ├── page.tsx           # 首页（服务端组件，读取数据）
│   ├── HomeClient.tsx     # 首页动画层（客户端组件）
│   ├── works/
│   │   ├── page.tsx       # 作品列表（服务端组件）
│   │   ├── WorksClient.tsx# 作品列表动画层
│   │   └── [slug]/page.tsx# 作品详情（服务端组件）
│   ├── blog/
│   │   ├── page.tsx       # 博客列表（服务端组件）
│   │   ├── BlogClient.tsx # 博客列表动画层
│   │   └── [slug]/page.tsx# 文章详情（服务端组件）
│   └── about/
│       └── page.tsx       # 关于我
├── components/            # 可复用 UI 组件
│   ├── Navbar.tsx         # 顶部导航栏
│   ├── Footer.tsx         # 页脚
│   ├── ThemeToggle.tsx    # 亮/暗主题切换按钮
│   ├── AnimatedSection.tsx# 滚动触发的动画容器
│   └── MarkdownRenderer.tsx# Markdown 渲染器
├── content/               # Markdown 内容文件（你的数据源）
│   ├── works/             # 作品文件
│   │   └── sample-project.md
│   └── blog/              # 博客文章
│       └── hello-world.md
├── lib/                   # 工具函数
│   ├── markdown.ts        # 读取 content/ 下 Markdown 文件
│   └── types.ts           # TypeScript 类型定义
├── public/                # 静态资源（图片、字体等）
├── package.json
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.mjs
```

## 页面路由

| 路由 | 内容 |
|---|---|
| `/` | 首页 — Hero + 精选作品 + 最新文章 |
| `/works` | 作品列表 |
| `/works/[slug]` | 作品详情（slug 由文件名生成） |
| `/blog` | 博客列表 |
| `/blog/[slug]` | 文章详情（slug 由文件名生成） |
| `/about` | 关于我 |

## 内容管理

所有内容通过 content/ 目录下的 Markdown 文件管理，无需数据库或 CMS。

### 添加作品

在 content/works/ 下创建新的 .md 文件：

```markdown
---
title: "作品名称"
date: "2026-07-01"
description: "一段简短的描述"
tags: ["标签1", "标签2"]
role: "你的角色"
url: "https://example.com"
---

正文内容用 Markdown 书写...
```

### 添加文章

在 content/blog/ 下创建新的 .md 文件：

```markdown
---
title: "文章标题"
date: "2026-07-01"
description: "文章的简短描述"
tags: ["生活", "技术"]
---

正文内容用 Markdown 书写...
```

> slug（URL 标识）由文件名自动生成。例如 `my-first-post.md` 的 slug 是 `my-first-post`。

### Frontmatter 字段

| 字段 | 作品 | 文章 | 说明 |
|---|---|---|---|
| title | ✅ | ✅ | 标题 |
| date | ✅ | ✅ | 日期（如 2026-07-01） |
| description | ✅ | ✅ | 简短描述 |
| tags | ✅ | ✅ | 标签数组 |
| role | ✅ | ❌ | 角色（如"设计师 / 开发者"） |
| url | ✅ | ❌ | 项目链接 |

## 自定义样式

主题颜色通过 CSS 变量控制，定义在 app/globals.css 中。修改 CSS 变量即可调整整个站点的配色。

亮色模式和深色模式各有独立的变量集，切换无闪烁。

## 设计特色

- 创意 Hero 区 — 逐字浮现的标语 + 渐进动效
- 深色/浅色主题切换，带过渡动画
- 滚动触发的 Framer Motion 渐入上滑效果
- 悬浮交互细节 — 导航、卡片、链接均有精细 hover 过渡
- 服务端/客户端组件分离 — 数据读取在服务端，动画在客户端

## 部署

### 方式一：Vercel CLI

```bash
npx vercel
```

### 方式二：Vercel Dashboard

1. 将项目推送到 GitHub
2. 打开 https://vercel.com
3. 点击 "Add New → Project"
4. 导入你的 GitHub 仓库
5. 自动配置完成，点击 Deploy

### 更新流程

修改 content/ 下的 Markdown 文件后：

```bash
git add .
git commit -m "添加新内容"
git push
```

Vercel 自动检测 push 并重新构建部署。

## 后续迭代方向

- generateStaticParams — 让博客/作品详情页也完全静态化
- 自定义 404 页面
- OG 图片和 SEO 标签优化
- RSS feed
- 全文搜索
- 更多作品和文章内容
