import Vue from 'vue'
import Router from 'vue-router'
import tagsView from '@/components/tagsView'
import index from '@/components/page/index'
import yemian1 from '@/components/page/yemian1'
import yemian2 from '@/components/page/yemian2'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: tagsView,
    children: [{
        path: '/',
        name: '首页',
        component: index
      },
      {
        path: '/yemian1',
        name: '页面一',
        component: yemian1
      },
      {
        path: '/yemian2',
        name: '页面二',
        component: yemian2
      },
    ]
  }]
})
