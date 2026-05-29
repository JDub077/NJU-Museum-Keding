<template>
  <div class="app-container">
    <nav class="main-nav" v-if="!isHomePage && !isWelcomePage && !isArchivePage">
      <router-link to="/homenew" class="home-link">
        <span class="home-icon">🏠</span> 返回首页
      </router-link>
    </nav>
    
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isWelcomePage = computed<boolean>(() => route.path === '/');
const isHomePage = computed<boolean>(() => route.path === '/homenew');
const isArchivePage = computed<boolean>(() => route.path === '/archive');
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

body {
  font-family: '方正清刻本悦宋简体', '宋体', 'SimSun', 'STSong', serif;
  color: #ffffff;
  background-color: #000000; /* 底色 */
  background-image: url('../assets/background.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover; /* 覆盖整个视口 */
  line-height: 1.6;
  background-attachment: fixed;
}

.app-container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

.main-nav {
  padding: 1rem 2rem;
  background-color: #000000;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
}

.home-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #ffeebc; /* 修改为ffeebc金色 */
  font-weight: bold;
  transition: color 0.3s;
  font-size: 1.1rem;
  font-family: '汉仪星字体简', '宋体', sans-serif;
}

.home-link:hover {
  color: #c5af7a; /* 悬停效果 */
}

.home-icon {
  margin-right: 0.5rem;
  font-size: 1.2rem;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> 