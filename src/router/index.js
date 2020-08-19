import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from '../../firebase'
// import Home from '../views/Home.vue'
import Categories from '../views/Categories.vue'
import Dashboard from '../views/Dashboard.vue'
// import { register } from 'register-service-worker'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/',
    redirect: '/login'
  },
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  // {
  //   path: '/register',
  //   name: 'Register',
  //   component: () =>
  //     import(/* webpackChunkName: "login" */ '../views/Register.vue')
  // },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
  ]
})
// const openRoutes = ['Login']
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
  // if (openRoutes.includes(to.name)) {
  //   next()
  // } else if (window.token) {
  //   next()
  // } else {
  //   next('/login')
  // }
})

export default router
