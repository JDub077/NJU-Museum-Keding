<template>
  <div class="decoration-view" @click="toggleView">
    <div class="content-container">
      <h1 class="page-title">纹饰</h1>

      <div class="center-image-container">
        <video src="/src/assets/keding.mp4" class="center-video" autoplay loop muted playsinline></video>
      </div>

      <div class="pattern-description" :class="{ 'hidden': !showIntro }">
        <p>       <span class="highlight-text">「我」</span>全身装饰有四种纹饰，分别为双耳的<span class="highlight-text">「夔纹」</span>，口沿下部和足部的<span class="highlight-text">「兽面纹」</span>，腹部的<span class="highlight-text">「窃曲纹」</span>与<span class="highlight-text">「环带纹」</span>。
        </p>
      </div>

      <div class="pattern-details" :class="{ 'visible': !showIntro }">
        <div class="pattern-top-section">
          <div class="pattern-top-left pattern-box">
            <h3>环带纹</h3>
            <div class="pattern-image-container">
              <img src="/src/assets/环带纹.png" alt="环带纹" class="pattern-image" />
            </div>
            <p>环带曲折如波浪起伏，又称波浪纹。凸处常填以盾形、口形纹。环带纹流行于西周中、后期。
            </p>
          </div>

          <div class="pattern-top-right pattern-box">
            <h3>窃曲纹</h3>
            <div class="pattern-image-container">
              <img src="/src/assets/窃曲纹.png" alt="窃曲纹" class="pattern-image" />
            </div>
            <p>又称波曲纹。由两端回钩的或"S"形的线条构成扁长图案，中间常填以目形纹。盛行于西周中后期，春秋战国时仍沿用。形式复杂，图案母题很可能是夔龙纹变体。常见于器物口沿部、盖边缘、钟的篆部。
            </p>
          </div>
        </div>

        <div class="pattern-bottom-section">
          <div class="pattern-bottom-left pattern-box">
            <h3>兽面纹</h3>
            <div class="pattern-image-container">
              <img src="/src/assets/兽面纹.jpg" alt="兽面纹" class="pattern-image" />
            </div>
            <p>又称饕餮纹。兽面纹象征古代传说中一种贪食的凶兽饕餮的面形，图案多有变化。商至西周时常作为器物上的主题纹饰，以兽的面部为纹饰主体，占位大，形象突出，并居器体中间显要位置，以中间鼻子凸起的扉棱为界。西周后期以后逐渐失去主题纹饰的地位，常用作器耳或器足上的装饰。
            </p>
          </div>

          <div class="pattern-bottom-right pattern-box">
            <h3>夔纹</h3>
            <div class="pattern-image-container">
              <img src="/src/assets/夔纹.png" alt="夔纹" class="pattern-image" />
            </div>
            <p>夔，古代传说中一种形似龙的动物。夔纹古时特指有一足或两足，或省略了足的龙形侧面图像，张口，长身，身躯伸直或弯曲，额顶有冠，或称"角"，尾上卷或下卷。夔纹流行于商代中期至西周中期，常作为青铜器的主要纹饰，多见于颈部；作次要纹饰时，多见于圈足。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showIntro = ref(true);

const toggleView = () => {
  showIntro.value = !showIntro.value;
};
</script>

<style scoped>
.decoration-view {
  background-color: transparent; /* 使用全局黑色背景 */
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  cursor: pointer;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

.page-title {
  text-align: center;
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #c5af7a;
  text-shadow: 0 0 10px rgba(255, 206, 188, 0.3), 0 0 20px rgba(255, 206, 188, 0.2);
  font-family: '禹卫书法简体', '方正清刻本悦宋简体', serif;
  position: relative;
  padding-bottom: 0.5rem;
}

.page-title::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background-color: #c5af7a;
  box-shadow: 0 0 5px rgba(255, 206, 188, 0.7);
}

.center-image-container {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  z-index: 5;
  transform: translateY(25%); /* 向上偏移视频位置 */
}

.center-video {
  max-width: 450px;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(255, 206, 188, 0.15);
  z-index: 10;
  transition: transform 0.3s ease;
}

