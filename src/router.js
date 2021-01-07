import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Client_Service from './views/Client_Service.vue'
import Collateral_Monitor from './views/Collateral_Monitor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/Client_Service',
      name: 'Client_Service',
      component: Client_Service

    },
    {
      path: '/Collateral_Monitor',
      name: 'Collateral_Monitor',
      component: Collateral_Monitor
    },
  ]
})
