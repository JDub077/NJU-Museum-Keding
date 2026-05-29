<template>
  <div class="metadata-view">
    <div class="content-container">
      <h1 class="page-title">克鼎藏品对比</h1>

      <div class="intro-text">
        <p>西周鼎制
          鼎的使用与分配被视为权力和社会地位的象征。鼎最初只是一个普通的炊具,来源于新石器时代。随着社会的发展,特别是在商周时期,鼎的作用和意义发生了显著的变化。鼎从日常用具转变为重要的礼器,尤其与祭祀和宗教仪式紧密相关。例如,用期盛放祭品、如牲肉,是古代贵族社会中的一种常见做法。周代的监制更是一个复杂的社会象征系统。根据贵族的级别和地位,使用熟的数量和种类都有严格的规定。周礼规定贵族按其地位高低,可在祭祖宴享中使用不同等级的青铜礼器组合,其中最有代表性的就是“列鼎”一天子九鼎,诸侯七鼎、大夫五鼎、士三鼎或一鼎,这反映了他们在社会层次中的位置。这种制度不仅反映了政治权力的分布,也是社会秩序和宗法制度的体现
          然而,克鼎共有八件,克的身份并非王,更接近侯位,实际上应适用于七就,这一现象,也许暗示了克的特殊地位和身份。</p>
      </div>

      <div class="map-section">
        <h2 class="section-title">克鼎分布地图</h2>
        <div class="map-container">
          <!-- 地图容器 -->
          <div id="china-japan-map" class="map-element"></div>

          <!-- 地图图例 -->
          <div class="map-legend">
            <div class="legend-item">
              <div class="legend-color china-color"></div>
              <span>中国机构</span>
            </div>
            <div class="legend-item">
              <div class="legend-color japan-color"></div>
              <span>日本机构</span>
            </div>
          </div>
        </div>
      </div>

      <div class="relics-comparison">
        <h2 class="section-title">克鼎藏品信息</h2>

        <div class="relics-container">
          <!-- 上海博物馆藏大克鼎 -->
          <div id="shanghai-large" class="relic-card">
            <h3 class="relic-title">上海博物馆藏大克鼎</h3>
            <div class="relic-image">
              <img src="@/assets/上海大克鼎.png" alt="上海博物馆藏大克鼎" @error="handleImageError" />
            </div>
            <div class="relic-details">
              <div class="detail-row"><span class="label">时代:</span> <span class="value">西周</span></div>
              <div class="detail-row"><span class="label">详细年代:</span> <span class="value">西周中期</span></div>
              <div class="detail-row"><span class="label">类别:</span> <span class="value">铜器</span></div>
              <div class="detail-row"><span class="label">进阶类别:</span> <span class="value">饪食器、礼器</span></div>
              <div class="detail-row"><span class="label">尺寸:</span> <span class="value">高93.1厘米，口径75.6厘米</span></div>
              <div class="detail-row"><span class="label">产地:</span> <span class="value">陕西</span></div>
              <div class="detail-row"><span class="label">来源:</span> <span class="value">光绪中期陕西省扶风县法门镇任村出土</span></div>
              <div class="detail-row"><span class="label">铭文字数:</span> <span class="value">72字</span></div>
            </div>
            <a href="https://www.shanghaimuseum.net/mu/frontend/pg/article/id/CI00000656" target="_blank" class="website-link">
              <span class="link-icon">🔗</span> 查看官网信息
            </a>
          </div>

          <!-- 上海博物馆藏小克鼎 -->
          <div id="shanghai-small" class="relic-card">
            <h3 class="relic-title">上海博物馆藏小克鼎</h3>
            <div class="relic-image">
              <img src="@/assets/上海小克鼎.png" alt="上海博物馆藏小克鼎" @error="handleImageError" />
            </div>
            <div class="relic-details">
              <div class="detail-row"><span class="label">时代:</span> <span class="value">西周</span></div>
              <div class="detail-row"><span class="label">详细年代:</span> <span class="value">西周中期</span></div>
              <div class="detail-row"><span class="label">类别:</span> <span class="value">铜器</span></div>
              <div class="detail-row"><span class="label">进阶类别:</span> <span class="value">饪食器、礼器</span></div>
              <div class="detail-row"><span class="label">尺寸:</span> <span class="value">高56.5厘米，口径49厘米</span></div>
              <div class="detail-row"><span class="label">产地:</span> <span class="value">陕西</span></div>
              <div class="detail-row"><span class="label">来源:</span> <span class="value">光绪中期陕西省扶风县法门镇任村出土</span></div>
              <div class="detail-row"><span class="label">铭文字数:</span> <span class="value">72字</span></div>
            </div>
            <a href="https://www.shanghaimuseum.net/mu/frontend/pg/article/id/CI00000653" target="_blank" class="website-link">
              <span class="link-icon">🔗</span> 查看官网信息
            </a>
          </div>

          <!-- 黑川古文化研究所藏小克鼎 -->
          <div id="kurokawa" class="relic-card">
            <h3 class="relic-title">黑川古文化研究所藏小克鼎</h3>
            <div class="relic-image">
              <img src="@/assets/日本黑川.png" alt="黑川古文化研究所藏小克鼎" @error="handleImageError" />
            </div>
            <div class="relic-details">
              <div class="detail-row"><span class="label">时代:</span> <span class="value">西周</span></div>
              <div class="detail-row"><span class="label">详细年代:</span> <span class="value">西周中期</span></div>
              <div class="detail-row"><span class="label">类别:</span> <span class="value">铜器</span></div>
              <div class="detail-row"><span class="label">进阶类别:</span> <span class="value">饪食器、礼器</span></div>
              <div class="detail-row"><span class="label">尺寸:</span> <span class="value">通高45.7厘米，口径41.5厘米</span></div>
              <div class="detail-row"><span class="label">产地:</span> <span class="value">陕西</span></div>
              <div class="detail-row"><span class="label">来源:</span> <span class="value">光绪中期陕西省扶风县法门镇任村出土</span></div>
              <div class="detail-row"><span class="label">收藏历史:</span> <span class="value">潘福动旧藏</span></div>
              <div class="detail-row"><span class="label">铭文字数:</span> <span class="value">72字</span></div>
            </div>
            <a href="http://www.kurokawa-institute.or.jp/publics/index/85/" target="_blank" class="website-link">
              <span class="link-icon">🔗</span> 查看官网信息
            </a>
          </div>

          <!-- 故宫博物院藏小克鼎 -->
          <div id="palace" class="relic-card">
            <h3 class="relic-title">故宫博物院藏小克鼎</h3>
            <div class="relic-image">
              <img src="@/assets/故宫小克鼎.png" alt="故宫博物院藏小克鼎" @error="handleImageError" />
            </div>
            <div class="relic-details">
              <div class="detail-row"><span class="label">时代:</span> <span class="value">西周</span></div>
              <div class="detail-row"><span class="label">详细年代:</span> <span class="value">西周中期</span></div>
              <div class="detail-row"><span class="label">类别:</span> <span class="value">铜器</span></div>
              <div class="detail-row"><span class="label">进阶类别:</span> <span class="value">饪食器、礼器</span></div>
              <div class="detail-row"><span class="label">尺寸:</span> <span class="value">高35.4厘米，宽33.6厘米，重12.54kg</span></div>
              <div class="detail-row"><span class="label">产地:</span> <span class="value">陕西</span></div>
              <div class="detail-row"><span class="label">来源:</span> <span class="value">光绪中期陕西省扶风县法门镇任村出土</span></div>
              <div class="detail-row"><span class="label">铭文字数:</span> <span class="value">8行72字</span></div>
            </div>
            <a href="https://www.dpm.org.cn/collection/bronze/228228.html" target="_blank" class="website-link">
              <span class="link-icon">🔗</span> 查看官网信息
            </a>
          </div>

          <!-- 藤井有邻馆藏小克鼎 -->
          <div id="fujii" class="relic-card">
            <h3 class="relic-title">京都藤井有邻馆藏小克鼎</h3>
            <div class="relic-image">
              <img src="@/assets/京都藤井.png" alt="藤井有邻馆藏小克鼎" @error="handleImageError" />
            </div>
            <div class="relic-details">
              <div class="detail-row"><span class="label">时代:</span> <span class="value">西周</span></div>
              <div class="detail-row"><span class="label">详细年代:</span> <span class="value">西周中期</span></div>
              <div class="detail-row"><span class="label">类别:</span> <span class="value">铜器</span></div>
              <div class="detail-row"><span class="label">铭文字数:</span> <span class="value">18行72字（重文2字）</span></div>
              <div class="detail-row"><span class="label">备注:</span> <span class="value">官网未查询到详细信息</span></div>
            </div>
            <div class="website-link disabled">
              <span class="link-icon">🔗</span> 官网未提供相关信息
            </div>
          </div>

          <!-- 天津博物馆藏小克鼎 -->
          <div id="tianjin" class="relic-card">
            <h3 class="relic-title">天津博物馆藏小克鼎</h3>
            <div class="relic-image">
              <img src="@/assets/天津小克鼎.png" alt="天津博物馆藏小克鼎" @error="handleImageError" />
            </div>
            <div class="relic-details">
              <div class="detail-row"><span class="label">时代:</span> <span class="value">西周（公元前1046-前771）</span></div>
              <div class="detail-row"><span class="label">类别:</span> <span class="value">铜器</span></div>
              <div class="detail-row"><span class="label">尺寸:</span> <span class="value">高35.1厘米，口径32.8厘米</span></div>
            </div>
            <a href="https://www.tjbwg.com/cn/collectionInfo.aspx?Id=2340" target="_blank" class="website-link">
              <span class="link-icon">🔗</span> 查看官网信息
            </a>
          </div>

          <!-- 书道博物馆藏小克鼎 -->
          <div id="shodou" class="relic-card">
            <h3 class="relic-title">东京台东区立书道博物馆藏小克鼎</h3>
            <div class="relic-image">
              <img src="@/assets/书道博物馆.png" alt="书道博物馆藏小克鼎" @error="handleImageError" />
            </div>
            <div class="relic-details">
              <div class="detail-row"><span class="label">类别:</span> <span class="value">铜器</span></div>
              <div class="detail-row"><span class="label">铭文字数:</span> <span class="value">9行72字（重文2字）</span></div>
              <div class="detail-row"><span class="label">备注:</span> <span class="value">青铜器鼎（用于煮沸和烹饪食物的器皿）。铭文书法婉约，但也有起笔和收笔，笔锋犀利。</span></div>
            </div>
            <a href="https://www.taitogeibun.net/shodou/oshirase/news/533/" target="_blank" class="website-link">
              <span class="link-icon">🔗</span> 查看官网信息
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// 图片路径
const relicImages = {
  'shanghai-large': '@/assets/上海大克鼎.png',
  'shanghai-small': '@/assets/上海小克鼎.png',
  'kurokawa': '@/assets/日本黑川.png',
  'palace': '@/assets/故宫小克鼎.png',
  'fujii': '@/assets/keding-main.jpg',
  'tianjin': '@/assets/天津小克鼎.png',
  'shodou': '@/assets/keding-main.jpg'
};

