import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Home from '../views/Home.vue'
import taskRoutes from './taskRoutes'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        { path: 'home', component: Home },
        ...taskRoutes,
      ]
    },
  ],
})

