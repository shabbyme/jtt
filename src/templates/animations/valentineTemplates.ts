// 情人节主题模板
export const valentineTemplates = [
  {
    name: `粉色爱心标题`,
    content: `<div class="valentine-header">
  <div class="heart-icon">💕</div>
  <div class="title-text">点击蓝字 关注我们</div>
  <div class="sparkle">✨</div>
</div>

<style>
.valentine-header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background: linear-gradient(135deg, #ffe6f0 0%, #ffd1dc 100%);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}

.heart-icon {
  font-size: 24px;
  margin-right: 10px;
  animation: heartbeat 1.5s ease-in-out infinite;
}

.title-text {
  font-size: 18px;
  color: #ff69b4;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8);
}

.sparkle {
  font-size: 20px;
  position: absolute;
  right: 15px;
  animation: sparkleRotate 2s linear infinite;
}

@keyframes heartbeat {
  0% { transform: scale(1); }
  25% { transform: scale(1.1); }
  50% { transform: scale(1); }
  75% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@keyframes sparkleRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>`,
  },
  {
    name: `情人节横幅`,
    content: `<div class="valentine-banner">
  <div class="heart-container">
    <div class="floating-heart">💝</div>
  </div>
  <div class="banner-content">
    <div class="banner-title">情人节 Valentine's Day</div>
    <div class="banner-decoration">✨</div>
  </div>
</div>

<style>
.valentine-banner {
  background: linear-gradient(to right, #ff8fa3, #ffc2d1);
  padding: 15px 20px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(255, 105, 180, 0.2);
}

.heart-container {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.floating-heart {
  font-size: 24px;
  animation: float 3s ease-in-out infinite;
}

.banner-content {
  margin-left: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-title {
  font-size: 18px;
  color: white;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

.banner-decoration {
  margin-left: 10px;
  font-size: 20px;
  animation: twinkle 1.5s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes twinkle {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
</style>`,
  },
  {
    name: `情人节卡片`,
    content: `<div class="valentine-card">
  <div class="card-header">
    <div class="heart-pair">💕</div>
    <div class="card-title">情人节</div>
    <div class="sparkle-icon">✨</div>
  </div>
  <div class="card-content">
    <p>情人节，又称圣瓦伦丁节或圣华伦泰节，是西方国家的传统节日之一，每年公历2月14日。是西方情侣的传统节日。</p>
  </div>
</div>

<style>
.valentine-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(255, 182, 193, 0.3);
  overflow: hidden;
  transform-style: preserve-3d;
  transition: transform 0.3s ease;
}

.valentine-card:hover {
  transform: translateY(-5px);
}

.card-header {
  background: linear-gradient(135deg, #ff69b4, #ff8da1);
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
}

.heart-pair {
  font-size: 22px;
  margin-right: 10px;
  animation: pulse 2s ease-in-out infinite;
}

.card-title {
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.sparkle-icon {
  position: absolute;
  right: 15px;
  font-size: 20px;
  animation: spin 4s linear infinite;
}

.card-content {
  padding: 20px;
  color: #666;
  line-height: 1.6;
  position: relative;
  z-index: 1;
}

.card-content::before {
  content: '💝';
  position: absolute;
  right: 20px;
  bottom: 20px;
  font-size: 40px;
  opacity: 0.1;
  transform: rotate(-15deg);
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>`,
  },
  {
    name: `爱心装饰边框`,
    content: `<div class="heart-border-container">
  <div class="heart-border">
    <div class="corner-heart top-left">💖</div>
    <div class="corner-heart top-right">💖</div>
    <div class="content">
      <p>情人节快乐</p>
      <p>Happy Valentine's Day</p>
    </div>
    <div class="corner-heart bottom-left">💖</div>
    <div class="corner-heart bottom-right">💖</div>
  </div>
</div>

<style>
.heart-border-container {
  padding: 20px;
  background: linear-gradient(135deg, #fff5f7, #ffe4e8);
  border-radius: 12px;
}

.heart-border {
  position: relative;
  border: 2px solid #ffb6c1;
  border-radius: 8px;
  padding: 30px;
  background: white;
  min-height: 100px;
}

.corner-heart {
  position: absolute;
  font-size: 24px;
  animation: heartFloat 3s ease-in-out infinite;
}

.top-left {
  top: -12px;
  left: -12px;
  animation-delay: 0s;
}

.top-right {
  top: -12px;
  right: -12px;
  animation-delay: 0.75s;
}

.bottom-left {
  bottom: -12px;
  left: -12px;
  animation-delay: 1.5s;
}

.bottom-right {
  bottom: -12px;
  right: -12px;
  animation-delay: 2.25s;
}

.content {
  text-align: center;
  color: #ff69b4;
  font-size: 18px;
  line-height: 1.6;
}

.content p:first-child {
  font-weight: bold;
  margin-bottom: 5px;
}

.content p:last-child {
  color: #ff8da1;
  font-size: 16px;
}

@keyframes heartFloat {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-5px) scale(1.1);
  }
}

@media (max-width: 768px) {
  .heart-border {
    padding: 20px;
  }
  
  .corner-heart {
    font-size: 20px;
  }
  
  .content {
    font-size: 16px;
  }
  
  .content p:last-child {
    font-size: 14px;
  }
}
</style>`,
  },
]
