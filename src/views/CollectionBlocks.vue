<template>
  <div class="collection-container">
    <h1 class="title">藏家说明</h1>
    
    <div class="blocks-container">
      <!-- 改用 div 而不是 router-link 来测试基本显示 -->
      <div 
        v-for="(block, index) in blocks" 
        :key="index"
        class="block"
        @click="navigateToTimeline(block.id)"
      >
        <div class="placeholder-image">
          <div class="placeholder-text">Photo</div>
        </div>
        <h3 class="block-title">{{ block.title }}</h3>
        <p class="block-description">{{ block.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionBlocks',
  data() {
    return {
      blocks: [
        {
          id: 1,
          title: '瑞常',
          description: '这部分为最基础信息，方便进入时间轴查看'
        },
        {
          id: 2,
          title: '福禄森',
          description: '这部分为最基础信息，方便进入时间轴查看'
        },
        {
          id: 3,
          title: '全陕大学材料部门',
          description: '这部分为最基础信息，方便进入时间轴查看'
        },
        {
          id: 4,
          title: '南京大学博物馆',
          description: '这部分为最基础信息，方便进入时间轴查看'
        }
      ]
    }
  },
  methods: {
    navigateToTimeline(id) {
      console.log('Navigating to timeline:', id) // 添加调试日志
      this.$router.push({ name: 'timeline', params: { id: id } })
    }
  },
  mounted() {
    console.log('Component mounted') // 添加调试日志
  }
}
</script>

<style scoped>
.collection-container {
  padding: 40px;
  background: #f9f9f9;
  min-height: 100vh;
}

.title {
  font-size: 24px;
  color: #333;
  margin-bottom: 40px;
  padding-left: 20px;
  border-left: 4px solid #4CAF50;
}

.blocks-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.block {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.block:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.15);
}

.placeholder-image {
  width: 100%;
  height: 200px;
  background: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ddd;
}

.placeholder-text {
  color: #999;
  font-size: 18px;
  font-family: monospace;
}

.block-title {
  padding: 15px 20px 10px;
  margin: 0;
  font-size: 18px;
  color: #333;
  border-bottom: 1px solid #eee;
}

.block-description {
  padding: 15px 20px;
  margin: 0;
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  flex-grow: 1;
}

@media (max-width: 768px) {
  .collection-container {
    padding: 20px;
  }
  
  .blocks-container {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .blocks-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1025px) {
  .blocks-container {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>