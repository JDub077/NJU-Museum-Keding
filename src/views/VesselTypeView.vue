<template>
  <div class="vessel-type-view">
    <h1 class="page-title">器型演变</h1>
    
    <div class="vessel-intro">
      <p>青铜鼎是中国古代青铜器中最具代表性的礼器之一，其形制演变反映了不同时期的礼制变化和工艺水平。小克鼎属于西周早期的圆鼎，具有该时期的典型特征。</p>
    </div>

    <div class="main-container">
      <!-- 左侧：小克鼎特征 -->
      <div class="left-section">
        <div class="keding-section">
          <h2>小克鼎器型特征</h2>
          <div class="keding-content">
            <div class="keding-video">
              <video autoplay loop muted>
                <source src="/src/assets/keding.mp4" type="video/mp4">
                <img src="/src/assets/keding-main.jpg" alt="小克鼎全貌" class="fallback-image" />
              </video>
            </div>
            <div>
              <p>小克鼎为西周早期圆鼎，高29厘米左右，属中型礼器。器型特征包括：圆形腹，三足，口部微微外撇，双耳竖立，造型挺拔；腹部略鼓，与商代深腹鼎相比更趋于圆润；足呈蹄形，略短粗，体现西周早期特征；整体比例协调，反映了西周初年青铜工艺的高超水平。</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧：滚动的变化规律 -->
      <div class="right-section">
        <div class="scrollable-container">
          <div class="scrollable-content">
            <h2>鼎的造型变化一般规律</h2>
            <div class="evolution-timeline">
              <div class="timeline-item">
                <div class="timeline-image">
                  <img src="@/assets/vessel/erlitou.png" alt="二里头晚期鼎" />
                </div>
                <div class="timeline-content">
                  <h3 class="time-period">二里头晚期(偃师二里头)</h3>
                  <p class="evolution-text">圆腹、腹深、平底;锥状四棱或三棱或圆锥形空心足，半圆形或方形耳，一耳与一足相对应，另一耳在二足之间。</p>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-image">
                  <img src="@/assets/vessel/zaoshang.png" alt="早商鼎" />
                </div>
                <div class="timeline-content">
                  <h3 class="time-period">早商(郑州二里岗)</h3>
                  <p class="evolution-text">出现方鼎。早期整体器壁较薄，晚期器壁加厚。足多锥状，晚期少数实心柱状足(上大下小)。腹圆，且深。立耳，敞口，一耳与一足相对应。</p>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-image">
                  <img src="@/assets/vessel/wanshang.png" alt="晚商鼎" />
                </div>
                <div class="timeline-content">
                  <h3 class="time-period">晚商(安阳殷墟)</h3>
                  <p class="evolution-text">器壁较厚。腹变浅，足大部柱足(上下等大)，晚期还出现略显中间细二头粗的兽蹄形足。耳多封口，两耳与三足均不对应。</p>
                </div>
              </div>

              <div class="timeline-item highlight">
                <div class="timeline-image">
                  <img src="@/assets/vessel/xizhouzaoqi.png" alt="西周早期鼎" />
                </div>
                <div class="timeline-content">
                  <h3 class="time-period">西周早期(武王-穆王)</h3>
                  <p class="evolution-text">器形与晚商接近，但器壁更显厚重，出现列鼎。一般直立耳，双耳微外撇。足柱形或类蹄形足，较细高。腹较浅，下部略显外鼓。晚期腹更显垂腹状，柱足显短细。</p>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-image">
                  <img src="@/assets/vessel/xizhouzhongwanqi.png" alt="西周中晚期鼎" />
                </div>
                <div class="timeline-content">
                  <h3 class="time-period">西周中晚期(共王一幽王)</h3>
                  <p class="evolution-text">列鼎盛行。一般腹变浅，垂腹更明显，腹形近宽扁，晚期出现半球形腹，但腹显深。足多蹄形，背面有凹槽，足截面近半圆形。</p>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-image">
                  <img src="@/assets/vessel/chunqiuzhongwanqi.png" alt="春秋中晚期鼎" />
                </div>
                <div class="timeline-content">
                  <h3 class="time-period">春秋中晚期</h3>
                  <p class="evolution-text">春秋早期特点与西周晚期接近，春秋中期始见本段特色。整体可分二大类，有盖与无盖。有盖的，一律附耳;无盖的，或立耳，或附耳。足一律兽蹄形，一般较瘦长，足跟置于腹部偏下。腹部中期较深，晚期较浅。</p>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-image">
                  <img src="@/assets/vessel/zhangguozhongwanqi.png" alt="战国中晚期鼎" />
                </div>
                <div class="timeline-content">
                  <h3 class="time-period">战国中晚期</h3>
                  <p class="evolution-text">三蹄足向低矮发展，足跟置于腹部偏中。多有盖，附耳。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 无需额外的数据处理逻辑