// 地图实例
let map: any = null;

// 处理图片加载错误
const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMmE0YTRhIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2I2ZmZmMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuWbvuWDj+Wkp+WtpjwvdGV4dD48L3N2Zz4=';
};

// 滚动到指定藏品
const scrollToItem = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// 初始化地图
const initMap = () => {
  // 检查是否已加载地图API
  if (!window.AMap) {
    console.error('AMap API not loaded');
    return;
  }

  // 初始化地图
  map = new AMap.Map('china-japan-map', {
    zoom: 5,
    center: [120, 35],
    viewMode: '2D',
    mapStyle: 'amap://styles/darkblue',
    zoomEnable: true,
    dragEnable: true,
    scrollWheel: true,
    touchZoom: true,
    doubleClickZoom: true
  });

  // 定义标记点数据
  const markers = [
    {
      id: 'shanghai-large',
      name: '上海博物馆',
      position: [121.47, 31.23],
      country: 'china',
      content: '上海博物馆 - 藏有大克鼎'
    },
    {
      id: 'shanghai-small',
      name: '上海博物馆',
      position: [121.47, 31.23],
      country: 'china',
      content: '上海博物馆 - 藏有小克鼎'
    },
    {
      id: 'kurokawa',
      name: '黑川古文化研究所',
      position: [135.36, 34.80],
      country: 'japan',
      content: '黑川古文化研究所 - 藏有小克鼎'
    },
    {
      id: 'palace',
      name: '故宫博物院',
      position: [116.40, 39.92],
      country: 'china',
      content: '故宫博物院 - 藏有小克鼎'
    },
    {
      id: 'fujii',
      name: '藤井有邻馆',
      position: [135.77, 35.01],
      country: 'japan',
      content: '藤井有邻馆 - 藏有小克鼎'
    },
    {
      id: 'tianjin',
      name: '天津博物馆',
      position: [117.20, 39.08],
      country: 'china',
      content: '天津博物馆 - 藏有小克鼎'
    },
    {
      id: 'shodou',
      name: '书道博物馆',
      position: [139.69, 35.69],
      country: 'japan',
      content: '书道博物馆 - 藏有小克鼎'
    }
  ];

  // 创建标记点
  markers.forEach(markerData => {
    const marker = new AMap.Marker({
      position: markerData.position,
      title: markerData.name,
      content: createMarkerContent(markerData.country),
      offset: new AMap.Pixel(-10, -10)
    });

    // 添加点击事件
    marker.on('click', () => {
      scrollToItem(markerData.id);
    });

    // 添加信息窗口
    const infoWindow = new AMap.InfoWindow({
      content: `<div class="custom-info-window">${markerData.content}</div>`,
      offset: new AMap.Pixel(0, -30)
    });

    marker.on('mouseover', () => {
      infoWindow.open(map, marker.getPosition());
    });

    marker.on('mouseout', () => {
      infoWindow.close();
    });

    // 将标记添加到地图
    map.add(marker);
  });
};

