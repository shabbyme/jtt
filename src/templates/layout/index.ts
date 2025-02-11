// 布局模板
export const layoutTemplates = [
  {
    name: `两栏布局`,
    content: `<div style="display: flex; gap: 20px;">
<div style="flex: 1;">

### 左栏内容
这里是左栏的内容...

</div>
<div style="flex: 1;">

### 右栏内容
这里是右栏的内容...

</div>
</div>`,
  },
  {
    name: `三栏布局`,
    content: `<div style="display: flex; gap: 20px;">
<div style="flex: 1;">

### 左栏内容
这里是左栏的内容...

</div>
<div style="flex: 2;">

### 中栏内容
这里是中栏的内容...

</div>
<div style="flex: 1;">

### 右栏内容
这里是右栏的内容...

</div>
</div>`,
  },
  {
    name: `卡片布局`,
    content: `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
<div style="border: 1px solid #ddd; border-radius: 8px; padding: 15px;">

### 卡片1
这里是卡片1的内容...

</div>
<div style="border: 1px solid #ddd; border-radius: 8px; padding: 15px;">

### 卡片2
这里是卡片2的内容...

</div>
<div style="border: 1px solid #ddd; border-radius: 8px; padding: 15px;">

### 卡片3
这里是卡片3的内容...

</div>
</div>`,
  },
  {
    name: `标签页布局`,
    content: `<div class="tabs">
<div class="tab-buttons">
- [标签1](#tab1)
- [标签2](#tab2)
- [标签3](#tab3)
</div>

<div id="tab1">

### 标签1内容
这里是标签1的内容...

</div>

<div id="tab2" style="display: none;">

### 标签2内容
这里是标签2的内容...

</div>

<div id="tab3" style="display: none;">

### 标签3内容
这里是标签3的内容...

</div>
</div>`,
  },
  {
    name: `响应式布局`,
    content: `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
<div>

### 第一部分
在小屏幕上会自动堆叠...

</div>
<div>

### 第二部分
在大屏幕上会并排显示...

</div>
<div>

### 第三部分
布局会根据屏幕宽度自动调整...

</div>
</div>`,
  },
  {
    name: `文章布局`,
    content: `<article style="max-width: 800px; margin: 0 auto; padding: 20px;">
<header style="text-align: center; margin-bottom: 40px;">
  <h1>文章标题</h1>
  <div style="color: #666;">
    作者：作者名称 | 发布时间：2024-01-01
  </div>
</header>

<div style="line-height: 1.8;">

## 第一部分
这里是文章内容...

## 第二部分
这里是更多内容...

</div>

<footer style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee;">
  <div style="color: #666;">
    标签：标签1, 标签2, 标签3
  </div>
</footer>
</article>`,
  },
  {
    name: `图文混排`,
    content: `### 左图右文
![自然风光](https://picsum.photos/800/400?random=22)

这是一张展示自然风光的图片，通过 Markdown 的基础语法就可以实现简单的图文混排。图片会自动占据一行，文字会自然换行到下一行。

### 并排图文（使用 HTML 实现更精确的布局控制）
<div style="display: flex; gap: 20px; align-items: center; margin: 20px 0;">
<div style="flex: 1;">

![城市风景](https://picsum.photos/600/400?random=23)

</div>
<div style="flex: 1;">

#### 城市风景
这是一张展示现代城市风景的图片。通过 HTML 的弹性布局，我们可以实现图片和文字并排显示的效果。

- 专业的布局控制
- 响应式设计
- 完美的排版效果

</div>
</div>

### 图文卡片
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 20px 0;">
<div style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">

![风景图片1](https://picsum.photos/600/300?random=24)

#### 风景图片1
这里是第一张风景图片的详细描述...

</div>
<div style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">

![风景图片2](https://picsum.photos/600/300?random=25)

#### 风景图片2
这里是第二张风景图片的详细描述...

</div>
</div>

### 图片瀑布流
<div style="columns: 3; gap: 20px; margin: 20px 0;">

![瀑布流1](https://picsum.photos/400/600?random=26)

![瀑布流2](https://picsum.photos/400/300?random=27)

![瀑布流3](https://picsum.photos/400/400?random=28)

![瀑布流4](https://picsum.photos/400/500?random=29)

![瀑布流5](https://picsum.photos/400/350?random=30)

![瀑布流6](https://picsum.photos/400/450?random=31)

</div>`,
  },
  {
    name: `特色盒子`,
    content: `<div style="margin: 20px 0;">
<!-- 信息盒子 -->
<div style="background: #e8f4f8; border-left: 4px solid #2196f3; padding: 15px; margin: 10px 0;">
  <strong>📌 提示：</strong>这是一个信息提示框
</div>

<!-- 警告盒子 -->
<div style="background: #fff3e0; border-left: 4px solid #ff9800; padding: 15px; margin: 10px 0;">
  <strong>⚠️ 警告：</strong>这是一个警告提示框
</div>

<!-- 成功盒子 -->
<div style="background: #e8f5e9; border-left: 4px solid #4caf50; padding: 15px; margin: 10px 0;">
  <strong>✅ 成功：</strong>这是一个成功提示框
</div>

<!-- 错误盒子 -->
<div style="background: #fdecea; border-left: 4px solid #f44336; padding: 15px; margin: 10px 0;">
  <strong>❌ 错误：</strong>这是一个错误提示框
</div>
</div>`,
  },
  {
    name: `时间轴布局`,
    content: `<div style="max-width: 600px; margin: 0 auto;">
<div style="position: relative; padding-left: 30px; margin-bottom: 30px; border-left: 2px solid #ddd;">
  <div style="position: absolute; left: -10px; top: 0; width: 20px; height: 20px; background: #fff; border: 2px solid #2196f3; border-radius: 50%;"></div>
  <div style="margin-bottom: 10px;">
    <strong>2024年1月</strong>
  </div>
  <div>这里是第一个事件的描述...</div>
</div>

<div style="position: relative; padding-left: 30px; margin-bottom: 30px; border-left: 2px solid #ddd;">
  <div style="position: absolute; left: -10px; top: 0; width: 20px; height: 20px; background: #fff; border: 2px solid #2196f3; border-radius: 50%;"></div>
  <div style="margin-bottom: 10px;">
    <strong>2024年2月</strong>
  </div>
  <div>这里是第二个事件的描述...</div>
</div>

<div style="position: relative; padding-left: 30px; border-left: 2px solid #ddd;">
  <div style="position: absolute; left: -10px; top: 0; width: 20px; height: 20px; background: #fff; border: 2px solid #2196f3; border-radius: 50%;"></div>
  <div style="margin-bottom: 10px;">
    <strong>2024年3月</strong>
  </div>
  <div>这里是第三个事件的描述...</div>
</div>
</div>`,
  },
  {
    name: `特色列表`,
    content: `<div style="max-width: 800px; margin: 0 auto;">
<!-- 带图标的列表 -->
<div style="margin-bottom: 30px;">
  <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
    <div style="width: 40px; height: 40px; background: #e3f2fd; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
      ✨
    </div>
    <div>
      <strong>特色功能1</strong>
      <div>这里是功能描述...</div>
    </div>
  </div>

  <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
    <div style="width: 40px; height: 40px; background: #e8f5e9; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
      🎯
    </div>
    <div>
      <strong>特色功能2</strong>
      <div>这里是功能描述...</div>
    </div>
  </div>

  <div style="display: flex; align-items: center; gap: 15px;">
    <div style="width: 40px; height: 40px; background: #fff3e0; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
      💡
    </div>
    <div>
      <strong>特色功能3</strong>
      <div>这里是功能描述...</div>
    </div>
  </div>
</div>
</div>`,
  },
  {
    name: `价格表`,
    content: `<div style="display: flex; gap: 20px; justify-content: center; padding: 20px;">
<!-- 基础版 -->
<div style="flex: 1; max-width: 300px; border: 1px solid #ddd; border-radius: 8px; padding: 20px; text-align: center;">
  <h3>基础版</h3>
  <div style="font-size: 2em; margin: 20px 0;">
    ¥99<span style="font-size: 0.5em;">/月</span>
  </div>
  <ul style="list-style: none; padding: 0; text-align: left;">
    <li style="margin: 10px 0;">✓ 功能1</li>
    <li style="margin: 10px 0;">✓ 功能2</li>
    <li style="margin: 10px 0;">✓ 功能3</li>
  </ul>
  <button style="background: #2196f3; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer;">
    立即购买
  </button>
</div>

<!-- 专业版 -->
<div style="flex: 1; max-width: 300px; border: 1px solid #2196f3; border-radius: 8px; padding: 20px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  <h3>专业版</h3>
  <div style="font-size: 2em; margin: 20px 0;">
    ¥199<span style="font-size: 0.5em;">/月</span>
  </div>
  <ul style="list-style: none; padding: 0; text-align: left;">
    <li style="margin: 10px 0;">✓ 所有基础版功能</li>
    <li style="margin: 10px 0;">✓ 高级功能1</li>
    <li style="margin: 10px 0;">✓ 高级功能2</li>
    <li style="margin: 10px 0;">✓ 高级功能3</li>
  </ul>
  <button style="background: #2196f3; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer;">
    立即购买
  </button>
</div>

<!-- 企业版 -->
<div style="flex: 1; max-width: 300px; border: 1px solid #ddd; border-radius: 8px; padding: 20px; text-align: center;">
  <h3>企业版</h3>
  <div style="font-size: 2em; margin: 20px 0;">
    ¥499<span style="font-size: 0.5em;">/月</span>
  </div>
  <ul style="list-style: none; padding: 0; text-align: left;">
    <li style="margin: 10px 0;">✓ 所有专业版功能</li>
    <li style="margin: 10px 0;">✓ 企业功能1</li>
    <li style="margin: 10px 0;">✓ 企业功能2</li>
    <li style="margin: 10px 0;">✓ 企业功能3</li>
  </ul>
  <button style="background: #2196f3; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer;">
    联系我们
  </button>
</div>
</div>`,
  },
  {
    name: `现代博客布局`,
    content: `# 文章标题

> 📅 发布时间：2024-01-01 | 👤 作者：作者名称 | 🏷️ 分类：技术博客

## 引言

这里是文章的开篇引言，简要介绍文章的主要内容...

## 第一部分

这里是第一部分的正文内容...

> **💡 重要提示**  
> 这是一个重要的引用或要点总结...

## 第二部分

继续展开内容...

### 小节一

- 要点1
- 要点2
- 要点3

### 小节二

1. 第一步
2. 第二步
3. 第三步

---

**相关链接：**
- [了解更多](#)
- [相关文章](#)
- [参考资源](#)

*文章标签：* \`标签1\` \`标签2\` \`标签3\`

---

*© 2024 版权所有 | 保留所有权利*`,
  },
  {
    name: `产品展示卡片`,
    content: `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; padding: 20px;">
<!-- 产品卡片1 -->
<div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); transition: transform 0.3s;">
  <div style="position: relative; padding-top: 75%;">
    <img src="https://picsum.photos/600/450?random=41" alt="产品图片" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
    <div style="position: absolute; top: 20px; right: 20px; background: #ff4757; color: white; padding: 8px 16px; border-radius: 20px; font-size: 0.9em;">
      新品
    </div>
  </div>
  
  <div style="padding: 24px;">
    <h3 style="margin: 0 0 10px; font-size: 1.5em; color: #2d3436;">产品名称</h3>
    <p style="margin: 0 0 20px; color: #636e72; line-height: 1.6;">产品描述内容...</p>
    
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div style="font-size: 1.2em; font-weight: bold; color: #2d3436;">¥ 299</div>
      <button style="background: #0984e3; color: white; border: none; padding: 10px 20px; border-radius: 25px; cursor: pointer; transition: background 0.3s;">
        立即购买
      </button>
    </div>
  </div>
</div>

<!-- 产品卡片2 -->
<div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); transition: transform 0.3s;">
  <div style="position: relative; padding-top: 75%;">
    <img src="https://picsum.photos/600/450?random=42" alt="产品图片" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
    <div style="position: absolute; top: 20px; right: 20px; background: #5352ed; color: white; padding: 8px 16px; border-radius: 20px; font-size: 0.9em;">
      热销
    </div>
  </div>
  
  <div style="padding: 24px;">
    <h3 style="margin: 0 0 10px; font-size: 1.5em; color: #2d3436;">产品名称</h3>
    <p style="margin: 0 0 20px; color: #636e72; line-height: 1.6;">产品描述内容...</p>
    
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div style="font-size: 1.2em; font-weight: bold; color: #2d3436;">¥ 399</div>
      <button style="background: #0984e3; color: white; border: none; padding: 10px 20px; border-radius: 25px; cursor: pointer; transition: background 0.3s;">
        立即购买
      </button>
    </div>
  </div>
</div>
</div>`,
  },
  {
    name: `团队介绍`,
    content: `<div style="max-width: 1200px; margin: 0 auto; padding: 40px 20px;">
<header style="text-align: center; margin-bottom: 60px;">
  <h2 style="font-size: 2.5em; color: #2d3436; margin-bottom: 20px;">我们的团队</h2>
  <p style="color: #636e72; max-width: 600px; margin: 0 auto;">一支充满激情和创造力的团队，致力于为客户提供最优质的服务...</p>
</header>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px;">
  <!-- 团队成员1 -->
  <div style="text-align: center;">
    <div style="width: 150px; height: 150px; margin: 0 auto 20px; position: relative;">
      <img src="https://picsum.photos/150/150?random=43" alt="团队成员" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">
      <div style="position: absolute; bottom: 0; right: 0; background: #0984e3; color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
        CEO
      </div>
    </div>
    <h3 style="margin: 0 0 10px; color: #2d3436;">张三</h3>
    <p style="margin: 0 0 15px; color: #636e72;">首席执行官</p>
    <div style="display: flex; gap: 15px; justify-content: center;">
      <a href="#" style="color: #0984e3; text-decoration: none;">LinkedIn</a>
      <a href="#" style="color: #0984e3; text-decoration: none;">Twitter</a>
    </div>
  </div>

  <!-- 团队成员2 -->
  <div style="text-align: center;">
    <div style="width: 150px; height: 150px; margin: 0 auto 20px; position: relative;">
      <img src="https://picsum.photos/150/150?random=44" alt="团队成员" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">
      <div style="position: absolute; bottom: 0; right: 0; background: #00b894; color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
        CTO
      </div>
    </div>
    <h3 style="margin: 0 0 10px; color: #2d3436;">李四</h3>
    <p style="margin: 0 0 15px; color: #636e72;">技术总监</p>
    <div style="display: flex; gap: 15px; justify-content: center;">
      <a href="#" style="color: #0984e3; text-decoration: none;">LinkedIn</a>
      <a href="#" style="color: #0984e3; text-decoration: none;">GitHub</a>
    </div>
  </div>

  <!-- 团队成员3 -->
  <div style="text-align: center;">
    <div style="width: 150px; height: 150px; margin: 0 auto 20px; position: relative;">
      <img src="https://picsum.photos/150/150?random=45" alt="团队成员" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">
      <div style="position: absolute; bottom: 0; right: 0; background: #e17055; color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
        PM
      </div>
    </div>
    <h3 style="margin: 0 0 10px; color: #2d3436;">王五</h3>
    <p style="margin: 0 0 15px; color: #636e72;">产品经理</p>
    <div style="display: flex; gap: 15px; justify-content: center;">
      <a href="#" style="color: #0984e3; text-decoration: none;">LinkedIn</a>
      <a href="#" style="color: #0984e3; text-decoration: none;">Dribbble</a>
    </div>
  </div>
</div>
</div>`,
  },
  {
    name: `数据统计展示`,
    content: `<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 60px 20px;">
<div style="max-width: 1200px; margin: 0 auto;">
  <header style="text-align: center; margin-bottom: 50px;">
    <h2 style="color: white; font-size: 2.5em; margin-bottom: 20px;">核心数据</h2>
    <p style="color: rgba(255,255,255,0.8);">见证我们的成长与成就</p>
  </header>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 30px;">
    <!-- 数据卡片1 -->
    <div style="background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-radius: 16px; padding: 30px; text-align: center;">
      <div style="font-size: 3em; font-weight: bold; color: white; margin-bottom: 10px;">100+</div>
      <div style="color: rgba(255,255,255,0.8);">企业客户</div>
    </div>

    <!-- 数据卡片2 -->
    <div style="background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-radius: 16px; padding: 30px; text-align: center;">
      <div style="font-size: 3em; font-weight: bold; color: white; margin-bottom: 10px;">50M+</div>
      <div style="color: rgba(255,255,255,0.8);">用户数量</div>
    </div>

    <!-- 数据卡片3 -->
    <div style="background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-radius: 16px; padding: 30px; text-align: center;">
      <div style="font-size: 3em; font-weight: bold; color: white; margin-bottom: 10px;">99%</div>
      <div style="color: rgba(255,255,255,0.8);">客户满意度</div>
    </div>

    <!-- 数据卡片4 -->
    <div style="background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-radius: 16px; padding: 30px; text-align: center;">
      <div style="font-size: 3em; font-weight: bold; color: white; margin-bottom: 10px;">24/7</div>
      <div style="color: rgba(255,255,255,0.8);">全天候支持</div>
    </div>
  </div>
</div>
</div>`,
  },
  {
    name: `英雄区布局`,
    content: `## 🚀 欢迎来到我们的世界

> 探索无限可能，创造非凡价值

### 我们的优势

- 🎯 专业技术支持
- 💡 创新解决方案
- 🌟 优质服务体验

[立即开始](#) | [了解更多](#)

---

## 核心特性

1. **高效性能**
   - 快速响应
   - 稳定可靠
   - 持续优化

2. **安全保障**
   - 数据加密
   - 隐私保护
   - 安全监控

3. **便捷体验**
   - 简单易用
   - 智能推荐
   - 个性定制`,
  },
  {
    name: `功能展示布局`,
    content: `## ✨ 产品功能

### 🎯 核心功能一
> 简单易用的操作界面，让您快速上手

- 直观的操作方式
- 智能的辅助功能
- 完整的使用教程

### 💡 核心功能二
> 强大的数据分析能力，助您决策精准

1. 实时数据监控
2. 智能分析报告
3. 可视化图表展示

### 🌟 核心功能三
> 全方位的服务支持，确保您使用无忧

\`\`\`
24/7 在线支持
专业技术团队
完善售后保障
\`\`\`

---

## 🎁 特色服务

| 服务项目 | 基础版 | 专业版 | 企业版 |
|---------|--------|--------|--------|
| 功能模块 | ✓ | ✓ | ✓ |
| 技术支持 | ✓ | ✓ | ✓ |
| 定制开发 | × | ✓ | ✓ |
| 专属顾问 | × | × | ✓ |`,
  },
  {
    name: `联系我们布局`,
    content: `## 📞 联系我们

### 🏢 公司信息
> 为您提供专业的服务与支持

**公司地址**
- 总部：城市中心商务区
- 分部：创新科技园区

**联系方式**
- 📧 Email：contact@example.com
- 📱 电话：400-123-4567
- 💬 微信：company_wechat

### 🌏 全球布局

| 区域 | 办公地点 | 联系电话 |
|------|---------|---------|
| 亚太 | 北京 | +86-10-xxxx |
| 欧洲 | 伦敦 | +44-20-xxxx |
| 美洲 | 纽约 | +1-212-xxxx |

### 📬 留言咨询

> 如有任何问题，欢迎随时联系我们

**工作时间**
- 周一至周五：9:00-18:00
- 周末及节假日：在线值班

*我们将在24小时内回复您的咨询*`,
  },
  {
    name: `用户评价布局`,
    content: `## 👥 用户评价

### ⭐️⭐️⭐️⭐️⭐️
> "使用体验非常好，团队响应迅速，解决问题专业。"
*—— 张经理，科技公司*

### ⭐️⭐️⭐️⭐️⭐️
> "产品功能强大，界面简洁，完全满足我们的需求。"
*—— 李总监，互联网企业*

### ⭐️⭐️⭐️⭐️⭐️
> "服务态度很好，技术支持及时，值得推荐。"
*—— 王工程师，制造企业*

---

## 📊 满意度统计

| 评价维度 | 满意度 | 评价数量 |
|---------|--------|---------|
| 产品功能 | 98% | 2000+ |
| 使用体验 | 95% | 1800+ |
| 服务支持 | 97% | 1500+ |
| 性价比 | 96% | 1600+ |

*数据更新时间：2024年1月*`,
  },
  {
    name: `响应式网格布局`,
    content: `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; padding: 20px;">
<!-- 网格项目1 -->
<div style="background: #fff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden;">
  <img src="https://picsum.photos/600/300?random=50" alt="图片描述" style="width: 100%; height: 200px; object-fit: cover;">
  <div style="padding: 20px;">
    <h3 style="margin: 0 0 10px; font-size: 1.5em;">标题一</h3>
    <p style="margin: 0; color: #666;">这里是内容描述...</p>
  </div>
</div>

<!-- 网格项目2 -->
<div style="background: #fff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden;">
  <img src="https://picsum.photos/600/300?random=51" alt="图片描述" style="width: 100%; height: 200px; object-fit: cover;">
  <div style="padding: 20px;">
    <h3 style="margin: 0 0 10px; font-size: 1.5em;">标题二</h3>
    <p style="margin: 0; color: #666;">这里是内容描述...</p>
  </div>
</div>

<!-- 网格项目3 -->
<div style="background: #fff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden;">
  <img src="https://picsum.photos/600/300?random=52" alt="图片描述" style="width: 100%; height: 200px; object-fit: cover;">
  <div style="padding: 20px;">
    <h3 style="margin: 0 0 10px; font-size: 1.5em;">标题三</h3>
    <p style="margin: 0; color: #666;">这里是内容描述...</p>
  </div>
</div>
</div>`,
  },
  {
    name: `特色内容布局`,
    content: `<div style="max-width: 1200px; margin: 0 auto; padding: 40px 20px;">
<!-- 头部区域 -->
<header style="text-align: center; margin-bottom: 60px;">
  <h1 style="font-size: 2.5em; color: #2d3436; margin-bottom: 20px;">特色内容标题</h1>
  <p style="color: #636e72; max-width: 600px; margin: 0 auto;">这里是内容的简要描述，可以添加一些吸引人的文字...</p>
</header>

<!-- 特色内容区 -->
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
  <!-- 特色项目1 -->
  <div style="background: linear-gradient(135deg, #6c5ce7, #a363d5); padding: 30px; border-radius: 16px; color: white;">
    <h3 style="margin: 0 0 15px; font-size: 1.8em;">🌟 特色一</h3>
    <p style="margin: 0; opacity: 0.9;">特色内容描述，突出重点和优势...</p>
  </div>

  <!-- 特色项目2 -->
  <div style="background: linear-gradient(135deg, #00b894, #00cec9); padding: 30px; border-radius: 16px; color: white;">
    <h3 style="margin: 0 0 15px; font-size: 1.8em;">💡 特色二</h3>
    <p style="margin: 0; opacity: 0.9;">特色内容描述，突出重点和优势...</p>
  </div>

  <!-- 特色项目3 -->
  <div style="background: linear-gradient(135deg, #fdcb6e, #e17055); padding: 30px; border-radius: 16px; color: white;">
    <h3 style="margin: 0 0 15px; font-size: 1.8em;">🎯 特色三</h3>
    <p style="margin: 0; opacity: 0.9;">特色内容描述，突出重点和优势...</p>
  </div>
</div>
</div>`,
  },
  {
    name: `现代卡片布局`,
    content: `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; padding: 20px;">
<!-- 卡片1：玻璃态设计 -->
<div style="background: rgba(255,255,255,0.7); backdrop-filter: blur(10px); border-radius: 16px; padding: 30px; box-shadow: 0 8px 32px rgba(31,38,135,0.15);">
  <div style="font-size: 2em; margin-bottom: 20px;">🎨</div>
  <h3 style="margin: 0 0 15px; color: #2d3436;">创意设计</h3>
  <p style="margin: 0; color: #636e72;">现代简约的设计风格，突出内容重点...</p>
</div>

<!-- 卡片2：渐变背景 -->
<div style="background: linear-gradient(135deg, #a8e6cf 0%, #dcedc1 100%); border-radius: 16px; padding: 30px; box-shadow: 0 8px 32px rgba(31,38,135,0.15);">
  <div style="font-size: 2em; margin-bottom: 20px;">💡</div>
  <h3 style="margin: 0 0 15px; color: #2d3436;">创新理念</h3>
  <p style="margin: 0; color: #2d3436;">独特的创新思维，引领行业发展...</p>
</div>

<!-- 卡片3：深色主题 -->
<div style="background: #2d3436; border-radius: 16px; padding: 30px; box-shadow: 0 8px 32px rgba(31,38,135,0.15);">
  <div style="font-size: 2em; margin-bottom: 20px;">✨</div>
  <h3 style="margin: 0 0 15px; color: #fff;">卓越品质</h3>
  <p style="margin: 0; color: rgba(255,255,255,0.8);">追求极致的品质体验...</p>
</div>
</div>`,
  },
  {
    name: `分屏展示布局`,
    content: `<div style="min-height: 100vh; display: flex; flex-direction: column;">
<!-- 上半屏 -->
<div style="flex: 1; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 60px 20px; display: flex; align-items: center; justify-content: center;">
  <div style="max-width: 800px; text-align: center;">
    <h1 style="font-size: 3em; margin-bottom: 20px;">引人注目的标题</h1>
    <p style="font-size: 1.2em; opacity: 0.9;">这里是一段简短的描述文字，用来补充说明主标题的内容...</p>
    <button style="background: white; color: #764ba2; border: none; padding: 15px 30px; border-radius: 30px; font-size: 1.1em; margin-top: 30px; cursor: pointer;">
      了解更多
    </button>
  </div>
</div>

<!-- 下半屏 -->
<div style="flex: 1; padding: 60px 20px; background: #f8f9fa;">
  <div style="max-width: 1200px; margin: 0 auto;">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px;">
      <!-- 内容块1 -->
      <div style="text-align: center;">
        <div style="font-size: 2.5em; color: #764ba2; margin-bottom: 20px;">🎯</div>
        <h3 style="margin: 0 0 15px; color: #2d3436;">目标</h3>
        <p style="margin: 0; color: #636e72;">明确的目标定位...</p>
      </div>

      <!-- 内容块2 -->
      <div style="text-align: center;">
        <div style="font-size: 2.5em; color: #764ba2; margin-bottom: 20px;">💡</div>
        <h3 style="margin: 0 0 15px; color: #2d3436;">创意</h3>
        <p style="margin: 0; color: #636e72;">独特的创意理念...</p>
      </div>

      <!-- 内容块3 -->
      <div style="text-align: center;">
        <div style="font-size: 2.5em; color: #764ba2; margin-bottom: 20px;">✨</div>
        <h3 style="margin: 0 0 15px; color: #2d3436;">成果</h3>
        <p style="margin: 0; color: #636e72;">显著的成果展示...</p>
      </div>
    </div>
  </div>
</div>
</div>`,
  },
  {
    name: `瀑布流画廊`,
    content: `<div style="columns: 3; gap: 20px; padding: 20px;">
<!-- 画廊项目1 -->
<div style="break-inside: avoid; margin-bottom: 20px;">
  <div style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <img src="https://picsum.photos/600/800?random=60" alt="画廊图片" style="width: 100%; display: block;">
    <div style="padding: 15px;">
      <h4 style="margin: 0 0 8px; color: #2d3436;">创意摄影</h4>
      <p style="margin: 0; color: #636e72; font-size: 0.9em;">独特视角下的艺术表现...</p>
    </div>
  </div>
</div>

<!-- 画廊项目2 -->
<div style="break-inside: avoid; margin-bottom: 20px;">
  <div style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <img src="https://picsum.photos/600/400?random=61" alt="画廊图片" style="width: 100%; display: block;">
    <div style="padding: 15px;">
      <h4 style="margin: 0 0 8px; color: #2d3436;">自然风光</h4>
      <p style="margin: 0; color: #636e72; font-size: 0.9em;">大自然的鬼斧神工...</p>
    </div>
  </div>
</div>

<!-- 画廊项目3 -->
<div style="break-inside: avoid; margin-bottom: 20px;">
  <div style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <img src="https://picsum.photos/600/600?random=62" alt="画廊图片" style="width: 100%; display: block;">
    <div style="padding: 15px;">
      <h4 style="margin: 0 0 8px; color: #2d3436;">城市掠影</h4>
      <p style="margin: 0; color: #636e72; font-size: 0.9em;">现代都市的律动...</p>
    </div>
  </div>
</div>

<!-- 画廊项目4 -->
<div style="break-inside: avoid; margin-bottom: 20px;">
  <div style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <img src="https://picsum.photos/600/500?random=63" alt="画廊图片" style="width: 100%; display: block;">
    <div style="padding: 15px;">
      <h4 style="margin: 0 0 8px; color: #2d3436;">人文纪实</h4>
      <p style="margin: 0; color: #636e72; font-size: 0.9em;">记录生活的点滴...</p>
    </div>
  </div>
</div>
</div>`,
  },
  {
    name: `特色服务展示`,
    content: `<div style="background: linear-gradient(135deg, #f6d365 0%, #fda085 100%); padding: 60px 20px;">
<div style="max-width: 1200px; margin: 0 auto;">
  <header style="text-align: center; margin-bottom: 50px;">
    <h2 style="color: white; font-size: 2.5em; margin-bottom: 20px;">我们的服务</h2>
    <p style="color: rgba(255,255,255,0.9); max-width: 600px; margin: 0 auto;">为您提供全方位的专业服务支持，助力您的业务腾飞...</p>
  </header>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px;">
    <!-- 服务项目1 -->
    <div style="background: rgba(255,255,255,0.9); border-radius: 16px; padding: 30px; transform: translateY(0); transition: transform 0.3s; cursor: pointer;">
      <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%); border-radius: 20px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
        <span style="font-size: 2em;">🎯</span>
      </div>
      <h3 style="margin: 0 0 15px; color: #2d3436;">战略咨询</h3>
      <p style="margin: 0; color: #636e72; line-height: 1.6;">提供专业的战略规划和业务咨询服务，助力企业实现可持续发展...</p>
      <div style="margin-top: 20px;">
        <a href="#" style="color: #fd79a8; text-decoration: none; font-weight: bold;">了解更多 →</a>
      </div>
    </div>

    <!-- 服务项目2 -->
    <div style="background: rgba(255,255,255,0.9); border-radius: 16px; padding: 30px; transform: translateY(0); transition: transform 0.3s; cursor: pointer;">
      <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); border-radius: 20px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
        <span style="font-size: 2em;">💡</span>
      </div>
      <h3 style="margin: 0 0 15px; color: #2d3436;">创新研发</h3>
      <p style="margin: 0; color: #636e72; line-height: 1.6;">持续创新和技术研发，为客户提供领先的解决方案...</p>
      <div style="margin-top: 20px;">
        <a href="#" style="color: #fd79a8; text-decoration: none; font-weight: bold;">了解更多 →</a>
      </div>
    </div>

    <!-- 服务项目3 -->
    <div style="background: rgba(255,255,255,0.9); border-radius: 16px; padding: 30px; transform: translateY(0); transition: transform 0.3s; cursor: pointer;">
      <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%); border-radius: 20px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
        <span style="font-size: 2em;">✨</span>
      </div>
      <h3 style="margin: 0 0 15px; color: #2d3436;">品质保障</h3>
      <p style="margin: 0; color: #636e72; line-height: 1.6;">严格的质量管理体系，确保每个项目的完美交付...</p>
      <div style="margin-top: 20px;">
        <a href="#" style="color: #fd79a8; text-decoration: none; font-weight: bold;">了解更多 →</a>
      </div>
    </div>
  </div>
</div>
</div>`,
  },
  {
    name: `新闻资讯布局`,
    content: `<div style="max-width: 1200px; margin: 0 auto; padding: 40px 20px;">
<header style="text-align: center; margin-bottom: 50px;">
  <h2 style="font-size: 2.5em; color: #2d3436; margin-bottom: 20px;">最新动态</h2>
  <p style="color: #636e72;">及时了解我们的最新消息和行业资讯</p>
</header>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
  <!-- 新闻卡片1 -->
  <div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); transition: transform 0.3s;">
    <img src="https://picsum.photos/600/300?random=70" alt="新闻图片" style="width: 100%; height: 200px; object-fit: cover;">
    <div style="padding: 24px;">
      <div style="display: flex; align-items: center; margin-bottom: 15px;">
        <span style="background: #e17055; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8em;">最新</span>
        <span style="margin-left: 10px; color: #636e72; font-size: 0.9em;">2024-01-15</span>
      </div>
      <h3 style="margin: 0 0 15px; color: #2d3436;">行业重大突破：新技术引领未来</h3>
      <p style="margin: 0 0 20px; color: #636e72; line-height: 1.6;">最新技术突破为行业带来革命性变革，引领行业发展新方向...</p>
      <a href="#" style="color: #0984e3; text-decoration: none; font-weight: bold;">阅读全文 →</a>
    </div>
  </div>

  <!-- 新闻卡片2 -->
  <div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); transition: transform 0.3s;">
    <img src="https://picsum.photos/600/300?random=71" alt="新闻图片" style="width: 100%; height: 200px; object-fit: cover;">
    <div style="padding: 24px;">
      <div style="display: flex; align-items: center; margin-bottom: 15px;">
        <span style="background: #00b894; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8em;">活动</span>
        <span style="margin-left: 10px; color: #636e72; font-size: 0.9em;">2024-01-10</span>
      </div>
      <h3 style="margin: 0 0 15px; color: #2d3436;">2024年度技术峰会圆满结束</h3>
      <p style="margin: 0 0 20px; color: #636e72; line-height: 1.6;">年度技术峰会汇聚行业精英，共同探讨技术发展趋势...</p>
      <a href="#" style="color: #0984e3; text-decoration: none; font-weight: bold;">阅读全文 →</a>
    </div>
  </div>

  <!-- 新闻卡片3 -->
  <div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); transition: transform 0.3s;">
    <img src="https://picsum.photos/600/300?random=72" alt="新闻图片" style="width: 100%; height: 200px; object-fit: cover;">
    <div style="padding: 24px;">
      <div style="display: flex; align-items: center; margin-bottom: 15px;">
        <span style="background: #6c5ce7; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8em;">公告</span>
        <span style="margin-left: 10px; color: #636e72; font-size: 0.9em;">2024-01-05</span>
      </div>
      <h3 style="margin: 0 0 15px; color: #2d3436;">战略合作伙伴关系达成</h3>
      <p style="margin: 0 0 20px; color: #636e72; line-height: 1.6;">与行业领军企业达成战略合作，共同推动产业升级...</p>
      <a href="#" style="color: #0984e3; text-decoration: none; font-weight: bold;">阅读全文 →</a>
    </div>
  </div>
</div>
</div>`,
  },
  {
    name: `活动日历布局`,
    content: `<div style="max-width: 1200px; margin: 0 auto; padding: 40px 20px;">
<header style="text-align: center; margin-bottom: 50px;">
  <h2 style="font-size: 2.5em; color: #2d3436; margin-bottom: 20px;">近期活动</h2>
  <p style="color: #636e72;">不要错过这些精彩的活动和机会</p>
</header>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
  <!-- 活动卡片1 -->
  <div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <div style="background: linear-gradient(135deg, #a8e6cf 0%, #dcedc1 100%); padding: 20px; text-align: center;">
      <div style="font-size: 2.5em; font-weight: bold; color: #2d3436;">25</div>
      <div style="color: #2d3436;">一月 2024</div>
    </div>
    <div style="padding: 24px;">
      <h3 style="margin: 0 0 15px; color: #2d3436;">技术创新研讨会</h3>
      <div style="margin-bottom: 15px;">
        <div style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="margin-right: 10px;">🕒</span>
          <span style="color: #636e72;">14:00 - 17:00</span>
        </div>
        <div style="display: flex; align-items: center;">
          <span style="margin-right: 10px;">📍</span>
          <span style="color: #636e72;">科技园区会议中心</span>
        </div>
      </div>
      <p style="margin: 0 0 20px; color: #636e72; line-height: 1.6;">探讨最新技术趋势，分享创新实践经验...</p>
      <button style="background: #2d3436; color: white; border: none; padding: 10px 20px; border-radius: 25px; width: 100%; cursor: pointer;">
        立即报名
      </button>
    </div>
  </div>

  <!-- 活动卡片2 -->
  <div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <div style="background: linear-gradient(135deg, #ffd3b6 0%, #ffaaa5 100%); padding: 20px; text-align: center;">
      <div style="font-size: 2.5em; font-weight: bold; color: #2d3436;">28</div>
      <div style="color: #2d3436;">一月 2024</div>
    </div>
    <div style="padding: 24px;">
      <h3 style="margin: 0 0 15px; color: #2d3436;">产品发布会</h3>
      <div style="margin-bottom: 15px;">
        <div style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="margin-right: 10px;">🕒</span>
          <span style="color: #636e72;">10:00 - 12:00</span>
        </div>
        <div style="display: flex; align-items: center;">
          <span style="margin-right: 10px;">📍</span>
          <span style="color: #636e72;">国际会展中心</span>
        </div>
      </div>
      <p style="margin: 0 0 20px; color: #636e72; line-height: 1.6;">重磅新品发布，带来全新用户体验...</p>
      <button style="background: #2d3436; color: white; border: none; padding: 10px 20px; border-radius: 25px; width: 100%; cursor: pointer;">
        预约参加
      </button>
    </div>
  </div>

  <!-- 活动卡片3 -->
  <div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <div style="background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); padding: 20px; text-align: center;">
      <div style="font-size: 2.5em; font-weight: bold; color: #2d3436;">30</div>
      <div style="color: #2d3436;">一月 2024</div>
    </div>
    <div style="padding: 24px;">
      <h3 style="margin: 0 0 15px; color: #2d3436;">用户体验工作坊</h3>
      <div style="margin-bottom: 15px;">
        <div style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="margin-right: 10px;">🕒</span>
          <span style="color: #636e72;">13:30 - 16:30</span>
        </div>
        <div style="display: flex; align-items: center;">
          <span style="margin-right: 10px;">📍</span>
          <span style="color: #636e72;">创意设计中心</span>
        </div>
      </div>
      <p style="margin: 0 0 20px; color: #636e72; line-height: 1.6;">深入探讨用户体验设计的最佳实践...</p>
      <button style="background: #2d3436; color: white; border: none; padding: 10px 20px; border-radius: 25px; width: 100%; cursor: pointer;">
        我要参加
      </button>
    </div>
  </div>
</div>
</div>`,
  },
]