</script>

<style scoped>
.vessel-type-view {
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
}

.page-title {
  text-align: center;
  font-size: 4rem;
  margin-bottom: 2rem;
  color: #c5af7a;
  text-shadow: 0 0 10px rgba(255, 206, 188, 0.3), 0 0 20px rgba(255, 206, 188, 0.2);
  font-family: '禹卫书法简体', '方正清刻本悦宋简体', serif;
  position: relative;
  padding-bottom: 0.5rem;
}

.vessel-intro {
  text-align: center;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;
}

.vessel-intro p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #ffffff;
  font-family: '方正清刻本悦宋简体', '宋体', sans-serif;
}

.main-container {
  display: flex;
  width: 100%;
  height: calc(100vh - 300px);
  gap: 2rem;
  padding: 0 2rem;
}

/* 左侧样式 */
.left-section {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.keding-section {
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(197, 175, 122, 0.2);
  height: 100%;
}

.keding-section h2 {
  color: #c5af7a;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
  border-bottom: 2px solid rgba(197, 175, 122, 0.3);
  padding-bottom: 0.5rem;
  font-family: '方正清刻本悦宋简体', serif;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
}

.keding-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: calc(100% - 80px);
}

.keding-video {
  flex: 0 0 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.keding-video video,
.fallback-image {
  max-width: 250px;
  max-height: 180px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.feature-description {
  flex: 1;
  padding: 1.5rem;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  border-left: 4px solid #c5af7a;
}

.feature-description p {
  color: #ffffff;
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 0;
  font-family: '方正清刻本悦宋简体', '宋体', sans-serif;
  text-align: justify;
}

/* 右侧滚动样式 */
.right-section {
  flex: 1;
}

.scrollable-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 2rem;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(197, 175, 122, 0.2);
}

.scrollable-container::-webkit-scrollbar {
  width: 8px;
}

.scrollable-container::-webkit-scrollbar-track {
  background: transparent;
}

.scrollable-container::-webkit-scrollbar-thumb {
  background-color: rgba(197, 175, 122, 0.3);
  border-radius: 4px;
}

.scrollable-container::-webkit-scrollbar-thumb:hover {
  background-color: rgba(197, 175, 122, 0.5);
}

.scrollable-content h2 {
  color: #c5af7a;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  text-align: center;
  border-bottom: 2px solid rgba(197, 175, 122, 0.3);
  padding-bottom: 0.5rem;
  font-family: '方正清刻本悦宋简体', serif;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
}

.timeline-item {
  display: flex;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 4px solid rgba(64, 142, 145, 0.5);
}

.timeline-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.timeline-item.highlight {
  border-left-color: #c5af7a;
  box-shadow: 0 0 15px rgba(197, 175, 122, 0.3);
}

.timeline-image {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
  margin-right: 1.5rem;
}

.timeline-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.timeline-content {
  flex: 1;
}

.time-period {
  font-size: 1.2rem;
  font-weight: bold;
  color: #408e91;
  margin: 0 0 0.8rem 0;
  font-family: '方正清刻本悦宋简体', serif;
}

.timeline-item.highlight .time-period {
  color: #c5af7a;
}

.evolution-text {
  margin: 0;
  line-height: 1.6;
  color: #ffffff;
  font-size: 1rem;
  font-family: '宋体', sans-serif;
}

@media (max-width: 768px) {
  .main-container {
    flex-direction: column;
    height: auto;
  }
  
  .timeline-item {
    flex-direction: column;
  }
  
  .timeline-image {
    margin-right: 0;
    margin-bottom: 1rem;
    width: 100px;
    height: 100px;
  }
  
  .keding-content {
    flex-direction: column;
  }
  
  .keding-video {
    flex: 0 0 150px;
  }
  
  .keding-video video,
  .fallback-image {
    max-width: 200px;
    max-height: 140px;
  }
  
  .page-title {
    font-size: 3rem;
  }
}
</style>