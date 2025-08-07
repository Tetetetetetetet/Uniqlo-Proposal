<script setup lang="ts">
import { ref } from 'vue'
import { PRODUCT_IMAGES } from '../constants/imageUrls'

// 商品统计数据
const productStats = ref({
  weeklyPurchases: 328,
  monthlyPurchases: 1247,
  weeklyTryons: 892,
  monthlyTryons: 3156,
})

// 情绪价值话术（包含实际数据）
const emotionText = ref(`这款牛仔裤本月已有${productStats.value.monthlyPurchases}位顾客购买！
本周${productStats.value.weeklyTryons}人试穿后给出好评，快来体验吧！`)

// 主商品展示
const mainProduct = ref({
  id: 'U1234',
  imageUrl: PRODUCT_IMAGES.main.U1234,
  name: 'UNIQLO Wide-Fit Jeans',
})

// 搭配推荐商品
const matchRecommendations = ref([
  { id: 1, imageUrl: PRODUCT_IMAGES.matching.match001, name: 'Perfect Match 1' },
  { id: 2, imageUrl: PRODUCT_IMAGES.matching.match002, name: 'Perfect Match 2' },
  { id: 3, imageUrl: PRODUCT_IMAGES.matching.match003, name: 'Perfect Match 3' },
  { id: 4, imageUrl: PRODUCT_IMAGES.matching.match004, name: 'Perfect Match 4' },
  { id: 5, imageUrl: PRODUCT_IMAGES.matching.match001, name: 'Perfect Match 5' }, // 临时使用match001作为第五张图
])

// 相似商品推荐
const similarRecommendations = ref([
  { id: 1, imageUrl: PRODUCT_IMAGES.similar.similar001, name: 'Similar Style 1' },
  { id: 2, imageUrl: PRODUCT_IMAGES.similar.similar002, name: 'Similar Style 2' },
  { id: 3, imageUrl: PRODUCT_IMAGES.similar.similar003, name: 'Similar Style 3' },
  { id: 4, imageUrl: PRODUCT_IMAGES.similar.similar004, name: 'Similar Style 4' },
  { id: 5, imageUrl: PRODUCT_IMAGES.similar.similar005, name: 'Similar Style 5' },
])

// 刷新搭配推荐列表
const refreshMatchRecommendations = () => {
  // TODO: 调用API获取新的搭配推荐
  console.log('Refreshing match recommendations')
}

// 刷新相似推荐列表
const refreshSimilarRecommendations = () => {
  // TODO: 调用API获取新的相似推荐
  console.log('Refreshing similar recommendations')
}

// 更新商品统计数据的方法
const updateProductStats = () => {
  // TODO: 这里可以添加API调用来获取实时数据
  console.log('Updating product stats...')
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <div class="grid grid-cols-12 gap-8">
      <!-- 左侧主商品展示 -->
      <div class="col-span-4">
        <div class="sticky top-8">
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <div class="aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-50 mb-4">
              <img
                :src="mainProduct.imageUrl"
                :alt="mainProduct.name"
                class="w-full h-full object-contain"
              />
            </div>
            <h2 class="text-xl font-semibold text-gray-900">{{ mainProduct.name }}</h2>
          </div>
        </div>
      </div>

      <!-- 右侧推荐部分 -->
      <div class="col-span-8 space-y-8">
        <!-- 情绪价值话术部分 -->
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h1 class="text-2xl font-bold text-gray-900 mb-4">
            {{ emotionText }}
          </h1>
          <div class="grid grid-cols-2 gap-4 text-center">
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-lg font-semibold text-gray-900">本月购买</p>
              <p class="text-3xl font-bold text-blue-600">{{ productStats.monthlyPurchases }}</p>
              <p class="text-sm text-gray-500">位顾客选择</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-lg font-semibold text-gray-900">本周试穿</p>
              <p class="text-3xl font-bold text-green-600">{{ productStats.weeklyTryons }}</p>
              <p class="text-sm text-gray-500">人好评体验</p>
            </div>
          </div>
        </div>

        <!-- 搭配推荐部分 -->
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-semibold text-gray-900">它和这些单品很配：</h2>
            <button
              @click="refreshMatchRecommendations"
              class="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              换一批
            </button>
          </div>
          <div class="grid grid-cols-3 gap-6">
            <div v-for="item in matchRecommendations" :key="item.id" class="group cursor-pointer">
              <div class="product-card">
                <div class="aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-50">
                  <img
                    :src="item.imageUrl"
                    :alt="item.name"
                    class="w-full h-full object-contain group-hover:opacity-75 transition-opacity"
                  />
                </div>
                <h3 class="mt-2 text-sm font-medium text-gray-900 text-center">{{ item.name }}</h3>
              </div>
            </div>
          </div>
        </div>

        <!-- 相似推荐部分 -->
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-semibold text-gray-900">喜欢它的人也喜欢：</h2>
            <button
              @click="refreshSimilarRecommendations"
              class="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              换一批
            </button>
          </div>
          <div class="grid grid-cols-3 gap-6">
            <div v-for="item in similarRecommendations" :key="item.id" class="group cursor-pointer">
              <div class="product-card">
                <div class="aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-50">
                  <img
                    :src="item.imageUrl"
                    :alt="item.name"
                    class="w-full h-full object-contain group-hover:opacity-75 transition-opacity"
                  />
                </div>
                <h3 class="mt-2 text-sm font-medium text-gray-900 text-center">{{ item.name }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.product-card {
  position: relative;
  width: 100%;
}

/* 添加全局背景色 */
:deep(body) {
  background-color: #f5f5f5;
}
</style>
