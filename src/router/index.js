import { createRouter, createWebHistory } from 'vue-router'
import TheWelcome from '../components/TheWelcome.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: TheWelcome
    },
    {
      path: '/oswego',
      name: 'oswego',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/OswegoHomeView.vue')
    },
    // {
    //   path: '/columbia',
    //   name: 'columbia',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/ColumbiaHomeView.vue')
    // }
  ]
})

export default router
