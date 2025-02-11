// 基础模板
export const basicTemplates = [
  {
    name: `标题语法`,
    content: `# 一级标题\n## 二级标题\n### 三级标题\n#### 四级标题\n##### 五级标题\n###### 六级标题\n\n标题语法替代写法：\n一级标题\n=========\n\n二级标题\n---------`,
  },
  {
    name: `文本格式化`,
    content: `**粗体文本**\n*斜体文本*\n***粗斜体文本***\n~~删除线文本~~\n==高亮文本==\n\n上标：X^2^\n下标：H~2~O\n\n键盘按键：<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd>\n\n行内代码：\`const example = "hello world"\``,
  },
  {
    name: `段落与换行`,
    content: `这是第一段落。\n\n这是第二段落。\n\n在行末加两个空格  \n可以实现段内换行。\n\n使用 HTML 的 <br> 标签也可以换行。<br>就像这样。\n\n---\n\n可以使用三个或更多的 - 或 * 或 _ 来创建分隔线：\n\n***\n___`,
  },
  {
    name: `文本对齐`,
    content: `<div align="left">左对齐文本</div>\n\n<div align="center">居中对齐文本</div>\n\n<div align="right">右对齐文本</div>\n\n<p align="justify">两端对齐文本，这是一段很长的文本用来演示两端对齐的效果。这是一段很长的文本用来演示两端对齐的效果。</p>`,
  },
  {
    name: `字体样式`,
    content: `<font color="red">红色文字</font>\n\n<font color="#00ff00">使用十六进制颜色</font>\n\n<font size="5">大号文字</font>\n\n<font face="黑体">黑体字</font>\n\n<font face="微软雅黑" color="#ff0000" size="4">组合使用</font>`,
  },
  {
    name: `空格缩进`,
    content: `&nbsp;首行缩进一个空格\n&emsp;首行缩进两个空格\n\n这是普通段落\n&nbsp;&nbsp;&nbsp;&nbsp;这是缩进的段落\n\n<p style="text-indent: 2em">使用样式实现首行缩进</p>`,
  },
  {
    name: `特殊符号`,
    content: `版权符号：&copy;\n注册商标：&reg;\n商标：&trade;\n欧元：&euro;\n英镑：&pound;\n人民币：&yen;\n乘号：&times;\n除号：&divide;\n度数：&deg;\n平方米：m&sup2;\n立方米：m&sup3;\n\n箭头：\n&larr; 左箭头\n&uarr; 上箭头\n&rarr; 右箭头\n&darr; 下箭头\n&harr; 双向箭头`,
  },
  {
    name: `注释说明`,
    content: `<!-- 这是一个注释，不会显示在渲染后的文档中 -->\n\n这是正常显示的文本\n\n<!--\n这是多行注释\n可以包含多行内容\n都不会显示\n-->\n\n这也是正常显示的文本`,
  },
  {
    name: `转义字符`,
    content: `\\* 星号\n\\_ 下划线\n\\{ 花括号\n\\} 花括号\n\\[ 方括号\n\\] 方括号\n\\( 小括号\n\\) 小括号\n\\# 井号\n\\+ 加号\n\\- 减号\n\\. 点号\n\\! 感叹号\n\\~ 波浪线\n\\\\ 反斜线`,
  },
  {
    name: `数学公式`,
    content: `行内公式：$E = mc^2$\n\n独立公式：\n$$\\sum_{i=1}^n a_i=0$$\n\n$$f(x_1,x_x,\\ldots,x_n) = x_1^2 + x_2^2 + \\cdots + x_n^2$$\n\n$$\\displaystyle \\frac{1}{\\Bigl(\\sqrt{\\phi \\sqrt{5}}-\\phi\\Bigr) e^{\\frac25 \\pi}} = 1+\\frac{e^{-2\\pi}} {1+\\frac{e^{-4\\pi}} {1+\\frac{e^{-6\\pi}} {1+\\frac{e^{-8\\pi}} {1+\\cdots}}}}$$`,
  },
  // ... 其他基础模板
]
