import { createRouter, createWebHistory } from 'vue-router'
import Start from '@/views/start/index.vue'
import Game from '@/views/game/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Start,
      children: [
        {
          path: '/game',
          component: Game
        }
      ]
    }
  ]
})

export default router
