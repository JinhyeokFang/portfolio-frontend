import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Work from '@/components/Work'

import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css'

Vue.use(Vuesax)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    }
  ]
})
