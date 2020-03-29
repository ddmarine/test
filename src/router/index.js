import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/pages/homePage'
import category from '@/pages/category'
import listPage from '@/pages/listPage'
import detailPage from '@/pages/detailPage'
import car from '@/pages/car'
import memCen from '@/pages/memCen'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/category',
      name: 'category',
      component: category
    },
    {
      path: '/listPage/:cate_name',
      name: 'listPage',
      component: listPage
    },
    {
      path: '/detailPage/:cate_name/:key',
      name: 'detailPage',
      component: detailPage
    },
    {
      path:'/car',
      name:"car",
      component:car
    },
    {
      path:'/memCen',
      name:"memCen",
      component:memCen
    }

  ]
})
