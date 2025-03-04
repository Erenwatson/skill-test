import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'page.signup',
      path: '/signup',
      component: () => import('@/pages/Signup.vue')
    },
    {
      name: 'page.all-task',
      path: '/',
      component: () => import('@/pages/AllTask.vue')
    },
    {
      name: 'page.completed',
      path: '/completed',
      component: () => import('@/pages/Completed.vue')
    },
  ],
})

export default router
