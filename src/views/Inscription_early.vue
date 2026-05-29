<template>
    <h1 class="page-title">铭文</h1>
  <div class="container">
    <!-- Image in the top-left corner -->
    <div class="image-container">
      <img src="../assets/inscription_1.png" alt="Image" class="image" />
    </div>
    <!-- Scrollable Text Window in the bottom-right corner -->
    <div class="scrollable-container">
      <div class="scrollable-content">
        <h2>西周早期的金文</h2>
        <div class="intro-text">
        <p>西周早期的金文在继承商代金文的风格的基础上又有所发展，书写粗犷自然，风格雄强凝重，行款布局自如随意，线条出锋，笔画肥美，有尖状肥笔，其形如刀或蝌蚪，有游动的曲笔，婉转多变，被称为波磔体，和甲骨文的方笔形成明显的对比。其笔法特点主要来源于商代的“族徽”，多保留有象形文字的特点。结构无规律，文字较少，字形大小、长宽、方圆不等，字无定形，一字多写，合文是普遍现象。</p>
        </div>
        <div class="intro-text">
<p>典型器物及其铭文：
利簋（“利”青铜簋） 中国国家博物馆藏 高28厘米，口径22厘米，方座长宽20.2厘米,1976年3月在陕西省临潼县零口公社西段大队出土 </p>
</div>
        <div class="intro-text">
<p>铭文4行共32字，内容为：珷（武）征商，隹（唯）甲子朝。歲鼎（貞），克聞（昏）（夙）又（有）商辛未王才（在）（蘭）（師），易（賜）又（有）事（史）利金，用乍（作）（檀）公寶（尊）彝 </p>
<p>意为：周武王发动征伐商纣王的战争，在甲子日的早晨，（在这之前曾举行过）岁祭而贞卜，得到能克敌制胜的吉兆。而今果然在一个早晚之间就占有了商都。辛未这一天，武王在管地驻军之处，赐给名叫利的有关官吏青铜，（利）用所赐的青铜制作了纪念先祖檀公的宝贵彝器。</p>
</div>

      </div>
    </div>
  </div>
</template>

<script setup>
// Here you can add any logic you may need in the future.
</script>

<style scoped>

.page-title {
  text-align: center;
  font-size: 4rem;
  margin-bottom: 2rem;
  color: #c5af7a;
  text-shadow: 0 0 10px rgba(255, 206, 188, 0.3), 0 0 20px rgba(255, 206, 188, 0.2);
  font-family: '禹卫书法简体', '方正清刻本悦宋简体', serif;
  position: relative;
  padding-bottom: 0.5rem;
}

.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.image-container {
  position: absolute;
  top: 20px;
  left: 225px;
  width: 300px;
  height: auto;
}

.image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
}

.scrollable-container {
  position: absolute;
  top: 40%;
  right: 225px;
  transform: translateY(-45%);
  width: 500px;
  height: 700px;
  overflow-y: auto;
  padding: 1rem;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.6); /* 建议加背景 */
  box-shadow: 0 0 10px rgba(255, 206, 188, 0.3);
}

.scrollable-container::-webkit-scrollbar {
  width: 8px;
}

.scrollable-container::-webkit-scrollbar-track {
  background: transparent; /* 背景透明 */
}

.scrollable-container::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0); /* 半透明滑块 */
  border-radius: 4px;
}

.scrollable-container::-webkit-scrollbar-thumb:hover {
  background-color: rgba(255, 255, 255, 0.5); /* 滑块 hover 效果 */
}


.scrollable-content p {
  color: #ffffff;
  font-size: 1rem;
  line-height: 1.7;
  font-family: '宋体', sans-serif;
  margin-bottom: 1rem;
}

.content-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

.page-title {
  text-align: center;
  font-size: 4rem;
  margin-left:1rem;
  margin-bottom: 2rem;
  color: #c5af7a;
  text-shadow: 0 0 10px rgba(255, 206, 188, 0.3), 0 0 20px rgba(255, 206, 188, 0.2);
  font-family: '禹卫书法简体', '方正清刻本悦宋简体', serif;
  position: relative;
}

.page-title::after {
  display: none;
}

.intro-text {
  margin-bottom: 1rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.4rem;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1.8rem;
  border-radius: 12px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(197, 175, 122, 0.1);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.intro-text:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6), 0 0 15px rgba(255, 206, 188, 0.2);
}

.intro-text::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(255, 206, 188, 0.03), transparent);
  z-index: -1;
}

.intro-text p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #ffffff;
  font-family: '方正清刻本悦宋简体', '宋体', sans-serif;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
  position: relative;
}

h2 {
  color: #c5af7a;
  font-size: 1.8rem;
  margin: 2rem 0 1.5rem;
  border-bottom: 2px solid rgba(197, 175, 122, 0.3);
  padding-bottom: 0.5rem;
  font-family: '方正清刻本悦宋简体', serif;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  text-align:center;
}

.timeline-container {
  position: relative;
  margin: 3rem 0;
}

