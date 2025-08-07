<template>
  <header class="header">
    <div class="nav-left">
      <img src="@/assets/logo.png" alt="logo" class="logo" />
      <router-link v-for="item in navItems" :key="item.path" :to="item.path" active-class="active">
        {{ item.label }}
        <span v-if="item.tag" class="tag">{{ item.tag }}</span>
      </router-link>
    </div>
    <div class="nav-right">
      <input type="text" placeholder="搜索掘金" class="search" />
      <div class="auth-area">
        <a class="action">消息</a>
        <a class="action">发布</a>
        <a class="auth">登录</a>
        <a class="auth">注册</a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const navItems = [
  { path: '/home', label: '首页' },
  { path: '/ai-coding', label: 'AI Coding', tag: 'NEW' },
  { path: '/boiling', label: '沸点' },
  { path: '/course', label: '课程' }
]
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  background-color: white;
  padding: 0 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.logo {
  height: 32px;
}

.router-link-exact-active,
.active {
  color: #1e80ff;
  font-weight: bold;
}

.tag {
  background-color: #ffeb3b;
  color: #f60;
  font-size: 10px;
  margin-left: 4px;
  padding: 1px 4px;
  border-radius: 4px;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.search {
  height: 32px;
  padding: 0 12px;
  border: 1px solid #ccc;
  border-radius: 16px;
  font-size: 14px;
}

.auth-area a {
  margin-left: 10px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
}
.auth-area a:hover {
  color: #1e80ff;
}
</style>
