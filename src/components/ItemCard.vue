<template>
  <div class="bg-white rounded-xl shadow p-4 flex items-center space-x-4">
    <div class="w-16 h-16 bg-gray-100 rounded overflow-hidden">
      <img :src="`/images/${item.id}.png`" class="object-cover w-full h-full" />
    </div>
    <div class="flex-1">
      <h3 class="font-medium text-gray-900">{{ item.name }}</h3>
      <p class="text-sm text-red-500 font-bold">¥{{ item.price }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object
})
</script>