.timeline-container::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 120px;
  width: 3px;
  background-color: #c5af7a;
  box-shadow: 0 0 5px rgba(255, 206, 188, 0.3);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  display: flex;
}

.timeline-date {
  position: relative;
  width: 100px;
  padding-right: 20px;
  text-align: right;
  font-weight: bold;
  color: #ffcebc;
  display: flex;
  flex-direction: column;
  font-family: '宋体', sans-serif;
}

.year {
  font-size: 0.8rem;
  color: #e8fcfd;
  font-weight: normal;
  opacity: 0.85;
}

.timeline-content {
  position: relative;
  margin-left: 40px;
  background-color: rgba(205, 255, 249, 0.2);
  background-image: linear-gradient(to bottom, rgba(205, 255, 249, 0.1), rgba(205, 255, 249, 0.3));
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  flex: 1;
  border: none;
}

.timeline-content::before {
  content: '';
  position: absolute;
  left: -12px;
  top: 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #000000;
  border: 3px solid #c5af7a;
  box-shadow: 0 0 8px rgba(255, 206, 188, 0.5);
}

.timeline-content h3 {
  margin-top: 0;
  color: #b6fff2;
  margin-bottom: 0.8rem;
  font-family: '方正清刻本悦宋简体', '宋体', sans-serif;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
}

.timeline-content p {
  color: #ffffff;
  font-family: '宋体', sans-serif;
}

.collector-image {
  margin-top: 1.5rem;
  text-align: center;
}

.collector-image img {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.image-caption {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #e8fcfd;
  font-style: italic;
  opacity: 0.85;
  font-family: '宋体', sans-serif;
}

.authentication-section, .literature-section {
  background-color: rgba(205, 255, 249, 0.2);
  background-image: linear-gradient(to bottom, rgba(205, 255, 249, 0.1), rgba(205, 255, 249, 0.3));
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  border: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.authentication-section:hover, .literature-section:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(255, 206, 188, 0.3), 0 8px 16px rgba(0, 0, 0, 0.5);
}

.authentication-content {
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
}

.authentication-image {
  flex: 1;
  transition: transform 0.3s ease;
  overflow: hidden;
  border-radius: 8px;
}

.authentication-image:hover {
  transform: scale(1.03);
}

.authentication-image img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  transition: transform 0.5s ease;
}

.authentication-image:hover img {
  transform: scale(1.05);
}

.authentication-text {
  flex: 2;
  color: #ffffff;
  font-family: '宋体', sans-serif;
}

.authentication-text p {
  margin-bottom: 1rem;
  line-height: 1.8;
  text-align: justify;
}

.authentication-text ol {
  padding-left: 1.2rem;
  counter-reset: item;
}

.authentication-text li {
  margin-bottom: 1rem;
  line-height: 1.6;
  position: relative;
  padding-left: 0.5rem;
  transition: transform 0.2s ease;
}

.authentication-text li:hover {
  transform: translateX(5px);
}

.authentication-text strong {
  color: #b6fff2;
  font-family: '方正清刻本悦宋简体', '宋体', sans-serif;
  font-weight: bold;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
}

.literature-list {
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.literature-list li {
  display: flex;
  margin-bottom: 1.2rem;
  padding: 1rem;
  border-bottom: 1px dashed rgba(197, 175, 122, 0.3);
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.literature-list li:hover {
  transform: translateX(5px);
  background-color: rgba(0, 0, 0, 0.5);
}

.literature-year {
  min-width: 80px;
  font-weight: bold;
  color: #b6fff2;
  font-family: '方正清刻本悦宋简体', '宋体', sans-serif;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
}

.literature-content {
  flex: 1;
  line-height: 1.6;
  color: #ffffff;
  font-family: '宋体', sans-serif;
  padding-left: 1rem;
  border-left: 2px solid rgba(197, 175, 122, 0.3);
}

.literature-section h2, .authentication-section h2 {
  position: relative;
  display: inline-block;
  margin-bottom: 1.8rem;
}

.literature-section h2::after, .authentication-section h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, #c5af7a, transparent);
  border-radius: 3px;
}

@media (max-width: 768px) {
  .timeline-container::before {
    left: 30px;
  }
  
  .timeline-item {
    flex-direction: column;
  }
  
  .timeline-date {
    width: auto;
    text-align: left;
    padding-left: 60px;
    margin-bottom: 0.5rem;
  }
  
  .timeline-content {
    margin-left: 60px;
  }
  
  .authentication-content {
    flex-direction: column;
  }
  
  .page-title {
    font-size: 3.2rem;
  }
  
  .literature-list {
    grid-template-columns: 1fr;
  }
  
  .literature-list li {
    flex-direction: column;
  }
  
  .literature-year {
    margin-bottom: 0.5rem;
  }
  
  .literature-content {
    border-left: none;
    padding-left: 0;
    padding-top: 0.5rem;
    border-top: 2px solid rgba(197, 175, 122, 0.3);
  }
}
</style> 
