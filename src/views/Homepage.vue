<template>
  <div class="homepage">
    <header class="header">
      <h1>小克鼎</h1>
      <p>中国古代青铜器文化瑰宝</p>
    </header>

    <div class="main-content">
      <div class="circular-layout">
        <!-- 中央的大克鼎（视频） -->
        <div class="center-vessel">
          <video autoplay loop muted class="main-video">
            <source src="/src/assets/keding.mp4" type="video/mp4">
            <!-- 图片作为后备内容 -->
            <img src="/src/assets/keding-main.jpg" alt="小克鼎全貌" class="main-image" />
          </video>
        </div>

        <!-- 六个围绕的板块 -->
        <router-link to="/comparison" class="section-icon section-1">
          <div class="icon-circle">
            <img src="/src/assets/comparison-icon.png" alt="家族对比" class="icon-image" style="width: 80%; height: 80%; object-fit: contain;" />
          </div>
          <span class="icon-label">横向对比</span>
        </router-link>

        <router-link to="/vessel-type" class="section-icon section-2">
          <div class="icon-circle">
            <img src="/src/assets/vessel-type-icon.png" alt="器型深变" class="icon-image" style="width: 80%; height: 80%; object-fit: contain;" />
          </div>
          <span class="icon-label">器型深变</span>
        </router-link>

        <router-link to="/decoration" class="section-icon section-3">
          <div class="icon-circle">
            <img src="/src/assets/decoration-icon.png" alt="纹饰演变" class="icon-image" style="width: 80%; height: 80%; object-fit: contain;" />
          </div>
          <span class="icon-label">纹饰演变</span>
        </router-link>

        <router-link to="/insc_font" class="section-icon section-4">
          <div class="icon-circle">
            <img src="/src/assets/inscription-icon.png" alt="铭文" class="icon-image" style="width: 80%; height: 80%; object-fit: contain;" />
          </div>
          <span class="icon-label">铭文内容</span>
        </router-link>

        <router-link to="/collection-history" class="section-icon section-5">
          <div class="icon-circle">
            <img src="/src/assets/collection-history-icon.png" alt="鉴藏历史" class="icon-image" style="width: 80%; height: 80%; object-fit: contain;" />
          </div>
          <span class="icon-label">鉴藏历史</span>
        </router-link>

        <router-link to="/academic-research" class="section-icon section-6">
          <div class="icon-circle">
            <img src="/src/assets/academic-icon.png" alt="学术成果" class="icon-image" style="width: 80%; height: 80%; object-fit: contain;" />
          </div>
          <span class="icon-label">学术成果</span>
        </router-link>
      </div>
    </div>

    <footer class="footer">
      <p>© {{ currentYear }} 小克鼎研究项目</p>
      <div class="footer-links">
        <a href="/about">关于我们</a>
        <a href="/contact">联系方式</a>
        <a href="/references">参考文献</a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.homepage {
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  font-family: '方正清刻本悦宋简体', '宋体', "SimSun", "STSong", serif;
  display: flex;
  flex-direction: column;
  background-color: transparent; /* 使用全局黑色背景 */
  color: #ffffff;
  margin: 0;
  overflow-x: hidden;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.header h1 {
  font-size: 3.5rem;
  color: #c5af7a;
  font-weight: bold;
  text-shadow: 0 0 10px rgba(255, 206, 188, 0.3), 0 0 20px rgba(255, 206, 188, 0.2);
  font-family: '禹卫书法简体', '方正清刻本悦宋简体', serif;
}

.header p {
  color: #ffffff;
  font-size: 1.4rem;
  font-family: '方正清刻本悦宋简体', '宋体', sans-serif;
}

.main-content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
}

.circular-layout {
  position: relative;
  width: 850px;
  height: 850px;
  margin: 0 auto;
}

.center-vessel {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 380px;
  height: 380px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 40px rgba(255, 206, 188, 0.3);
  z-index: 2;
  transition: all 0.5s ease;
  border: 8px solid #69a696;
}

.center-vessel:hover {
  transform: translate(-50%, -50%) scale(1.05);
  box-shadow: 0 0 50px rgba(255, 206, 188, 0.5);
}

.main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.section-icon {
  position: absolute;
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #69a696;
  transition: all 0.3s ease;
}

.section-icon:hover {
  transform: scale(1.1);
}

.icon-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgba(56, 70, 61, 0.7);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  font-size: 2.5rem;
  transition: all 0.3s ease;
  border: 3px solid #69a696;
}

.section-icon:hover .icon-circle {
  background-color: #c5af7a;
  color: #000000;
}

.icon-label {
  font-size: 1.1rem;
  text-align: center;
  font-weight: bold;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  font-family: '方正清刻本悦宋简体', '宋体', sans-serif;
}

/* 定位六个板块图标 */
.section-1 {
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
}

.section-2 {
  top: 25%;
  right: 5%;
}

.section-3 {
  bottom: 25%;
  right: 5%;
}

.section-4 {
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
}

.section-5 {
  bottom: 25%;
  left: 5%;
}

.section-6 {
  top: 25%;
  left: 5%;
}

.footer {
  border-top: 1px solid rgba(197, 175, 122, 0.3);
  padding-top: 2rem;
  text-align: center;
  margin-top: auto;
  color: #ffffff;
  font-family: '宋体', sans-serif;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
}

.footer-links a {
  color: #ffcebc;
  text-decoration: none;
  font-family: '汉仪星字体简', '宋体', sans-serif;
}

.footer-links a:hover {
  text-decoration: underline;
  color: #c5af7a;
}

@media (max-width: 900px) {
  .circular-layout {
    width: 700px;
    height: 700px;
  }
  
  .center-vessel {
    width: 320px;
    height: 320px;
  }
  
  .section-icon {
    width: 120px;
    height: 120px;
  }
  
  .icon-circle {
    width: 85px;
    height: 85px;
    font-size: 2.2rem;
  }
}

@media (max-width: 768px) {
  .circular-layout {
    width: 360px;
    height: 520px;
  }
  
  .center-vessel {
    width: 220px;
    height: 220px;
  }
  
  .section-icon {
    width: 90px;
    height: 90px;
  }
  
  .icon-circle {
    width: 70px;
    height: 70px;
    font-size: 1.8rem;
  }
  
  .icon-label {
    font-size: 0.9rem;
  }
  
  /* 调整响应式布局的位置 */
  .section-1 { top: 5%; }
  .section-2 { top: 25%; right: 5%; }
  .section-3 { bottom: 25%; right: 5%; }
  .section-4 { bottom: 5%; }
  .section-5 { bottom: 25%; left: 5%; }
  .section-6 { top: 25%; left: 5%; }
  
  .header h1 {
    font-size: 2.8rem;
  }
  
  .header p {
    font-size: 1.2rem;
  }
}
</style>
