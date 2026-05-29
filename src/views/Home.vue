<template>
  <div class="homepage">
    <header class="header">
      <h1>小克鼎</h1>
      <p>中国古代青铜器文化瑰宝</p>
    </header>

    <div class="main-content">
      <div class="circular-layout">
        <!-- 中央的大克鼎（3D模型） -->
        <div class="center-vessel">
          <div ref="modelContainer" class="model-container">
            <!-- 加载指示器 -->
            <div v-if="loading" class="loading-spinner">
              <div class="spinner"></div>
              <p>加载模型中...</p>
            </div>

            <!-- 后备图片（如果模型加载失败） -->
<!--            <video autoplay loop muted class="main-video">-->
<!--              <source src="/src/assets/keding.mp4" type="video/mp4">-->
<!--              &lt;!&ndash; 图片作为后备内容 &ndash;&gt;-->
<!--              <img src="/src/assets/keding-main.jpg" alt="小克鼎全貌" class="main-image" />-->
<!--            </video> -->
          </div>

          <!-- 控制按钮 -->
          <div class="model-controls">
            <button class="control-btn" @click="resetView">重置视角</button>
            <button class="control-btn" @click="toggleAutoRotate">
              {{ autoRotate ? '暂停旋转' : '自动旋转' }}
            </button>
          </div>
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
          <span class="icon-label">器型演变</span>
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

        <router-link to="/collection-view" class="section-icon section-5">
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
        <a href="/contact">关于我们</a>
        <a href="/contact">联系方式</a>
        <a href="/references">参考文献</a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
const modelContainer = ref(null);
const loading = ref(false);
const modelLoadFailed = ref(false);
const autoRotate = ref(true);

// Three.js 变量
let scene, camera, renderer, model, controls, animationId;

const initThreeJS = async () => {
  if (!modelContainer.value) return;

  try {
    // 动态导入 Three.js 和相关加载器
    const THREE = await import('three');
    const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls');
    const { FBXLoader } = await import('three/examples/jsm/loaders/FBXLoader');

    // 创建场景
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a1a); // 深灰黑背景，与页面主题协调

    // 创建相机 - 保持水平视角
    camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);

    // 设置相机起始位置 - 正面水平视角，鼎垂直直立
    camera.position.set(0, 0, 8);

    // 创建渲染器
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true
    });
    renderer.setSize(modelContainer.value.clientWidth, modelContainer.value.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // 设置颜色空间和色调映射，确保 PBR 材质正确显示
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    modelContainer.value.appendChild(renderer.domElement);

    // 添加灯光（增强亮度以适应浅色背景）
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight1.position.set(5, 5, 5);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight2.position.set(-5, -5, -5);
    scene.add(directionalLight2);

    const directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight3.position.set(0, 5, 0);
    scene.add(directionalLight3);

    // 设置轨道控制器
    controls = new OrbitControls(camera, renderer.domElement);

    // 控制器配置
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 1.0;
    controls.panSpeed = 0.8;

    // 调整缩放范围
    controls.minDistance = 3;
    controls.maxDistance = 20;

    // 限制垂直旋转角度
    controls.minPolarAngle = 0;
    controls.maxPolarAngle = Math.PI;

    // 水平旋转无限制
    controls.minAzimuthAngle = -Infinity;
    controls.maxAzimuthAngle = Infinity;

    // 启用平移
    controls.enablePan = true;

    // 初始目标点
    controls.target.set(0, 0, 0);

    // 开始动画循环
    animate(THREE);

    // 加载模型
    loadFBXModel(THREE, FBXLoader);

  } catch (error) {
    console.error('Three.js 初始化失败:', error);
    modelLoadFailed.value = true;
  }
};