// 创建标记内容
const createMarkerContent = (country: string) => {
  const color = country === 'china' ? '#e74c3c' : '#3498db';
  return `
    <div class="custom-marker" style="background-color: ${color};">
      <div class="marker-pulse"></div>
    </div>
  `;
};

// 加载地图API
const loadMapAPI = () => {
  return new Promise((resolve, reject) => {
    // 检查是否已加载
    if (window.AMap) {
      resolve(true);
      return;
    }

    // 创建脚本标签
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = `https://webapi.amap.com/maps?v=2.0&key=d02e5b03851d438002e1bbf7fdc7a4ec&plugin=AMap.ToolBar,AMap.Scale`;

    script.onload = () => {
      resolve(true);
    };

    script.onerror = () => {
      reject(new Error('Failed to load AMap API'));
    };

    document.head.appendChild(script);
  });
};

// 组件挂载时初始化地图
onMounted(async () => {
  try {
    await loadMapAPI();
    initMap();
  } catch (error) {
    console.error('Error initializing map:', error);
  }
});

// 组件卸载时销毁地图
onUnmounted(() => {
  if (map) {
    map.destroy();
  }
});
</script>

<style scoped>
.metadata-view {
  min-height: 100vh;
  width: 100%;
  background-color: transparent;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-title {
  text-align: center;
  display: block;
  font-size: 4rem;
  margin-bottom: 0rem;
  color: #c5af7a;
  text-shadow: 0 0 10px rgba(255, 206, 188, 0.3), 0 0 20px rgba(255, 206, 188, 0.2);
  font-family: '禹卫书法简体', '方正清刻本悦宋简体', serif;
  padding-bottom: 0.5rem;
}

.page-title::after {
  display: none;
}

.intro-text {
  max-width: 1200px;
  margin: 0 auto 3rem auto;
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1.8rem;
  border-radius: 12px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(197, 175, 122, 0.1);
  font-family: 'SimSun', sans-serif;
}

.map-section {
  margin: 3rem 0;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.section-title {
  color: #c5af7a;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;
  padding-bottom: 0.5rem;
  font-family: 'SimSun', serif;
}

.section-title::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 80px;
  height: 2px;
  background: linear-gradient(to right, #c5af7a, transparent 80%);
  border-radius: 3px;
}

.map-container {
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}

.map-element {
  width: 100%;
  height: 100%;
}

/* 地图图例样式 */
.map-legend {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.7);
  padding: 10px 15px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.legend-item {
  display: flex;
  align-items: center;
  margin: 5px 0;
  color: #ffffff;
  font-size: 12px;
}

.legend-color {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 8px;
}

.china-color {
  background-color: #e74c3c;
}

.japan-color {
  background-color: #3498db;
}

/* 藏品区域样式 */
.relics-comparison {
  padding: 0 1rem;
}

.relics-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.relic-card {
  background-color: rgba(205, 255, 249, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  border: 1px solid rgba(197, 175, 122, 0.2);
}

.relic-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(255, 206, 188, 0.3), 0 8px 16px rgba(0, 0, 0, 0.5);
}

.relic-title {
  color: #b6fff2;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-align: center;
  font-family: 'SimSun', sans-serif;
  font-weight: bold;
  border-bottom: 1px solid rgba(197, 175, 122, 0.3);
  padding-bottom: 1rem;
}

.relic-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  margin-bottom: 1rem;
  border-radius: 8px;
  transition: transform 0.3s ease;
  background-color: #2a4a4a;
  display: flex;
  align-items: center;
  justify-content: center;
}

.relic-image:hover {
  transform: scale(1.02);
}

.relic-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.5s ease;
}

