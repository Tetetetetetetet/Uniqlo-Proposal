<template>
  <nav class="fixed top-0 left-0 right-0 bg-white shadow-md h-16 flex items-center px-10 z-50">
    <div class="flex gap-6 text-lg font-semibold">
      <router-link
        to="/upload"
        class="hover:text-red-500"
        :class="{ 'text-red-600 underline': $route.path === '/upload' }"
      >👤 上传</router-link>

      <router-link
        to="/effect"
        class="hover:text-purple-500"
        :class="{ 'text-purple-600 underline': $route.path === '/effect' }"
      >✨ 效果图</router-link>

      <router-link
        to="/recommend"
        class="hover:text-green-500"
        :class="{ 'text-green-600 underline': $route.path === '/recommend' }"
      >🛍️ 推荐</router-link>
    </div>
  </nav>
</template>

<script setup>
// 使用 setup 无需引入 $route，Vue 会自动注入
</script>

<style scoped>
.router-link-exact-active {
  font-weight: bold;
}
</style>
