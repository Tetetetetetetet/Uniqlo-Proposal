import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css' // 如果你使用了 Tailwind 或全局样式

createApp(App).use(router).mount('#app')