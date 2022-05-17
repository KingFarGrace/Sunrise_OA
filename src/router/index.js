import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Register from '@/components/Register'
import Home from '@/components/views/Home'
import Group from '@/components/views/Group'
import Seat from '@/components/views/Seat'
import Resource from '@/components/views/Resource'
import Git from '@/components/views/Git'
import Personal from '@/components/Personal'

Vue.use(Router)


const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    children:[
      {
        path:'/',
        name:'Home',
        component:Home
      },
      {
        path:'/group',
        name:'Group',
        component:Group
      },
      {
        path:'/seat',
        name:'Seat',
        component:Seat
      },
      {
        path:'/resource',
        name:'Resource',
        component:Resource
      },
      {
        path:'/git',
        name:'Git',
        component:Git
      }
    ]
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/personal',
    name: 'Personal',
    component: Personal
  }
]

const router = new Router({
  routes
})

export default router