// 布局模板库
export const layoutTemplates = [
  {
    name: `响应式网格布局`,
    content: `<div class="grid-layout">
  <header class="header">页面头部</header>
  <nav class="sidebar">侧边导航</nav>
  <main class="main-content">
    <h2>主要内容区域</h2>
    <p>这是一个响应式的网格布局示例，适合用于后台管理系统等场景。</p>
  </main>
  <aside class="right-sidebar">右侧边栏</aside>
  <footer class="footer">页面底部</footer>
</div>

<style>
.grid-layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main right"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  gap: 20px;
  padding: 20px;
  background: #f5f5f5;
}

.header {
  grid-area: header;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.sidebar {
  grid-area: sidebar;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.main-content {
  grid-area: main;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.right-sidebar {
  grid-area: right;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.footer {
  grid-area: footer;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .grid-layout {
    grid-template-areas:
      "header"
      "sidebar"
      "main"
      "right"
      "footer";
    grid-template-columns: 1fr;
  }
}
</style>`,
  },
  {
    name: `弹性盒子布局`,
    content: `<div class="flex-layout">
  <div class="flex-item">
    <h3>弹性项目 1</h3>
    <p>自适应宽度的内容区域</p>
  </div>
  <div class="flex-item">
    <h3>弹性项目 2</h3>
    <p>自适应宽度的内容区域</p>
  </div>
  <div class="flex-item">
    <h3>弹性项目 3</h3>
    <p>自适应宽度的内容区域</p>
  </div>
</div>

<style>
.flex-layout {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  background: #f5f5f5;
}

.flex-item {
  flex: 1;
  min-width: 250px;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.flex-item h3 {
  margin: 0 0 10px;
  color: #333;
}

.flex-item p {
  margin: 0;
  color: #666;
}

@media (max-width: 768px) {
  .flex-item {
    flex: 1 1 100%;
  }
}
</style>`,
  },
  {
    name: `瀑布流布局`,
    content: `<div class="masonry-layout">
  <div class="masonry-item" style="height: 200px">项目 1</div>
  <div class="masonry-item" style="height: 150px">项目 2</div>
  <div class="masonry-item" style="height: 300px">项目 3</div>
  <div class="masonry-item" style="height: 250px">项目 4</div>
  <div class="masonry-item" style="height: 180px">项目 5</div>
  <div class="masonry-item" style="height: 220px">项目 6</div>
</div>

<style>
.masonry-layout {
  columns: 3 200px;
  column-gap: 20px;
  padding: 20px;
  background: #f5f5f5;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 20px;
  text-align: center;
}

@media (max-width: 768px) {
  .masonry-layout {
    columns: 2 150px;
  }
}

@media (max-width: 480px) {
  .masonry-layout {
    columns: 1;
  }
}
</style>`,
  },
]
