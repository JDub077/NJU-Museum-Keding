<template>
  <div class="welcome-container" @click="startNavigation">
    <div class="slideshow">
      <div 
        v-for="(image, index) in images" 
        :key="index" 
        class="slide"
        :class="{ active: currentSlide === index }">
        <img :src="image" alt="欢迎" />
      </div>
    </div>
    
    <div class="music-control" @click.stop="toggleMusic">
      <i class="music-icon" :class="isMusicPlaying ? 'playing' : ''">♫</i>
    </div>

    <div v-if="isNavigating" class="loading-overlay">
      <div class="loading-container">
        <video autoplay loop muted class="loading-icon">
          <source src="/src/assets/keding.mp4" type="video/mp4">
          <!-- 图片作为后备内容 -->
          <img src="/src/assets/keding-main.jpg" alt="小克鼎" />
        </video>
        <div class="progress-bar-container">
          <div class="progress-bar" :style="{ width: progressWidth + '%' }"></div>
        </div>
        <p class="loading-text">正在进入档案馆...</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
import start1 from '@/assets/start1.png'
import start2 from '@/assets/start2.png'
import start3 from '@/assets/start3.png'

const images = [
  // start1,
  // start2,
  start2
]
const currentSlide = ref(0);
let slideInterval: number | null = null;

// 音乐控制
const isMusicPlaying = ref(false);
const audio = new Audio();
audio.src = '/src/assets/bgm.mp3'; // 需要添加BGM文件
audio.loop = true;

const toggleMusic = () => {
  if (isMusicPlaying.value) {
    audio.pause();
  } else {
    audio.play();
  }
  isMusicPlaying.value = !isMusicPlaying.value;
};

// 导航状态和进度
const isNavigating = ref(false);
const progress = ref(0);
const progressWidth = ref(0);
let progressInterval: number | null = null;

// 自动轮播
const startSlideshow = () => {
  slideInterval = window.setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % images.length;
  }, 3000); // 每3秒切换一次
};

// 开始导航到档案页面
const startNavigation = () => {
  if (isNavigating.value) return;
  
  isNavigating.value = true;
  progress.value = 0;
  progressWidth.value = 0;
  
  progressInterval = window.setInterval(() => {
    progress.value += 2;
    progressWidth.value = progress.value;
    
    if (progress.value >= 100) {
      clearInterval(progressInterval as number);
      router.push('/archive');
    }
  }, 30);
};

// 组件挂载时启动轮播
onMounted(() => {
  startSlideshow();
});

// 组件卸载时清除定时器
onUnmounted(() => {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
  if (progressInterval) {
    clearInterval(progressInterval);
  }
  audio.pause();
});
</script>

<style scoped>
.welcome-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  background-color: #000;
}

.slideshow {
  width: 100%;
  height: 100%;
  position: relative;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
  z-index: 1;
}

.slide.active {
  opacity: 1;
  z-index: 2;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 音乐控制 */
.music-control {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  cursor: pointer;
  transition: all 0.3s ease;
}

.music-control:hover {
  background-color: rgba(255, 255, 255, 0.4);
}

.music-icon {
  color: white;
  font-size: 20px;
  transition: all 0.3s ease;
}

.music-icon.playing {
  animation: rotate 3s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* 加载页面 */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
}

.loading-icon {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 20px;
  animation: pulse 2s infinite;
  object-fit: cover;
  overflow: hidden;
}

.progress-bar-container {
  width: 100%;
  height: 6px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 10px;
}

.progress-bar {
  height: 100%;
  background-color: #e9c46a;
  transition: width 0.2s;
}

.loading-text {
  color: white;
  font-size: 16px;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.3);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}

@media (max-width: 768px) {
  .loading-icon {
    width: 60px;
    height: 60px;
  }
  
  .loading-text {
    font-size: 14px;
  }
}
</style> 