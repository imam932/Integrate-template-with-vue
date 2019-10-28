import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard', component: () => import('../views/Home'),
      children: [
        { path: '/dashboard', component: () => import('../views/dashboards/Dashboard') }
      ]
    },
    {
      path: '/login', component: () => import('../views/Login')
    }
  ]
})
