import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    /* 全景直播-全景监控 */
    {
      path: '/panoramic',
      name: 'panoramic',
      component: resolve => require(['@/components/panoramic/index'],resolve),
    },
    {
      path: '/panoramic/person', //出入境人数
      name: 'person',
      component: resolve => require(['@/components/panoramic/person/index'],resolve)
    },
    {
      path: '/panoramic/flight', //出入境航班
      name: 'flight',
      component: resolve => require(['@/components/panoramic/flight/index'],resolve)
    },
    {
      path: '/panoramic/check', //人员查验
      name: 'check',
      component: resolve => require(['@/components/panoramic/check/index'],resolve)
    },
    {
      path: '/panoramic/miccmlt', //微小气候
      name: 'miccmlt',
      component: resolve => require(['@/components/panoramic/miccmlt/index'],resolve)
    },
    {
      path: '/panoramic/nuclear', //核辐射
      name: 'nuclear',
      component: resolve => require(['@/components/panoramic/nuclear/index'],resolve)
    },
    /* 会商指挥-日常调度 */
    {
      path: '/daily', //日常调度
      name: 'daily',
      component: resolve => require(['@/components/daily/index'],resolve)
    },
    {
        path:'*', //路由url
        redirect:"/panoramic",
    }
  ]
})
