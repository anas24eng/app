import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Deliverd from '../views/Deliverd.vue'
import Home from '../views/Home.vue'

import Mail from '../views/Mail.vue'

import Myapp from '../views/Myapp.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/deliverd',
      name: 'deliverd',
      component: Deliverd
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/mail',
      name: 'mail',
      component: Mail
    },
    {
      path: '/myapp',
      name: 'myapp',
      component: Myapp
    },
    

  ]
})
