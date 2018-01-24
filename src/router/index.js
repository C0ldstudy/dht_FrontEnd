import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/views/Homepage'
import Result from '@/views/Result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/result/:keyword',
      name: 'Result',
      component: Result
    }
    // {
    //   path: '/result',
    //   name: 'Result',
    //   component: Result
    // }
  ]
})
