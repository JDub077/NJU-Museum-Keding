<!-- src/ThreeJSModel.vue -->
<template>
  <div ref="container" class="model-container">
    <div v-if="loading" class="loading-spinner">
      <div class="spinner"></div>
      <p>加载模型中...</p>
    </div>
    <div v-if="error" class="error-message">
      <p>模型加载失败</p>
      <button @click="loadModel">重试</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

const props = defineProps({
  modelPath: {
    type: String,
    required: true
  },
  autoRotate: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits(['model-loaded', 'model-error']);

const container = ref(null);
const loading = ref(true);
const error = ref(false);

// Three.js 相关变量
let scene, camera, renderer, model, controls;
let animationId;

const initThreeJS = () => {
  if (!container.value) return;

  // 创建场景
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  // 创建相机
  camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  camera.position.z = 5;

  // 创建渲染器
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.value.clientWidth, container.value.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.value.appendChild(renderer.domElement);

  // 添加灯光
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  // 简单的轨道控制器
  setupControls();
};

const setupControls = () => {
  // 简单的鼠标控制
  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };

  const onMouseDown = (event) => {
    isDragging = true;
  };

  const onMouseMove = (event) => {
    if (!isDragging || !model) return;

    const deltaMove = {
      x: event.clientX - previousMousePosition.x,
      y: event.clientY - previousMousePosition.y
    };

    model.rotation.y += deltaMove.x * 0.01;
    model.rotation.x += deltaMove.y * 0.01;

    previousMousePosition = {
      x: event.clientX,
      y: event.clientY
    };
  };

  const onMouseUp = () => {
    isDragging = false;
  };

  const onWheel = (event) => {
    if (!camera || !model) return;

    camera.position.z += event.deltaY * 0.01;
    camera.position.z = Math.max(2, Math.min(10, camera.position.z));
  };

  if (container.value) {
    container.value.addEventListener('mousedown', onMouseDown);
    container.value.addEventListener('mousemove', onMouseMove);
    container.value.addEventListener('mouseup', onMouseUp);
    container.value.addEventListener('wheel', onWheel);

    // 清理函数
    onUnmounted(() => {
      container.value.removeEventListener('mousedown', onMouseDown);
      container.value.removeEventListener('mousemove', onMouseMove);
      container.value.removeEventListener('mouseup', onMouseUp);
      container.value.removeEventListener('wheel', onWheel);
    });
  }
};

const loadModel = async () => {
  if (!scene) return;

  loading.value = true;
  error.value = false;

  try {
    const loader = new FBXLoader();

    loader.load(
        props.modelPath,
        (loadedModel) => {
          model = loadedModel;

          // 调整模型大小和位置
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());

          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = 3 / maxDim;

          model.scale.setScalar(scale);
          model.position.set(-center.x * scale, -center.y * scale, -center.z * scale);

          scene.add(model);
          loading.value = false;
          emit('model-loaded', model);
        },
        (progress) => {
          // 加载进度可以在这里处理
          console.log('加载进度:', (progress.loaded / progress.total) * 100 + '%');
        },
        (err) => {
          console.error('FBX模型加载错误:', err);
          loading.value = false;
          error.value = true;
          emit('model-error', err);
        }
    );
  } catch (err) {
    console.error('加载模型时发生错误:', err);
    loading.value = false;
    error.value = true;
    emit('model-error', err);
  }
};

const animate = () => {
  animationId = requestAnimationFrame(animate);

  if (model && props.autoRotate && !isDragging) {
    model.rotation.y += 0.005;
  }

  if (renderer && scene && camera) {
    renderer.render(scene, camera);
  }
};

const handleResize = () => {
  if (!container.value || !camera || !renderer) return;

  const width = container.value.clientWidth;
  const height = container.value.clientHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
};

// 公共方法，供父组件调用
const resetView = () => {
  if (model && camera) {
    model.rotation.set(0, 0, 0);
    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, 0);
  }
};

const zoomIn = () => {
  if (camera) {
    camera.position.z = Math.max(2, camera.position.z - 0.5);
  }
};

const zoomOut = () => {
  if (camera) {
    camera.position.z = Math.min(10, camera.position.z + 0.5);
  }
};

// 暴露方法给父组件
defineExpose({
  resetView,
  zoomIn,
  zoomOut
});

onMounted(() => {
  initThreeJS();
  loadModel();
  animate();

  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId);
  }

  window.removeEventListener('resize', handleResize);

  if (renderer && container.value) {
    container.value.removeChild(renderer.domElement);
    renderer.dispose();
  }
});

// 监听属性变化
watch(() => props.modelPath, () => {
  if (model && scene) {
    scene.remove(model);
  }
  loadModel();
});

watch(() => props.autoRotate, (newVal) => {
  // 自动旋转状态变化处理
});
</script>

<style scoped>
.model-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.loading-spinner, .error-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #c5af7a;
  z-index: 10;
  background: rgba(0, 0, 0, 0.7);
  padding: 20px;
  border-radius: 10px;
}

.spinner {
  border: 3px solid rgba(197, 175, 122, 0.3);
  border-top: 3px solid #c5af7a;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 0 auto 10px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-message button {
  background: #c5af7a;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  margin-top: 10px;
  cursor: pointer;
}
</style>