import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CodingView from '../views/CodingView.vue'
import BoilingView from '../views/BoilingView.vue'
import CourseView from '../views/CourseView.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomeView },
  { path: '/ai-coding', component: CodingView },
  { path: '/boiling', component: BoilingView },
  { path: '/course', component: CourseView }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
