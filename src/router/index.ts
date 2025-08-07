import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import RecommendationPage from '../views/RecommendationPage.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/recommendation' },
  { path: '/recommendation', component: RecommendationPage },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
