// 组件模板库
export const componentTemplates = [
  {
    name: `响应式卡片网格`,
    content: `<div class="card-grid">
  <div class="card">
    <img src="https://via.placeholder.com/300x200" alt="卡片图片">
    <h3>卡片标题 1</h3>
    <p>这是一段卡片描述文本，可以包含多行内容。</p>
    <button class="card-button">了解更多</button>
  </div>
  <div class="card">
    <img src="https://via.placeholder.com/300x200" alt="卡片图片">
    <h3>卡片标题 2</h3>
    <p>这是一段卡片描述文本，可以包含多行内容。</p>
    <button class="card-button">了解更多</button>
  </div>
</div>

<style>
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

.card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card h3 {
  margin: 15px;
  color: #333;
}

.card p {
  margin: 0 15px 15px;
  color: #666;
}

.card-button {
  display: block;
  width: calc(100% - 30px);
  margin: 15px;
  padding: 8px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.card-button:hover {
  background: #0056b3;
}

@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
}
</style>`,
  },
  {
    name: `响应式导航栏`,
    content: `<nav class="responsive-nav">
  <div class="nav-brand">Logo</div>
  <button class="nav-toggle">
    <span></span>
    <span></span>
    <span></span>
  </button>
  <ul class="nav-menu">
    <li><a href="#" class="active">首页</a></li>
    <li><a href="#">产品</a></li>
    <li><a href="#">服务</a></li>
    <li><a href="#">关于</a></li>
    <li><a href="#">联系</a></li>
  </ul>
</nav>

<style>
.responsive-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-menu li a {
  color: #333;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
}

.nav-menu li a:hover,
.nav-menu li a.active {
  color: #007bff;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.nav-toggle span {
  width: 100%;
  height: 3px;
  background: #333;
  transition: transform 0.3s ease;
}

@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .nav-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #fff;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .nav-menu.active {
    display: flex;
    flex-direction: column;
  }

  .nav-menu li {
    margin: 0.5rem 0;
  }
}
</style>

<script>
document.querySelector('.nav-toggle').addEventListener('click', function() {
  document.querySelector('.nav-menu').classList.toggle('active');
});
</script>`,
  },
  {
    name: `特效按钮组`,
    content: `<div class="button-container">
  <button class="effect-button ripple">波纹效果</button>
  <button class="effect-button shine">闪光效果</button>
  <button class="effect-button pulse">脉冲效果</button>
  <button class="effect-button float">悬浮效果</button>
</div>

<style>
.button-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  justify-content: center;
}

.effect-button {
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

/* 波纹效果 */
.ripple {
  background: #4CAF50;
  color: white;
}

.ripple:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255,255,255,0.5);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.3s, height 0.3s;
}

.ripple:active:after {
  width: 200px;
  height: 200px;
}

/* 闪光效果 */
.shine {
  background: #2196F3;
  color: white;
}

.shine:before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255,255,255,0.3),
    transparent
  );
  transform: translateX(-100%);
}

.shine:hover:before {
  animation: shine 1.5s;
}

@keyframes shine {
  100% {
    transform: translateX(100%);
  }
}

/* 脉冲效果 */
.pulse {
  background: #E91E63;
  color: white;
}

.pulse:hover {
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* 悬浮效果 */
.float {
  background: #9C27B0;
  color: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.float:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.3);
}

@media (max-width: 768px) {
  .button-container {
    flex-direction: column;
  }
  
  .effect-button {
    width: 100%;
  }
}
</style>`,
  },
]
