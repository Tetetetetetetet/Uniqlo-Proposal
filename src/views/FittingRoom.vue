<template>
  <div>
    <!-- 顶部导航条 -->
    <header class="fixed top-0 left-0 right-0 bg-white shadow-md h-16 flex items-center justify-between px-8 z-50">
      <h1 class="text-2xl font-bold text-gray-800 flex items-center">
        <img src="/logo.png" class="h-8 w-auto mr-2" />
        Uniqlo Try-On
      </h1>
      <button class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm transition">🚀 开始体验</button>
    </header>


    <!-- 主体内容区域 -->
    <main class="pt-24 px-10 pb-12 bg-gray-100 min-h-screen flex justify-center items-start gap-10 font-sans">
      <!-- 左侧：上传人像 -->
      <section class="bg-white rounded-2xl shadow-md p-6 w-[300px] space-y-4">
        <h2 class="text-xl font-bold flex items-center text-gray-800">
          <span class="text-2xl mr-2">👤</span> 上传人像
        </h2>
        <input type="file" @change="handleImageUpload" class="mb-2 w-full text-sm border rounded p-1" />
        <div class="border-2 border-dashed border-gray-300 rounded-lg h-[360px] flex items-center justify-center text-gray-400 text-sm">
          <img v-if="uploadedImage" :src="uploadedImage" class="h-full object-contain" />
          <span v-else>预览图区域</span>
        </div>
      </section>

      <!-- 中间：穿搭效果图 -->
      <section class="bg-white rounded-2xl shadow-md p-6 flex-1 min-w-[480px] h-[480px]">
        <h2 class="text-xl font-bold mb-4 text-center text-gray-800">✨ 穿搭效果图</h2>
        <div class="border border-gray-300 rounded-lg h-full flex items-center justify-center text-gray-400">
          效果图（待实现）
        </div>
      </section>

      <!-- 右侧：推荐区 -->
      <section class="bg-white rounded-2xl shadow-md p-6 w-[300px] space-y-6">
        <div v-for="(item, idx) in recommendationSections" :key="idx">
          <h2 class="text-lg font-bold mb-2 flex items-center text-gray-800">
            <span class="mr-2">{{ item.title.split(' ')[0] }}</span> {{ item.title.split(' ')[1] }}
          </h2>
          <div class="border border-gray-300 rounded-lg aspect-square flex items-center justify-center text-gray-400 text-sm mb-2 overflow-hidden">
            <img v-if="item.image" :src="item.image" class="object-cover w-full h-full" />
            <span v-else>图片（待接入）</span>
          </div>
          <p class="text-sm text-gray-700">产品名：<span class="text-gray-500">{{ item.name || '—' }}</span></p>
          <p class="text-sm text-gray-700">价格：<span class="text-red-600">{{ item.price || '—' }}</span></p>
        </div>
      </section>
    </main>
  </div>
</template>


<script setup>
import { ref, reactive } from 'vue'

const uploadedImage = ref(null)

function handleImageUpload(e) {
  const file = e.target.files[0]
  if (file) {
    uploadedImage.value = URL.createObjectURL(file)
    triggerRecommendation()
  }
}

const recommendationSections = reactive([
  { title: '👕 推荐上衣', name: '', price: '', image: '' },
  { title: '👖 推荐下身', name: '', price: '', image: '' },
  { title: '🎀 推荐配饰', name: '', price: '', image: '' }
])

// 模拟推荐逻辑（你可换成真实接口）
function triggerRecommendation() {
  recommendationSections[0].name = '白色衬衫'
  recommendationSections[0].price = '¥199'
  recommendationSections[0].image = 'https://via.placeholder.com/300x300?text=上衣'

  recommendationSections[1].name = '牛仔裤'
  recommendationSections[1].price = '¥259'
  recommendationSections[1].image = 'https://via.placeholder.com/300x300?text=下身'

  recommendationSections[2].name = '银色项链'
  recommendationSections[2].price = '¥89'
  recommendationSections[2].image = 'https://via.placeholder.com/300x300?text=配饰'
}
</script>

<style scoped>
/* 若你用了全局 Tailwind，可不写此项 */
</style>