.center-video:hover {
  transform: scale(1.03);
}

.pattern-description {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1.8rem;
  border-radius: 12px;
  margin-top: 4rem;
  margin-bottom: 3rem;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border: 1px solid rgba(197, 175, 122, 0.1);
  position: relative;
  overflow: hidden;
  transition: opacity 0.5s ease, transform 0.5s ease;
  z-index: 20;
}

.pattern-description.hidden {
  opacity: 0;
  transform: translateY(-20px);
  pointer-events: none;
}

.pattern-description:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6), 0 0 15px rgba(255, 206, 188, 0.2);
}

.pattern-description::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(255, 206, 188, 0.03), transparent);
  z-index: -1;
}

.pattern-description p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #ffffff;
  font-family: '方正清刻本悦宋简体', '宋体', sans-serif;
  margin: 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
}

.pattern-description .highlight-text {
  color: #69a696;
  font-weight: 600;
}

.pattern-details {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5rem 0 3rem; /* 调整上下间距 */
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
  z-index: 10;
}

.pattern-details.visible {
  opacity: 1;
  pointer-events: auto;
}

.pattern-top-section {
  padding-top: 5rem; /* 增加顶部文本框与顶部的距离 */
}

.pattern-top-section,
.pattern-bottom-section {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.pattern-box {
  background-color: rgba(205, 255, 249, 0.06);
  background-image: linear-gradient(to bottom, rgba(205, 255, 249, 0.1), rgba(0, 0, 0, 0.6));
  width: 30%;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7), 0 0 5px rgba(182, 255, 242, 0.2) inset;
  max-width: 350px;
  border: 1px solid rgba(182, 255, 242, 0.2);
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
}

.pattern-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.8), 0 0 15px rgba(182, 255, 242, 0.3);
  border-color: rgba(182, 255, 242, 0.4);
  background-image: linear-gradient(to bottom, rgba(205, 255, 249, 0.15), rgba(0, 0, 0, 0.7));
}

.pattern-top-left {
  align-self: flex-start;
  margin-left: 2rem;
}

.pattern-top-right {
  align-self: flex-start;
  margin-right: 2rem;
}

.pattern-bottom-left {
  align-self: flex-end;
  margin-left: 2rem;
}

.pattern-bottom-right {
  align-self: flex-end;
  margin-right: 2rem;
}

.pattern-box h3 {
  color: #b6fff2;
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: '方正清刻本悦宋简体', '宋体', sans-serif;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid rgba(197, 175, 122, 0.3);
  padding-bottom: 0.5rem;
  text-align: center;
  letter-spacing: 1px;
}

/* 纹饰图片容器样式 */
.pattern-image-container {
  width: 100%;
  height: 180px;
  margin-bottom: 1rem;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid rgba(197, 175, 122, 0.3);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
}

.pattern-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.pattern-box:hover .pattern-image {
  transform: scale(1.05);
}

.pattern-box:hover .pattern-image-container {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5), 0 0 8px rgba(182, 255, 242, 0.2);
}

.pattern-box p {
  color: #ffffff;
  font-size: 0.95rem;
  line-height: 1.7;
  margin: 0;
  font-family: '宋体', sans-serif;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  flex-grow: 1;
}

@media (max-width: 1024px) {
  .pattern-box {
    width: 40%;
    max-width: none;
    padding: 1rem;
  }

  .pattern-box h3 {
    font-size: 1.3rem;
  }

  .pattern-box p {
    font-size: 0.9rem;
  }

  .pattern-image-container {
    height: 150px;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 3rem;
  }

  .center-video {
    max-width: 280px;
  }

  .pattern-description p {
    font-size: 1rem;
  }

  .pattern-details {
    padding: 7rem 0 3rem;
  }

  .pattern-top-section,
  .pattern-bottom-section {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .pattern-box {
    width: 90%;
    margin: 0.5rem 0;
  }

  .pattern-top-left,
  .pattern-top-right,
  .pattern-bottom-left,
  .pattern-bottom-right {
    margin: 0;
    align-self: center;
  }

  .pattern-image-container {
    height: 200px;
  }
}
</style>