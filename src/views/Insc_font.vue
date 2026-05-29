<template>
  <h1 class="page-title">铭文</h1>
  <div class="collection-history-view">
    <div class="period-box-container">
      <!-- 早期 -->
      <div class="period-box" @click="navigateToPeriod('early')">
        <h2 class="period-title">早期</h2>
        <div class="period-image-wrapper">
          <img src="../assets/inscription_1.png" alt="早期图片" class="period-image" />
        </div>
        <h3 class="period-subtitle">周文王、周武王、周成王、周康王和周昭王</h3>
        <p class="period-description">
          典型器物及其铭文：利簋（"利"青铜簋）
        </p>
      </div>

      <!-- 中期 -->
      <div class="period-box" @click="navigateToPeriod('mid')">
        <h2 class="period-title">中期</h2>
        <div class="period-image-wrapper">
          <img src="../assets/inscription_2.png" alt="中期图片" class="period-image" />
        </div>
        <h3 class="period-subtitle">周穆王、周恭王、周懿王、周孝王、周夷王</h3>
        <p class="period-description">
          典型器物及铭文：小克鼎
        </p >
      </div>

      <!-- 晚期 -->
      <div class="period-box" @click="navigateToPeriod('late')">
        <h2 class="period-title">晚期</h2>
        <div class="period-image-wrapper">
          <img src="../assets/inscription_3.png" alt="晚期图片" class="period-image" />
        </div>
        <h3 class="period-subtitle">周厉王、周宣王、周幽王</h3>
        <p class="period-description">
          典型器物及其铭文：㝬簋（胡簋）
        </p >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToPeriod = async (period: string) => {
  try {
    if (period === 'early') {
      await router.push('/inscription_early')
    } else if (period === 'mid') {
      await router.push('/inscription_mid')
    } else if (period === 'late') {
      await router.push('/inscription_late')
    }
    // 强制刷新页面内容
    await router.go(0)
  } catch (error) {
    console.error('Navigation error:', error)
  }
}
</script>

<style scoped>
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

.collection-history-view {
  background-color: transparent;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  box-sizing: border-box;
}

.period-box-container {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
}

.period-box {
  width: 300px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 16px;
  padding: 1.5rem;
  cursor: pointer;
  box-shadow: 0 0 15px rgba(255, 206, 188, 0.2), 0 4px 10px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.period-box:hover {
  transform: translateY(-8px);
  box-shadow: 0 0 25px rgba(255, 206, 188, 0.4), 0 6px 14px rgba(0, 0, 0, 0.6);
}

.period-title {
  text-align: center;
  color: #c5af7a;
  font-size: 1.6rem;
  margin-bottom: 1rem;
  font-family: '方正清刻本悦宋简体', serif;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
}

.period-image-wrapper {
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 1rem;
}

.period-image {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
  transition: transform 0.3s ease;
}

.period-box:hover .period-image {
  transform: scale(1.05);
}

.period-description {
  color: #ffffff;
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.6;
  font-family: '宋体', sans-serif;
}

.period-subtitle {
  text-align: center;
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: bold;
  margin: 0.5rem 0 1rem;
  font-family: '方正清刻本悦宋简体', serif;
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .period-box-container {
    flex-direction: column;
    align-items: center;
  }

  .period-box {
    width: 90%;
    max-width: 350px;
  }
  .page-title {
    font-size: 3rem;
  }
}
</style>