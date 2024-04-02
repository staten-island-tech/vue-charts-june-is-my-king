import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/year',
      name: 'year',
      component: () => import('../views/YearView.vue')
    },
    {
      path: '/race',
      name: 'race',
      component: () => import('../views/RaceView.vue')
    }
  ]
})

export default router
