<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
  >
    <div class="bg-white rounded-lg p-6 w-80 shadow-xl">
      <!-- 标题 -->
      <h3 class="text-lg font-semibold text-gray-900 mb-4">{{ productName }}</h3>

      <!-- 尺码选择 -->
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 mb-2">选择尺码</label>
        <div class="grid grid-cols-4 gap-2">
          <button
            v-for="size in sizes"
            :key="size"
            :class="[
              'py-2 px-4 text-sm font-medium rounded-md',
              selectedSize === size
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200',
            ]"
            @click="selectedSize = size"
          >
            {{ size }}
          </button>
        </div>
      </div>

      <!-- 按钮组 -->
      <div class="flex justify-end space-x-3">
        <button
          @click="handleClose"
          class="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
        >
          取消
        </button>
        <button
          @click="handleSubmit"
          class="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
        >
          为我送来
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  isVisible: boolean
  productName: string
  productId: string
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'submit'): void
}>()

const selectedSize = ref('M')
const sizes = ['S', 'M', 'L', 'XL']

const handleClose = () => {
  emit('close')
}

const handleSubmit = () => {
  emit('submit')
}
</script>
