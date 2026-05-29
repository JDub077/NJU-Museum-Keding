<template>
  <h1 class="page-title">铭文</h1>
  <div class="container">
    <!-- Image in the top-left corner -->
    <div class="image-container">
      <img src="../assets/inscription_2.png" alt="Image" class="image" />
    </div>

    <!-- Scrollable Text Window in the bottom-right corner -->
    <div class="scrollable-container">
      <div class="scrollable-content">
        <h2>西周中期的金文</h2>
        <div class="intro-text">
        <p>西周中期的金文逐渐脱离了商代和周初的风貌，用笔上的肥美逐渐变为以线为主的中锋，象形和修饰意味也渐渐消失。结构对称均匀，方圆笔兼用，字形渐方，章法有列无行或有行无列。至此，西周金文书法的风貌基本形成。布局上出现有界格，但有收有放，不被界格所约束，生动大方，自然多变。</p>
        </div>
        <div class="intro-text">
        <p>典型器物及铭文：小克鼎</p>
</div>
        <div class="intro-text">
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

.page-title::after {
  display: none;
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
  margin-bottom: 2rem;
  color: #c5af7a;
  text-shadow: 0 0 10px rgba(255, 206, 188, 0.3), 0 0 20px rgba(255, 206, 188, 0.2);
  font-family: '禹卫书法简体', '方正清刻本悦宋简体', serif;
  position: relative;
  padding-bottom: 0.5rem;
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
