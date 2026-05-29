<template>
  <div class="archive-container" @click="navigateToHome">
    <img src="/src/assets/文物档案.jpg" alt="档案" class="archive-image" />

    <!-- 什么是鼎按钮 -->
    <div class="button-container">
      <button class="ding-info-btn" @click.stop="showDingInfo = true">
        <span>什么</span>
        <span>是鼎</span>
      </button>
    </div>

    <!-- 弹窗 -->
    <div v-if="showDingInfo" class="modal-overlay" @click.stop="showDingInfo = false">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="showDingInfo = false">×</button>
        <h3>什么是鼎？</h3>
        <div class="ding-info-text">
          <p>鼎相当现在的锅，用以煮或盛放鱼、肉用。形状大多是圆腹，两耳，三足。也有四足的方鼎和圆形、方形的扁足鼎、分裆鼎等形式。在商周奴隶制社会里，鼎曾被奴隶主贵族用来"别上下，明贵贱"，作为标志统治权力和等级的器物。</p>
          <p>文献记载，古代的青铜鼎有烹煮肉食、实牲祭祀和宴飨等各种用途。文献中分别称为:"镬鼎;牲/升鼎;羞/盂鼎"。《周礼·天官冢宰第一·亨人》:"掌共鼎镬。"郑玄注:"镬所以煮肉及鱼腊之器，既熟，乃香于鼎。"</p>
          <p>鼎，是中国古代最重要的一种礼器。商代已有森严的等级差别，不同等级可见大小、多少的不同;西周时期形成列鼎制度，表现的等级制度更为明显。天子九鼎，诸侯七鼎，卿大夫五鼎，士三鼎或一鼎。礼书记载，九鼎称为太牢，分别盛牛、羊、豕、鱼、腊、肠胃、肤、鲜鱼、鲜腊。七鼎称大牢，减少鲜鱼、鲜腊两味;五鼎称少牢，盛羊、豕、鱼、腊、肤;三鼎为豕、鱼、腊;一鼎为豕。</p>
          <p>目前来看，青铜鼎的使用自夏代晚期一直延续到两汉乃至魏晋，是青铜器中使用时间最长的，因而变化也最大。</p>
        </div>
      </div>
    </div>

    <div class="overlay">
      <p class="instruction">点击进入小克鼎数字博物馆</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const showDingInfo = ref(false);

const navigateToHome = () => {
  router.push('/homenew');
};
</script>

<style scoped>
.archive-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.archive-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.overlay {
  position: absolute;
  bottom: 30px;
  width: 100%;
  text-align: center;
  z-index: 3;
}

.instruction {
  color: #fff;
  font-size: 1.5rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
  animation: pulse 2s infinite;
}

/* 按钮容器 - 纵向居中排列 */
.button-container {
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 10;
}

/* 圆形按钮样式 - 两行文字 */
.ding-info-btn {
  background: rgba(255, 255, 255, 0.95);
  border: 2px solid #69a696;
  border-radius: 50%;
  padding: 0;
  width: 80px;
  height: 80px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #69a696;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  text-align: center;
  line-height: 1.2;
  font-family: '方正清刻本悦宋简体', '宋体', sans-serif;
}

.ding-info-btn span {
  display: block;
  line-height: 1.1;
}

.ding-info-btn span:first-child {
  margin-bottom: 2px;
}

.ding-info-btn:hover {
  background:  #69a696;
  color: white;
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
}

/* 弹窗样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal-content {
  background: white;
  border-radius: 12px;
  padding: 30px;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border: 3px solid #69a696;
  margin: 20px;
}

.modal-content h3 {
  color: #69a696;
  margin-bottom: 20px;
  text-align: center;
  font-size: 1.5rem;
  border-bottom:   2px solid #69a696;;
  padding-bottom: 10px;
}

/* 修复正文显示问题 */
.ding-info-text {
  line-height: 1.7;
  color: #333 !important; /* 强制设置颜色 */
  font-size: 1rem;
  text-align: left;
  font-family: inherit; /* 确保使用正确字体 */
}

.ding-info-text p {
  margin-bottom: 15px;
  text-indent: 2em;
  color: #333 !important; /* 强制设置段落颜色 */
}

.ding-info-text p:first-child {
  margin-top: 0;
}

.ding-info-text p:last-child {
  margin-bottom: 0;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #8B4513;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;
  line-height: 1;
}

.close-btn:hover {
  color: #ff0000;
}

@keyframes pulse {
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
}

@media (max-width: 768px) {
  .instruction {
    font-size: 1.2rem;
  }

  .button-container {
    right: 10px;
    gap: 10px;
  }

  .ding-info-btn {
    width: 70px;
    height: 70px;
    font-size: 0.9rem;
  }

  .modal-content {
    margin: 15px;
    padding: 20px;
    max-width: calc(100% - 30px);
  }

  .modal-content h3 {
    font-size: 1.3rem;
  }

  .ding-info-text {
    font-size: 0.9rem;
    line-height: 1.6;
  }
}

@media (max-width: 480px) {
  .button-container {
    right: 5px;
  }

  .ding-info-btn {
    width: 60px;
    height: 60px;
    font-size: 0.8rem;
  }

  .modal-content {
    margin: 10px;
    padding: 15px;
  }
}
</style>