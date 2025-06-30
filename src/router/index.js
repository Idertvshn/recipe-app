import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import RecipeDetail from '../views/RecipeDetail.vue' // ✅ нэмсэн байна

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recipe/:id',
    name: 'RecipeDetail',
    component: RecipeDetail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
