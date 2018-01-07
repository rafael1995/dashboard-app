import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Produtos from '@/components/Produtos'
import Login  from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: '/produtos',
          component: Produtos
        }
      ]
    }
  ]
})