.relic-card:hover .relic-image img {
  transform: scale(1.05);
}

.relic-details {
  flex: 1;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

.detail-row {
  display: flex;
  padding: 0.4rem 0;
  margin-bottom: 0.3rem;
  border-bottom: 1px dotted rgba(197, 175, 122, 0.3);
}

.detail-row .label {
  min-width: 80px;
  font-weight: bold;
  color: #b6fff2;
  font-family: 'SimSun', sans-serif;
}

.detail-row .value {
  flex: 1;
  color: #ffffff;
  font-family: 'SimSun', sans-serif;
  line-height: 1.6;
}

.website-link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1rem;
  background-color: #000000;
  color: #69a696;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
  transition: all 0.3s ease;
  margin-top: auto;
  border: 1px solid rgba(197, 175, 122, 0.3);
}

.website-link:hover {
  background-color: #ffcebc;
  color: #000000;
  transform: translateY(-3px);
}

.website-link.disabled {
  background-color: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  opacity: 0.7;
  cursor: not-allowed;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.link-icon {
  margin-right: 5px;
}

@media (max-width: 1200px) {
  .relics-container {
    grid-template-columns: repeat(3, 1fr);
  }

  .page-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 992px) {
  .relics-container {
    grid-template-columns: repeat(2, 1fr);
  }



  .intro-text {
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
}

@media (max-width: 768px) {
  .relics-container {
    grid-template-columns: 1fr;
  }

  .page-title {
    font-size: 1.8rem;
  }

  .map-container {
    height: 400px;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .relic-title {
    font-size: 1.1rem;
  }

  .intro-text {
    padding: 1.2rem;
    font-size: 1rem;
  }

  .detail-row .label {
    min-width: 70px;
    font-size: 0.85rem;
  }

  .detail-row .value {
    font-size: 0.85rem;
  }

  .map-legend {
    bottom: 10px;
    right: 10px;
    font-size: 10px;
  }
}

/* 自定义地图标记样式 */
:deep(.custom-marker) {
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

:deep(.marker-pulse) {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

:deep(.custom-info-window) {
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 4px;
  font-size: 12px;
  border: 1px solid rgba(255, 206, 188, 0.3);
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}
</style>