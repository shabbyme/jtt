// 图文样式模板
export const imageContentTemplates = [
  {
    name: `图文卡片-上图下文`,
    content: `<div style="padding: 30px; background: #fff; border-radius: 20px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
      <div style="border-radius: 10px; overflow: hidden; margin-bottom: 20px; height: 250px;">
        <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085" style="width: 100%; height: 100%; object-fit: cover;" alt="美食"/>
      </div>
      <h3 style="margin: 0 0 15px; font-size: 1.8em; color: #2d3436; text-align: center;">美食时光</h3>
      <p style="margin: 0; color: #636e72; line-height: 1.6; text-align: center;">
        品味生活中的每一个瞬间，<br>
        让美食触动味蕾，温暖心灵。
      </p>
      <div style="margin-top: 15px; text-align: center;">
        <span style="display: inline-block; padding: 5px 15px; background: #ffeaa7; color: #2d3436; border-radius: 15px; font-size: 0.9em;">#美食</span>
        <span style="display: inline-block; padding: 5px 15px; background: #fab1a0; color: #2d3436; border-radius: 15px; font-size: 0.9em; margin-left: 10px;">#生活</span>
      </div>
    </div>`,
  },
  {
    name: `图文卡片-网格布局`,
    content: `<div style="padding: 30px; background: #fff; border-radius: 20px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
      <h3 style="margin: 0 0 20px; font-size: 1.8em; color: #2d3436; text-align: center;">旅行相册</h3>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-bottom: 20px;">
        <img src="https://images.unsplash.com/photo-1527631746610-bca00a040d60" style="width: 100%; height: 150px; object-fit: cover; border-radius: 10px;" alt="旅行照片1"/>
        <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828" style="width: 100%; height: 150px; object-fit: cover; border-radius: 10px;" alt="旅行照片2"/>
        <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800" style="width: 100%; height: 150px; object-fit: cover; border-radius: 10px;" alt="旅行照片3"/>
        <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1" style="width: 100%; height: 150px; object-fit: cover; border-radius: 10px;" alt="旅行照片4"/>
      </div>
      <p style="margin: 0; color: #636e72; line-height: 1.6; text-align: center;">
        记录旅途中的精彩瞬间，<br>
        留下最美好的回忆。
      </p>
    </div>`,
  },
  {
    name: `图文卡片-杂志风`,
    content: `<div style="padding: 40px; background: #fff; border-radius: 20px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
      <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 30px;">
        <div>
          <h3 style="margin: 0 0 20px; font-size: 2.5em; color: #2d3436; line-height: 1.2;">
            城市漫步
            <span style="display: block; font-size: 0.4em; color: #636e72; margin-top: 5px;">URBAN WALKING</span>
          </h3>
          <p style="margin: 0 0 20px; color: #636e72; line-height: 1.8;">
            漫步在城市的街头，<br>
            感受都市的脉动，<br>
            发现生活的美好。
          </p>
          <div style="display: flex; gap: 10px;">
            <span style="padding: 5px 15px; background: #dfe6e9; color: #2d3436; border-radius: 20px; font-size: 0.9em;">#城市</span>
            <span style="padding: 5px 15px; background: #dfe6e9; color: #2d3436; border-radius: 20px; font-size: 0.9em;">#生活</span>
          </div>
        </div>
        <div style="height: 300px; border-radius: 10px; overflow: hidden;">
          <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000" style="width: 100%; height: 100%; object-fit: cover;" alt="城市风光"/>
        </div>
      </div>
    </div>`,
  },
  {
    name: `图文卡片-画廊风`,
    content: `<div style="padding: 30px; background: #fff; border-radius: 20px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
      <div style="display: flex; gap: 20px; margin-bottom: 20px;">
        <div style="flex-grow: 1; height: 400px; border-radius: 10px; overflow: hidden;">
          <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" style="width: 100%; height: 100%; object-fit: cover;" alt="主图"/>
        </div>
        <div style="display: flex; flex-direction: column; gap: 20px; width: 150px;">
          <div style="height: 120px; border-radius: 10px; overflow: hidden;">
            <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" style="width: 100%; height: 100%; object-fit: cover;" alt="缩略图1"/>
          </div>
          <div style="height: 120px; border-radius: 10px; overflow: hidden;">
            <img src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1" style="width: 100%; height: 100%; object-fit: cover;" alt="缩略图2"/>
          </div>
          <div style="height: 120px; border-radius: 10px; overflow: hidden;">
            <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e" style="width: 100%; height: 100%; object-fit: cover;" alt="缩略图3"/>
          </div>
        </div>
      </div>
      <div style="text-align: center;">
        <h3 style="margin: 0 0 10px; font-size: 1.8em; color: #2d3436;">自然画廊</h3>
        <p style="margin: 0; color: #636e72; line-height: 1.6;">
          大自然的色彩斑斓，<br>
          尽收眼底。
        </p>
      </div>
    </div>`,
  },
  {
    name: `图片-瀑布流`,
    content: `<div style="padding: 20px; background: #fff; border-radius: 15px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
      <div style="columns: 3; gap: 20px;">
        <div style="margin-bottom: 20px; break-inside: avoid;">
          <img src="https://picsum.photos/800/600?random=1" style="width: 100%; border-radius: 10px;" alt="风景图1"/>
        </div>
        <div style="margin-bottom: 20px; break-inside: avoid;">
          <img src="https://picsum.photos/800/600?random=2" style="width: 100%; border-radius: 10px;" alt="风景图2"/>
        </div>
        <div style="margin-bottom: 20px; break-inside: avoid;">
          <img src="https://picsum.photos/800/600?random=3" style="width: 100%; border-radius: 10px;" alt="风景图3"/>
        </div>
        <div style="margin-bottom: 20px; break-inside: avoid;">
          <img src="https://picsum.photos/800/600?random=4" style="width: 100%; border-radius: 10px;" alt="风景图4"/>
        </div>
        <div style="margin-bottom: 20px; break-inside: avoid;">
          <img src="https://picsum.photos/800/600?random=5" style="width: 100%; border-radius: 10px;" alt="风景图5"/>
        </div>
      </div>
    </div>`,
  },
  {
    name: `图片-卡片画廊`,
    content: `<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; padding: 20px; background: #f8f9fa; border-radius: 15px;">
      <div style="background: white; padding: 15px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <img src="https://picsum.photos/800/600?random=6" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;" alt="城市图1"/>
        <h4 style="margin: 10px 0; color: #333;">城市印象</h4>
        <p style="margin: 0; color: #666; font-size: 0.9em;">现代都市的魅力</p>
      </div>
      <div style="background: white; padding: 15px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <img src="https://picsum.photos/800/600?random=7" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;" alt="城市图2"/>
        <h4 style="margin: 10px 0; color: #333;">建筑艺术</h4>
        <p style="margin: 0; color: #666; font-size: 0.9em;">建筑之美</p>
      </div>
      <div style="background: white; padding: 15px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <img src="https://picsum.photos/800/600?random=8" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;" alt="城市图3"/>
        <h4 style="margin: 10px 0; color: #333;">城市夜景</h4>
        <p style="margin: 0; color: #666; font-size: 0.9em;">璀璨夜色</p>
      </div>
    </div>`,
  },
  {
    name: `图片-全景展示`,
    content: `<div style="padding: 20px; background: #fff; border-radius: 15px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
      <div style="height: 400px; border-radius: 10px; overflow: hidden; margin-bottom: 20px;">
        <img src="https://picsum.photos/1200/800?random=9" style="width: 100%; height: 100%; object-fit: cover;" alt="全景图"/>
      </div>
      <div style="display: flex; gap: 15px; overflow-x: auto; padding-bottom: 10px;">
        <img src="https://picsum.photos/400/300?random=10" style="width: 150px; height: 100px; object-fit: cover; border-radius: 8px; flex-shrink: 0;" alt="缩略图1"/>
        <img src="https://picsum.photos/400/300?random=11" style="width: 150px; height: 100px; object-fit: cover; border-radius: 8px; flex-shrink: 0;" alt="缩略图2"/>
        <img src="https://picsum.photos/400/300?random=12" style="width: 150px; height: 100px; object-fit: cover; border-radius: 8px; flex-shrink: 0;" alt="缩略图3"/>
      </div>
    </div>`,
  },
  {
    name: `图片-摄影集`,
    content: `<div style="padding: 30px; background: #000; border-radius: 15px; color: white;">
      <h3 style="margin: 0 0 20px; font-size: 1.8em; text-align: center;">摄影作品集</h3>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
        <div style="position: relative;">
          <img src="https://picsum.photos/800/600?random=13" style="width: 100%; height: 300px; object-fit: cover; border-radius: 10px;" alt="摄影作品1"/>
          <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 20px; background: linear-gradient(transparent, rgba(0,0,0,0.7));">
            <h4 style="margin: 0; font-size: 1.2em;">自然之光</h4>
          </div>
        </div>
        <div style="position: relative;">
          <img src="https://picsum.photos/800/600?random=14" style="width: 100%; height: 300px; object-fit: cover; border-radius: 10px;" alt="摄影作品2"/>
          <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 20px; background: linear-gradient(transparent, rgba(0,0,0,0.7));">
            <h4 style="margin: 0; font-size: 1.2em;">城市剪影</h4>
          </div>
        </div>
      </div>
    </div>`,
  },
  {
    name: `图片-故事展示`,
    content: `<div style="padding: 30px; background: #fff; border-radius: 15px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
      <div style="position: relative; margin-bottom: 30px;">
        <img src="https://picsum.photos/1200/800?random=15" style="width: 100%; height: 400px; object-fit: cover; border-radius: 10px;" alt="主图"/>
        <div style="position: absolute; top: 20px; left: 20px; background: rgba(255,255,255,0.9); padding: 10px 20px; border-radius: 20px;">
          <span style="color: #333; font-weight: bold;">旅行故事</span>
        </div>
      </div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px;">
        <div>
          <img src="https://picsum.photos/800/600?random=16" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; margin-bottom: 10px;" alt="故事图1"/>
          <p style="margin: 0; color: #666; font-size: 0.9em;">清晨的阳光</p>
        </div>
        <div>
          <img src="https://picsum.photos/800/600?random=17" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; margin-bottom: 10px;" alt="故事图2"/>
          <p style="margin: 0; color: #666; font-size: 0.9em;">午后时光</p>
        </div>
        <div>
          <img src="https://picsum.photos/800/600?random=18" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; margin-bottom: 10px;" alt="故事图3"/>
          <p style="margin: 0; color: #666; font-size: 0.9em;">日落余晖</p>
        </div>
      </div>
    </div>`,
  },
  {
    name: `简约风-左图右文`,
    content: `<div style="margin: 20px 0; padding: 20px; background: white; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
    <div style="display: flex; gap: 20px; align-items: center;">
      <div style="width: 150px; height: 150px; flex-shrink: 0; background: #f5f6fa; border-radius: 10px; overflow: hidden;">
        <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg" style="width: 100%; height: 100%; object-fit: cover;" alt="简约风图片"/>
      </div>
      <div style="flex: 1;">
        <h3 style="margin: 0 0 10px; color: #2d3436; font-size: 1.3em;">简约生活</h3>
        <p style="margin: 0; color: #636e72; line-height: 1.6;">
          简约是一种生活态度，追求简单而不失品质的生活方式。
        </p>
      </div>
    </div>
  </div>`,
  },
  {
    name: `时尚风-上图下文`,
    content: `<div style="margin: 20px 0; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
    <div style="position: relative; padding-top: 56.25%; background: #f5f6fa;">
      <img src="https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;" alt="时尚风图片"/>
    </div>
    <div style="padding: 20px;">
      <h3 style="margin: 0 0 10px; color: #2d3436; font-size: 1.3em;">时尚潮流</h3>
      <p style="margin: 0; color: #636e72; line-height: 1.6;">
        时尚不仅仅是外表的装饰，更是一种生活态度的体现。
      </p>
    </div>
  </div>`,
  },
  {
    name: `文艺风-网格布局`,
    content: `<div style="margin: 20px 0; padding: 20px; background: white; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
    <h3 style="margin: 0 0 15px; color: #2d3436; font-size: 1.3em;">文艺时光</h3>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px;">
      <div style="aspect-ratio: 1; background: #f5f6fa; border-radius: 10px; overflow: hidden;">
        <img src="https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg" style="width: 100%; height: 100%; object-fit: cover;" alt="文艺图片1"/>
      </div>
      <div style="aspect-ratio: 1; background: #f5f6fa; border-radius: 10px; overflow: hidden;">
        <img src="https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg" style="width: 100%; height: 100%; object-fit: cover;" alt="文艺图片2"/>
      </div>
      <div style="aspect-ratio: 1; background: #f5f6fa; border-radius: 10px; overflow: hidden;">
        <img src="https://images.pexels.com/photos/1021877/pexels-photo-1021877.jpeg" style="width: 100%; height: 100%; object-fit: cover;" alt="文艺图片3"/>
      </div>
    </div>
    <p style="margin: 15px 0 0; color: #636e72; line-height: 1.6;">
      文艺是一种生活态度，记录生活中的美好瞬间。
    </p>
  </div>`,
  },
  {
    name: `旅行风-左图右文`,
    content: `<div style="margin: 20px 0; padding: 20px; background: white; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
    <div style="display: flex; gap: 20px; align-items: center;">
      <div style="width: 200px; height: 200px; flex-shrink: 0; background: #f5f6fa; border-radius: 10px; overflow: hidden;">
        <img src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg" style="width: 100%; height: 100%; object-fit: cover;" alt="旅行图片"/>
      </div>
      <div style="flex: 1;">
        <h3 style="margin: 0 0 10px; color: #2d3436; font-size: 1.3em;">旅行日记</h3>
        <p style="margin: 0; color: #636e72; line-height: 1.6;">
          旅行是一种探索，记录旅途中的每一个精彩瞬间。
        </p>
      </div>
    </div>
  </div>`,
  },
  {
    name: `美食风-上图下文`,
    content: `<div style="margin: 20px 0; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
    <div style="position: relative; padding-top: 56.25%; background: #f5f6fa;">
      <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;" alt="美食图片"/>
    </div>
    <div style="padding: 20px;">
      <h3 style="margin: 0 0 10px; color: #2d3436; font-size: 1.3em;">美食之旅</h3>
      <p style="margin: 0; color: #636e72; line-height: 1.6;">
        美食是生活中的一种享受，品味每一道美味佳肴。
      </p>
    </div>
  </div>`,
  },
  {
    name: `自然风-瀑布流`,
    content: `<div style="padding: 20px; background: white; border-radius: 15px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <div style="columns: 3; gap: 20px;">
      <div style="margin-bottom: 20px; break-inside: avoid;">
        <img src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg" style="width: 100%; border-radius: 10px;" alt="自然图片1"/>
      </div>
      <div style="margin-bottom: 20px; break-inside: avoid;">
        <img src="https://images.pexels.com/photos/3225521/pexels-photo-3225521.jpeg" style="width: 100%; border-radius: 10px;" alt="自然图片2"/>
      </div>
      <div style="margin-bottom: 20px; break-inside: avoid;">
        <img src="https://images.pexels.com/photos/3225524/pexels-photo-3225524.jpeg" style="width: 100%; border-radius: 10px;" alt="自然图片3"/>
      </div>
    </div>
  </div>`,
  },
  {
    name: `城市风-卡片画廊`,
    content: `<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; padding: 20px; background: #f8f9fa; border-radius: 15px;">
    <div style="background: white; padding: 15px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
      <img src="https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;" alt="城市图片1"/>
      <h4 style="margin: 10px 0; color: #333;">城市之光</h4>
      <p style="margin: 0; color: #666; font-size: 0.9em;">城市的繁华与美丽</p>
    </div>
    <div style="background: white; padding: 15px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
      <img src="https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;" alt="城市图片2"/>
      <h4 style="margin: 10px 0; color: #333;">建筑之美</h4>
      <p style="margin: 0; color: #666; font-size: 0.9em;">现代建筑的魅力</p>
    </div>
    <div style="background: white; padding: 15px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
      <img src="https://images.pexels.com/photos/373913/pexels-photo-373913.jpeg" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;" alt="城市图片3"/>
      <h4 style="margin: 10px 0; color: #333;">城市夜景</h4>
      <p style="margin: 0; color: #666; font-size: 0.9em;">璀璨的夜晚</p>
    </div>
  </div>`,
  },
  {
    name: `摄影风-故事展示`,
    content: `<div style="padding: 30px; background: white; border-radius: 15px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <div style="position: relative; margin-bottom: 30px;">
      <img src="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg" style="width: 100%; height: 400px; object-fit: cover; border-radius: 10px;" alt="摄影故事主图"/>
      <div style="position: absolute; top: 20px; left: 20px; background: rgba(255,255,255,0.9); padding: 10px 20px; border-radius: 20px;">
        <span style="color: #333; font-weight: bold;">摄影故事</span>
      </div>
    </div>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px;">
      <div>
        <img src="https://images.pexels.com/photos/3244514/pexels-photo-3244514.jpeg" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; margin-bottom: 10px;" alt="故事图1"/>
        <p style="margin: 0; color: #666; font-size: 0.9em;">清晨的阳光</p>
      </div>
      <div>
        <img src="https://images.pexels.com/photos/3244515/pexels-photo-3244515.jpeg" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; margin-bottom: 10px;" alt="故事图2"/>
        <p style="margin: 0; color: #666; font-size: 0.9em;">午后时光</p>
      </div>
      <div>
        <img src="https://images.pexels.com/photos/3244516/pexels-photo-3244516.jpeg" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; margin-bottom: 10px;" alt="故事图3"/>
        <p style="margin: 0; color: #666; font-size: 0.9em;">日落余晖</p>
      </div>
    </div>
  </div>`,
  },
  {
    name: `二次元少女卡片`,
    content: `<div style="margin: 20px 0; background: #fff7f9; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(255,182,193,0.2);">
      <div style="position: relative; padding-top: 75%; background: linear-gradient(45deg, #ffe6eb, #ffd1dc);">
        <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: flex; align-items: center; justify-content: center;">
          <span style="font-size: 3em;">🎀</span>
        </div>
      </div>
      <div style="padding: 20px;">
        <h3 style="margin: 0 0 15px; color: #ff69b4; font-size: 1.3em; text-align: center;">✧*｡ 少女日常 ｡*✧</h3>
        <p style="margin: 0 0 15px; color: #ff99ac; line-height: 1.6; font-size: 0.95em; text-align: center;">
          今天也是元气满满的一天呢 (◕‿◕✿)
        </p>
        <div style="display: flex; align-items: center; justify-content: center; gap: 15px;">
          <span style="color: #ff99ac; font-size: 0.9em;">♡ Like</span>
          <span style="color: #ff99ac; font-size: 0.9em;">✧ Share</span>
          <span style="color: #ff99ac; font-size: 0.9em;">❀ Comment</span>
        </div>
      </div>
    </div>`,
  },
  {
    name: `动漫场景卡片`,
    content: `<div style="margin: 20px 0; background: #f0f8ff; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(135,206,235,0.2);">
      <div style="position: relative; padding-top: 56.25%; background: linear-gradient(to right, #e0ffff, #b0e0e6);">
        <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: flex; align-items: center; justify-content: center;">
          <span style="font-size: 3em;">🌸</span>
        </div>
      </div>
      <div style="padding: 20px;">
        <h3 style="margin: 0 0 15px; color: #4169e1; font-size: 1.3em; text-align: center;">✧ 樱花飞舞的季节 ✧</h3>
        <p style="margin: 0 0 15px; color: #6495ed; line-height: 1.6; font-size: 0.95em; text-align: center;">
          教室窗边的樱花树下，时光静静流淌 (｡♥‿♥｡)
        </p>
        <div style="text-align: center;">
          <span style="display: inline-block; padding: 5px 15px; background: #e6e6fa; color: #4169e1; border-radius: 15px; font-size: 0.9em;">#青春</span>
          <span style="display: inline-block; padding: 5px 15px; background: #e6e6fa; color: #4169e1; border-radius: 15px; font-size: 0.9em; margin-left: 10px;">#樱花</span>
        </div>
      </div>
    </div>`,
  },
  {
    name: `漫画风格卡片`,
    content: `<div style="margin: 20px 0; padding: 20px; background: white; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
        <div style="aspect-ratio: 1; background: #fafafa; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 2em;">
          ✨
        </div>
        <div style="aspect-ratio: 1; background: #fafafa; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 2em;">
          🎨
        </div>
      </div>
      <div style="margin-top: 15px; text-align: center;">
        <h3 style="margin: 0 0 10px; color: #333; font-size: 1.3em;">漫画创作日记</h3>
        <p style="margin: 0; color: #666; line-height: 1.6;">
          今天也在认真画画呢 (◕ᴗ◕✿)
        </p>
      </div>
    </div>`,
  },
  {
    name: `cosplay展示卡片`,
    content: `<div style="margin: 20px 0; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
      <div style="position: relative; padding-top: 100%; background: #f8f9fa;">
        <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: flex; align-items: center; justify-content: center;">
          <span style="font-size: 3em;">🎭</span>
        </div>
      </div>
      <div style="padding: 20px; background: linear-gradient(to bottom, #fff, #f8f9fa);">
        <h3 style="margin: 0 0 15px; color: #333; font-size: 1.3em; text-align: center;">✧ Cosplay 展示 ✧</h3>
        <div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 15px;">
          <span style="padding: 5px 15px; background: #f0f0f0; color: #666; border-radius: 15px; font-size: 0.9em;">#角色扮演</span>
          <span style="padding: 5px 15px; background: #f0f0f0; color: #666; border-radius: 15px; font-size: 0.9em;">#动漫</span>
        </div>
        <p style="margin: 0; color: #666; line-height: 1.6; text-align: center;">
          今天的cos妆容完成啦！(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧
        </p>
      </div>
    </div>`,
  },
  {
    name: `动漫周边展示`,
    content: `<div style="margin: 20px 0; padding: 20px; background: #fff; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-bottom: 15px;">
        <div style="aspect-ratio: 1; background: #f5f6fa; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.5em;">
          🎮
        </div>
        <div style="aspect-ratio: 1; background: #f5f6fa; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.5em;">
          📚
        </div>
        <div style="aspect-ratio: 1; background: #f5f6fa; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.5em;">
          🎨
        </div>
      </div>
      <h3 style="margin: 0 0 10px; color: #333; font-size: 1.3em; text-align: center;">(◕ᴗ◕✿) 周边收藏 (◕ᴗ◕✿)</h3>
      <p style="margin: 0; color: #666; line-height: 1.6; text-align: center;">
        今天又增添了新的收藏呢～
      </p>
    </div>`,
  },
  {
    name: `简约清新图文`,
    content: `<div style="padding: 10px 0;">
      <h2 style="color: #1a1a1a; font-size: 17px; font-weight: bold; margin-bottom: 15px; border-left: 4px solid #1a1a1a; padding-left: 10px;">蝉鸣是夏天的标志</h2>
      <div style="margin-bottom: 15px;">
        <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" style="width: 100%; display: block;" alt="夏日风景"/>
      </div>
      <div style="color: #333333; font-size: 15px; line-height: 1.8;">
        <p>夏日的午后，阳光透过树叶洒落在地上，形成斑驳的光影。蝉鸣声此起彼伏，仿佛在演奏一曲夏天的交响乐。</p>
        <p>这是属于夏天的声音，是季节更替的印记，也是我们共同的夏日记忆。</p>
      </div>
      <div style="margin-top: 15px;">
        <span style="color: #40a9ff; font-size: 14px;">#夏日</span>
        <span style="color: #40a9ff; font-size: 14px; margin-left: 10px;">#生活记录</span>
      </div>
    </div>`,
  },
  {
    name: `夏日蜜桃卡片`,
    content: `<section>
      <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" style="width: 100%;" />
      <p style="text-align: center;">
        <span style="font-size: 18px; color: #ff6666;">夏日蜜桃限定</span>
      </p>
      <p style="text-align: center;">
        <span style="color: #999999; font-size: 14px;">SUMMER PEACHES</span>
      </p>
      <p style="text-align: center; color: #666666;">
        桃子是夏天的甜蜜源泉
      </p>
      <p style="text-align: center; color: #666666;">
        清新的桃子味和清爽的绿茶
      </p>
      <p style="text-align: center; color: #666666;">
        一起搅打成沙冰
      </p>
      <p style="text-align: center; color: #666666;">

        在唇齿间绽放清新的桃香
      </p>
    </section>`,
  },
  {
    name: `小清新日系卡片`,
    content: `<section>
      <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" style="width: 100%;" />
      <p style="text-align: center; margin: 20px 0 5px;">
        <span style="font-size: 20px; color: #8b7355;">✧ 和风物语 ✧</span>
      </p>
      <p style="text-align: center;">
        <span style="color: #b4a08c; font-size: 12px; letter-spacing: 4px;">JAPANESE STYLE</span>
      </p>
      <p style="text-align: center; color: #91836c; font-size: 14px; letter-spacing: 2px; margin: 15px 0;">
        ❋ ⋆ ❋ ⋆ ❋ ⋆ ❋ ⋆ ❋
      </p>
      <p style="text-align: center; color: #91836c;">
        抹茶的清香
      </p>
      <p style="text-align: center; color: #91836c;">
        和菓子的甜意
      </p>
      <p style="text-align: center; color: #91836c;">
        夏日的风铃
      </p>
      <p style="text-align: center; color: #91836c;">
        午后的庭院
      </p>
      <p style="text-align: center; color: #91836c; font-size: 14px; letter-spacing: 2px; margin: 15px 0;">
        ❋ ⋆ ❋ ⋆ ❋ ⋆ ❋ ⋆ ❋
      </p>
    </section>`,
  },
  {
    name: `轻奢风格卡片`,
    content: `<section>
      <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" style="width: 100%;" />
      <p style="text-align: center; margin: 20px 0 5px;">
        <span style="font-size: 20px; color: #9c8f7d;">𝓛𝓾𝔁𝓾𝓻𝔂 𝓜𝓸𝓶𝓮𝓷𝓽𝓼</span>
      </p>
      <p style="text-align: center;">
        <span style="color: #c0b3a1; font-size: 12px; letter-spacing: 4px;">ELEGANCE & GRACE</span>
      </p>
      <p style="text-align: center; color: #9c8f7d; font-size: 14px; letter-spacing: 2px; margin: 15px 0;">
        ◈─────── ❖ ────────◈
      </p>
      <p style="text-align: center; color: #9c8f7d;">
        优雅的生活态度
      </p>
      <p style="text-align: center; color: #9c8f7d;">
        精致的下午茶
      </p>
      <p style="text-align: center; color: #9c8f7d;">
        细腻的生活情调
      </p>
      <p style="text-align: center; color: #9c8f7d;">
        品味独特时光
      </p>
      <p style="text-align: center; color: #9c8f7d; font-size: 14px; letter-spacing: 2px; margin: 15px 0;">
        ◈─────── ❖ ────────◈
      </p>
    </section>`,
  },
  {
    name: `少女心卡片`,
    content: `<section>
      <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" style="width: 100%;" />
      <p style="text-align: center; margin: 20px 0 5px;">
        <span style="font-size: 20px; color: #ffb6c1;">✿ 粉色记忆 ✿</span>
      </p>
      <p style="text-align: center;">
        <span style="color: #ffc0cb; font-size: 12px; letter-spacing: 4px;">SWEET MEMORIES</span>
      </p>
      <p style="text-align: center; color: #ffb6c1; font-size: 14px; letter-spacing: 2px; margin: 15px 0;">
        ♡ ⋆｡°✩ ⋆｡°♡ ⋆｡°✩ ⋆｡°♡
      </p>
      <p style="text-align: center; color: #ffb6c1;">
        草莓味的马卡龙
      </p>
      <p style="text-align: center; color: #ffb6c1;">
        蝴蝶结的发饰
      </p>
      <p style="text-align: center; color: #ffb6c1;">
        少女心的梦境
      </p>
      <p style="text-align: center; color: #ffb6c1;">
        甜甜的回忆
      </p>
      <p style="text-align: center; color: #ffb6c1; font-size: 14px; letter-spacing: 2px; margin: 15px 0;">
        ♡ ⋆｡°✩ ⋆｡°♡ ⋆｡°✩ ⋆｡°♡
      </p>
    </section>`,
  },
  {
    name: `创意拼贴风格`,
    content: `<div style="padding: 20px; background: white; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
      <div style="display: grid; grid-template-columns: 2fr 1fr; grid-template-rows: 200px 200px; gap: 15px;">
        <div style="grid-row: span 2; border-radius: 15px; overflow: hidden;">
          <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" style="width: 100%; height: 100%; object-fit: cover;" alt="主图"/>
        </div>
        <div style="border-radius: 15px; overflow: hidden;">
          <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" style="width: 100%; height: 100%; object-fit: cover;" alt="配图1"/>
        </div>
        <div style="border-radius: 15px; overflow: hidden;">
          <img src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1" style="width: 100%; height: 100%; object-fit: cover;" alt="配图2"/>
        </div>
      </div>
      <div style="margin-top: 20px; text-align: center;">
        <h3 style="margin: 0 0 10px; color: #2d3436; font-size: 1.5em;">记录生活的美好瞬间</h3>
        <p style="margin: 0; color: #636e72; line-height: 1.6;">
          每一个画面都是独特的故事，每一帧都值得被珍藏。
        </p>
      </div>
    </div>`,
  },
  {
    name: `斜线分割风格`,
    content: `<div style="padding: 20px; background: white; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
      <div style="position: relative; height: 400px; overflow: hidden; border-radius: 15px;">
        <div style="position: absolute; top: 0; left: 0; width: 60%; height: 100%; transform: skewX(-10deg) translateX(-5%); overflow: hidden;">
          <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" style="width: 120%; height: 100%; object-fit: cover; transform: skewX(10deg);" alt="左侧图片"/>
        </div>
        <div style="position: absolute; top: 0; right: 0; width: 60%; height: 100%; transform: skewX(-10deg) translateX(5%); overflow: hidden;">
          <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" style="width: 120%; height: 100%; object-fit: cover; transform: skewX(10deg);" alt="右侧图片"/>
        </div>
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(255,255,255,0.9); padding: 20px; border-radius: 10px; text-align: center; min-width: 200px;">
          <h3 style="margin: 0 0 10px; color: #2d3436;">时光交错</h3>
          <p style="margin: 0; color: #636e72;">定格美好瞬间</p>
        </div>
      </div>
    </div>`,
  },
  {
    name: `圆形切割风格`,
    content: `<div style="padding: 20px; background: white; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
      <div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 20px;">
        <div style="width: 150px; height: 150px; border-radius: 50%; overflow: hidden;">
          <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" style="width: 100%; height: 100%; object-fit: cover;" alt="圆形图1"/>
        </div>
        <div style="width: 150px; height: 150px; border-radius: 50%; overflow: hidden;">
          <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" style="width: 100%; height: 100%; object-fit: cover;" alt="圆形图2"/>
        </div>
        <div style="width: 150px; height: 150px; border-radius: 50%; overflow: hidden;">
          <img src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1" style="width: 100%; height: 100%; object-fit: cover;" alt="圆形图3"/>
        </div>
      </div>
      <div style="text-align: center;">
        <h3 style="margin: 0 0 10px; color: #2d3436; font-size: 1.5em;">圆满人生</h3>
        <p style="margin: 0; color: #636e72; line-height: 1.6;">
          生活中的每个圆满时刻，都值得被铭记。
        </p>
      </div>
    </div>`,
  },
  {
    name: `交错层叠风格`,
    content: `<div style="padding: 40px 20px; background: white; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
      <div style="position: relative; height: 400px;">
        <div style="position: absolute; top: 0; left: 0; width: 60%; height: 250px; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
          <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" style="width: 100%; height: 100%; object-fit: cover;" alt="上层图片"/>
        </div>
        <div style="position: absolute; bottom: 0; right: 0; width: 60%; height: 250px; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
          <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" style="width: 100%; height: 100%; object-fit: cover;" alt="下层图片"/>
        </div>
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 20px; border-radius: 10px; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
          <h3 style="margin: 0 0 10px; color: #2d3436;">层层回忆</h3>
          <p style="margin: 0; color: #636e72;">珍藏每一刻的感动</p>
        </div>
      </div>
    </div>`,
  },
  {
    name: `马赛克拼贴风格`,
    content: `<div style="padding: 20px; background: white; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(2, 150px); gap: 10px;">
        <div style="grid-column: span 2; grid-row: span 2; border-radius: 15px; overflow: hidden;">
          <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" style="width: 100%; height: 100%; object-fit: cover;" alt="主图"/>
        </div>
        <div style="border-radius: 15px; overflow: hidden;">
          <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" style="width: 100%; height: 100%; object-fit: cover;" alt="小图1"/>
        </div>
        <div style="border-radius: 15px; overflow: hidden;">
          <img src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1" style="width: 100%; height: 100%; object-fit: cover;" alt="小图2"/>
        </div>
        <div style="border-radius: 15px; overflow: hidden;">
          <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e" style="width: 100%; height: 100%; object-fit: cover;" alt="小图3"/>
        </div>
        <div style="border-radius: 15px; overflow: hidden;">
          <img src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94" style="width: 100%; height: 100%; object-fit: cover;" alt="小图4"/>
        </div>
      </div>
      <div style="margin-top: 20px; text-align: center;">
        <h3 style="margin: 0 0 10px; color: #2d3436; font-size: 1.5em;">记忆碎片</h3>
        <p style="margin: 0; color: #636e72; line-height: 1.6;">
          拼贴生活的点点滴滴，编织美好的回忆。
        </p>
      </div>
    </div>`,
  },
  {
    name: `动漫日常卡片`,
    content: `<section style="background: #fef6f6; border-radius: 15px; padding: 20px; box-shadow: 0 4px 15px rgba(255,182,193,0.2);">
      <div style="text-align: center; margin-bottom: 15px;">
        <span style="font-size: 20px; color: #ff9eaf;">✧*｡ 二次元日常 ｡*✧</span>
      </div>
      <div style="margin-bottom: 20px;">
        <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" style="width: 100%; border-radius: 10px;" alt="动漫日常"/>
      </div>
      <div style="background: white; border-radius: 10px; padding: 15px; margin-bottom: 15px;">
        <p style="color: #ff9eaf; margin: 0; text-align: center;">
          今日份的美好时光 ⸜(๑'ᵕ'๑)⸝
        </p>
      </div>
      <div style="display: flex; justify-content: center; gap: 10px;">
        <span style="color: #ff9eaf; font-size: 14px;">♡ 喜欢</span>
        <span style="color: #ff9eaf; font-size: 14px;">✧ 收藏</span>
        <span style="color: #ff9eaf; font-size: 14px;">❀ 分享</span>
      </div>
    </section>`,
  },
  {
    name: `文艺清新卡片`,
    content: `<section style="background: #f8f9fa; border-radius: 15px; padding: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
      <div style="text-align: center; margin-bottom: 20px;">
        <span style="font-size: 18px; color: #6c757d; letter-spacing: 4px;">『 岁月静好 』</span>
      </div>
      <div style="margin-bottom: 20px;">
        <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" style="width: 100%; border-radius: 10px;" alt="文艺场景"/>
      </div>
      <div style="background: white; border-radius: 10px; padding: 20px;">
        <p style="color: #6c757d; margin: 0; line-height: 1.8; text-align: center; font-size: 14px;">
          午后的阳光
          <br>
          洒落在书页上
          <br>
          时光缓缓流淌
        </p>
      </div>
    </section>`,
  },
  {
    name: `小清新双图卡片`,
    content: `<section style="padding: 20px;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px;">
        <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" style="width: 100%; border-radius: 10px;" alt="清新图片1"/>
        <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" style="width: 100%; border-radius: 10px;" alt="清新图片2"/>
      </div>
      <div style="text-align: center;">
        <h3 style="color: #68a5ad; font-size: 18px; margin: 0 0 10px;">清晨的美好</h3>
        <p style="color: #8fb2b6; margin: 0; line-height: 1.6;">
          阳光、咖啡
          <br>
          还有温暖的心情
        </p>
      </div>
    </section>`,
  },
  {
    name: `森系文艺卡片`,
    content: `<section style="background: #f4f9f4; border-radius: 15px; padding: 25px; box-shadow: 0 4px 15px rgba(144,238,144,0.1);">
      <div style="text-align: center; margin-bottom: 20px;">
        <span style="font-size: 18px; color: #7ba17b;">❀ 森林物语 ❀</span>
      </div>
      <div style="margin-bottom: 20px;">
        <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" style="width: 100%; border-radius: 10px;" alt="森系场景"/>
      </div>
      <div style="background: white; border-radius: 10px; padding: 20px;">
        <p style="color: #7ba17b; margin: 0; line-height: 1.8; text-align: center;">
          漫步在绿意中
          <br>
          聆听自然的声音
          <br>
          感受生命的律动
        </p>
      </div>
      <div style="display: flex; justify-content: center; gap: 15px; margin-top: 15px;">
        <span style="color: #7ba17b; font-size: 14px;">🌿 自然</span>
        <span style="color: #7ba17b; font-size: 14px;">🍃 生活</span>
        <span style="color: #7ba17b; font-size: 14px;">🌱 治愈</span>
      </div>
    </section>`,
  },
  {
    name: `复古胶片风卡片`,
    content: `<section style="background: #f5f5f5; border-radius: 15px; padding: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.08);">
      <div style="text-align: center; margin-bottom: 15px;">
        <span style="font-size: 20px; color: #8b7355;">『 时光机 』</span>
      </div>
      <div style="position: relative; margin-bottom: 20px;">
        <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" style="width: 100%; border-radius: 10px; filter: sepia(30%);" alt="复古场景"/>
        <div style="position: absolute; bottom: 10px; right: 10px; background: rgba(255,255,255,0.8); padding: 5px 10px; border-radius: 5px;">
          <span style="color: #8b7355; font-size: 12px;">1999/07/15</span>
        </div>
      </div>
      <div style="background: white; border-radius: 10px; padding: 15px;">
        <p style="color: #8b7355; margin: 0; text-align: center; font-family: monospace;">
          # 记录时光
          <br>
          # 珍藏回忆
          <br>
          # 怀旧时刻
        </p>
      </div>
    </section>`,
  },
  {
    name: `创意瀑布流`,
    content: `<div style="padding: 20px; background: #fff; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
      <div style="columns: 4; gap: 15px;">
        <div style="break-inside: avoid; margin-bottom: 15px;">
          <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" style="width: 100%; border-radius: 10px;" alt="瀑布流图片1"/>
          <p style="margin: 8px 0; color: #666; font-size: 14px;">春日樱花</p>
        </div>
        <div style="break-inside: avoid; margin-bottom: 15px;">
          <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" style="width: 100%; border-radius: 10px;" alt="瀑布流图片2"/>
          <p style="margin: 8px 0; color: #666; font-size: 14px;">夏日海边</p>
        </div>
        <div style="break-inside: avoid; margin-bottom: 15px;">
          <img src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1" style="width: 100%; border-radius: 10px;" alt="瀑布流图片3"/>
          <p style="margin: 8px 0; color: #666; font-size: 14px;">秋日落叶</p>
        </div>
        <div style="break-inside: avoid; margin-bottom: 15px;">
          <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e" style="width: 100%; border-radius: 10px;" alt="瀑布流图片4"/>
          <p style="margin: 8px 0; color: #666; font-size: 14px;">冬日雪景</p>
        </div>
        <div style="break-inside: avoid; margin-bottom: 15px;">
          <img src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94" style="width: 100%; border-radius: 10px;" alt="瀑布流图片5"/>
          <p style="margin: 8px 0; color: #666; font-size: 14px;">晨光熹微</p>
        </div>
        <div style="break-inside: avoid; margin-bottom: 15px;">
          <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" style="width: 100%; border-radius: 10px;" alt="瀑布流图片6"/>
          <p style="margin: 8px 0; color: #666; font-size: 14px;">暮色苍茫</p>
        </div>
      </div>
    </div>`,
  },
  {
    name: `折叠卡片风格`,
    content: `<div style="padding: 20px;">
      <div style="background: white; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); overflow: hidden;">
        <div style="position: relative;">
          <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" style="width: 100%; height: 200px; object-fit: cover;" alt="封面图"/>
          <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 20px; background: linear-gradient(transparent, rgba(0,0,0,0.7));">
            <h3 style="margin: 0; color: white; font-size: 1.5em;">我的旅行日记</h3>
          </div>
        </div>
        <div style="padding: 20px;">
          <div style="margin-bottom: 20px;">
            <h4 style="margin: 0 0 10px; color: #2d3436;">第一站：东京</h4>
            <div style="display: flex; gap: 10px; overflow-x: auto; padding-bottom: 10px;">
              <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" style="width: 150px; height: 100px; object-fit: cover; border-radius: 8px; flex-shrink: 0;" alt="东京图1"/>
              <img src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1" style="width: 150px; height: 100px; object-fit: cover; border-radius: 8px; flex-shrink: 0;" alt="东京图2"/>
              <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e" style="width: 150px; height: 100px; object-fit: cover; border-radius: 8px; flex-shrink: 0;" alt="东京图3"/>
            </div>
          </div>
          <div>
            <h4 style="margin: 0 0 10px; color: #2d3436;">第二站：京都</h4>
            <div style="display: flex; gap: 10px; overflow-x: auto; padding-bottom: 10px;">
              <img src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94" style="width: 150px; height: 100px; object-fit: cover; border-radius: 8px; flex-shrink: 0;" alt="京都图1"/>
              <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" style="width: 150px; height: 100px; object-fit: cover; border-radius: 8px; flex-shrink: 0;" alt="京都图2"/>
              <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" style="width: 150px; height: 100px; object-fit: cover; border-radius: 8px; flex-shrink: 0;" alt="京都图3"/>
            </div>
          </div>
        </div>
      </div>
    </div>`,
  },
  {
    name: `故事书风格`,
    content: `<div style="padding: 30px; background: #f8f9fa;">
      <div style="background: white; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); overflow: hidden; position: relative;">
        <div style="position: absolute; top: 10px; left: -5px; background: #e74c3c; color: white; padding: 5px 15px; font-size: 12px;">
          Chapter 1
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0;">
          <div style="padding: 40px; display: flex; flex-direction: column; justify-content: center;">
            <h2 style="margin: 0 0 20px; color: #2d3436; font-size: 1.8em;">春天的故事</h2>
            <p style="margin: 0; color: #636e72; line-height: 1.8;">
              樱花纷飞的季节，
              <br>
              我们开始了一段奇妙的旅程。
              <br>
              每一片花瓣都是美好的回忆，
              <br>
              每一刻都值得被珍藏。
            </p>
          </div>
          <div style="position: relative; min-height: 400px;">
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;" alt="故事主图"/>
          </div>
        </div>
        <div style="padding: 20px; background: #f8f9fa; display: flex; gap: 15px; overflow-x: auto;">
          <div style="flex-shrink: 0; text-align: center;">
            <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" style="width: 120px; height: 80px; object-fit: cover; border-radius: 8px; margin-bottom: 5px;" alt="故事图1"/>
            <span style="font-size: 12px; color: #666;">第一幕</span>
          </div>
          <div style="flex-shrink: 0; text-align: center;">
            <img src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1" style="width: 120px; height: 80px; object-fit: cover; border-radius: 8px; margin-bottom: 5px;" alt="故事图2"/>
            <span style="font-size: 12px; color: #666;">第二幕</span>
          </div>
          <div style="flex-shrink: 0; text-align: center;">
            <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e" style="width: 120px; height: 80px; object-fit: cover; border-radius: 8px; margin-bottom: 5px;" alt="故事图3"/>
            <span style="font-size: 12px; color: #666;">第三幕</span>
          </div>
        </div>
      </div>
    </div>`,
  },
  {
    name: `创意六边形布局`,
    content: `<div style="padding: 20px; background: white; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; position: relative;">
        <div style="clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); overflow: hidden;">
          <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" style="width: 100%; height: 100%; object-fit: cover;" alt="六边形图1"/>
        </div>
        <div style="clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); overflow: hidden;">
          <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" style="width: 100%; height: 100%; object-fit: cover;" alt="六边形图2"/>
        </div>
        <div style="clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); overflow: hidden;">
          <img src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1" style="width: 100%; height: 100%; object-fit: cover;" alt="六边形图3"/>
        </div>
      </div>
      <div style="text-align: center; margin-top: 20px;">
        <h3 style="margin: 0 0 10px; color: #2d3436;">蜂巢式回忆</h3>
        <p style="margin: 0; color: #636e72;">每一个六边形都是一段独特的故事</p>
      </div>
    </div>`,
  },
  {
    name: `动态卡片墙`,
    content: `<div style="padding: 20px; background: white; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
        <div style="transform: rotate(-3deg);">
          <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" style="width: 100%; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" alt="卡片1"/>
        </div>
        <div style="transform: rotate(2deg);">
          <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" style="width: 100%; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" alt="卡片2"/>
        </div>
        <div style="transform: rotate(-2deg);">
          <img src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1" style="width: 100%; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" alt="卡片3"/>
        </div>
        <div style="transform: rotate(3deg);">
          <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e" style="width: 100%; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" alt="卡片4"/>
        </div>
      </div>
    </div>`,
  },
]