const loadFBXModel = (THREE, FBXLoader) => {
  loading.value = true;

  const loader = new FBXLoader();

  // 模型路径
  const modelPath = 'SM_XiaoKeDing.fbx';

  loader.load(
      modelPath,
      (loadedModel) => {
        model = loadedModel;

        // 调整模型大小和位置
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        // 计算合适的缩放比例
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 5 / maxDim;

        model.scale.setScalar(scale);

        // 将模型中心点移动到原点
        model.position.set(-center.x * scale, -center.y * scale, -center.z * scale);

        // 保持您的调整：向下平移模型
        const positionAdjustment = {
          x: 0,
          y: -20, // 调整模型在画面中的垂直位置
          z: 0
        };

        model.position.x += positionAdjustment.x;
        model.position.y += positionAdjustment.y;
        model.position.z += positionAdjustment.z;

        // 确保模型直立（垂直于水平面）
        model.rotation.set(0, 0, 0);

        // 相机与目标同步到 bounding-box 中心高度（positionAdjustment.y），确保模型居中且视线水平
        const centerY = positionAdjustment.y;
        if (camera) {
          camera.position.set(0, centerY, 8);
        }
        if (controls) {
          controls.target.set(0, centerY, 0);
          controls.update();
        }

        // 遍历模型，修复材质显示问题
        model.traverse((child) => {
          if (child.isMesh) {
            const materials = Array.isArray(child.material) ? child.material : [child.material];
            materials.forEach((mat) => {
              // 调试输出材质信息
              console.log('Mesh:', child.name, '| Material:', mat.type, '| HasMap:', !!mat.map, '| Color:', mat.color ? mat.color.getHexString() : 'N/A', '| Metalness:', mat.metalness, '| Roughness:', mat.roughness);

              // 双面渲染，避免法线翻转导致消失
              mat.side = THREE.DoubleSide;

              // 将材质颜色设为白色，避免底色压暗纹理
              if (mat.color) {
                mat.color.setHex(0xffffff);
              }
            });
          }
        });

        // 从 USDZ 提取的纹理手动加载并应用
        // texgen_0 是纯绿色通道贴图，不适合做 diffuse
        // 尝试 texgen_3（偏青铜色调）和 texgen_2（中性灰）作为 diffuse
        const textureLoader = new THREE.TextureLoader();
        const diffuseMap = textureLoader.load('/textures/0/texgen_3.jpg');
        diffuseMap.colorSpace = THREE.SRGBColorSpace;

        model.traverse((child) => {
          if (child.isMesh) {
            const materials = Array.isArray(child.material) ? child.material : [child.material];
            materials.forEach((mat) => {
              // 直接在原有 Lambert 材质上设置纹理，最稳妥
              mat.map = diffuseMap;
              mat.side = THREE.DoubleSide;
              mat.needsUpdate = true;
            });
          }
        });

        scene.add(model);
        loading.value = false;
        console.log('FBX模型加载成功，纹理已手动应用');
      },
      (progress) => {
        const percent = (progress.loaded / progress.total) * 100;
        console.log('加载进度:', percent.toFixed(2) + '%');
      },
      (error) => {
        console.error('FBX模型加载失败:', error);
        loading.value = false;
        modelLoadFailed.value = true;
      }
  );
};

const animate = (THREE) => {
  animationId = requestAnimationFrame(() => animate(THREE));

  // 自动旋转
  if (controls && autoRotate.value) {
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.0;
  } else if (controls) {
    controls.autoRotate = false;
  }

  // 更新控制器
  if (controls) {
    controls.update();
  }

  // 渲染场景
  if (renderer && scene && camera) {
    renderer.render(scene, camera);
  }
};

const handleResize = () => {
  if (!modelContainer.value || !camera || !renderer) return;

  const width = modelContainer.value.clientWidth;
  const height = modelContainer.value.clientHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
};

// 控制方法
const resetView = () => {
  if (controls && camera) {
    controls.reset();
    const centerY = model ? -20 : 0; // 与 positionAdjustment.y 保持一致
    camera.position.set(0, centerY, 8);
    controls.target.set(0, centerY, 0);
    controls.update();
  }
};

