import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
<<<<<<< HEAD
import Register from '../components/Register'
=======
import Home from '@/components/Home'
import Register from '@/components/Register'

>>>>>>> 1092dbfe28dc6323ac218e7a5dd721d3e395161f

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Login',
//       component: Login
//     }
//   ]
// })

const routes = [
  {
    path: '/',
      name: 'Login',
      component: Login
<<<<<<< HEAD
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
  ]
=======
  },
  {
    path: '/home',
      name: 'Home',
      component: Home
  },
  {
    path: '/register',
      name: 'Register',
      component: Register
  }
]

const router  = new Router({
  routes
>>>>>>> 1092dbfe28dc6323ac218e7a5dd721d3e395161f
})

export default router