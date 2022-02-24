import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home'
import Test from '@/pages/Test'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
