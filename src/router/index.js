import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/components/home/index'],resolve)
    },
    {
      path: '/person',
      name: 'person',
      component: resolve => require(['@/components/exit-enter-person/index'],resolve)
    },
    {
      path: '/flight',
      name: 'flight',
      component: resolve => require(['@/components/exit-enter-flight/index'],resolve)
    },
    {
      path: '/person-check',
      name: 'person-check',
      component: resolve => require(['@/components/person-check/index'],resolve)
    },
    {
      path: '/miccmlt',
      name: 'miccmlt',
      component: resolve => require(['@/components/miccmlt/index'],resolve)
    },
    {
      path: '/nuclear',
      name: 'nuclear',
      component: resolve => require(['@/components/nuclear/index'],resolve)
    }
  ]
})
