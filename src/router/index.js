import { createRouter, createWebHistory } from '@ionic/vue-router';

import Tabs from '../views/Tabs.vue'
// import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    component: Tabs,
    redirect: '/france/accueil'
  },
  {
    path: '/france/',
    component: Tabs,
    redirect: '/france/accueil'
  },
  {
    path: '/france/',
    component: Tabs,
    children: [
      {
        path: 'accueil',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'commune',
        component: () => import('@/views/City.vue')
      },
      {
        path: 'departement',
        component: () => import('@/views/Department.vue')
      },
      {
        path: 'region',
        component: () => import('@/views/Region.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
