// 高级语法模板
export const advancedTemplates = [
  {
    name: `表格语法`,
    content: `| 表头1 | 表头2 | 表头3 |\n|--------|--------|--------|\n| 单元格1 | 单元格2 | 单元格3 |\n| 单元格4 | 单元格5 | 单元格6 |\n\n| 左对齐 | 居中对齐 | 右对齐 |\n|:-------|:--------:|--------:|\n| 内容 | 内容 | 内容 |`,
  },
  {
    name: `列表语法`,
    content: `1. 有序列表项1\n2. 有序列表项2\n   1. 子列表项1\n   2. 子列表项2\n3. 有序列表项3\n\n- 无序列表项1\n- 无序列表项2\n  - 子列表项1\n  - 子列表项2\n- 无序列表项3\n\n- [ ] 待办事项1\n- [x] 已完成事项\n- [ ] 待办事项2`,
  },
  {
    name: `引用语法`,
    content: `> 这是一级引用\n>> 这是二级引用\n>>> 这是三级引用\n\n> 引用中使用列表\n> 1. 第一项\n> 2. 第二项\n> \n> 引用中使用代码块\n> \`\`\`javascript\n> console.log('Hello World')\n> \`\`\``,
  },
  {
    name: `代码语法`,
    content: `\`\`\`javascript\n// 这是一个代码块\nfunction hello() {\n  console.log('Hello World')\n}\n\`\`\`\n\n\`\`\`python\n# 这是一个Python代码块\ndef hello():\n    print('Hello World')\n\`\`\`\n\n\`\`\`css\n/* 这是一个CSS代码块 */\n.container {\n  display: flex;\n  justify-content: center;\n}\n\`\`\``,
  },
  {
    name: `链接与图片`,
    content: `### 基础图片
![风景图片](https://picsum.photos/800/400)

### 带标题的图片
![城市风光](https://picsum.photos/800/400?random=1 "这是一张城市风光图片")

### 带链接的图片
[![点击图片跳转](https://picsum.photos/800/400?random=2)](https://picsum.photos)

### 多张图片展示
![自然风光1](https://picsum.photos/400/300?random=3)
![自然风光2](https://picsum.photos/400/300?random=4)
![自然风光3](https://picsum.photos/400/300?random=5)

### 引用式图片链接
![引用图片1][pic1]
![引用图片2][pic2]
![引用图片3][pic3]

[pic1]: https://picsum.photos/400/300?random=6
[pic2]: https://picsum.photos/400/300?random=7 "带标题的引用图片"
[pic3]: https://picsum.photos/400/300?random=8

### HTML方式（用于更精确的控制）
<img src="https://picsum.photos/400/300?random=9" alt="精确控制的图片" width="400" height="300" style="display: block; margin: 20px auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">`,
  },
  {
    name: `高级表格`,
    content: `| 功能 | 语法 | 效果 |\n|------|------|------|\n| 单元格跨行 | <td rowspan="2">跨两行</td> | 合并垂直单元格 |\n| 单元格跨列 | <td colspan="2">跨两列</td> | 合并水平单元格 |\n| 单元格样式 | <td style="color: red">红色文字</td> | 自定义样式 |\n| 表格标题 | <caption>表格标题</caption> | 添加标题 |`,
  },
  {
    name: `定义列表`,
    content: `<dl>\n  <dt>Markdown</dt>\n  <dd>一种轻量级标记语言，创始人为约翰·格鲁伯。</dd>\n  \n  <dt>HTML</dt>\n  <dd>超文本标记语言，用于创建网页。</dd>\n  \n  <dt>CSS</dt>\n  <dd>层叠样式表，用于设计网页样式。</dd>\n</dl>`,
  },
  {
    name: `脚注`,
    content: `这是一个带有脚注的文本[^1]\n\n这又是一个脚注[^2]\n\n[^1]: 这是第一个脚注的详细内容\n[^2]: 这是第二个脚注的详细内容，可以包含多行\n    缩进后可以包含更多内容`,
  },
  {
    name: `目录生成`,
    content: `[TOC]\n\n# 第一章\n## 1.1 节\n### 1.1.1 小节\n## 1.2 节\n\n# 第二章\n## 2.1 节\n## 2.2 节\n\n# 第三章`,
  },
  {
    name: `高级链接`,
    content: `[相对路径](../images/photo.jpg)\n[邮件链接](mailto:example@example.com)\n[电话链接](tel:+1234567890)\n\n<!-- 链接到文档内的标题 -->\n[跳转到简介](#简介)\n\n<!-- 链接到其他文档 -->\n[其他文档](document.md#章节)`,
  },
  {
    name: `图片画廊`,
    content: `### 2x2 网格布局
![图片1](https://picsum.photos/400/300?random=10) ![图片2](https://picsum.photos/400/300?random=11)
![图片3](https://picsum.photos/400/300?random=12) ![图片4](https://picsum.photos/400/300?random=13)

### 3列布局
![风景1](https://picsum.photos/300/200?random=14) ![风景2](https://picsum.photos/300/200?random=15) ![风景3](https://picsum.photos/300/200?random=16)

### 混合大小布局
<div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 10px; margin: 20px 0;">
  <img src="https://picsum.photos/600/400?random=17" style="width: 100%; grid-row: span 2; border-radius: 8px;">
  <img src="https://picsum.photos/300/200?random=18" style="width: 100%; border-radius: 8px;">
  <img src="https://picsum.photos/300/200?random=19" style="width: 100%; border-radius: 8px;">
  <img src="https://picsum.photos/300/200?random=20" style="width: 100%; border-radius: 8px;">
  <img src="https://picsum.photos/300/200?random=21" style="width: 100%; border-radius: 8px;">
</div>`,
  },
  {
    name: `键盘快捷键`,
    content: `复制：<kbd>Ctrl</kbd> + <kbd>C</kbd>\n\n粘贴：<kbd>Ctrl</kbd> + <kbd>V</kbd>\n\n保存：<kbd>Ctrl</kbd> + <kbd>S</kbd>\n\n撤销：<kbd>Ctrl</kbd> + <kbd>Z</kbd>\n\n查找：<kbd>Ctrl</kbd> + <kbd>F</kbd>`,
  },
]
