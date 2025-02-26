// 动画特效模板库
export const animationTemplates = [
  {
    name: `渐变背景动画`,
    content: `<div class="gradient-bg">
  <h2>渐变背景动画</h2>
  <p>这是一个使用CSS动画实现的渐变背景效果。</p>
</div>

<style>
.gradient-bg {
  min-height: 300px;
  padding: 40px;
  text-align: center;
  color: white;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

.gradient-bg h2 {
  margin-bottom: 20px;
  font-size: 2em;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>`,
  },
  {
    name: `3D卡片翻转`,
    content: `<div class="card-container">
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <h3>正面内容</h3>
        <p>悬停查看背面</p>
      </div>
      <div class="flip-card-back">
        <h3>背面内容</h3>
        <p>这是卡片的背面信息</p>
      </div>
    </div>
  </div>
</div>

<style>
.card-container {
  perspective: 1000px;
  padding: 20px;
}

.flip-card {
  width: 300px;
  height: 200px;
  margin: 0 auto;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.flip-card-front {
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
}

.flip-card-back {
  background: linear-gradient(135deg, #a777e3, #6e8efb);
  color: white;
  transform: rotateY(180deg);
}

.flip-card h3 {
  margin-bottom: 10px;
}
</style>`,
  },
  {
    name: `加载动画集合`,
    content: `<div class="loading-container">
  <div class="loading-item spinner"></div>
  <div class="loading-item dots">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="loading-item pulse-ring"></div>
</div>

<style>
.loading-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 40px;
  background: #f5f5f5;
}

.loading-item {
  margin: 20px;
}

/* 旋转加载 */
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 点点加载 */
.dots {
  display: flex;
  gap: 8px;
}

.dots span {
  width: 12px;
  height: 12px;
  background: #3498db;
  border-radius: 50%;
  animation: dots 1.4s ease-in-out infinite;
}

.dots span:nth-child(2) {
  animation-delay: 0.2s;
}

.dots span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes dots {
  0%, 100% { transform: scale(0.2); opacity: 0.2; }
  50% { transform: scale(1); opacity: 1; }
}

/* 脉冲环 */
.pulse-ring {
  position: relative;
  width: 40px;
  height: 40px;
}

.pulse-ring::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #3498db;
  animation: pulse 2s ease-out infinite;
}

.pulse-ring::after {
  content: '';
  position: absolute;
  width: 40%;
  height: 40%;
  background: #3498db;
  border-radius: 50%;
  left: 30%;
  top: 30%;
}

@keyframes pulse {
  0% {
    transform: scale(0.3);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style>`,
  },
]
