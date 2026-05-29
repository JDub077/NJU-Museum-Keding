<template>
  <div class="collection-view">
    <div class="content-container">
      <!-- 左侧标题 -->
      <h1 class="page-title">鉴藏历史</h1>

      <!-- 右侧描述文字 -->
      <div class="description-text">
        <p>作为一件历经沧桑的青铜重器，我的故事要从清光绪十六年（1890）说起。这一年，我在陕西扶风县法门镇任家村一处窖藏出土，重见天日之后，我先于光绪二十七年（1901）与大克鼎和其他五件小克鼎一起被清末大臣端方收藏。中华民国三年（1914），克鼎家族中最小的我被原汇文书院院长福开森先生从端方后人处购得。后福开森将我捐赠给汇文书院发展而来的金陵大学。如今，我静静地坐立在南京大学考古与艺术博物馆的展厅里，向每一位来访者诉说着三千年的历史沧桑。</p>
      </div>

      <!-- 人物卡片区域 -->
      <div class="people-section">
        <!-- 端方 -->
        <div class="person-card" @click="navigateToProfile('duanfang')">
          <div class="person-image">
            <img src="@/assets/people/250px-Duan_Fang.jpg" alt="端方" />
          </div>
          <div class="person-name">端方</div>
        </div>

        <!-- 福开森 -->
        <div class="person-card" @click="navigateToProfile('ferguson')">
          <div class="person-image">
            <img src="@/assets/people/John_Calvin_Ferguson.png" alt="福开森" />
          </div>
          <div class="person-name">福开森<br>(John Calvin<br>Ferguson)</div>
        </div>

        <!-- 金陵大学古物陈列所 -->
        <div class="institution-card">
          <div class="institution-image">
            <img src="@/assets/place/jinlingdaxue.jpg" alt="金陵大学古物陈列所" />
          </div>
          <div class="institution-name">金陵大学<br>古物陈列所（筹建）</div>
        </div>

        <!-- 南京大学博物馆 -->
        <div class="museum-card">
          <div class="museum-image">
            <img src="@/assets/place/nju_museum.png" alt="南京大学博物馆" />
          </div>
          <div class="museum-name">南京大学博物馆<br>——<br>南京大学考古与艺术博物馆</div>
        </div>
      </div>

      <!-- 右侧点击探索区域 -->
      <div class="explore-section">
        <div class="explore-text">
          点击探索<br>
          「端方其人<br>
          其事」&「福<br>
          开森其人其<br>
          事」<br>
          发现两位曾经<br>
          收藏我的收藏<br>
          家的故事！
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToProfile = (person: string) => {
  if (person === 'duanfang') {
    router.push('/collection/duanfang')
  } else if (person === 'ferguson') {
    router.push('/collection/ferguson')
  }
}
</script>

<style scoped>
.collection-view {
  background-color: transparent;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
}


/* 左侧标题 */
.left-title {
  grid-column: 1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 2rem;
}

.main-title {
  font-size: 4rem;
  color: #c5af7a;
  text-shadow: 0 0 10px rgba(255, 206, 188, 0.3), 0 0 20px rgba(255, 206, 188, 0.2);
  font-family: '禹卫书法简体', '方正清刻本悦宋简体', serif;
  margin-bottom: 2rem;
  line-height: 1.2;
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

.sub-title {
  font-size: 1.5rem;
  color: #c5af7a;
  text-shadow: 0 0 8px rgba(197, 175, 122, 0.5);
  font-family: '方正清刻本悦宋简体', '宋体', sans-serif;
  line-height: 1.4;
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

/* 右侧描述文字 */
.description-text {
  text-align: center;
  margin-bottom: 3rem;
  max-width: 1050px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;
}


.description-text p {
  color: #ffffff;
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 0;
  font-family: '方正清刻本悦宋简体', '宋体', sans-serif;
  text-align: justify;
}

/* 人物卡片区域 */
.people-section {
  grid-column: 2;
  grid-row: 2;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  align-items: center;
  justify-items: center;
  padding: 2rem 0;
}

.person-card,
.institution-card,
.museum-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}

.person-card:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 0 25px rgba(197, 175, 122, 0.6);
}

.institution-card,
.museum-card {
  cursor: default;
}

.person-image,
.institution-image,
.museum-image {
  width: 160px;
  height: 240px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
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

.person-image img,
.institution-image img,
.museum-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.person-name,
.institution-name,
.museum-name {
  color: #c5af7a;
  font-size: 1rem;
  font-weight: bold;
  font-family: '方正清刻本悦宋简体', '宋体', sans-serif;
  line-height: 1.3;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
}

/* 右侧探索区域 */
.explore-section {
  position: fixed;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

.explore-text {
  color: #ffffff;
  font-size: 1.2rem;
  line-height: 1.6;
  font-family: '方正清刻本悦宋简体', '宋体', sans-serif;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  background-color: rgba(0, 0, 0, 0.6);
  padding: 2rem;
  border-radius: 15px;
  border: 2px solid #c5af7a;
  box-shadow: 0 0 20px rgba(197, 175, 122, 0.3);
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .content-container {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    height: auto;
  }
  
  .left-title {
    grid-column: 1;
    grid-row: 1;
    writing-mode: horizontal-tb;
    text-align: center;
  }
  
  .description-text {
    grid-column: 1;
    grid-row: 2;
  }
  
  .people-section {
    grid-column: 1;
    grid-row: 3;
    grid-template-columns: repeat(2, 1fr);
  }
  
  .explore-section {
    grid-column: 1;
    grid-row: 4;
    padding-left: 0;
  }
}

@media (max-width: 768px) {
  .people-section {
    grid-template-columns: 1fr;
  }
  
  .main-title {
    font-size: 2rem;
  }
  
  .sub-title {
    font-size: 1.2rem;
  }
  
  .person-image,
  .institution-image,
  .museum-image {
    width: 100px;
    height: 140px;
  }
}
</style>
