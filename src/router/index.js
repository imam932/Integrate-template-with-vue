import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
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
