import Vue from 'vue'
import Router from 'vue-router'
import tabbar from '@/components/tabbar'
import home from '@/components/home'
import fication from '@/components/fication'
import search from '@/components/search'
import shopCar from '@/components/shopCar'
import user from '@/components/user'
import shopshow from '@/components/shopshow'
import xq from '@/components/xq'
import register from '@/components/register'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/shopshow',
      name:'shopshow',
      component:shopshow
    },
    {
      path: '/',
      name: 'tabbar',
      component: tabbar,
      children:[
        {
          path: '/',
          name: 'home',
          component: home
        },
        {
          path: '/fication',
          name: 'fication',
          component: fication
        },
        {
          path: '/search',
          name: 'search',
          component: search
        },
        {
          path: '/shopCar',
          name: 'shopCar',
          component: shopCar
        },
        {
          path: '/user',
          name: 'user',
          component: user
        }
      ]
    },
    {
      path:"*",
      redirect:"/home"
    },
    {
      path:'/xq',
      name:'xq',
      component:xq
    },
    {
      path:'/register',
      name:'register',
      component:register
    }
  ]
})
