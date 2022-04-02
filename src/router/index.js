import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../views/Index'
import Register from '../views/Register'

const routes = [
  {
    path: '/Index',
    name: 'Index',
    component: Index
  },
  {
    path: '/',
    name: 'Register',
    component: Register
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
