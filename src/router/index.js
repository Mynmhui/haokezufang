import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/login', name: 'login', component: () => import('@/views/login') },
  {
    path: '/',
    component: () => import('@/views/layout'),
    redirect: '/ ',
    children: [
      { path: '/ ', component: () => import('@/views/home') },
      { path: '/room', component: () => import('@/views/room') },
      { path: '/information', component: () => import('@/views/information') },
      { path: '/my', component: () => import('@/views/my') }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