const toggleAutoRotate = () => {
  autoRotate.value = !autoRotate.value;
};

onMounted(() => {
  initThreeJS();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId);
  }

  if (controls) {
    controls.dispose();
  }

  window.removeEventListener('resize', handleResize);

  if (renderer && modelContainer.value && renderer.domElement) {
    modelContainer.value.removeChild(renderer.domElement);
    renderer.dispose();
  }
});
</script>

<style scoped>
.homepage {
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  font-family: '方正清刻本悦宋简体', '宋体', "SimSun", "STSong", serif;
  display: flex;
  flex-direction: column;
  background-color: transparent;
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
  width: 1000px;
  height: 1000px;
  margin: 0 auto;
}

.center-vessel {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  border-radius: 50%;
  overflow: hidden;
  //box-shadow: 0 0 40px rgba(255, 206, 188, 0.3);
  z-index: 2;
  transition: all 0.5s ease;
  //border: 8px solid #69a696;
}

.center-vessel:hover {
  transform: translate(-50%, -50%) scale(1.05);
  //box-shadow: 0 0 50px rgba(255, 206, 188, 0.5);
}

.model-container {
  width: 100%;
  height: 100%;
  position: relative;
  cursor: grab;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 移除背景色 */
}

.model-container:active {
  cursor: grabbing;
}

/* 确保Three.js画布在容器中居中 */
.model-container canvas {
  display: block;
  width: 100% !important;
  height: 100% !important;
  border-radius: 50%;
}

.fallback-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
}

/* 加载指示器样式 */
.loading-spinner {
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

/* 模型控制按钮样式 */
.model-controls {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 90%;
}

.control-btn {
  background: rgba(56, 70, 61, 0.8);
  border: 1px solid #69a696;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: '方正清刻本悦宋简体', '宋体', sans-serif;
}

.control-btn:hover {
  background: #c5af7a;
  color: #000000;
}

/* 六个板块图标 */
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
  top: 3%;
  left: 50%;
  transform: translateX(-50%);
}

.section-2 {
  top: 20%;
  right: 3%;
}

.section-3 {
  bottom: 20%;
  right: 3%;
}

.section-4 {
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);
}

.section-5 {
  bottom: 20%;
  left: 3%;
}

.section-6 {
  top: 20%;
  left: 3%;
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

/* 响应式样式调整 */
@media (max-width: 1100px) {
  .circular-layout {
    width: 850px;
    height: 850px;
  }

  .center-vessel {
    width: 450px;
    height: 450px;
  }
}

@media (max-width: 900px) {
  .circular-layout {
    width: 700px;
    height: 700px;
  }

  .center-vessel {
    width: 380px;
    height: 380px;
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

  .control-btn {
    font-size: 0.8rem;
    padding: 6px 12px;
  }
}

@media (max-width: 768px) {
  .circular-layout {
    width: 400px;
    height: 580px;
  }

  .center-vessel {
    width: 260px;
    height: 260px;
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

  .model-controls {
    bottom: 8px;
  }

  .control-btn {
    font-size: 0.7rem;
    padding: 4px 8px;
  }

  /* 调整响应式布局的位置 */
  .section-1 { top: 3%; }
  .section-2 { top: 20%; right: 3%; }
  .section-3 { bottom: 20%; right: 3%; }
  .section-4 { bottom: 3%; }
  .section-5 { bottom: 20%; left: 3%; }
  .section-6 { top: 20%; left: 3%; }

  .header h1 {
    font-size: 2.8rem;
  }

  .header p {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .homepage {
    padding: 1rem;
  }

  .circular-layout {
    width: 350px;
    height: 500px;
  }

  .center-vessel {
    width: 220px;
    height: 220px;
  }

  .header h1 {
    font-size: 2.5rem;
  }

  .header p {
    font-size: 1.1rem;
  }
}
</style>