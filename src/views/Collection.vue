<template>
  <div class="timeline-container">
    <!-- 左侧内容区 -->
    <div class="content-side content-left">
      <div v-for="(item, index) in leftContent" 
           :key="index"
           class="content-box"
           :class="{ 'content-active': isContentActive(index) }"
           :style="{ 
             opacity: getOpacity(index),
             top: `${(index * (100 / leftContent.length))}%`
           }">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>

    <!-- 中间时间轴 -->
    <div class="timeline">
      <div class="slider-container">
        <!-- 时间轴背景 -->
        <div class="timeline-bar"></div>
        
        <!-- 时间节点 -->
        <div class="timeline-nodes">
          <div v-for="(mark, index) in timeMarks" 
               :key="index" 
               class="timeline-node"
               :class="{ 'node-active': isNodeActive(index) }"
               :style="{ top: `${index * (100 / (timeMarks.length - 1))}%` }">
            <div class="node-circle"></div>
            <span class="time-label">{{ mark }}</span>
          </div>
        </div>

        <!-- 滑块控制器 -->
        <input
          type="range"
          v-model="currentPosition"
          min="0"
          max="100"
          step="0.1"
          class="slider"
          orient="vertical"
          @input="handleSlide"
        >
      </div>
    </div>

    <!-- 右侧内容区 -->
    <div class="content-side content-right">
      <div v-for="(item, index) in rightContent" 
           :key="index"
           class="content-box"
           :class="{ 'content-active': isContentActive(index) }"
           :style="{ 
             opacity: getOpacity(index),
             top: `${(index * (100 / rightContent.length))}%`
           }">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimeSlider',
  data() {
    return {
      currentPosition: 0, // 改为从顶部开始
      timeMarks: ['1644年', '1700年', '1750年', '1800年', '1850年', '1911年'],
      leftContent: [
        {
          title: '顺治时期 (1644-1661)',
          description: '清初整理明代遗留典籍，开展教材编纂。'
        },
        {
          title: '康熙时期 (1662-1722)',
          description: '《古今图书集成》编纂，文化事业兴盛。'
        },
        {
          title: '雍正时期 (1723-1735)',
          description: '设立书院，推广教育发展。'
        },
        {
          title: '乾隆时期 (1736-1795)',
          description: '《四库全书》编纂，文化整理工作。'
        },
        {
          title: '嘉道时期 (1796-1850)',
          description: '考据学发展，教育体系完善。'
        },
        {
          title: '晚清时期 (1851-1911)',
          description: '引入西方教育，新旧融合。'
        }
      ],
      rightContent: [
        {
          title: '清初文献整理',
          description: '整理明代小说戏曲，建立文献体系。'
        },
        {
          title: '康熙典籍收藏',
          description: '皇家图书馆系统收藏整理。'
        },
        {
          title: '雍正戏曲发展',
          description: '宫廷戏曲与民间作品并存。'
        },
        {
          title: '乾隆文献普查',
          description: '四库全书收录，系统化管理。'
        },
        {
          title: '嘉道典籍流通',
          description: '私人藏书楼兴起与发展。'
        },
        {
          title: '晚清文学新潮',
          description: '传统与新文学形式交融。'
        }
      ]
    }
  },
  methods: {
    handleSlide() {
      this.$emit('position-change', this.currentPosition)
    },
    getOpacity(index) {
      const position = this.currentPosition
      const segmentSize = 100 / (this.leftContent.length - 1)
      const itemPosition = index * segmentSize
      const threshold = segmentSize / 2
      return Math.max(0, 1 - Math.abs(position - itemPosition) / threshold)
    },
    isContentActive(index) {
      return this.getOpacity(index) > 0.5
    },
    isNodeActive(index) {
      const nodePosition = index * (100 / (this.timeMarks.length - 1))
      return Math.abs(this.currentPosition - nodePosition) < 5
    }
  }
}
</script>

<style scoped>
.timeline-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 20px;
  background: #f9f9f9;
  overflow: hidden;
}

.content-side {
  flex: 1;
  height: 90vh;
  position: relative;
  max-width: 400px;
  padding: 20px;
}

.content-box {
  background: white;
  padding: 15px;
  margin: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  transform: scale(0.95);
  height: 80px;
  position: absolute;
  width: calc(100% - 16px);
  left: 0;
}

.content-active {
  transform: scale(1);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  border-left: 4px solid #4CAF50;
  z-index: 1;
}

.content-box h3 {
  color: #333;
  margin-bottom: 8px;
  font-size: 0.9em;
}

.content-box p {
  color: #666;
  font-size: 0.8em;
  line-height: 1.4;
}

.timeline {
  width: 80px;
  height: 90vh;
  display: flex;
  justify-content: center;
  position: relative;
}

.slider-container {
  height: 100%;
  position: relative;
  width: 4px;
  display: flex;
  align-items: center;
}

.timeline-bar {
  position: absolute;
  width: 100%;
  height: 90%;
  background: #E0E0E0;
  border-radius: 2px;
  top: 5%;
}

.timeline-nodes {
  position: absolute;
  height: 90%;
  width: 100%;
  top: 5%;
}

.timeline-node {
  position: absolute;
  width: 100%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

.node-circle {
  width: 12px;
  height: 12px;
  background: #4CAF50;
  border-radius: 50%;
  position: absolute;
  left: -4px;
  border: 2px solid #fff;
  box-shadow: 0 0 0 1px #4CAF50;
  transition: all 0.3s ease;
}

.node-active .node-circle {
  transform: scale(1.2);
  background: #2E7D32;
}

.time-label {
  position: absolute;
  left: 20px;
  white-space: nowrap;
  font-size: 12px;
  color: #666;
  background: #fff;
  padding: 2px 6px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.node-active .time-label {
  color: #2E7D32;
  font-weight: bold;
}

.slider {
  writing-mode: bt-lr;
  -webkit-appearance: none;
  width: 90vh;
  height: 100%;
  background: transparent;
  outline: none;
  transform: rotate(90deg) translateX(-45vh);
  transform-origin: left;
  position: absolute;
  left: 2px;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: #fff;
  border: 2px solid #4CAF50;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  transition: all 0.2s ease;
  position: relative;
  z-index: 2;
}

.slider::-webkit-slider-thumb:hover {
  transform: scale(1.1);
  box-shadow: 0 3px 6px rgba(0,0,0,0.3);
}
</style>